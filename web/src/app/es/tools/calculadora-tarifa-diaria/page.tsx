'use client'

import { useState } from 'react'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import { formatCurrency } from '@/services/currency'
import { useRegion } from '@/context/RegionContext'

export default function CalculadoraTarifaDiariaPage() {
  const { region } = useRegion()
  const [hourlyRate, setHourlyRate] = useState<string>('')
  const [hoursPerDay, setHoursPerDay] = useState<string>('8')
  const [daysPerWeek, setDaysPerWeek] = useState<string>('5')

  const hourly = parseFloat(hourlyRate) || 0
  const hours = parseFloat(hoursPerDay) || 0
  const days = parseFloat(daysPerWeek) || 0

  const dayRate = hourly * hours
  const weeklyRate = dayRate * days
  const monthlyRate = weeklyRate * 4.33
  const annualRate = weeklyRate * 52

  const hasInput = hourly > 0

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: 'var(--spacing-sm) var(--spacing-md)',
    background: 'var(--bg-secondary)',
    border: '1px solid var(--border-color)',
    color: 'var(--text-primary)',
    fontFamily: 'var(--font-mono)',
    fontSize: '14px',
  }

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: '12px',
    color: 'var(--text-secondary)',
    marginBottom: 'var(--spacing-xs)',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  }

  const fieldStyle: React.CSSProperties = {
    marginBottom: 'var(--spacing-md)',
  }

  const resultRowStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 'var(--spacing-sm) 0',
    borderBottom: '1px solid var(--border-color)',
    fontSize: '13px',
  }

  const resultLabelStyle: React.CSSProperties = {
    color: 'var(--text-secondary)',
  }

  const resultValueStyle: React.CSSProperties = {
    color: 'var(--accent-amber)',
    fontWeight: 'bold',
    fontSize: '15px',
  }

  return (
    <div>
      <h1
        style={{
          color: 'var(--accent-amber)',
          fontSize: '20px',
          marginBottom: 'var(--spacing-lg)',
        }}
      >
        calculadora de tarifa diaria
      </h1>

      <p
        style={{
          fontSize: '13px',
          color: 'var(--text-secondary)',
          lineHeight: '1.7',
          marginBottom: 'var(--spacing-lg)',
        }}
      >
        Introduzca su tarifa por hora para ver al instante su tarifa diaria, semanal,
        mensual y sus ingresos anuales. Ajuste las horas por día y los días por semana
        según su patrón de trabajo.
      </p>

      <ASCIIBox title="Datos de entrada">
        <div style={fieldStyle}>
          <label style={labelStyle}>tarifa por hora</label>
          <input
            type="number"
            min="0"
            step="0.50"
            placeholder="0,00"
            value={hourlyRate}
            onChange={(e) => setHourlyRate(e.target.value)}
            style={inputStyle}
          />
        </div>

        <div style={fieldStyle}>
          <label style={labelStyle}>horas por día</label>
          <input
            type="number"
            min="0"
            max="24"
            step="0.5"
            value={hoursPerDay}
            onChange={(e) => setHoursPerDay(e.target.value)}
            style={inputStyle}
          />
        </div>

        <div style={{ marginBottom: 0 }}>
          <label style={labelStyle}>días por semana</label>
          <input
            type="number"
            min="0"
            max="7"
            step="0.5"
            value={daysPerWeek}
            onChange={(e) => setDaysPerWeek(e.target.value)}
            style={inputStyle}
          />
        </div>
      </ASCIIBox>

      <ASCIIBox title="Resultados" variant={hasInput ? 'highlight' : 'default'}>
        {!hasInput ? (
          <p style={{ fontSize: '13px', color: 'var(--text-dim)' }}>
            {'> '}introduzca una tarifa por hora arriba para ver los resultados_
          </p>
        ) : (
          <div>
            <div style={resultRowStyle}>
              <span style={resultLabelStyle}>tarifa diaria</span>
              <span style={resultValueStyle}>
                {formatCurrency(dayRate, region)}
              </span>
            </div>
            <div style={resultRowStyle}>
              <span style={resultLabelStyle}>tarifa semanal</span>
              <span style={resultValueStyle}>
                {formatCurrency(weeklyRate, region)}
              </span>
            </div>
            <div style={resultRowStyle}>
              <span style={resultLabelStyle}>tarifa mensual (x4,33 semanas)</span>
              <span style={resultValueStyle}>
                {formatCurrency(monthlyRate, region)}
              </span>
            </div>
            <div style={{ ...resultRowStyle, borderBottom: 'none' }}>
              <span style={resultLabelStyle}>tarifa anual (x52 semanas)</span>
              <span style={resultValueStyle}>
                {formatCurrency(annualRate, region)}
              </span>
            </div>
          </div>
        )}
      </ASCIIBox>

      <div
        style={{
          marginTop: 'var(--spacing-lg)',
          fontSize: '13px',
          color: 'var(--text-secondary)',
        }}
      >
        ¿Necesita presupuestar un trabajo completo?{' '}
        <Link href="/es/estimate/">
          [CREAR PRESUPUESTO]
        </Link>
      </div>
    </div>
  )
}
