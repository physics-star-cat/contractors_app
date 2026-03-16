package com.riskestimator.app.ui

import android.app.Application
import androidx.lifecycle.AndroidViewModel
import androidx.lifecycle.viewModelScope
import com.riskestimator.app.data.model.LineItem
import com.riskestimator.app.data.model.Project
import com.riskestimator.app.data.model.SimulationResult
import com.riskestimator.app.data.repository.StorageRepository
import com.riskestimator.app.domain.MonteCarloEngine
import com.riskestimator.app.domain.PDFService
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.launch
import kotlinx.coroutines.withContext
import java.io.File

class EstimatorViewModel(application: Application) : AndroidViewModel(application) {
    private val storage = StorageRepository(application)

    private val _currentProject = MutableStateFlow(Project())
    val currentProject: StateFlow<Project> = _currentProject.asStateFlow()

    private val _savedProjects = MutableStateFlow<List<Project>>(emptyList())
    val savedProjects: StateFlow<List<Project>> = _savedProjects.asStateFlow()

    private val _simulationResult = MutableStateFlow<SimulationResult?>(null)
    val simulationResult: StateFlow<SimulationResult?> = _simulationResult.asStateFlow()

    private val _isSimulating = MutableStateFlow(false)
    val isSimulating: StateFlow<Boolean> = _isSimulating.asStateFlow()

    private val _editingItem = MutableStateFlow<LineItem?>(null)
    val editingItem: StateFlow<LineItem?> = _editingItem.asStateFlow()

    init {
        loadProjects()
    }

    fun loadProjects() {
        _savedProjects.value = storage.loadProjects()
    }

    fun saveCurrentProject() {
        storage.saveProject(_currentProject.value)
        loadProjects()
    }

    fun deleteProject(project: Project) {
        storage.deleteProject(project)
        loadProjects()
    }

    fun selectProject(project: Project) {
        _currentProject.value = project.copy()
        _simulationResult.value = null
    }

    fun createNewProject() {
        _currentProject.value = Project()
        _simulationResult.value = null
    }

    fun addLineItem(item: LineItem) {
        _currentProject.value.addItem(item)
        _currentProject.value = _currentProject.value.copy()
        saveCurrentProject()
    }

    fun updateLineItem(item: LineItem) {
        _currentProject.value.updateItem(item)
        _currentProject.value = _currentProject.value.copy()
        saveCurrentProject()
    }

    fun deleteLineItem(index: Int) {
        _currentProject.value.removeItem(index)
        _currentProject.value = _currentProject.value.copy()
        saveCurrentProject()
    }

    fun setEditingItem(item: LineItem?) {
        _editingItem.value = item
    }

    fun runSimulation() {
        if (_currentProject.value.lineItems.isEmpty()) return

        _isSimulating.value = true
        viewModelScope.launch {
            val result = withContext(Dispatchers.Default) {
                MonteCarloEngine.runSimulation(_currentProject.value)
            }
            _simulationResult.value = result
            _isSimulating.value = false
        }
    }

    fun updateProjectName(name: String) {
        _currentProject.value.name = name
        _currentProject.value = _currentProject.value.copy()
        saveCurrentProject()
    }

    fun updateClientName(name: String) {
        _currentProject.value.clientName = name
        _currentProject.value = _currentProject.value.copy()
        saveCurrentProject()
    }

    fun updateProfitMargin(margin: Double) {
        _currentProject.value.profitMargin = margin
        _currentProject.value = _currentProject.value.copy()
        saveCurrentProject()
    }

    // Duration updates
    fun updateEstimatedDays(days: Double) {
        _currentProject.value.estimatedDays = maxOf(0.5, days)
        _currentProject.value = _currentProject.value.copy()
        saveCurrentProject()
    }

    fun updateComplexityLevel(level: com.riskestimator.app.data.model.ComplexityLevel) {
        _currentProject.value.complexityLevel = level
        _currentProject.value = _currentProject.value.copy()
        saveCurrentProject()
    }

    fun updateHourlyLaborRate(rate: Double) {
        _currentProject.value.hourlyLaborRate = maxOf(0.0, rate)
        _currentProject.value = _currentProject.value.copy()
        saveCurrentProject()
    }

    fun updateHoursPerDay(hours: Double) {
        _currentProject.value.hoursPerDay = hours.coerceIn(1.0, 24.0)
        _currentProject.value = _currentProject.value.copy()
        saveCurrentProject()
    }

    // Travel updates
    fun updateTravelTimeMinutes(minutes: Double) {
        _currentProject.value.travelTimeMinutes = maxOf(0.0, minutes)
        _currentProject.value = _currentProject.value.copy()
        saveCurrentProject()
    }

    fun updateTrafficVariability(variability: com.riskestimator.app.data.model.TrafficVariability) {
        _currentProject.value.trafficVariability = variability
        _currentProject.value = _currentProject.value.copy()
        saveCurrentProject()
    }

    fun updateNumberOfSiteVisits(visits: Int) {
        _currentProject.value.numberOfSiteVisits = maxOf(0, visits)
        _currentProject.value = _currentProject.value.copy()
        saveCurrentProject()
    }

    fun updateIncludeReturnTrip(include: Boolean) {
        _currentProject.value.includeReturnTrip = include
        _currentProject.value = _currentProject.value.copy()
        saveCurrentProject()
    }

    fun updateDistanceKm(distance: Double) {
        _currentProject.value.distanceKm = maxOf(0.0, distance)
        _currentProject.value = _currentProject.value.copy()
        saveCurrentProject()
    }

    fun updateMileageRate(rate: Double) {
        _currentProject.value.mileageRatePerKm = maxOf(0.0, rate)
        _currentProject.value = _currentProject.value.copy()
        saveCurrentProject()
    }

    fun generatePDF(includeConfidence: Boolean): File? {
        val result = _simulationResult.value ?: return null
        return PDFService.generateQuotePDF(
            context = getApplication(),
            project = _currentProject.value,
            result = result,
            includeConfidence = includeConfidence
        )
    }
}
