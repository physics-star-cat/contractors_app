'use client'

import { useState } from 'react'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import { formatCurrency } from '@/services/currency'
import { useRegion } from '@/context/RegionContext'

export default function GunlukUcretHesaplayiciPage() {
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
        günlük ücret hesaplayıcı
      </h1>

      <p
        style={{
          fontSize: '13px',
          color: 'var(--text-secondary)',
          lineHeight: '1.7',
          marginBottom: 'var(--spacing-lg)',
        }}
      >
        Saatlik ücretinizi girerek günlük ücretinizi, haftalık ücretinizi, aylık gelirinizi
        ve yıllık gelirinizi anında görün. Çalışma düzeninize göre günlük saat ve haftalık
        gün sayısını ayarlayın.
      </p>

      <ASCIIBox title="Giriş">
        <div style={fieldStyle}>
          <label style={labelStyle}>saatlik ücret</label>
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
          <label style={labelStyle}>günlük saat</label>
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
          <label style={labelStyle}>haftalık gün</label>
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

      <ASCIIBox title="Sonuçlar" variant={hasInput ? 'highlight' : 'default'}>
        {!hasInput ? (
          <p style={{ fontSize: '13px', color: 'var(--text-dim)' }}>
            {'> '}sonuçları görmek için yukarıya saatlik ücret girin_
          </p>
        ) : (
          <div>
            <div style={resultRowStyle}>
              <span style={resultLabelStyle}>günlük ücret</span>
              <span style={resultValueStyle}>
                {formatCurrency(dayRate, region)}
              </span>
            </div>
            <div style={resultRowStyle}>
              <span style={resultLabelStyle}>haftalık ücret</span>
              <span style={resultValueStyle}>
                {formatCurrency(weeklyRate, region)}
              </span>
            </div>
            <div style={resultRowStyle}>
              <span style={resultLabelStyle}>aylık ücret (x4,33 hafta)</span>
              <span style={resultValueStyle}>
                {formatCurrency(monthlyRate, region)}
              </span>
            </div>
            <div style={{ ...resultRowStyle, borderBottom: 'none' }}>
              <span style={resultLabelStyle}>yıllık gelir (x52 hafta)</span>
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
        Komple bir projeyi fiyatlandırmanız mı gerekiyor?{' '}
        <Link href="/tr/estimate/">
          [TEKLİF OLUŞTUR]
        </Link>
      </div>
    </div>
  )
}
