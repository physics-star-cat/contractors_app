'use client'

import { useState } from 'react'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import { formatCurrency } from '@/services/currency'
import { useRegion } from '@/context/RegionContext'

export default function CalculadoraMargemMarkupPage() {
  const { region } = useRegion()
  const [costPrice, setCostPrice] = useState<string>('')
  const [percentage, setPercentage] = useState<string>('20')

  const cost = parseFloat(costPrice) || 0
  const pct = parseFloat(percentage) || 0

  const hasInput = cost > 0 && pct > 0 && pct < 100

  // Cálculos de markup
  const markupSellingPrice = cost * (1 + pct / 100)
  const markupProfit = markupSellingPrice - cost
  const markupActualMargin =
    markupSellingPrice > 0 ? (markupProfit / markupSellingPrice) * 100 : 0

  // Cálculos de margem
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
        calculadora margem vs markup
      </h1>

      <p
        style={{
          fontSize: '13px',
          color: 'var(--text-secondary)',
          lineHeight: '1.7',
          marginBottom: 'var(--spacing-lg)',
        }}
      >
        Markup e margem não são a mesma coisa. Esta ferramenta mostra os dois lado a lado
        para que você veja a diferença e precifique suas obras corretamente.
      </p>

      <ASCIIBox title="Entrada">
        <div style={fieldStyle}>
          <label style={labelStyle}>preço de custo</label>
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
          <label style={labelStyle}>porcentagem desejada (%)</label>
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
        <ASCIIBox title="Resultados">
          <p style={{ fontSize: '13px', color: 'var(--text-dim)' }}>
            {'> '}insira um preço de custo e uma porcentagem acima para ver os resultados_
          </p>
        </ASCIIBox>
      ) : (
        <div style={columnsStyle}>
          <ASCIIBox title={`Se ${pct}% é MARKUP`} variant="highlight">
            <div style={resultRowStyle}>
              <span style={resultLabelStyle}>preço de venda</span>
              <span style={resultValueStyle}>
                {formatCurrency(markupSellingPrice, region)}
              </span>
            </div>
            <div style={resultRowStyle}>
              <span style={resultLabelStyle}>lucro</span>
              <span style={resultValueStyle}>
                {formatCurrency(markupProfit, region)}
              </span>
            </div>
            <div style={{ ...resultRowStyle, borderBottom: 'none' }}>
              <span style={resultLabelStyle}>margem real</span>
              <span style={resultValueStyle}>
                {markupActualMargin.toFixed(1)}%
              </span>
            </div>
            <p style={subValueStyle}>
              Você adiciona {pct}% sobre o custo
            </p>
          </ASCIIBox>

          <ASCIIBox title={`Se ${pct}% é MARGEM`} variant="highlight">
            <div style={resultRowStyle}>
              <span style={resultLabelStyle}>preço de venda</span>
              <span style={resultValueStyle}>
                {formatCurrency(marginSellingPrice, region)}
              </span>
            </div>
            <div style={resultRowStyle}>
              <span style={resultLabelStyle}>lucro</span>
              <span style={resultValueStyle}>
                {formatCurrency(marginProfit, region)}
              </span>
            </div>
            <div style={{ ...resultRowStyle, borderBottom: 'none' }}>
              <span style={resultLabelStyle}>markup real</span>
              <span style={resultValueStyle}>
                {marginActualMarkup.toFixed(1)}%
              </span>
            </div>
            <p style={subValueStyle}>
              O lucro é {pct}% do preço de venda
            </p>
          </ASCIIBox>
        </div>
      )}

      <ASCIIBox title="A diferença explicada">
        <p
          style={{
            fontSize: '13px',
            color: 'var(--text-secondary)',
            lineHeight: '1.7',
            marginBottom: '12px',
          }}
        >
          20% de markup sobre {formatCurrency(100, region)} = vender a{' '}
          {formatCurrency(120, region)} (lucro {formatCurrency(20, region)}).
        </p>
        <p
          style={{
            fontSize: '13px',
            color: 'var(--text-secondary)',
            lineHeight: '1.7',
            marginBottom: '12px',
          }}
        >
          20% de margem sobre {formatCurrency(100, region)} = vender a{' '}
          {formatCurrency(125, region)} (lucro {formatCurrency(25, region)}).
        </p>
        <p
          style={{
            fontSize: '13px',
            color: 'var(--accent-amber)',
            lineHeight: '1.7',
            fontWeight: 'bold',
          }}
        >
          Não é a mesma coisa.
        </p>
      </ASCIIBox>

      <div
        style={{
          marginTop: 'var(--spacing-lg)',
          fontSize: '13px',
          color: 'var(--text-secondary)',
        }}
      >
        Precisa orçar uma obra completa?{' '}
        <Link href="/pt/estimate/">
          [CRIAR UM ORÇAMENTO]
        </Link>
      </div>
    </div>
  )
}
