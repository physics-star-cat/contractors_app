'use client'

import { useState } from 'react'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import { formatCurrency } from '@/services/currency'
import { useRegion } from '@/context/RegionContext'

export default function KalkulatorMarzyNarzutuPage() {
  const { region } = useRegion()
  const [costPrice, setCostPrice] = useState<string>('')
  const [percentage, setPercentage] = useState<string>('20')

  const cost = parseFloat(costPrice) || 0
  const pct = parseFloat(percentage) || 0

  const hasInput = cost > 0 && pct > 0 && pct < 100

  // Obliczenia narzutu
  const markupSellingPrice = cost * (1 + pct / 100)
  const markupProfit = markupSellingPrice - cost
  const markupActualMargin =
    markupSellingPrice > 0 ? (markupProfit / markupSellingPrice) * 100 : 0

  // Obliczenia marży
  const marginSellingPrice = pct < 100 ? cost / (1 - pct / 100) : 0
  const marginProfit = marginSellingPrice - cost
  const marginActualMarkup = cost > 0 ? (marginProfit / cost) * 100 : 0

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

  const subValueStyle: React.CSSProperties = {
    color: 'var(--text-dim)',
    fontSize: '12px',
  }

  const columnsStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 'var(--spacing-md)',
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
        kalkulator marży i narzutu
      </h1>

      <p
        style={{
          fontSize: '13px',
          color: 'var(--text-secondary)',
          lineHeight: '1.7',
          marginBottom: 'var(--spacing-lg)',
        }}
      >
        Narzut i marża to nie to samo. To narzędzie pokazuje oba obok siebie, abyś
        widział różnicę i prawidłowo wyceniał swoje zlecenia.
      </p>

      <ASCIIBox title="Dane wejściowe">
        <div style={fieldStyle}>
          <label style={labelStyle}>cena kosztu</label>
          <input
            type="number"
            min="0"
            step="1"
            placeholder="0,00"
            value={costPrice}
            onChange={(e) => setCostPrice(e.target.value)}
            style={inputStyle}
          />
        </div>

        <div style={{ marginBottom: 0 }}>
          <label style={labelStyle}>pożądany procent (%)</label>
          <input
            type="number"
            min="0"
            max="99.99"
            step="1"
            value={percentage}
            onChange={(e) => setPercentage(e.target.value)}
            style={inputStyle}
          />
        </div>
      </ASCIIBox>

      {!hasInput ? (
        <ASCIIBox title="Wyniki">
          <p style={{ fontSize: '13px', color: 'var(--text-dim)' }}>
            {'> '}wprowadź cenę kosztu i procent powyżej, aby zobaczyć wyniki_
          </p>
        </ASCIIBox>
      ) : (
        <div style={columnsStyle}>
          <ASCIIBox title={`Jeśli ${pct}% to NARZUT`} variant="highlight">
            <div style={resultRowStyle}>
              <span style={resultLabelStyle}>cena sprzedaży</span>
              <span style={resultValueStyle}>
                {formatCurrency(markupSellingPrice, region)}
              </span>
            </div>
            <div style={resultRowStyle}>
              <span style={resultLabelStyle}>zysk</span>
              <span style={resultValueStyle}>
                {formatCurrency(markupProfit, region)}
              </span>
            </div>
            <div style={{ ...resultRowStyle, borderBottom: 'none' }}>
              <span style={resultLabelStyle}>faktyczna marża</span>
              <span style={resultValueStyle}>
                {markupActualMargin.toFixed(1)}%
              </span>
            </div>
            <p style={subValueStyle}>
              Dodajesz {pct}% do kosztu
            </p>
          </ASCIIBox>

          <ASCIIBox title={`Jeśli ${pct}% to MARŻA`} variant="highlight">
            <div style={resultRowStyle}>
              <span style={resultLabelStyle}>cena sprzedaży</span>
              <span style={resultValueStyle}>
                {formatCurrency(marginSellingPrice, region)}
              </span>
            </div>
            <div style={resultRowStyle}>
              <span style={resultLabelStyle}>zysk</span>
              <span style={resultValueStyle}>
                {formatCurrency(marginProfit, region)}
              </span>
            </div>
            <div style={{ ...resultRowStyle, borderBottom: 'none' }}>
              <span style={resultLabelStyle}>faktyczny narzut</span>
              <span style={resultValueStyle}>
                {marginActualMarkup.toFixed(1)}%
              </span>
            </div>
            <p style={subValueStyle}>
              Zysk stanowi {pct}% ceny sprzedaży
            </p>
          </ASCIIBox>
        </div>
      )}

      <ASCIIBox title="Wyjaśnienie różnicy">
        <p
          style={{
            fontSize: '13px',
            color: 'var(--text-secondary)',
            lineHeight: '1.7',
            marginBottom: '12px',
          }}
        >
          20% narzutu na {formatCurrency(100, region)} = sprzedajesz za{' '}
          {formatCurrency(120, region)} (zysk {formatCurrency(20, region)}).
        </p>
        <p
          style={{
            fontSize: '13px',
            color: 'var(--text-secondary)',
            lineHeight: '1.7',
            marginBottom: '12px',
          }}
        >
          20% marży na {formatCurrency(100, region)} = sprzedajesz za{' '}
          {formatCurrency(125, region)} (zysk {formatCurrency(25, region)}).
        </p>
        <p
          style={{
            fontSize: '13px',
            color: 'var(--accent-amber)',
            lineHeight: '1.7',
            fontWeight: 'bold',
          }}
        >
          To nie jest to samo.
        </p>
      </ASCIIBox>

      <div
        style={{
          marginTop: 'var(--spacing-lg)',
          fontSize: '13px',
          color: 'var(--text-secondary)',
        }}
      >
        Chcesz wycenić pełne zlecenie?{' '}
        <Link href="/pl/estimate/">
          [ROZPOCZNIJ WYCENĘ]
        </Link>
      </div>
    </div>
  )
}
