package com.riskestimator.app.ui.screens

import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.itemsIndexed
import androidx.compose.foundation.text.KeyboardOptions
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.automirrored.filled.ArrowBack
import androidx.compose.material.icons.filled.Add
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.input.KeyboardType
import androidx.compose.ui.unit.dp
import com.riskestimator.app.data.model.ComplexityLevel
import com.riskestimator.app.data.model.TrafficVariability
import com.riskestimator.app.ui.EstimatorViewModel
import com.riskestimator.app.ui.components.AddItemDialog
import com.riskestimator.app.ui.components.ComplexitySlider
import com.riskestimator.app.ui.components.LineItemCard
import com.riskestimator.app.ui.components.TrafficSlider
import java.text.NumberFormat

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun EstimatorScreen(
    viewModel: EstimatorViewModel,
    onBack: () -> Unit,
    onShowResults: () -> Unit
) {
    val project by viewModel.currentProject.collectAsState()
    val isSimulating by viewModel.isSimulating.collectAsState()
    val simulationResult by viewModel.simulationResult.collectAsState()
    val editingItem by viewModel.editingItem.collectAsState()

    var showAddDialog by remember { mutableStateOf(false) }
    var projectName by remember(project.id) { mutableStateOf(project.name) }
    var clientName by remember(project.id) { mutableStateOf(project.clientName) }
    var profitMarginText by remember(project.id) { mutableStateOf("${(project.profitMargin * 100).toInt()}") }

    // Duration state
    var estimatedDaysText by remember(project.id) { mutableStateOf("%.1f".format(project.estimatedDays)) }
    var hourlyRateText by remember(project.id) { mutableStateOf("%.0f".format(project.hourlyLaborRate)) }
    var hoursPerDayText by remember(project.id) { mutableStateOf("%.0f".format(project.hoursPerDay)) }
    var complexityLevel by remember(project.id) { mutableStateOf(project.complexityLevel) }

    // Travel state
    var travelTimeText by remember(project.id) { mutableStateOf("%.0f".format(project.travelTimeMinutes)) }
    var distanceText by remember(project.id) { mutableStateOf("%.0f".format(project.distanceKm)) }
    var mileageRateText by remember(project.id) { mutableStateOf("%.2f".format(project.mileageRatePerKm)) }
    var siteVisitsText by remember(project.id) { mutableStateOf(if (project.numberOfSiteVisits == 0) "" else project.numberOfSiteVisits.toString()) }
    var trafficVariability by remember(project.id) { mutableStateOf(project.trafficVariability) }
    var includeReturnTrip by remember(project.id) { mutableStateOf(project.includeReturnTrip) }
    var showMileageOptions by remember { mutableStateOf(false) }

    val currencyFormat = NumberFormat.getCurrencyInstance()

    LaunchedEffect(simulationResult) {
        if (simulationResult != null && !isSimulating) {
            onShowResults()
        }
    }

    Scaffold(
        topBar = {
            TopAppBar(
                title = { Text("Estimate") },
                navigationIcon = {
                    IconButton(onClick = onBack) {
                        Icon(Icons.AutoMirrored.Filled.ArrowBack, contentDescription = "Back")
                    }
                },
                colors = TopAppBarDefaults.topAppBarColors(
                    containerColor = MaterialTheme.colorScheme.background
                )
            )
        }
    ) { padding ->
        LazyColumn(
            modifier = Modifier
                .fillMaxSize()
                .padding(padding),
            contentPadding = PaddingValues(16.dp),
            verticalArrangement = Arrangement.spacedBy(16.dp)
        ) {
            // Project Details Section
            item {
                Card(modifier = Modifier.fillMaxWidth()) {
                    Column(
                        modifier = Modifier.padding(16.dp),
                        verticalArrangement = Arrangement.spacedBy(12.dp)
                    ) {
                        Text(
                            text = "Project Details",
                            style = MaterialTheme.typography.titleMedium,
                            fontWeight = FontWeight.Bold
                        )

                        OutlinedTextField(
                            value = projectName,
                            onValueChange = {
                                projectName = it
                                viewModel.updateProjectName(it)
                            },
                            label = { Text("Project Name") },
                            modifier = Modifier.fillMaxWidth(),
                            singleLine = true
                        )

                        OutlinedTextField(
                            value = clientName,
                            onValueChange = {
                                clientName = it
                                viewModel.updateClientName(it)
                            },
                            label = { Text("Client Name (optional)") },
                            modifier = Modifier.fillMaxWidth(),
                            singleLine = true
                        )

                        Row(
                            verticalAlignment = Alignment.CenterVertically
                        ) {
                            Text(
                                text = "Profit Margin",
                                modifier = Modifier.weight(1f)
                            )
                            OutlinedTextField(
                                value = profitMarginText,
                                onValueChange = {
                                    profitMarginText = it
                                    it.toDoubleOrNull()?.let { value ->
                                        viewModel.updateProfitMargin(value / 100)
                                    }
                                },
                                modifier = Modifier.width(80.dp),
                                singleLine = true,
                                keyboardOptions = KeyboardOptions(keyboardType = KeyboardType.Number),
                                suffix = { Text("%") }
                            )
                        }
                    }
                }
            }

            // Duration Section
            item {
                Card(modifier = Modifier.fillMaxWidth()) {
                    Column(
                        modifier = Modifier.padding(16.dp),
                        verticalArrangement = Arrangement.spacedBy(12.dp)
                    ) {
                        Text(
                            text = "Job Duration",
                            style = MaterialTheme.typography.titleMedium,
                            fontWeight = FontWeight.Bold
                        )

                        Row(verticalAlignment = Alignment.CenterVertically) {
                            Text("Estimated Days", modifier = Modifier.weight(1f))
                            OutlinedTextField(
                                value = estimatedDaysText,
                                onValueChange = {
                                    estimatedDaysText = it
                                    it.toDoubleOrNull()?.let { value ->
                                        viewModel.updateEstimatedDays(value)
                                    }
                                },
                                modifier = Modifier.width(100.dp),
                                singleLine = true,
                                keyboardOptions = KeyboardOptions(keyboardType = KeyboardType.Decimal),
                                suffix = { Text("days") }
                            )
                        }

                        Row(verticalAlignment = Alignment.CenterVertically) {
                            Text("Hourly Rate", modifier = Modifier.weight(1f))
                            OutlinedTextField(
                                value = hourlyRateText,
                                onValueChange = {
                                    hourlyRateText = it
                                    it.toDoubleOrNull()?.let { value ->
                                        viewModel.updateHourlyLaborRate(value)
                                    }
                                },
                                modifier = Modifier.width(100.dp),
                                singleLine = true,
                                keyboardOptions = KeyboardOptions(keyboardType = KeyboardType.Number),
                                prefix = { Text("$") },
                                suffix = { Text("/hr") }
                            )
                        }

                        Row(verticalAlignment = Alignment.CenterVertically) {
                            Text("Hours per Day", modifier = Modifier.weight(1f))
                            OutlinedTextField(
                                value = hoursPerDayText,
                                onValueChange = {
                                    hoursPerDayText = it
                                    it.toDoubleOrNull()?.let { value ->
                                        viewModel.updateHoursPerDay(value)
                                    }
                                },
                                modifier = Modifier.width(100.dp),
                                singleLine = true,
                                keyboardOptions = KeyboardOptions(keyboardType = KeyboardType.Number),
                                suffix = { Text("hrs") }
                            )
                        }

                        ComplexitySlider(
                            complexityLevel = complexityLevel,
                            onComplexityLevelChange = {
                                complexityLevel = it
                                viewModel.updateComplexityLevel(it)
                            }
                        )

                        HorizontalDivider()

                        Row(
                            modifier = Modifier.fillMaxWidth(),
                            horizontalArrangement = Arrangement.SpaceBetween
                        ) {
                            Text("Base Labor Cost", color = MaterialTheme.colorScheme.onSurfaceVariant)
                            Text(
                                currencyFormat.format(project.baseDurationCost),
                                fontWeight = FontWeight.Medium
                            )
                        }

                        Text(
                            text = "How long will this job take? Complexity affects how much the actual duration might vary.",
                            style = MaterialTheme.typography.bodySmall,
                            color = MaterialTheme.colorScheme.onSurfaceVariant
                        )
                    }
                }
            }

            // Travel Section
            item {
                Card(modifier = Modifier.fillMaxWidth()) {
                    Column(
                        modifier = Modifier.padding(16.dp),
                        verticalArrangement = Arrangement.spacedBy(12.dp)
                    ) {
                        Text(
                            text = "Travel",
                            style = MaterialTheme.typography.titleMedium,
                            fontWeight = FontWeight.Bold
                        )

                        Row(verticalAlignment = Alignment.CenterVertically) {
                            Text("Travel Time (one-way)", modifier = Modifier.weight(1f))
                            OutlinedTextField(
                                value = travelTimeText,
                                onValueChange = {
                                    travelTimeText = it
                                    it.toDoubleOrNull()?.let { value ->
                                        viewModel.updateTravelTimeMinutes(value)
                                    }
                                },
                                modifier = Modifier.width(100.dp),
                                singleLine = true,
                                keyboardOptions = KeyboardOptions(keyboardType = KeyboardType.Number),
                                suffix = { Text("min") }
                            )
                        }

                        Row(
                            modifier = Modifier.fillMaxWidth(),
                            verticalAlignment = Alignment.CenterVertically,
                            horizontalArrangement = Arrangement.SpaceBetween
                        ) {
                            Text("Include Return Trip")
                            Switch(
                                checked = includeReturnTrip,
                                onCheckedChange = {
                                    includeReturnTrip = it
                                    viewModel.updateIncludeReturnTrip(it)
                                }
                            )
                        }

                        Row(verticalAlignment = Alignment.CenterVertically) {
                            Text("Site Visits", modifier = Modifier.weight(1f))
                            OutlinedTextField(
                                value = siteVisitsText,
                                onValueChange = {
                                    siteVisitsText = it
                                    val value = it.toIntOrNull() ?: 0
                                    viewModel.updateNumberOfSiteVisits(value)
                                },
                                modifier = Modifier.width(100.dp),
                                singleLine = true,
                                keyboardOptions = KeyboardOptions(keyboardType = KeyboardType.Number),
                                placeholder = { Text("Auto") },
                                suffix = {
                                    if (project.numberOfSiteVisits == 0) Text("(auto)")
                                    else Text("visits")
                                }
                            )
                        }

                        TrafficSlider(
                            trafficVariability = trafficVariability,
                            onTrafficVariabilityChange = {
                                trafficVariability = it
                                viewModel.updateTrafficVariability(it)
                            }
                        )

                        // Mileage expandable section
                        Row(
                            modifier = Modifier.fillMaxWidth(),
                            verticalAlignment = Alignment.CenterVertically,
                            horizontalArrangement = Arrangement.SpaceBetween
                        ) {
                            Text("Mileage (Optional)")
                            TextButton(onClick = { showMileageOptions = !showMileageOptions }) {
                                Text(if (showMileageOptions) "Hide" else "Show")
                            }
                        }

                        if (showMileageOptions) {
                            Row(verticalAlignment = Alignment.CenterVertically) {
                                Text("Distance", modifier = Modifier.weight(1f))
                                OutlinedTextField(
                                    value = distanceText,
                                    onValueChange = {
                                        distanceText = it
                                        it.toDoubleOrNull()?.let { value ->
                                            viewModel.updateDistanceKm(value)
                                        }
                                    },
                                    modifier = Modifier.width(100.dp),
                                    singleLine = true,
                                    keyboardOptions = KeyboardOptions(keyboardType = KeyboardType.Decimal),
                                    suffix = { Text("km") }
                                )
                            }

                            Row(verticalAlignment = Alignment.CenterVertically) {
                                Text("Rate per km", modifier = Modifier.weight(1f))
                                OutlinedTextField(
                                    value = mileageRateText,
                                    onValueChange = {
                                        mileageRateText = it
                                        it.toDoubleOrNull()?.let { value ->
                                            viewModel.updateMileageRate(value)
                                        }
                                    },
                                    modifier = Modifier.width(100.dp),
                                    singleLine = true,
                                    keyboardOptions = KeyboardOptions(keyboardType = KeyboardType.Decimal),
                                    prefix = { Text("$") }
                                )
                            }
                        }

                        HorizontalDivider()

                        Row(
                            modifier = Modifier.fillMaxWidth(),
                            horizontalArrangement = Arrangement.SpaceBetween
                        ) {
                            Text("Base Travel Cost", color = MaterialTheme.colorScheme.onSurfaceVariant)
                            Text(
                                currencyFormat.format(project.baseTravelCost),
                                fontWeight = FontWeight.Medium
                            )
                        }

                        Text(
                            text = "Travel time is charged at your hourly rate. Set site visits to 0 to auto-calculate from job duration.",
                            style = MaterialTheme.typography.bodySmall,
                            color = MaterialTheme.colorScheme.onSurfaceVariant
                        )
                    }
                }
            }

            // Line Items Section Header
            item {
                Row(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalArrangement = Arrangement.SpaceBetween,
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    Text(
                        text = "Materials & Other Costs",
                        style = MaterialTheme.typography.titleMedium,
                        fontWeight = FontWeight.Bold
                    )
                    IconButton(onClick = { showAddDialog = true }) {
                        Icon(
                            Icons.Default.Add,
                            contentDescription = "Add Item",
                            tint = MaterialTheme.colorScheme.primary
                        )
                    }
                }
            }

            // Line Items
            if (project.lineItems.isEmpty()) {
                item {
                    Card(
                        modifier = Modifier.fillMaxWidth(),
                        colors = CardDefaults.cardColors(
                            containerColor = MaterialTheme.colorScheme.surfaceVariant
                        )
                    ) {
                        Column(
                            modifier = Modifier
                                .fillMaxWidth()
                                .padding(32.dp),
                            horizontalAlignment = Alignment.CenterHorizontally
                        ) {
                            Text(
                                text = "No Items",
                                style = MaterialTheme.typography.titleMedium
                            )
                            Spacer(modifier = Modifier.height(8.dp))
                            Text(
                                text = "Add materials, labor, or subcontractor costs",
                                style = MaterialTheme.typography.bodySmall,
                                color = MaterialTheme.colorScheme.onSurfaceVariant
                            )
                            Spacer(modifier = Modifier.height(16.dp))
                            Button(onClick = { showAddDialog = true }) {
                                Text("Add First Item")
                            }
                        }
                    }
                }
            } else {
                itemsIndexed(project.lineItems, key = { _, item -> item.id }) { index, item ->
                    LineItemCard(
                        item = item,
                        onClick = {
                            viewModel.setEditingItem(item)
                            showAddDialog = true
                        },
                        onDelete = { viewModel.deleteLineItem(index) }
                    )
                }
            }

            // Summary Section
            item {
                Card(modifier = Modifier.fillMaxWidth()) {
                    Column(
                        modifier = Modifier.padding(16.dp),
                        verticalArrangement = Arrangement.spacedBy(8.dp)
                    ) {
                        Text(
                            text = "Summary",
                            style = MaterialTheme.typography.titleMedium,
                            fontWeight = FontWeight.Bold
                        )

                        Row(
                            modifier = Modifier.fillMaxWidth(),
                            horizontalArrangement = Arrangement.SpaceBetween
                        ) {
                            Text("Materials & Items")
                            Text(
                                currencyFormat.format(project.totalEstimate),
                                color = MaterialTheme.colorScheme.onSurfaceVariant
                            )
                        }

                        Row(
                            modifier = Modifier.fillMaxWidth(),
                            horizontalArrangement = Arrangement.SpaceBetween
                        ) {
                            Text("Labor (Duration)")
                            Text(
                                currencyFormat.format(project.baseDurationCost),
                                color = MaterialTheme.colorScheme.onSurfaceVariant
                            )
                        }

                        Row(
                            modifier = Modifier.fillMaxWidth(),
                            horizontalArrangement = Arrangement.SpaceBetween
                        ) {
                            Text("Travel")
                            Text(
                                currencyFormat.format(project.baseTravelCost),
                                color = MaterialTheme.colorScheme.onSurfaceVariant
                            )
                        }

                        HorizontalDivider()

                        Row(
                            modifier = Modifier.fillMaxWidth(),
                            horizontalArrangement = Arrangement.SpaceBetween
                        ) {
                            Text("Subtotal")
                            Text(
                                currencyFormat.format(project.totalWithDurationAndTravel),
                                fontWeight = FontWeight.Medium
                            )
                        }

                        Row(
                            modifier = Modifier.fillMaxWidth(),
                            horizontalArrangement = Arrangement.SpaceBetween
                        ) {
                            Text("With Profit (${(project.profitMargin * 100).toInt()}%)")
                            Text(
                                currencyFormat.format(project.totalWithProfit),
                                fontWeight = FontWeight.Bold
                            )
                        }
                    }
                }
            }

            // Run Simulation Button
            item {
                Button(
                    onClick = { viewModel.runSimulation() },
                    modifier = Modifier
                        .fillMaxWidth()
                        .height(56.dp),
                    enabled = !isSimulating
                ) {
                    if (isSimulating) {
                        CircularProgressIndicator(
                            modifier = Modifier.size(24.dp),
                            color = MaterialTheme.colorScheme.onPrimary
                        )
                        Spacer(modifier = Modifier.width(8.dp))
                        Text("Running Simulation...")
                    } else {
                        Text("Run Risk Analysis", fontWeight = FontWeight.Bold)
                    }
                }
            }

            item { Spacer(modifier = Modifier.height(32.dp)) }
        }
    }

    if (showAddDialog) {
        AddItemDialog(
            editingItem = editingItem,
            onDismiss = {
                showAddDialog = false
                viewModel.setEditingItem(null)
            },
            onSave = { item ->
                if (editingItem != null) {
                    viewModel.updateLineItem(item)
                } else {
                    viewModel.addLineItem(item)
                }
                showAddDialog = false
                viewModel.setEditingItem(null)
            }
        )
    }
}
