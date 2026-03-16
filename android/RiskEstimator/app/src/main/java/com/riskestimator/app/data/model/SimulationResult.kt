package com.riskestimator.app.data.model

data class SimulationResult(
    val simulations: List<Double>,
    val percentile10: Double,
    val percentile50: Double,
    val percentile80: Double,
    val percentile90: Double,
    val percentile95: Double,
    val mean: Double,
    val standardDeviation: Double,
    val min: Double,
    val max: Double,
    // Breakdown by category
    val durationCostP50: Double = 0.0,
    val durationCostP80: Double = 0.0,
    val travelCostP50: Double = 0.0,
    val travelCostP80: Double = 0.0,
    val materialCostP50: Double = 0.0,
    val materialCostP80: Double = 0.0
) {
    val confidenceRange80: Pair<Double, Double>
        get() = Pair(percentile10, percentile90)

    val recommendedQuote: Double
        get() = percentile80

    val histogram: List<HistogramBucket>
        get() {
            if (simulations.isEmpty()) return emptyList()

            val bucketCount = 20
            val range = max - min
            val bucketSize = range / bucketCount

            return (0 until bucketCount).map { i ->
                val bucketMin = min + i * bucketSize
                val bucketMax = bucketMin + bucketSize
                val count = simulations.count { it >= bucketMin && it < bucketMax }
                val frequency = count.toDouble() / simulations.size

                HistogramBucket(
                    rangeStart = bucketMin,
                    rangeEnd = bucketMax,
                    count = count,
                    frequency = frequency
                )
            }
        }
}

data class HistogramBucket(
    val rangeStart: Double,
    val rangeEnd: Double,
    val count: Int,
    val frequency: Double
) {
    val midpoint: Double
        get() = (rangeStart + rangeEnd) / 2
}
