# EstiMate iOS

Native iOS implementation of the EstiMate contractor cost estimation app using SwiftUI.

## Requirements

- Xcode 14.0+
- iOS 14.0+ deployment target
- Swift 5.0+
- For Charts: iOS 16.4+ (gracefully degrades on older versions)

## Building

1. Open `RiskEstimator/RiskEstimator.xcodeproj` in Xcode
2. Select your target device or simulator
3. Build and run (Cmd+R)

## Architecture

The app follows **MVVM (Model-View-ViewModel)** architecture:

```
Views (SwiftUI) → ViewModel (EstimatorViewModel) → Services → Models
```

### Key Files

| File | Purpose |
|------|---------|
| `RiskEstimatorApp.swift` | App entry point (@main) |
| `ContentView.swift` | Root navigation container |
| `EstimatorViewModel.swift` | Central state management |
| `MonteCarloEngine.swift` | Simulation logic |
| `StorageService.swift` | UserDefaults persistence |
| `PDFService.swift` | Quote PDF generation |

## Directory Structure

```
RiskEstimator/
├── RiskEstimatorApp.swift          # @main entry
├── ContentView.swift               # NavigationStack root
├── ViewModels/
│   └── EstimatorViewModel.swift    # @MainActor ObservableObject
├── Models/
│   ├── Project.swift               # Main project model
│   ├── LineItem.swift              # Cost item with risk
│   ├── Worker.swift                # Extra worker definition
│   └── SimulationResult.swift      # Monte Carlo output
├── Services/
│   ├── MonteCarloEngine.swift      # Simulation engine (singleton)
│   ├── StorageService.swift        # UserDefaults CRUD
│   └── PDFService.swift            # PDF generation
├── Views/
│   ├── Screens/
│   │   ├── HomeScreen.swift        # Project list
│   │   ├── EstimatorScreen.swift   # Project editor
│   │   └── ResultsScreen.swift     # Simulation results
│   └── Components/
│       ├── RiskSlider.swift        # Risk level picker
│       ├── ComplexitySlider.swift  # Complexity picker
│       ├── TrafficSlider.swift     # Traffic variability picker
│       ├── BellCurveChart.swift    # Results histogram
│       ├── AddItemSheet.swift      # Line item form
│       ├── AddWorkerSheet.swift    # Worker form
│       └── LineItemRow.swift       # Item list row
└── Utils/
    ├── Localization.swift          # AppRegion, L10n strings
    └── CurrencyFormatter.swift     # Locale-aware formatting
```

## ViewModel

`EstimatorViewModel` is the central state coordinator:

```swift
@MainActor
final class EstimatorViewModel: ObservableObject {
    @Published var currentProject: Project
    @Published var savedProjects: [Project]
    @Published var simulationResult: SimulationResult?
    @Published var isSimulating: Bool

    // Project CRUD
    func saveCurrentProject()
    func deleteProject(_ project: Project)
    func selectProject(_ project: Project)

    // Line item management
    func addLineItem(_ item: LineItem)
    func updateLineItem(_ item: LineItem)
    func deleteLineItem(at offsets: IndexSet)

    // Worker management
    func addWorker(_ worker: Worker)
    func updateWorker(_ worker: Worker)
    func deleteWorker(at index: Int)

    // Simulation
    func runSimulation()

    // PDF export
    func generatePDF(includeConfidence: Bool) -> Data?
    func generateCustomerPDF(quoteAmount: Double) -> Data?
}
```

The simulation runs on a background thread to keep UI responsive:

```swift
func runSimulation() {
    isSimulating = true
    Task {
        let result = await Task.detached(priority: .userInitiated) {
            MonteCarloEngine.shared.runSimulation(for: projectCopy)
        }.value
        simulationResult = result
        isSimulating = false
    }
}
```

## Monte Carlo Engine

The `MonteCarloEngine` is a thread-safe singleton that performs the simulation:

### Key Parameters
- **minIterations:** 1,000 (minimum before checking convergence)
- **maxIterations:** 10,000 (absolute maximum)
- **batchSize:** 500 (check convergence every N iterations)
- **convergenceThreshold:** 1% relative change in P80

### Simulation Flow

1. **Material Costs** - Each line item simulated with its risk level variance
2. **Duration Costs** - Base days × variance → labor hours × rate
3. **Travel Costs** - Time variance + mileage (correlated with duration)
4. **Profit Margin** - Applied to total cost

### Skewed Distribution

Uses Box-Muller transform with asymmetric scaling:
```swift
func generateSkewedNormal() -> Double {
    let z = sqrt(-2 * log(u1)) * cos(2 * .pi * u2)
    return z < 0 ? z * 0.7 : z * 1.3  // Bias toward overruns
}
```

### Convergence Detection

Runs adaptively, stopping early when P80 stabilizes:
```swift
let relativeChange = abs(currentP80 - previousP80) / previousP80
if relativeChange < 0.01 {  // 1% threshold
    isConverged = true
    break
}
```

## Models

### Project
Primary data model containing all estimate inputs:
- Basic info (name, client, dates)
- Line items array
- Workers array (extra laborers)
- Duration settings (days, complexity, hourly rate)
- Travel settings (time, traffic, visits, mileage)
- Profit margin

### LineItem
Individual cost item:
- `estimatedCost: Double` - Base estimate
- `category: ItemCategory` - Material/Labor/Subcontractor/Other
- `riskLevel: RiskLevel` - Uncertainty level (±2% to ±40%)

### Worker
Extra laborer (beyond main contractor):
- `hourlyRate: Double`
- `hoursPerDay: Double`
- `daysOnJob: Double?` - nil = full project duration

### SimulationResult
Output from Monte Carlo engine:
- All simulation values (for histogram)
- Percentiles: P10, P50, P80, P90, P95
- Statistics: mean, stdDev, min, max
- Category breakdowns: materials, duration, travel
- Convergence info

## Storage

`StorageService` uses UserDefaults with Codable:

```swift
// Key
private let projectsKey = "saved_projects"

// Save
func saveProject(_ project: Project) {
    var projects = loadProjects()
    projects.insert(project, at: 0)
    let data = try? encoder.encode(projects)
    UserDefaults.standard.set(data, forKey: projectsKey)
}

// Load
func loadProjects() -> [Project] {
    guard let data = UserDefaults.standard.data(forKey: projectsKey),
          let projects = try? decoder.decode([Project].self, from: data)
    else { return [] }
    return projects
}
```

## PDF Generation

`PDFService` generates two types of PDFs:

1. **Internal Quote** - Includes Monte Carlo statistics and confidence levels
2. **Customer Quote** - Clean presentation with costs broken down by category

Uses `UIGraphicsPDFRenderer` for native iOS PDF creation.

## Localization

`AppRegion` enum in `Localization.swift` handles:
- Currency codes and symbols
- Distance units (miles/km)
- Default mileage rates
- Terminology (Contractor vs Tradesperson vs Tradie)

Auto-detected from device locale with manual override option.

## UI Components

### Sliders
Custom segmented sliders for selecting uncertainty levels:
- `RiskSlider` - 5 risk tiers for line items
- `ComplexitySlider` - 4 complexity levels for duration
- `TrafficSlider` - 3 traffic variability levels

### BellCurveChart
Histogram visualization of simulation results:
- Green: Below median (safe zone)
- Blue: Near median
- Red: Above P80 (risk zone)

Uses Swift Charts framework (iOS 16.4+).

## Navigation

Uses SwiftUI `NavigationStack`:

```
HomeScreen
    ├── EstimatorScreen (new or selected project)
    │   └── ResultsScreen (after simulation)
    └── Settings
```

Navigation state managed via `EstimatorViewModel` published properties.
