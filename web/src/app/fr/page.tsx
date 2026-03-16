import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIILogo from '@/components/layout/ASCIILogo'
import ASCIIBox from '@/components/ui/ASCIIBox'
import RecentEstimates from '@/components/home/RecentEstimates'
import '../page.css'

export const metadata: Metadata = {
  title: 'lowriskquotes // estimation des coûts pour artisans',
  description: 'Projections de coûts Monte Carlo pour artisans et entrepreneurs. Arrêtez de deviner vos devis — simulez des milliers de scénarios pour trouver le juste prix.',
  alternates: { canonical: '/fr/' },
}

const SAMPLE_OUTPUT = `┌────────────────┬──────────┐
│ Conservateur    │ 9 890 €  │
│ Recommandé      │ 11 840 € │
│ Prudent         │ 13 740 € │
└────────────────┴──────────┘

VENTILATION DES RISQUES
Matériaux      [██████░░░░░░░░░░░░░░] 30%
Durée          [█████████░░░░░░░░░░░] 45%
Déplacements   [███░░░░░░░░░░░░░░░░░] 15%`

export default function FrHomePage() {
  return (
    <div className="home">
      <section className="home__hero">
        <ASCIILogo />
        <p className="home__tagline">arrêtez de deviner // commencez à simuler</p>
        <p className="home__subtitle">projections de coûts Monte Carlo pour artisans</p>
      </section>

      <section className="home__how-it-works">
        <ASCIIBox title="Comment ça marche">
          <div className="home__steps">
            <div className="home__step"><span className="home__step-num">[1]</span> Entrez vos postes, durée et déplacements avec les niveaux d&apos;incertitude</div>
            <div className="home__step"><span className="home__step-num">[2]</span> La simulation Monte Carlo calcule 10 000 scénarios de coûts</div>
            <div className="home__step"><span className="home__step-num">[3]</span> Obtenez un devis statistiquement sûr — pas une estimation au doigt mouillé</div>
          </div>
        </ASCIIBox>
      </section>

      <section className="home__preview">
        <ASCIIBox title="Exemple de résultat">
          <pre className="home__sample">{SAMPLE_OUTPUT}</pre>
        </ASCIIBox>
      </section>

      <RecentEstimates />

      <section className="home__cta">
        <Link href="/fr/estimate/" className="home__cta-button">[CRÉER UN DEVIS]</Link>
      </section>

      <section className="home__seo">
        <p>
          LowRiskQuotes utilise la simulation Monte Carlo pour aider les artisans et entrepreneurs
          à créer des devis qui tiennent compte de l&apos;incertitude réelle. Au lieu d&apos;ajouter un
          pourcentage forfaitaire de contingence, simulez des milliers de scénarios de coûts pour
          trouver le prix auquel vous avez très peu de chances de perdre de l&apos;argent.
        </p>
        <p>
          Fonctionne hors ligne. Aucun compte requis. Vos données ne quittent jamais votre navigateur.
        </p>
      </section>
    </div>
  )
}
