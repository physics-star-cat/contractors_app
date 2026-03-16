# EstiMate Android

Native Android implementation of the EstiMate contractor cost estimation app using Jetpack Compose.

## Requirements

- Android Studio Hedgehog (2023.1.1) or later
- JDK 17
- Android SDK 26+ (min) / 34 (target)
- Kotlin 1.9.0+

## Building

1. Open `RiskEstimator` folder in Android Studio
2. Sync Gradle files
3. Select your target device or emulator
4. Build and run (Shift+F10)

### Gradle Commands

```bash
# Build debug APK
./gradlew assembleDebug

# Build release APK
./gradlew assembleRelease

# Run unit tests
./gradlew test

# Run instrumented tests
./gradlew connectedAndroidTest
```

## Architecture

The app follows **MVVM (Model-View-ViewModel)** architecture with Kotlin StateFlow:

```
Composables (UI) → ViewModel (StateFlow) → Repository/Services → Models
```

### Key Files

| File | Purpose |
|------|---------|
| `MainActivity.kt` | Activity entry point |
| `RiskEstimatorApp.kt` | Compose navigation host |
| `EstimatorViewModel.kt` | Central state management |
| `MonteCarloEngine.kt` | Simulation logic |
| `StorageRepository.kt` | SharedPreferences persistence |
| `PDFService.kt` | Quote PDF generation |

## Directory Structure

```
app/src/main/java/com/riskestimator/app/
├── MainActivity.kt                 # Activity entry
├── ui/
│   ├── RiskEstimatorApp.kt         # NavHost composable
│   ├── EstimatorViewModel.kt       # AndroidViewModel
│   ├── screens/
│   │   ├── HomeScreen.kt           # Project list
│   │   ├── EstimatorScreen.kt      # Project editor
│   │   └── ResultsScreen.kt        # Simulation results
│   ├── components/
│   │   ├── RiskSlider.kt           # Risk level picker
│   │   ├── ComplexitySlider.kt     # Complexity picker
│   │   ├── TrafficSlider.kt        # Traffic variability picker
│   │   ├── BellCurveChart.kt       # Results histogram
│   │   ├── AddItemDialog.kt        # Line item form
│   │   └── LineItemCard.kt         # Item list card
│   └── theme/
│       └── Theme.kt                # Material3 theme
├── data/
│   ├── model/
│   │   ├── Project.kt              # Main project model
│   │   ├── LineItem.kt             # Cost item with risk
│   │   └── SimulationResult.kt     # Monte Carlo output
│   └── repository/
│       └── StorageRepository.kt    # SharedPreferences CRUD
└── domain/
    ├── MonteCarloEngine.kt         # Simulation engine (object)
    └── PDFService.kt               # PDF generation
```

## Dependencies

```kotlin
// Core
implementation("androidx.core:core-ktx:1.12.0")
implementation("androidx.lifecycle:lifecycle-runtime-ktx:2.6.2")
implementation("androidx.lifecycle:lifecycle-viewmodel-compose:2.6.2")

// Compose
implementation("androidx.activity:activity-compose:1.8.1")
implementation(platform("androidx.compose:compose-bom:2023.10.01"))
implementation("androidx.compose.material3:material3")
implementation("androidx.navigation:navigation-compose:2.7.5")

// JSON
implementation("com.google.code.gson:gson:2.10.1")

// PDF
implementation("com.itextpdf:itext7-core:7.2.5")
```

## ViewModel

`EstimatorViewModel` extends `AndroidViewModel` and uses Kotlin StateFlow for reactive state:

```kotlin
class EstimatorViewModel(application: Application) : AndroidViewModel(application) {
    private val _currentProject = MutableStateFlow(Project())
    val currentProject: StateFlow<Project> = _currentProject.asStateFlow()

    private val _savedProjects = MutableStateFlow<List<Project>>(emptyList())
    val savedProjects: StateFlow<List<Project>> = _savedProjects.asStateFlow()

    private val _simulationResult = MutableStateFlow<SimulationResult?>(null)
    val simulationResult: StateFlow<SimulationResult?> = _simulationResult.asStateFlow()

    private val _isSimulating = MutableStateFlow(false)
    val isSimulating: StateFlow<Boolean> = _isSimulating.asStateFlow()

    // Methods for CRUD operations, simulation, PDF generation...
}
```

The simulation runs on a background dispatcher:

```kotlin
fun runSimulation() {
    if (_currentProject.value.lineItems.isEmpty()) return

    _isSimulating.value = true
    viewModelScope.launch {
        val result = withContext(Dispatchers.Default) {
            MonteCarloEngine.runSimulation(_currentProject.value)
        }
        _simulationResult.value = result
        _isSimulating.value = false
    }
}
```

## Monte Carlo Engine

`MonteCarloEngine` is a Kotlin `object` (singleton) that performs the simulation:

### Configuration
- **SIMULATION_COUNT:** 1,000 iterations (fixed, no convergence detection)

### Simulation Flow

1. **Material Costs** - Each line item simulated with its risk level variance
2. **Duration Costs** - Base days × variance → labor hours × rate
3. **Travel Costs** - Time variance + mileage (correlated with duration)
4. **Profit Margin** - Applied to total cost

### Skewed Distribution

Uses Box-Muller transform with asymmetric scaling:
```kotlin
private fun generateSkewedNormal(): Double {
    val u1 = Random.nextDouble(0.0001, 0.9999)
    val u2 = Random.nextDouble(0.0001, 0.9999)
    val z = sqrt(-2 * ln(u1)) * cos(2 * Math.PI * u2)
    return if (z < 0) z * 0.7 else z * 1.3  // Bias toward overruns
}
```

## Models

### Project
Primary data model (Kotlin data class with mutable fields):
```kotlin
data class Project(
    val id: String = UUID.randomUUID().toString(),
    var name: String = "",
    var clientName: String = "",
    var profitMargin: Double = 0.15,
    val lineItems: MutableList<LineItem> = mutableListOf(),
    var estimatedDays: Double = 1.0,
    var complexityLevel: ComplexityLevel = ComplexityLevel.MODERATE,
    var hourlyLaborRate: Double = 50.0,
    var hoursPerDay: Double = 8.0,
    var travelTimeMinutes: Double = 30.0,
    var trafficVariability: TrafficVariability = TrafficVariability.VARIABLE,
    var numberOfSiteVisits: Int = 0,
    var includeReturnTrip: Boolean = true,
    var distanceKm: Double = 0.0,
    var mileageRatePerKm: Double = 0.67
)
```

### LineItem
```kotlin
data class LineItem(
    val id: String = UUID.randomUUID().toString(),
    var name: String = "",
    var estimatedCost: Double = 0.0,
    var category: ItemCategory = ItemCategory.MATERIAL,
    var riskLevel: RiskLevel = RiskLevel.MEDIUM
)
```

### Enums
```kotlin
enum class RiskLevel(val varianceMultiplier: Double) {
    CERTAIN(0.02),      // ±2%
    LOW(0.08),          // ±8%
    MEDIUM(0.15),       // ±15%
    HIGH(0.25),         // ±25%
    WILD_GUESS(0.40)    // ±40%
}

enum class ComplexityLevel(val varianceMultiplier: Double) {
    ROUTINE(0.10),      // ±10%
    MODERATE(0.25),     // ±25%
    COMPLEX(0.40),      // ±40%
    UNKNOWN_SCOPE(0.60) // ±60%
}

enum class TrafficVariability(val varianceMultiplier: Double) {
    PREDICTABLE(0.10),     // ±10%
    VARIABLE(0.25),        // ±25%
    HIGH_VARIABILITY(0.50) // ±50%
}
```

## Storage

`StorageRepository` uses SharedPreferences with GSON serialization:

```kotlin
class StorageRepository(context: Context) {
    private val prefs = context.getSharedPreferences("risk_estimator", Context.MODE_PRIVATE)
    private val gson = Gson()

    fun saveProject(project: Project) {
        val projects = loadProjects().toMutableList()
        val existingIndex = projects.indexOfFirst { it.id == project.id }
        if (existingIndex >= 0) {
            projects[existingIndex] = project
        } else {
            projects.add(0, project)
        }
        val json = gson.toJson(projects)
        prefs.edit().putString("projects", json).apply()
    }

    fun loadProjects(): List<Project> {
        val json = prefs.getString("projects", null) ?: return emptyList()
        val type = object : TypeToken<List<Project>>() {}.type
        return gson.fromJson(json, type)
    }
}
```

## PDF Generation

`PDFService` uses iText 7 for PDF creation:

```kotlin
object PDFService {
    fun generateQuotePDF(
        context: Context,
        project: Project,
        result: SimulationResult,
        includeConfidence: Boolean
    ): File? {
        val file = File(context.cacheDir, "quote_${project.id}.pdf")
        val writer = PdfWriter(file)
        val pdf = PdfDocument(writer)
        val document = Document(pdf)

        // Add content...

        document.close()
        return file
    }
}
```

Returns a `File` object for sharing via Android's share intent system.

## Navigation

Uses Jetpack Navigation Compose:

```kotlin
@Composable
fun RiskEstimatorApp(viewModel: EstimatorViewModel) {
    val navController = rememberNavController()

    NavHost(navController, startDestination = "home") {
        composable("home") {
            HomeScreen(
                viewModel = viewModel,
                onNewProject = { navController.navigate("estimator") },
                onSelectProject = { navController.navigate("estimator") }
            )
        }
        composable("estimator") {
            EstimatorScreen(
                viewModel = viewModel,
                onBack = { navController.popBackStack() },
                onShowResults = { navController.navigate("results") }
            )
        }
        composable("results") {
            ResultsScreen(
                viewModel = viewModel,
                onBack = { navController.popBackStack() }
            )
        }
    }
}
```

## UI Components

### Sliders
Custom segmented controls for selecting uncertainty levels:
- `RiskSlider` - 5 risk tiers for line items
- `ComplexitySlider` - 4 complexity levels for duration
- `TrafficSlider` - 3 traffic variability levels

### BellCurveChart
Canvas-based histogram visualization:
- Green: Below median (safe zone)
- Blue: Near median
- Red: Above P80 (risk zone)

### Material3 Theming
Uses Material3 design system with dynamic color support (Android 12+).

## Differences from iOS

| Feature | iOS | Android |
|---------|-----|---------|
| Convergence | Adaptive (1K-10K) | Fixed 1K iterations |
| Workers | Supported | Not implemented |
| PDF Library | UIGraphicsPDFRenderer | iText 7 |
| State Management | @Published | StateFlow |
| Navigation | NavigationStack | Navigation Compose |
| Locale Units | Auto-detected | Kilometers only |

## Known Technical Debt

- [ ] Release minification disabled (`isMinifyEnabled = false`)
- [ ] No ProGuard rules configured
- [ ] No unit tests
- [ ] No instrumented tests
- [ ] Worker support not implemented
- [ ] Region/locale detection not implemented
