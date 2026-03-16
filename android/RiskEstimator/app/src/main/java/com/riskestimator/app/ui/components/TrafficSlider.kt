package com.riskestimator.app.ui.components

import androidx.compose.foundation.layout.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import com.riskestimator.app.data.model.TrafficVariability
import com.riskestimator.app.ui.theme.*

@Composable
fun TrafficSlider(
    trafficVariability: TrafficVariability,
    onTrafficVariabilityChange: (TrafficVariability) -> Unit
) {
    var sliderValue by remember(trafficVariability) { mutableFloatStateOf(trafficVariability.ordinal.toFloat()) }

    val currentColor = when (trafficVariability) {
        TrafficVariability.PREDICTABLE -> Green
        TrafficVariability.VARIABLE -> Yellow
        TrafficVariability.HIGH_VARIABILITY -> Red
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
                    text = "Traffic Variability",
                    style = MaterialTheme.typography.titleSmall,
                    color = MaterialTheme.colorScheme.onSurfaceVariant
                )
                Text(
                    text = trafficVariability.displayName,
                    style = MaterialTheme.typography.titleMedium,
                    fontWeight = FontWeight.Bold,
                    color = currentColor
                )
            }

            Slider(
                value = sliderValue,
                onValueChange = { newValue ->
                    sliderValue = newValue
                    onTrafficVariabilityChange(TrafficVariability.fromOrdinal(newValue.toInt()))
                },
                valueRange = 0f..2f,
                steps = 1,
                colors = SliderDefaults.colors(
                    thumbColor = currentColor,
                    activeTrackColor = currentColor
                )
            )

            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.SpaceBetween
            ) {
                TrafficVariability.entries.forEach { level ->
                    Text(
                        text = level.displayName.split(" ").first(),
                        style = MaterialTheme.typography.labelSmall,
                        color = if (level == trafficVariability) currentColor else MaterialTheme.colorScheme.onSurfaceVariant
                    )
                }
            }

            Text(
                text = trafficVariability.description,
                style = MaterialTheme.typography.bodySmall,
                color = MaterialTheme.colorScheme.onSurfaceVariant
            )

            Text(
                text = "Travel time variance: ±${(trafficVariability.varianceMultiplier * 100).toInt()}%",
                style = MaterialTheme.typography.labelSmall,
                color = MaterialTheme.colorScheme.onSurfaceVariant
            )
        }
    }
}
