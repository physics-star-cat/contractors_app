package com.riskestimator.app.ui

import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.lifecycle.viewmodel.compose.viewModel
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.compose.rememberNavController
import com.riskestimator.app.ui.screens.EstimatorScreen
import com.riskestimator.app.ui.screens.HomeScreen
import com.riskestimator.app.ui.screens.ResultsScreen

sealed class Screen(val route: String) {
    data object Home : Screen("home")
    data object Estimator : Screen("estimator")
    data object Results : Screen("results")
}

@Composable
fun RiskEstimatorApp(
    viewModel: EstimatorViewModel = viewModel()
) {
    val navController = rememberNavController()
    val simulationResult by viewModel.simulationResult.collectAsState()

    NavHost(
        navController = navController,
        startDestination = Screen.Home.route
    ) {
        composable(Screen.Home.route) {
            HomeScreen(
                viewModel = viewModel,
                onNewEstimate = {
                    viewModel.createNewProject()
                    navController.navigate(Screen.Estimator.route)
                },
                onSelectProject = { project ->
                    viewModel.selectProject(project)
                    navController.navigate(Screen.Estimator.route)
                }
            )
        }

        composable(Screen.Estimator.route) {
            EstimatorScreen(
                viewModel = viewModel,
                onBack = { navController.popBackStack() },
                onShowResults = {
                    if (simulationResult != null) {
                        navController.navigate(Screen.Results.route)
                    }
                }
            )
        }

        composable(Screen.Results.route) {
            val result = simulationResult
            if (result != null) {
                ResultsScreen(
                    viewModel = viewModel,
                    result = result,
                    onBack = { navController.popBackStack() }
                )
            }
        }
    }
}
