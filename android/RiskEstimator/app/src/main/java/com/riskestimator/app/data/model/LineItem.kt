package com.riskestimator.app.data.model

import java.util.UUID

enum class ItemCategory(val displayName: String, val icon: String) {
    MATERIAL("Material", "construction"),
    LABOR("Labor", "person"),
    SUBCONTRACTOR("Subcontractor", "groups"),
    OTHER("Other", "more_horiz")
}

// Duration Complexity
enum class ComplexityLevel(
    val displayName: String,
    val varianceMultiplier: Double,
    val description: String
) {
    ROUTINE("Routine", 0.10, "Repeat job, clear scope"),
    MODERATE("Moderate", 0.25, "Standard job, minor unknowns"),
    COMPLEX("Complex", 0.40, "Custom work, dependencies"),
    UNKNOWN_SCOPE("Unknown Scope", 0.60, "New type of job, unclear requirements");

    companion object {
        fun fromOrdinal(ordinal: Int): ComplexityLevel {
            return entries.getOrElse(ordinal) { MODERATE }
        }
    }
}

// Travel/Traffic Variability
enum class TrafficVariability(
    val displayName: String,
    val varianceMultiplier: Double,
    val description: String
) {
    PREDICTABLE("Predictable", 0.10, "Rural, off-peak times"),
    VARIABLE("Variable", 0.25, "Suburban, mixed traffic"),
    HIGH_VARIABILITY("High Variability", 0.50, "Urban, peak hours");

    companion object {
        fun fromOrdinal(ordinal: Int): TrafficVariability {
            return entries.getOrElse(ordinal) { VARIABLE }
        }
    }
}

// Cost Risk Level
enum class RiskLevel(
    val displayName: String,
    val varianceMultiplier: Double
) {
    CERTAIN("Certain", 0.02),
    LOW("Low Risk", 0.08),
    MEDIUM("Medium Risk", 0.15),
    HIGH("High Risk", 0.25),
    WILD_GUESS("Wild Guess", 0.40);

    companion object {
        fun fromOrdinal(ordinal: Int): RiskLevel {
            return entries.getOrElse(ordinal) { MEDIUM }
        }
    }
}

data class LineItem(
    val id: String = UUID.randomUUID().toString(),
    val name: String,
    val estimatedCost: Double,
    val category: ItemCategory,
    val riskLevel: RiskLevel = RiskLevel.MEDIUM
) {
    val minCost: Double
        get() = estimatedCost * (1 - riskLevel.varianceMultiplier)

    val maxCost: Double
        get() = estimatedCost * (1 + riskLevel.varianceMultiplier * 1.5)
}
