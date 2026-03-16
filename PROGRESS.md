# Risk Estimator - Progress & Roadmap

**Last Updated:** 2025-11-30
**Version:** 1.1 (Phase 2 Complete)

---

## Current State: MVP Feature-Complete

### Platforms
| Platform | Framework | Lines of Code | Status |
|----------|-----------|---------------|--------|
| iOS | SwiftUI | ~1,378 | ✅ Complete |
| Android | Jetpack Compose | ~2,006 | ✅ Complete |

### Architecture
- **Pattern:** MVVM on both platforms
- **Storage:** Local only (UserDefaults / SharedPreferences)
- **Simulation:** Monte Carlo engine (1,000 iterations, Box-Muller transform)

---

## Completed Features (v1.0)

### Core Functionality
- [x] Project CRUD (create, read, update, delete)
- [x] Line item management (materials, labor, subcontractors)
- [x] Category tagging for line items
- [x] Risk/uncertainty levels (5 tiers: Certain → Wild Guess)
- [x] Profit margin configuration (default 15%)

### Monte Carlo Simulation
- [x] 1,000 iteration simulation engine
- [x] Skewed distribution (biased toward cost overruns)
- [x] Percentile calculations (10th, 50th, 80th, 90th, 95th)
- [x] Statistical outputs (mean, std dev, min/max)

### Results & Export
- [x] Bell curve histogram visualization
- [x] Color-coded distribution chart
- [x] 80th percentile "safe quote" recommendation
- [x] PDF export with optional confidence intervals
- [x] Share functionality

### UX
- [x] Offline-first (no login required)
- [x] Recent projects list
- [x] Locale-aware currency formatting
- [x] Interactive risk slider component

---

## Roadmap

### Phase 2: Time & Travel Uncertainty ✅ COMPLETED

**Problem Statement:**
Contractors face significant uncertainty beyond just material/labor costs:
1. **Job Duration** - How long will the job actually take? Complex jobs have unpredictable timelines.
2. **Travel Time** - Daily commute to job site with variable traffic conditions.

These time-based uncertainties directly impact labor costs and need to be factored into the Monte Carlo simulation alongside existing cost items.

#### 2.1 Job Duration Estimation ✅
- [x] Add "Estimated Days" field per project
- [x] Add complexity/uncertainty slider for duration (ComplexitySlider component)
- [x] Variance multipliers for time estimates:
  - Routine: ±10%
  - Moderate: ±25%
  - Complex: ±40%
  - Unknown Scope: ±60%
- [x] Hourly labor rate and hours per day configuration
- [x] Link duration uncertainty to labor cost calculations
- [x] Show time-based results in cost breakdown

#### 2.2 Travel Time Estimation ✅
- [x] Daily travel time estimate (one-way, with return trip option)
- [x] Traffic uncertainty slider (TrafficSlider component):
  - Predictable (off-peak, rural): ±10%
  - Variable (suburban): ±25%
  - High Variability (urban, peak hours): ±50%
- [x] Number of site visits (auto-calculate from days or manual override)
- [x] Calculate total travel cost impact (time × hourly rate × visits)
- [x] Optional: fuel/mileage costs (distance × rate per km)

#### 2.3 Integrated Simulation ✅
- [x] Combine material, labor, duration, and travel uncertainties
- [x] Correlation handling (longer job = more travel days when auto-calculated)
- [x] Updated results breakdown showing:
  - Materials cost range (P50/P80)
  - Duration cost range (P50/P80)
  - Travel cost range (P50/P80)
  - Combined total range

#### 2.4 UI Updates ✅
- [x] New "Job Duration" section in estimator screen
- [x] New "Travel" section in estimator screen
- [x] ComplexitySlider component (iOS + Android)
- [x] TrafficSlider component (iOS + Android)
- [x] Cost breakdown section in Results screen
- [x] Updated PDF export with duration and travel breakdown

---

### Phase 3: Production Hardening

- [ ] Unit tests for Monte Carlo engine
- [ ] Integration tests for storage layer
- [ ] Error handling and user feedback
- [ ] Input validation
- [ ] Analytics integration (optional, privacy-respecting)
- [ ] Crash reporting
- [ ] Android: Enable ProGuard/R8 minification
- [ ] App store preparation (screenshots, descriptions)

---

### Phase 4: Enhanced Features (Future)

- [ ] Project templates (common job types)
- [ ] Historical data tracking
- [ ] Photo/sketch attachments
- [ ] Cloud sync (optional, account-based)
- [ ] Branded PDF templates
- [ ] Integration with accounting software
- [ ] Multi-currency support

---

## Technical Debt

| Item | Priority | Notes |
|------|----------|-------|
| No test coverage | High | Add unit tests for simulation engine |
| Error handling | High | Edge cases not covered |
| Android minify disabled | Medium | Enable for release builds |
| No logging | Low | Add for debugging |
| Hardcoded strings | Low | Extract to resources for i18n |

---

## Checkpoint: 2025-11-30

**What's Done:**
- Fully functional MVP on both platforms
- Core Monte Carlo simulation working correctly
- Professional UI with modern frameworks
- PDF export functional
- **Phase 2 Complete:** Duration and Travel uncertainty fully implemented
  - Job duration estimation with complexity uncertainty
  - Travel time estimation with traffic variability
  - Mileage cost tracking (optional)
  - Integrated simulation combining all uncertainty sources
  - Cost breakdown in results and PDF export

**What's Next:**
- Phase 3 (Production Hardening): Tests, error handling, release prep
- Phase 4 (Enhanced Features): Templates, cloud sync, etc.

**Blockers:**
- None currently

---

## Notes

### Monte Carlo Variance Multipliers (Current)
| Risk Level | Variance | Example |
|------------|----------|---------|
| Certain | ±2% | Known fixed price |
| Low Risk | ±8% | Standard materials |
| Medium Risk | ±15% | Typical labor |
| High Risk | ±25% | Subcontractor work |
| Wild Guess | ±40% | Unknown scope |

### Proposed Time Variance Multipliers
| Complexity | Duration Variance | Example |
|------------|-------------------|---------|
| Routine | ±10% | Repeat job, clear scope |
| Moderate | ±25% | Standard job, minor unknowns |
| Complex | ±40% | Custom work, dependencies |
| Unknown Scope | ±60% | New type of job, unclear requirements |

### Proposed Travel Variance Multipliers
| Traffic Pattern | Variance | Example |
|-----------------|----------|---------|
| Predictable | ±10% | Rural, off-peak |
| Variable | ±25% | Suburban, mixed |
| High Variability | ±50% | Urban, peak hours |
