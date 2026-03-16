package com.riskestimator.app.ui.components

import androidx.compose.foundation.layout.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import com.riskestimator.app.data.model.RiskLevel
import com.riskestimator.app.ui.theme.*

@Composable
fun RiskSlider(
    riskLevel: RiskLevel,
    onRiskLevelChange: (RiskLevel) -> Unit
) {
    var sliderValue by remember(riskLevel) { mutableFloatStateOf(riskLevel.ordinal.toFloat()) }

    val currentColor = when (riskLevel) {
        RiskLevel.CERTAIN -> Green
        RiskLevel.LOW -> Blue
        RiskLevel.MEDIUM -> Yellow
        RiskLevel.HIGH -> Orange
        RiskLevel.WILD_GUESS -> Red
    }

    val riskDescription = when (riskLevel) {
        RiskLevel.CERTAIN -> "You have a fixed quote or exact price. Variance: ±2%"
        RiskLevel.LOW -> "You've done this before and prices are stable. Variance: ±8%"
        RiskLevel.MEDIUM -> "Typical estimate with some unknowns. Variance: ±15%"
        RiskLevel.HIGH -> "Significant unknowns or volatile prices. Variance: ±25%"
        RiskLevel.WILD_GUESS -> "Complete uncertainty - just a rough guess. Variance: ±40%"
    }

    Card(
        colors = CardDefaults.cardColors(
            containerColor = MaterialTheme.colorScheme.surfaceVariant
        )
    ) {
        Column(
            modifier = Modifier
                .fillMaxWidth()
                .padding(16.dp),
            verticalArrangement = Arrangement.spacedBy(12.dp)
        ) {
            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.SpaceBetween,
                verticalAlignment = Alignment.CenterVertically
            ) {
                Text(
                    text = "Uncertainty Level",
                    style = MaterialTheme.typography.titleSmall,
                    color = MaterialTheme.colorScheme.onSurfaceVariant
                )
                Text(
                    text = riskLevel.displayName,
                    style = MaterialTheme.typography.titleMedium,
                    fontWeight = FontWeight.Bold,
                    color = currentColor
                )
            }

            Slider(
                value = sliderValue,
                onValueChange = { newValue ->
                    sliderValue = newValue
                    onRiskLevelChange(RiskLevel.fromOrdinal(newValue.toInt()))
                },
                valueRange = 0f..4f,
                steps = 3,
                colors = SliderDefaults.colors(
                    thumbColor = currentColor,
                    activeTrackColor = currentColor
                )
            )

            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.SpaceBetween
            ) {
                RiskLevel.entries.forEach { level ->
                    Text(
                        text = level.displayName.split(" ").first(),
                        style = MaterialTheme.typography.labelSmall,
                        color = if (level == riskLevel) currentColor else MaterialTheme.colorScheme.onSurfaceVariant
                    )
                }
            }

            Text(
                text = riskDescription,
                style = MaterialTheme.typography.bodySmall,
                color = MaterialTheme.colorScheme.onSurfaceVariant
            )
        }
    }
}
