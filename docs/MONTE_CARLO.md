# Monte Carlo Simulation Engine

This document explains the Monte Carlo simulation algorithm used in EstiMate to generate probabilistic cost estimates.

## Overview

Monte Carlo simulation is a computational technique that uses repeated random sampling to estimate the probability distribution of uncertain outcomes. In EstiMate, it's used to answer: "Given the uncertainties in my estimate, what range of total costs should I expect?"

## Why Monte Carlo?

Traditional single-point estimates (e.g., "this job will cost $10,000") fail to capture uncertainty. Monte Carlo simulation:

1. **Quantifies risk** - Shows the probability of different outcomes
2. **Identifies safe quotes** - P80 means 80% of simulations came in at or below this price
3. **Reveals cost drivers** - Breakdown shows which categories contribute most to variance
4. **Handles correlations** - Duration affects labor and travel costs together

## Algorithm

### High-Level Flow

```
┌─────────────────────────────────────────────────────────────┐
│ For each iteration (1,000 - 10,000):                        │
│                                                             │
│   1. Simulate each line item cost                           │
│      └── Apply risk level variance with skewed normal       │
│                                                             │
│   2. Simulate job duration                                  │
│      └── Apply complexity variance with skewed normal       │
│      └── Calculate: days × hours × hourly_rate              │
│                                                             │
│   3. Simulate travel costs (correlated with duration)       │
│      └── Site visits = simulated_days (if auto)             │
│      └── Apply traffic variance to travel time              │
│      └── Add mileage costs                                  │
│                                                             │
│   4. Sum all costs + profit margin                          │
│                                                             │
│   5. Check for convergence (iOS only)                       │
│      └── Stop early if P80 estimate stabilizes              │
└─────────────────────────────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────────┐
│ Calculate statistics from all iterations:                   │
│   - Percentiles: P10, P50, P80, P90, P95                    │
│   - Mean and standard deviation                             │
│   - Category breakdowns (materials, duration, travel)       │
│   - Convergence info and standard error                     │
└─────────────────────────────────────────────────────────────┘
```

### Pseudo-Code

```python
def run_simulation(project):
    results = []
    material_costs = []
    duration_costs = []
    travel_costs = []

    for iteration in range(1000, 10000):
        # 1. Material costs (line items)
        mat_cost = 0
        for item in project.line_items:
            variance = item.risk_level.variance  # 0.02 to 0.40
            z = skewed_normal()
            simulated = item.cost * (1 + z * variance)
            mat_cost += clamp(simulated, item.min, item.max * 1.1)

        # 2. Duration costs
        z = skewed_normal()
        days = project.days * (1 + z * project.complexity.variance)
        days = clamp(days, project.days * 0.9, project.days * 4)
        labor = days * project.hours_per_day * project.hourly_rate

        # 3. Travel costs (correlated with duration)
        visits = ceil(days) if auto_visits else project.visits
        z = skewed_normal()
        travel_time = project.travel_minutes * (1 + z * traffic.variance)
        travel_time = clamp(travel_time, project.travel_minutes * 0.5, ...)
        trips = 2 if return_trip else 1
        travel_hours = (travel_time / 60) * trips * visits
        travel = travel_hours * hourly_rate + mileage * trips * visits

        # 4. Total with profit
        total = (mat_cost + labor + travel) * (1 + profit_margin)
        results.append(total)

        # 5. Check convergence (iOS)
        if iteration >= 1000 and iteration % 500 == 0:
            if p80_relative_change < 0.01:
                break

    return calculate_statistics(results, material_costs, duration_costs, travel_costs)
```

## Random Number Generation

### Box-Muller Transform

The engine uses the Box-Muller transform to generate normally distributed random values from uniform random numbers:

```
z = sqrt(-2 * ln(u1)) * cos(2π * u2)

where u1, u2 ~ Uniform(0, 1)
```

This produces a standard normal distribution (mean=0, stddev=1).

### Skewed Distribution

Real-world projects tend to go over budget more often than under. To model this, we apply asymmetric scaling:

```swift
func generateSkewedNormal() -> Double {
    let z = boxMuller()  // Standard normal
    return z < 0 ? z * 0.7 : z * 1.3
}
```

This creates a distribution where:
- Negative deviations (under budget) are compressed by 30%
- Positive deviations (over budget) are amplified by 30%

**Visual effect:**
```
        Under budget  |  Over budget
                      │
    Standard: ─────────┼─────────
    Skewed:   ────────┼───────────────
                      │
```

## Variance Multipliers

### Risk Levels (Line Items)

| Level | Variance | 1σ Range | Use Case |
|-------|----------|----------|----------|
| Certain | 0.02 | ±2% | Fixed contracts, locked prices |
| Low | 0.08 | ±8% | Reliable suppliers, stable costs |
| Medium | 0.15 | ±15% | Standard market variability |
| High | 0.25 | ±25% | Volatile materials, uncertain labor |
| Wild Guess | 0.40 | ±40% | Unknown scope, new vendors |

### Complexity Levels (Duration)

| Level | Variance | 1σ Range | Use Case |
|-------|----------|----------|----------|
| Routine | 0.10 | ±10% | Repeat jobs, familiar scope |
| Moderate | 0.25 | ±25% | Standard projects |
| Complex | 0.40 | ±40% | Multi-trade, custom work |
| Unknown Scope | 0.60 | ±60% | Discovery needed, unknowns |

### Traffic Variability (Travel)

| Level | Variance | 1σ Range | Use Case |
|-------|----------|----------|----------|
| Predictable | 0.10 | ±10% | Rural, fixed schedule |
| Variable | 0.25 | ±25% | Suburban, normal traffic |
| High Variability | 0.50 | ±50% | Urban, rush hour |

## Correlation Modeling

### Duration → Travel

When site visits are set to "auto" (0), the number of visits correlates with simulated duration:

```
visits = ceil(simulated_days)
```

This means:
- If duration runs 20% over → more site visits → higher travel costs
- Duration and travel uncertainty are not independent

### Duration → Labor

Labor costs directly scale with simulated duration:

```
labor_cost = simulated_days × hours_per_day × hourly_rate
```

## Convergence Detection (iOS Only)

The iOS implementation runs adaptively to balance accuracy and speed:

1. **Minimum:** 1,000 iterations (always run)
2. **Batch size:** 500 iterations per convergence check
3. **Maximum:** 10,000 iterations (hard limit)

### Convergence Criterion

P80 is considered stable when relative change falls below 1%:

```swift
let relativeChange = abs(currentP80 - previousP80) / previousP80
if relativeChange < 0.01 {
    isConverged = true
}
```

### Standard Error

The standard error of P80 is approximated using:

```
SE(P80) ≈ σ / √n × 1.5

where:
  σ = standard deviation of all simulations
  n = number of iterations
  1.5 = empirical correction factor for P80
```

## Output Statistics

### Percentiles

| Percentile | Meaning | Use Case |
|------------|---------|----------|
| P10 | 10% chance of being this low | Optimistic floor |
| P50 | Median (50/50 split) | Conservative quote |
| P80 | 80% chance of being at or below | **Recommended quote** |
| P90 | 90% confidence | Safe quote |
| P95 | 95% confidence | Very safe quote |

### Category Breakdown

Each category tracks separate P50 and P80:
- **Materials:** Sum of all line item simulations
- **Duration:** Labor hours × rate simulations
- **Travel:** Travel time + mileage simulations

This reveals which category contributes most to overall uncertainty.

## Implementation Differences

| Feature | iOS | Android |
|---------|-----|---------|
| Iterations | 1,000 - 10,000 (adaptive) | Fixed 1,000 |
| Convergence | Yes (1% threshold) | No |
| Batch Size | 500 | N/A |
| Standard Error | Calculated | Not calculated |
| Worker Costs | Included | Not implemented |

## Example Calculation

**Input:**
- Line item: $1,000 material, Medium risk (±15%)
- Duration: 5 days, Moderate complexity (±25%)
- Labor rate: $50/hour, 8 hours/day
- Travel: 30 min one-way, Variable traffic (±25%), auto visits
- Profit: 15%

**One iteration (example):**
```
Material: z = 0.8 (skewed)
  simulated = $1,000 × (1 + 0.8 × 0.15) = $1,120

Duration: z = 1.2 (skewed)
  days = 5 × (1 + 1.2 × 0.25) = 6.5 days
  labor = 6.5 × 8 × $50 = $2,600

Travel: z = 0.5 (skewed), visits = ceil(6.5) = 7
  time = 30 × (1 + 0.5 × 0.25) = 33.75 min
  travel_hours = (33.75/60) × 2 × 7 = 7.875 hours
  travel_cost = 7.875 × $50 = $393.75

Subtotal: $1,120 + $2,600 + $393.75 = $4,113.75
With profit: $4,113.75 × 1.15 = $4,730.81
```

After 1,000+ iterations, statistics are calculated from all results.

## Performance Considerations

- **Memory:** Pre-allocated arrays with `reserveCapacity` (iOS)
- **Threading:** Runs on background thread to keep UI responsive
- **Early exit:** Convergence detection reduces iterations for stable estimates
- **Sorting:** Done once after all iterations, not incrementally

## Limitations

1. **Independence assumption:** Line items are simulated independently (no correlation)
2. **Distribution choice:** Normal distribution may not fit all cost types
3. **Skew factor:** The 0.7/1.3 skew is empirical, not calibrated to data
4. **No learning:** Doesn't incorporate historical project data
