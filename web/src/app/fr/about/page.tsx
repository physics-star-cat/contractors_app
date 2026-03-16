import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'

export const metadata: Metadata = {
  title: 'à propos // lowriskquotes',
  description: 'Comment LowRiskQuotes utilise la simulation Monte Carlo pour aider les artisans à créer des devis plus sûrs.',
  alternates: { canonical: '/fr/about/' },
}

export default function FrAboutPage() {
  return (
    <div>
      <h1 style={{ color: 'var(--accent-amber)', fontSize: '20px', marginBottom: '24px' }}>
        à propos de lowriskquotes
      </h1>

      <ASCIIBox title="Qu'est-ce que c'est">
        <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '12px' }}>
          LowRiskQuotes est un outil gratuit d&apos;estimation des coûts pour les artisans, les
          entrepreneurs du bâtiment et toute personne qui doit chiffrer un chantier sans
          sous-évaluer le prix.
        </p>
        <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
          Au lieu d&apos;ajouter un pourcentage forfaitaire de contingence à votre devis, LowRiskQuotes
          lance une simulation Monte Carlo — des milliers de scénarios de coûts randomisés basés
          sur les niveaux d&apos;incertitude que vous attribuez à chaque poste, à la durée du chantier
          et à vos déplacements. Le résultat est une distribution de probabilité montrant ce que
          votre chantier est susceptible de coûter réellement.
        </p>
      </ASCIIBox>

      <ASCIIBox title="Comment fonctionne Monte Carlo">
        <div style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
          <p style={{ marginBottom: '12px' }}>
            Pour chaque poste de votre devis, vous indiquez votre niveau d&apos;incertitude sur le
            coût (de &quot;certain&quot; à +/-2% jusqu&apos;à &quot;estimation hasardeuse&quot; à +/-40%). Le même
            principe s&apos;applique à la durée du chantier et au temps de déplacement.
          </p>
          <p style={{ marginBottom: '12px' }}>
            Le moteur lance ensuite 1 000 à 10 000 versions simulées de votre projet, chacune
            avec des coûts randomisés tirés de vos plages d&apos;incertitude. Les simulations sont
            biaisées vers les dépassements — car dans la réalité, les projets dépassent le budget
            plus souvent qu&apos;ils ne coûtent moins.
          </p>
          <p>
            Le résultat vous indique : au 80e percentile (notre niveau de devis recommandé),
            il y a 80% de chances que vos coûts réels soient inférieurs à ce montant.
            C&apos;est une base bien plus sûre pour un devis qu&apos;une intuition majorée de 10%.
          </p>
        </div>
      </ASCIIBox>

      <ASCIIBox title="Vos données">
        <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
          Tout fonctionne dans votre navigateur. Vos devis sont enregistrés uniquement sur votre
          appareil (localStorage). Aucune donnée n&apos;est envoyée à un serveur. Aucun compte requis.
          Aucun suivi au-delà des statistiques de base.
        </p>
      </ASCIIBox>

      <div style={{ marginTop: '24px', fontSize: '13px' }}>
        <Link href="/fr/guides/comment-faire-un-devis/" style={{ marginRight: '16px' }}>
          [LIRE LE GUIDE]
        </Link>
        <Link href="/fr/estimate/">
          [COMMENCER]
        </Link>
      </div>
    </div>
  )
}
