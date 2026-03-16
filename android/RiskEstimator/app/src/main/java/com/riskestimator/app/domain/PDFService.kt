package com.riskestimator.app.domain

import android.content.Context
import com.itextpdf.kernel.colors.ColorConstants
import com.itextpdf.kernel.pdf.PdfDocument
import com.itextpdf.kernel.pdf.PdfWriter
import com.itextpdf.layout.Document
import com.itextpdf.layout.element.Cell
import com.itextpdf.layout.element.Paragraph
import com.itextpdf.layout.element.Table
import com.itextpdf.layout.properties.TextAlignment
import com.itextpdf.layout.properties.UnitValue
import com.riskestimator.app.data.model.Project
import com.riskestimator.app.data.model.SimulationResult
import java.io.File
import java.text.NumberFormat
import java.text.SimpleDateFormat
import java.util.Date
import java.util.Locale

object PDFService {
    private val currencyFormat = NumberFormat.getCurrencyInstance(Locale.getDefault())
    private val dateFormat = SimpleDateFormat("MMMM d, yyyy", Locale.getDefault())

    fun generateQuotePDF(
        context: Context,
        project: Project,
        result: SimulationResult,
        includeConfidence: Boolean = true
    ): File? {
        return try {
            val cacheDir = File(context.cacheDir, "pdfs")
            if (!cacheDir.exists()) {
                cacheDir.mkdirs()
            }

            val fileName = "quote_${project.name.replace(" ", "_")}_${System.currentTimeMillis()}.pdf"
            val file = File(cacheDir, fileName)

            val writer = PdfWriter(file)
            val pdf = PdfDocument(writer)
            val document = Document(pdf)

            // Title
            document.add(
                Paragraph("Project Estimate")
                    .setFontSize(24f)
                    .setBold()
                    .setMarginBottom(20f)
            )

            // Project details
            document.add(
                Paragraph("Project: ${project.name}")
                    .setFontSize(14f)
                    .setBold()
            )

            if (project.clientName.isNotEmpty()) {
                document.add(
                    Paragraph("Client: ${project.clientName}")
                        .setFontSize(12f)
                )
            }

            document.add(
                Paragraph("Date: ${dateFormat.format(Date())}")
                    .setFontSize(12f)
                    .setMarginBottom(20f)
            )

            // Line items table
            document.add(
                Paragraph("Line Items")
                    .setFontSize(14f)
                    .setBold()
                    .setMarginBottom(10f)
            )

            val table = Table(UnitValue.createPercentArray(floatArrayOf(40f, 20f, 20f, 20f)))
                .useAllAvailableWidth()

            // Header
            table.addHeaderCell(createHeaderCell("Item"))
            table.addHeaderCell(createHeaderCell("Category"))
            table.addHeaderCell(createHeaderCell("Risk"))
            table.addHeaderCell(createHeaderCell("Cost"))

            // Data rows
            for (item in project.lineItems) {
                table.addCell(Cell().add(Paragraph(item.name)))
                table.addCell(Cell().add(Paragraph(item.category.displayName)))
                table.addCell(Cell().add(Paragraph(item.riskLevel.displayName)))
                table.addCell(Cell().add(Paragraph(currencyFormat.format(item.estimatedCost))))
            }

            document.add(table)
            document.add(Paragraph("").setMarginBottom(20f))

            // Cost Summary
            document.add(
                Paragraph("Materials & Items: ${currencyFormat.format(project.totalEstimate)}")
                    .setFontSize(12f)
            )

            document.add(
                Paragraph("Labor (${"%.1f".format(project.estimatedDays)} days @ $${project.hourlyLaborRate.toInt()}/hr): ${currencyFormat.format(project.baseDurationCost)}")
                    .setFontSize(12f)
            )

            if (project.baseTravelCost > 0) {
                document.add(
                    Paragraph("Travel (${project.travelTimeMinutes.toInt()} min × ${project.effectiveSiteVisits} visits): ${currencyFormat.format(project.baseTravelCost)}")
                        .setFontSize(12f)
                )
            }

            document.add(
                Paragraph("Subtotal: ${currencyFormat.format(project.totalWithDurationAndTravel)}")
                    .setFontSize(12f)
                    .setMarginTop(10f)
            )

            document.add(
                Paragraph("Profit Margin (${(project.profitMargin * 100).toInt()}%): ${currencyFormat.format(project.totalWithDurationAndTravel * project.profitMargin)}")
                    .setFontSize(12f)
            )

            document.add(
                Paragraph("TOTAL ESTIMATE: ${currencyFormat.format(project.totalWithProfit)}")
                    .setFontSize(14f)
                    .setBold()
                    .setMarginTop(10f)
                    .setMarginBottom(20f)
            )

            // Risk analysis
            if (includeConfidence) {
                document.add(
                    Paragraph("Risk Analysis (Monte Carlo Simulation)")
                        .setFontSize(14f)
                        .setBold()
                        .setMarginTop(20f)
                        .setMarginBottom(10f)
                )

                document.add(
                    Paragraph("80% Confidence Range: ${currencyFormat.format(result.percentile10)} - ${currencyFormat.format(result.percentile90)}")
                        .setFontSize(12f)
                )

                document.add(
                    Paragraph("Recommended Quote (80th percentile): ${currencyFormat.format(result.recommendedQuote)}")
                        .setFontSize(12f)
                )

                document.add(
                    Paragraph("95th Percentile (worst case): ${currencyFormat.format(result.percentile95)}")
                        .setFontSize(12f)
                        .setMarginBottom(20f)
                )

                document.add(
                    Paragraph("This estimate was generated using Monte Carlo simulation with 1,000 iterations, accounting for uncertainty in materials, job duration, and travel time.")
                        .setFontSize(10f)
                        .setFontColor(ColorConstants.GRAY)
                )
            }

            // Footer
            document.add(
                Paragraph("Generated by Risk Estimator")
                    .setFontSize(10f)
                    .setFontColor(ColorConstants.GRAY)
                    .setTextAlignment(TextAlignment.CENTER)
                    .setMarginTop(30f)
            )

            document.close()
            file
        } catch (e: Exception) {
            e.printStackTrace()
            null
        }
    }

    private fun createHeaderCell(text: String): Cell {
        return Cell()
            .add(Paragraph(text).setBold())
            .setBackgroundColor(ColorConstants.LIGHT_GRAY)
    }
}
