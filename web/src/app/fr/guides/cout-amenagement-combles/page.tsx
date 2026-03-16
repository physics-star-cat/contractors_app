import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'Coût aménagement combles France 2026 // lowriskquotes',
  description:
    'Coûts réalistes d\'aménagement de combles en France. Ventilation poste par poste avec niveaux de risque pour artisans.',
  alternates: { canonical: '/fr/guides/cout-amenagement-combles/' },
}

export default function CoutAmenagementComblesPage() {
  return (
    <div className="guide">
      <h1>coût d&apos;aménagement de combles : ce que les artisans doivent vraiment savoir</h1>

      <p>
        Aménager des combles, c&apos;est créer de la surface habitable sans acheter de terrain.
        C&apos;est un marché porteur pour les artisans. Mais la kalkulation a ses pièges :
        renforcement de charpente, isolation aux normes RE2020, sécurité incendie et hauteurs
        sous plafond insuffisantes transforment un projet apparemment simple en chantier
        délicat. Celui qui chiffre au forfait perd de l&apos;argent.
      </p>
      <p>
        Cette page détaille les vrais coûts d&apos;aménagement de combles en 2026 et montre
        où se situe le risque sur chaque poste.
      </p>

      <h2>ventilation typique des coûts</h2>

      <p>
        Voici les coûts pour un aménagement de combles milieu de gamme (environ 30 à 50 m²
        de surface utile). Des lucarnes ou une salle de bain supplémentaire augmentent
        sensiblement les montants.
      </p>

      <ASCIIBox title="Ventilation des coûts combles">
        <table className="guide__table">
          <thead>
            <tr>
              <th>Poste</th>
              <th>Fourchette de prix</th>
              <th>Niveau de risque</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Diagnostic &amp; renforcement charpente</td>
              <td>2 000 € - 8 000 €</td>
              <td className="guide__highlight">Élevé</td>
              <td>État des bois souvent visible seulement après dépose</td>
            </tr>
            <tr>
              <td>Isolation (rampants + pignons)</td>
              <td>4 000 € - 9 000 €</td>
              <td className="guide__highlight">Faible</td>
              <td>Exigences RE2020 — R ≥ 6 m².K/W en rampants</td>
            </tr>
            <tr>
              <td>Fenêtres de toit / lucarnes</td>
              <td>2 000 € - 14 000 €</td>
              <td className="guide__highlight">Moyen - Élevé</td>
              <td>Velux = Moyen. Lucarne = Élevé (structure + permis).</td>
            </tr>
            <tr>
              <td>Plâtrerie &amp; doublage</td>
              <td>3 000 € - 6 000 €</td>
              <td className="guide__highlight">Faible</td>
              <td>Travail standard — les rampants demandent plus de découpes</td>
            </tr>
            <tr>
              <td>Plancher</td>
              <td>2 500 € - 5 000 €</td>
              <td className="guide__highlight">Moyen</td>
              <td>Isolation phonique et portance du solivage à vérifier</td>
            </tr>
            <tr>
              <td>Électricité &amp; chauffage</td>
              <td>3 000 € - 6 000 €</td>
              <td className="guide__highlight">Moyen</td>
              <td>Passage des gaines par les combles existants si possible</td>
            </tr>
            <tr>
              <td>Escalier</td>
              <td>2 000 € - 6 000 €</td>
              <td className="guide__highlight">Moyen</td>
              <td>Trémie dans plancher existant = vérification structurelle</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        Fourchette totale pour un aménagement de combles : <span className="guide__highlight">18 500 € -
        54 000 €</span>. La plus grande inconnue est l&apos;état de la charpente existante et
        la présence éventuelle de lucarnes.
      </p>

      <h2>où les combles dérapent</h2>

      <p>
        Les pièges les plus fréquents :
      </p>
      <ul>
        <li>
          <strong>Charpente.</strong> Capricornes, vrillettes, pannes sous-dimensionnées.
          On ne le découvre souvent qu&apos;après avoir enlevé l&apos;ancien habillage.
          Chiffrez ce poste toujours en Élevé.
        </li>
        <li>
          <strong>Sécurité incendie.</strong> Désenfumage, issues de secours, détecteurs —
          les exigences augmentent dès qu&apos;on transforme des combles en habitation.
          Vérifiez avec la mairie avant de chiffrer.
        </li>
        <li>
          <strong>Hauteur sous plafond.</strong> Ce qui ressemble à 50 m² sur plan se réduit
          à 35 m² de surface utile à cause des rampants. Communiquez-le clairement au client
          dès le départ.
        </li>
      </ul>

      <h2>chiffrer les combles intelligemment</h2>

      <p>
        Évaluez chaque poste honnêtement. L&apos;isolation est Faible — travail standard
        avec des matériaux connus. La charpente est Élevée tant qu&apos;elle n&apos;a pas
        été inspectée. La lucarne est Élevée à cause de la structure et du permis. Passez
        ces valeurs dans une simulation et votre devis couvrira les vrais risques.
      </p>

      <div className="guide__cta">
        <Link href="/fr/estimate/">[ CHIFFRER VOS COMBLES ]</Link>
      </div>
    </div>
  )
}
