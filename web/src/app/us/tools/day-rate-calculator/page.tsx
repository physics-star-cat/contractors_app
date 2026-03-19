'use client'

import { useState } from 'react'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import { formatCurrency } from '@/services/currency'
import { useRegion } from '@/context/RegionContext'

export default function DayRateCalculatorPage() {
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
        day rate calculator
      </h1>

      <p
        style={{
          fontSize: '13px',
          color: 'var(--text-secondary)',
          lineHeight: '1.7',
          marginBottom: 'var(--spacing-lg)',
        }}
      >
        Enter your hourly rate to instantly see your day rate, weekly rate,
        monthly rate, and annual income. Adjust hours per day and days per week
        to match your working pattern.
      </p>

      <ASCIIBox title="Inputs">
        <div style={fieldStyle}>
          <label style={labelStyle}>hourly rate ($)</label>
          <input
            type="number"
            min="0"
            step="0.50"
            placeholder="0.00"
            value={hourlyRate}
            onChange={(e) => setHourlyRate(e.target.value)}
            style={inputStyle}
          />
        </div>

        <div style={fieldStyle}>
          <label style={labelStyle}>hours per day</label>
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
          <label style={labelStyle}>days per week</label>
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

      <ASCIIBox title="Results" variant={hasInput ? 'highlight' : 'default'}>
        {!hasInput ? (
          <p style={{ fontSize: '13px', color: 'var(--text-dim)' }}>
            {'> '}enter an hourly rate above to see results_
          </p>
        ) : (
          <div>
            <div style={resultRowStyle}>
              <span style={resultLabelStyle}>day rate</span>
              <span style={resultValueStyle}>
                {formatCurrency(dayRate, region)}
              </span>
            </div>
            <div style={resultRowStyle}>
              <span style={resultLabelStyle}>weekly rate</span>
              <span style={resultValueStyle}>
                {formatCurrency(weeklyRate, region)}
              </span>
            </div>
            <div style={resultRowStyle}>
              <span style={resultLabelStyle}>monthly rate (x4.33 weeks)</span>
              <span style={resultValueStyle}>
                {formatCurrency(monthlyRate, region)}
              </span>
            </div>
            <div style={{ ...resultRowStyle, borderBottom: 'none' }}>
              <span style={resultLabelStyle}>annual rate (x52 weeks)</span>
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
        Need to bid a full job?{' '}
        <Link href="/us/estimate/">
          [START ESTIMATE]
        </Link>
      </div>
    </div>
  )
}
