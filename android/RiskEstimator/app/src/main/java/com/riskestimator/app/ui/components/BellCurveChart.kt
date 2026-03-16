package com.riskestimator.app.ui.components

import androidx.compose.foundation.Canvas
import androidx.compose.foundation.layout.*
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.geometry.Size
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.PathEffect
import androidx.compose.ui.graphics.drawscope.DrawScope
import androidx.compose.ui.unit.dp
import com.riskestimator.app.data.model.SimulationResult
import com.riskestimator.app.ui.theme.Blue
import com.riskestimator.app.ui.theme.Green
import com.riskestimator.app.ui.theme.Orange
import com.riskestimator.app.ui.theme.Red
import java.text.NumberFormat

@Composable
fun BellCurveChart(
    result: SimulationResult,
    modifier: Modifier = Modifier
) {
    val histogram = result.histogram
    if (histogram.isEmpty()) return

    val currencyFormat = NumberFormat.getCurrencyInstance()
    val maxFrequency = histogram.maxOfOrNull { it.frequency } ?: 1.0

    Column(modifier = modifier) {
        Canvas(
            modifier = Modifier
                .fillMaxWidth()
                .weight(1f)
        ) {
            val barWidth = size.width / histogram.size
            val chartHeight = size.height - 20

            histogram.forEachIndexed { index, bucket ->
                val barHeight = (bucket.frequency / maxFrequency * chartHeight).toFloat()
                val x = index * barWidth
                val y = chartHeight - barHeight

                val color = when {
                    bucket.midpoint < result.percentile50 -> Green.copy(alpha = 0.7f)
                    bucket.midpoint < result.percentile80 -> Blue.copy(alpha = 0.7f)
                    else -> Red.copy(alpha = 0.7f)
                }

                drawRect(
                    color = color,
                    topLeft = Offset(x + 1, y),
                    size = Size(barWidth - 2, barHeight)
                )
            }

            // Draw recommended quote line
            val quoteX = ((result.percentile80 - result.min) / (result.max - result.min) * size.width).toFloat()
            drawLine(
                color = Orange,
                start = Offset(quoteX, 0f),
                end = Offset(quoteX, chartHeight),
                strokeWidth = 2f,
                pathEffect = PathEffect.dashPathEffect(floatArrayOf(10f, 5f))
            )
        }

        // X-axis labels
        Row(
            modifier = Modifier
                .fillMaxWidth()
                .padding(top = 4.dp),
            horizontalArrangement = Arrangement.SpaceBetween
        ) {
            Text(
                text = formatAxisLabel(result.min),
                style = MaterialTheme.typography.labelSmall,
                color = MaterialTheme.colorScheme.onSurfaceVariant
            )
            Text(
                text = formatAxisLabel(result.percentile50),
                style = MaterialTheme.typography.labelSmall,
                color = MaterialTheme.colorScheme.onSurfaceVariant
            )
            Text(
                text = formatAxisLabel(result.max),
                style = MaterialTheme.typography.labelSmall,
                color = MaterialTheme.colorScheme.onSurfaceVariant
            )
        }

        // Legend
        Row(
            modifier = Modifier
                .fillMaxWidth()
                .padding(top = 8.dp),
            horizontalArrangement = Arrangement.spacedBy(16.dp),
            verticalAlignment = Alignment.CenterVertically
        ) {
            LegendItem(color = Green, label = "Below estimate")
            LegendItem(color = Blue, label = "Near estimate")
            LegendItem(color = Red, label = "Above estimate")
        }
    }
}

@Composable
private fun LegendItem(color: Color, label: String) {
    Row(
        verticalAlignment = Alignment.CenterVertically,
        horizontalArrangement = Arrangement.spacedBy(4.dp)
    ) {
        Canvas(modifier = Modifier.size(8.dp)) {
            drawCircle(color = color)
        }
        Text(
            text = label,
            style = MaterialTheme.typography.labelSmall,
            color = MaterialTheme.colorScheme.onSurfaceVariant
        )
    }
}

private fun formatAxisLabel(value: Double): String {
    return if (value >= 1000) {
        "$${(value / 1000).toInt()}k"
    } else {
        "$${value.toInt()}"
    }
}
