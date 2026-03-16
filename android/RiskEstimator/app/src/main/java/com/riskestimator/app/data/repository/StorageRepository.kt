package com.riskestimator.app.data.repository

import android.content.Context
import android.content.SharedPreferences
import com.google.gson.Gson
import com.google.gson.reflect.TypeToken
import com.riskestimator.app.data.model.Project

class StorageRepository(context: Context) {
    private val prefs: SharedPreferences = context.getSharedPreferences(
        PREFS_NAME,
        Context.MODE_PRIVATE
    )
    private val gson = Gson()

    fun saveProjects(projects: List<Project>) {
        val json = gson.toJson(projects)
        prefs.edit().putString(KEY_PROJECTS, json).apply()
    }

    fun loadProjects(): List<Project> {
        val json = prefs.getString(KEY_PROJECTS, null) ?: return emptyList()
        val type = object : TypeToken<List<Project>>() {}.type
        return try {
            gson.fromJson(json, type) ?: emptyList()
        } catch (e: Exception) {
            emptyList()
        }
    }

    fun saveProject(project: Project) {
        val projects = loadProjects().toMutableList()
        val index = projects.indexOfFirst { it.id == project.id }
        if (index != -1) {
            projects[index] = project
        } else {
            projects.add(project)
        }
        saveProjects(projects)
    }

    fun deleteProject(project: Project) {
        val projects = loadProjects().toMutableList()
        projects.removeAll { it.id == project.id }
        saveProjects(projects)
    }

    fun clearAll() {
        prefs.edit().remove(KEY_PROJECTS).apply()
    }

    companion object {
        private const val PREFS_NAME = "risk_estimator_prefs"
        private const val KEY_PROJECTS = "saved_projects"
    }
}
