package com.riskestimator.app.ui.components

import androidx.compose.foundation.layout.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import com.riskestimator.app.data.model.ComplexityLevel
import com.riskestimator.app.ui.theme.*

@Composable
fun ComplexitySlider(
    complexityLevel: ComplexityLevel,
    onComplexityLevelChange: (ComplexityLevel) -> Unit
) {
    var sliderValue by remember(complexityLevel) { mutableFloatStateOf(complexityLevel.ordinal.toFloat()) }

    val currentColor = when (complexityLevel) {
        ComplexityLevel.ROUTINE -> Green
        ComplexityLevel.MODERATE -> Yellow
        ComplexityLevel.COMPLEX -> Orange
        ComplexityLevel.UNKNOWN_SCOPE -> Red
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
                    text = "Job Complexity",
                    style = MaterialTheme.typography.titleSmall,
                    color = MaterialTheme.colorScheme.onSurfaceVariant
                )
                Text(
                    text = complexityLevel.displayName,
                    style = MaterialTheme.typography.titleMedium,
                    fontWeight = FontWeight.Bold,
                    color = currentColor
                )
            }

            Slider(
                value = sliderValue,
                onValueChange = { newValue ->
                    sliderValue = newValue
                    onComplexityLevelChange(ComplexityLevel.fromOrdinal(newValue.toInt()))
                },
                valueRange = 0f..3f,
                steps = 2,
                colors = SliderDefaults.colors(
                    thumbColor = currentColor,
                    activeTrackColor = currentColor
                )
            )

            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.SpaceBetween
            ) {
                ComplexityLevel.entries.forEach { level ->
                    Text(
                        text = level.displayName.split(" ").first(),
                        style = MaterialTheme.typography.labelSmall,
                        color = if (level == complexityLevel) currentColor else MaterialTheme.colorScheme.onSurfaceVariant
                    )
                }
            }

            Text(
                text = complexityLevel.description,
                style = MaterialTheme.typography.bodySmall,
                color = MaterialTheme.colorScheme.onSurfaceVariant
            )

            Text(
                text = "Duration variance: ±${(complexityLevel.varianceMultiplier * 100).toInt()}%",
                style = MaterialTheme.typography.labelSmall,
                color = MaterialTheme.colorScheme.onSurfaceVariant
            )
        }
    }
}
