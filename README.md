# EstiMate

A mobile-first contractor cost estimation app that uses Monte Carlo simulation to provide probabilistic risk analysis for job quotes. Built natively for iOS (SwiftUI) and Android (Jetpack Compose).

## Overview

EstiMate helps tradespeople and contractors move beyond single-point estimates to understand the range of likely costs and risks. Instead of guessing a single number, you input your estimates with uncertainty levels, and the app runs thousands of simulations to show you the probability distribution of total costs.

**Key Value Propositions:**
- Offline-first, no login required
- Sophisticated risk analysis on mobile (usually reserved for enterprise desktop software)
- Helps contractors avoid under-quoting with statistically safe quote recommendations
- Generates professional PDF quotes for clients

## Features

### Core Estimation
- **Project Management** - Create, save, and manage multiple project estimates
- **Line Items** - Add materials, labor, subcontractors, and other costs
- **Risk Levels** - 5-tier uncertainty system:
  - Certain (±2%) - Fixed/contracted prices
  - Low (±8%) - Known suppliers with stable pricing
  - Medium (±15%) - Standard market variability
  - High (±25%) - Volatile or uncertain costs
  - Wild Guess (±40%) - Unknown scope items

### Duration & Travel Estimation
- **Job Duration** - Estimated days with complexity levels (Routine ±10% to Unknown Scope ±60%)
- **Labor Configuration** - Hourly rates, hours per day, extra workers
- **Travel Costs** - One-way travel time, traffic variability, site visits, mileage tracking
- **Correlation Modeling** - Duration uncertainty automatically affects travel costs

### Monte Carlo Simulation
- 1,000+ iterations with convergence detection
- Skewed distribution toward overages (realistic for construction projects)
- Percentile outputs: P10, P50, P80, P90, P95
- Cost breakdown by category (Materials, Duration, Travel)
- Standard deviation and confidence level calculations

### Results & Export
- **Bell Curve Visualization** - Color-coded histogram of cost distribution
- **Quote Recommendations** - Conservative (P50), Recommended (P80), Safe (P90)
- **PDF Export** - Professional client-facing quotes with cost breakdowns
- **Share** - Export via platform share sheets

### Internationalization
| Region | Currency | Distance | Terminology |
|--------|----------|----------|-------------|
| US | USD ($) | Miles | Contractor, Labor |
| UK | GBP (£) | Miles | Tradesperson, Labour |
| Canada | CAD ($) | Kilometers | Contractor, Labour |
| Australia | AUD ($) | Kilometers | Tradie, Labour |
| New Zealand | NZD ($) | Kilometers | Tradie, Labour |

## Tech Stack

### iOS
- **Language:** Swift
- **UI Framework:** SwiftUI
- **Architecture:** MVVM
- **Min iOS:** 14.0+
- **Storage:** UserDefaults (local only)
- **PDF:** PDFKit/UIGraphicsPDFRenderer
- **Charts:** Apple Charts framework (iOS 16.4+)

### Android
- **Language:** Kotlin
- **UI Framework:** Jetpack Compose
- **Architecture:** MVVM with ViewModel + StateFlow
- **Min SDK:** 26 (Android 8.0)
- **Target SDK:** 34 (Android 14)
- **Storage:** SharedPreferences + GSON
- **PDF:** iText 7
- **Navigation:** Jetpack Navigation Compose

## Project Structure

```
contractors_app/
├── ios/RiskEstimator/           # iOS application
│   └── RiskEstimator/
│       ├── RiskEstimatorApp.swift      # App entry point
│       ├── ContentView.swift           # Root navigation
│       ├── ViewModels/
│       │   └── EstimatorViewModel.swift
│       ├── Models/
│       │   ├── Project.swift
│       │   ├── LineItem.swift
│       │   ├── Worker.swift
│       │   └── SimulationResult.swift
│       ├── Services/
│       │   ├── MonteCarloEngine.swift
│       │   ├── StorageService.swift
│       │   └── PDFService.swift
│       ├── Views/
│       │   ├── Screens/
│       │   │   ├── HomeScreen.swift
│       │   │   ├── EstimatorScreen.swift
│       │   │   └── ResultsScreen.swift
│       │   └── Components/
│       │       ├── RiskSlider.swift
│       │       ├── ComplexitySlider.swift
│       │       ├── TrafficSlider.swift
│       │       ├── BellCurveChart.swift
│       │       └── ...
│       └── Utils/
│           ├── Localization.swift
│           └── CurrencyFormatter.swift
│
├── android/RiskEstimator/       # Android application
│   └── app/src/main/java/com/riskestimator/app/
│       ├── MainActivity.kt
│       ├── ui/
│       │   ├── RiskEstimatorApp.kt
│       │   ├── EstimatorViewModel.kt
│       │   ├── screens/
│       │   │   ├── HomeScreen.kt
│       │   │   ├── EstimatorScreen.kt
│       │   │   └── ResultsScreen.kt
│       │   ├── components/
│       │   │   ├── RiskSlider.kt
│       │   │   ├── BellCurveChart.kt
│       │   │   └── ...
│       │   └── theme/
│       ├── data/
│       │   ├── model/
│       │   └── repository/
│       └── domain/
│           ├── MonteCarloEngine.kt
│           └── PDFService.kt
│
├── icons/                       # App icon assets
├── PROGRESS.md                  # Project roadmap & status
└── contractor_app_market_research.md
```

## Architecture

Both platforms follow the **MVVM (Model-View-ViewModel)** pattern:

```
┌─────────────────────────────────────────────────────────┐
│                         Views                            │
│  (SwiftUI Views / Jetpack Compose Screens)              │
└─────────────────────────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────┐
│                     ViewModel                            │
│  - Manages UI state                                      │
│  - Coordinates between Views and Services               │
│  - Triggers simulations                                  │
└─────────────────────────────────────────────────────────┘
                          │
          ┌───────────────┼───────────────┐
          ▼               ▼               ▼
┌─────────────────┐ ┌───────────┐ ┌─────────────────┐
│ MonteCarloEngine│ │StorageRepo│ │   PDFService    │
│                 │ │           │ │                 │
│ - Simulation    │ │ - CRUD    │ │ - Generate PDF  │
│ - Statistics    │ │ - Persist │ │ - Export        │
└─────────────────┘ └───────────┘ └─────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────┐
│                        Models                            │
│  Project, LineItem, Worker, SimulationResult            │
└─────────────────────────────────────────────────────────┘
```

## Data Models

### Project
```swift
struct Project {
    id: UUID
    name: String
    clientName: String
    createdAt: Date
    profitMargin: Double        // Default 15%
    lineItems: [LineItem]
    workers: [Worker]           // iOS only
    estimatedDays: Double
    complexityLevel: ComplexityLevel
    hourlyLaborRate: Double
    hoursPerDay: Double
    travelTimeMinutes: Double
    trafficVariability: TrafficVariability
    numberOfSiteVisits: Int     // 0 = auto-calculate
    includeReturnTrip: Bool
    mileageRate: Double
    distance: Double
}
```

### LineItem
```swift
struct LineItem {
    id: UUID
    name: String
    estimatedCost: Double
    category: ItemCategory      // Material, Labor, Subcontractor, Other
    riskLevel: RiskLevel        // Certain, Low, Medium, High, WildGuess
}
```

### SimulationResult
```swift
struct SimulationResult {
    simulations: [Double]       // All iteration results
    percentile10/50/80/90/95: Double
    mean: Double
    standardDeviation: Double
    min, max: Double
    // Category breakdowns
    materialCostP50/P80: Double
    durationCostP50/P80: Double
    travelCostP50/P80: Double
    iterationsRun: Int
    isConverged: Bool
}
```

## Risk/Variance Multipliers

| Level | Variance | Use Case |
|-------|----------|----------|
| **Certain** | ±2% | Fixed contracts, locked prices |
| **Low** | ±8% | Reliable suppliers, stable costs |
| **Medium** | ±15% | Standard market variability |
| **High** | ±25% | Volatile materials, uncertain labor |
| **Wild Guess** | ±40% | Unknown scope, new vendors |

| Complexity | Variance | Use Case |
|------------|----------|----------|
| **Routine** | ±10% | Repeat jobs, familiar scope |
| **Moderate** | ±25% | Standard projects |
| **Complex** | ±40% | Multi-trade, custom work |
| **Unknown Scope** | ±60% | Discovery needed, unknowns |

| Traffic | Variance | Use Case |
|---------|----------|----------|
| **Predictable** | ±10% | Rural, fixed schedule |
| **Variable** | ±25% | Suburban, normal traffic |
| **High Variability** | ±50% | Urban, rush hour |

## Getting Started

### iOS

1. Open `ios/RiskEstimator/RiskEstimator.xcodeproj` in Xcode
2. Select your target device or simulator
3. Build and run (⌘R)

**Requirements:**
- Xcode 14.0+
- iOS 14.0+ deployment target
- Swift 5.0+

### Android

1. Open `android/RiskEstimator` in Android Studio
2. Sync Gradle files
3. Select your target device or emulator
4. Build and run

**Requirements:**
- Android Studio Hedgehog or later
- JDK 17
- Android SDK 26+ (min) / 34 (target)

## Monte Carlo Simulation

The simulation engine uses the **Box-Muller transform** to generate normally distributed random values with optional skew toward overages (reflecting real-world project behavior).

### Algorithm

```
For each iteration (1,000 - 10,000):
    1. For each line item:
       - Generate random variance based on risk level
       - Apply skewed normal distribution (bias toward overages)
       - Calculate simulated cost

    2. For duration:
       - Generate random variance based on complexity
       - Calculate labor cost = days × hours × rate

    3. For travel:
       - Correlate visits with duration uncertainty
       - Generate traffic variance
       - Calculate travel time + mileage costs

    4. Sum all costs + profit margin

Calculate statistics from all iterations
Check for convergence (P80 standard error < 0.5%)
```

### Convergence Detection

The engine runs adaptively:
- Minimum: 1,000 iterations
- Maximum: 10,000 iterations
- Stops early if P80 estimate stabilizes (standard error < 0.5%)

## PDF Generation

Quotes are generated for client presentation:
- Professional formatting with project details
- Cost breakdown by category
- Profit margin folded into category costs (hidden from client)
- No Monte Carlo jargon - just clear pricing
- Exportable via platform share sheets

## Storage

Both platforms use local-only storage:
- **iOS:** UserDefaults with Codable serialization
- **Android:** SharedPreferences with GSON

No cloud sync, no server required - works fully offline in the field.

## Current Status

**Version:** 1.1 (MVP Feature-Complete)

### Completed
- Full CRUD on projects
- Monte Carlo engine with convergence detection
- 5-tier risk system
- Duration and travel uncertainty
- Cost breakdown by category
- PDF export
- Multi-region/currency support

### Roadmap (Phase 3)
- [ ] Unit tests for simulation engine
- [ ] Comprehensive error handling
- [ ] Input validation
- [ ] Crash reporting integration
- [ ] Android release minification

See [PROGRESS.md](./PROGRESS.md) for detailed roadmap.

## License

Proprietary - All rights reserved.
