package com.riskestimator.app.ui.components

import androidx.compose.foundation.layout.*
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.text.KeyboardOptions
import androidx.compose.foundation.verticalScroll
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.input.KeyboardType
import androidx.compose.ui.unit.dp
import androidx.compose.ui.window.Dialog
import androidx.compose.ui.window.DialogProperties
import com.riskestimator.app.data.model.ItemCategory
import com.riskestimator.app.data.model.LineItem
import com.riskestimator.app.data.model.RiskLevel
import java.text.NumberFormat

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun AddItemDialog(
    editingItem: LineItem?,
    onDismiss: () -> Unit,
    onSave: (LineItem) -> Unit
) {
    var name by remember(editingItem) { mutableStateOf(editingItem?.name ?: "") }
    var costText by remember(editingItem) {
        mutableStateOf(
            editingItem?.estimatedCost?.let { String.format("%.2f", it) } ?: ""
        )
    }
    var category by remember(editingItem) { mutableStateOf(editingItem?.category ?: ItemCategory.MATERIAL) }
    var riskLevel by remember(editingItem) { mutableStateOf(editingItem?.riskLevel ?: RiskLevel.MEDIUM) }

    val isValid = name.isNotBlank() && (costText.toDoubleOrNull() ?: 0.0) > 0
    val currencyFormat = NumberFormat.getCurrencyInstance()

    Dialog(
        onDismissRequest = onDismiss,
        properties = DialogProperties(usePlatformDefaultWidth = false)
    ) {
        Card(
            modifier = Modifier
                .fillMaxWidth(0.95f)
                .fillMaxHeight(0.9f)
        ) {
            Column(
                modifier = Modifier
                    .fillMaxSize()
                    .padding(24.dp)
            ) {
                Text(
                    text = if (editingItem != null) "Edit Item" else "Add Item",
                    style = MaterialTheme.typography.headlineSmall,
                    fontWeight = FontWeight.Bold
                )

                Spacer(modifier = Modifier.height(24.dp))

                Column(
                    modifier = Modifier
                        .weight(1f)
                        .verticalScroll(rememberScrollState()),
                    verticalArrangement = Arrangement.spacedBy(16.dp)
                ) {
                    OutlinedTextField(
                        value = name,
                        onValueChange = { name = it },
                        label = { Text("Item Name") },
                        modifier = Modifier.fillMaxWidth(),
                        singleLine = true
                    )

                    OutlinedTextField(
                        value = costText,
                        onValueChange = { costText = it },
                        label = { Text("Estimated Cost") },
                        modifier = Modifier.fillMaxWidth(),
                        singleLine = true,
                        keyboardOptions = KeyboardOptions(keyboardType = KeyboardType.Decimal),
                        prefix = { Text("$") }
                    )

                    Text(
                        text = "Category",
                        style = MaterialTheme.typography.titleSmall,
                        fontWeight = FontWeight.Medium
                    )

                    Row(
                        modifier = Modifier.fillMaxWidth(),
                        horizontalArrangement = Arrangement.spacedBy(8.dp)
                    ) {
                        ItemCategory.entries.forEach { cat ->
                            FilterChip(
                                selected = category == cat,
                                onClick = { category = cat },
                                label = { Text(cat.displayName) },
                                modifier = Modifier.weight(1f)
                            )
                        }
                    }

                    RiskSlider(
                        riskLevel = riskLevel,
                        onRiskLevelChange = { riskLevel = it }
                    )

                    // Cost Range Preview
                    val cost = costText.toDoubleOrNull()
                    if (cost != null && cost > 0) {
                        val tempItem = LineItem(
                            name = name,
                            estimatedCost = cost,
                            category = category,
                            riskLevel = riskLevel
                        )

                        Card(
                            colors = CardDefaults.cardColors(
                                containerColor = MaterialTheme.colorScheme.surfaceVariant
                            )
                        ) {
                            Column(
                                modifier = Modifier
                                    .fillMaxWidth()
                                    .padding(16.dp),
                                verticalArrangement = Arrangement.spacedBy(8.dp)
                            ) {
                                Text(
                                    text = "Cost Range Preview",
                                    style = MaterialTheme.typography.titleSmall,
                                    fontWeight = FontWeight.Bold
                                )

                                Row(
                                    modifier = Modifier.fillMaxWidth(),
                                    horizontalArrangement = Arrangement.SpaceBetween
                                ) {
                                    Text("Minimum")
                                    Text(
                                        currencyFormat.format(tempItem.minCost),
                                        color = MaterialTheme.colorScheme.primary
                                    )
                                }

                                Row(
                                    modifier = Modifier.fillMaxWidth(),
                                    horizontalArrangement = Arrangement.SpaceBetween
                                ) {
                                    Text("Estimate")
                                    Text(
                                        currencyFormat.format(cost),
                                        fontWeight = FontWeight.Bold
                                    )
                                }

                                Row(
                                    modifier = Modifier.fillMaxWidth(),
                                    horizontalArrangement = Arrangement.SpaceBetween
                                ) {
                                    Text("Maximum")
                                    Text(
                                        currencyFormat.format(tempItem.maxCost),
                                        color = MaterialTheme.colorScheme.error
                                    )
                                }
                            }
                        }
                    }
                }

                Spacer(modifier = Modifier.height(16.dp))

                Row(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalArrangement = Arrangement.spacedBy(12.dp)
                ) {
                    OutlinedButton(
                        onClick = onDismiss,
                        modifier = Modifier.weight(1f)
                    ) {
                        Text("Cancel")
                    }

                    Button(
                        onClick = {
                            val cost = costText.toDoubleOrNull() ?: return@Button
                            val item = LineItem(
                                id = editingItem?.id ?: java.util.UUID.randomUUID().toString(),
                                name = name,
                                estimatedCost = cost,
                                category = category,
                                riskLevel = riskLevel
                            )
                            onSave(item)
                        },
                        modifier = Modifier.weight(1f),
                        enabled = isValid
                    ) {
                        Text(if (editingItem != null) "Save" else "Add")
                    }
                }
            }
        }
    }
}
