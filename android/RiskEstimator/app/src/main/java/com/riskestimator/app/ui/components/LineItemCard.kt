package com.riskestimator.app.ui.components

import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.*
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import com.riskestimator.app.data.model.ItemCategory
import com.riskestimator.app.data.model.LineItem
import com.riskestimator.app.data.model.RiskLevel
import com.riskestimator.app.ui.theme.*
import java.text.NumberFormat

@Composable
fun LineItemCard(
    item: LineItem,
    onClick: () -> Unit,
    onDelete: () -> Unit
) {
    val currencyFormat = NumberFormat.getCurrencyInstance()

    val riskColor = when (item.riskLevel) {
        RiskLevel.CERTAIN -> Green
        RiskLevel.LOW -> Blue
        RiskLevel.MEDIUM -> Yellow
        RiskLevel.HIGH -> Orange
        RiskLevel.WILD_GUESS -> Red
    }

    val categoryIcon = when (item.category) {
        ItemCategory.MATERIAL -> Icons.Default.Build
        ItemCategory.LABOR -> Icons.Default.Person
        ItemCategory.SUBCONTRACTOR -> Icons.Default.Groups
        ItemCategory.OTHER -> Icons.Default.MoreHoriz
    }

    Card(
        modifier = Modifier
            .fillMaxWidth()
            .clickable(onClick = onClick)
    ) {
        Row(
            modifier = Modifier
                .fillMaxWidth()
                .padding(16.dp),
            verticalAlignment = Alignment.CenterVertically
        ) {
            Icon(
                imageVector = categoryIcon,
                contentDescription = null,
                tint = MaterialTheme.colorScheme.primary,
                modifier = Modifier.size(28.dp)
            )

            Spacer(modifier = Modifier.width(12.dp))

            Column(modifier = Modifier.weight(1f)) {
                Text(
                    text = item.name,
                    style = MaterialTheme.typography.titleMedium,
                    fontWeight = FontWeight.Bold
                )
                Row(
                    verticalAlignment = Alignment.CenterVertically,
                    horizontalArrangement = Arrangement.spacedBy(8.dp)
                ) {
                    Text(
                        text = item.category.displayName,
                        style = MaterialTheme.typography.bodySmall,
                        color = MaterialTheme.colorScheme.onSurfaceVariant
                    )
                    Surface(
                        shape = MaterialTheme.shapes.small,
                        color = riskColor.copy(alpha = 0.2f)
                    ) {
                        Text(
                            text = item.riskLevel.displayName,
                            style = MaterialTheme.typography.labelSmall,
                            color = riskColor,
                            modifier = Modifier.padding(horizontal = 6.dp, vertical = 2.dp)
                        )
                    }
                }
            }

            Text(
                text = currencyFormat.format(item.estimatedCost),
                style = MaterialTheme.typography.titleMedium,
                fontWeight = FontWeight.Bold
            )

            IconButton(onClick = onDelete) {
                Icon(
                    imageVector = Icons.Default.Delete,
                    contentDescription = "Delete",
                    tint = MaterialTheme.colorScheme.error
                )
            }
        }
    }
}
