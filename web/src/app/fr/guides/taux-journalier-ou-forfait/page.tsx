import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'Taux journalier ou forfait ? 2026 // lowriskquotes',
  description:
    'Quand les artisans doivent-ils travailler en régie et quand un forfait est-il préférable ? Avantages et inconvénients des deux modèles avec exemples concrets.',
  alternates: { canonical: '/fr/guides/taux-journalier-ou-forfait/' },
}

export default function TauxJournalierOuForfaitPage() {
  return (
    <div className="guide">
      <h1>taux journalier ou forfait ? quand choisir quel modèle</h1>

      <p>
        La question revient à chaque chantier : forfait ou en régie ? Les deux modèles
        ont leurs avantages et leurs inconvénients — et le bon choix dépend de la capacité
        à estimer le volume de travail. Celui qui choisit mal perd de l&apos;argent (forfait
        sur un périmètre flou) ou perd le chantier (régie chez un client sensible au prix).
      </p>

      <h2>quand choisir quel modèle</h2>

      <ASCIIBox title="Régie vs. Forfait">
        <table className="guide__table">
          <thead>
            <tr>
              <th>Critère</th>
              <th>Régie / taux journalier</th>
              <th>Forfait</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Périmètre bien défini ?</td>
              <td>Non — périmètre flou ou évolutif</td>
              <td>Oui — CCTP clair</td>
            </tr>
            <tr>
              <td>État du support connu ?</td>
              <td>Non — surprises possibles</td>
              <td>Oui — état documenté</td>
            </tr>
            <tr>
              <td>Type de client</td>
              <td>Confiant, privilégie la qualité</td>
              <td>Sensible au prix, veut de la certitude</td>
            </tr>
            <tr>
              <td>Votre risque</td>
              <td className="guide__highlight">Faible</td>
              <td className="guide__highlight">Élevé</td>
            </tr>
            <tr>
              <td>Risque client</td>
              <td className="guide__highlight">Élevé</td>
              <td className="guide__highlight">Faible</td>
            </tr>
            <tr>
              <td>Chantiers typiques</td>
              <td>Rénovation, ancien, dépannage</td>
              <td>Neuf, production en série, chantiers répétitifs</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <h2>taux journaliers courants en 2026</h2>

      <p>
        Taux journaliers moyens pour artisans en France (journée de 8 heures, déplacement inclus) :
      </p>
      <ul>
        <li>Peintre / plaquiste : <span className="guide__highlight">320 € - 450 €</span></li>
        <li>Électricien : <span className="guide__highlight">380 € - 520 €</span></li>
        <li>Plombier / chauffagiste : <span className="guide__highlight">400 € - 550 €</span></li>
        <li>Carreleur : <span className="guide__highlight">350 € - 480 €</span></li>
        <li>Maçon : <span className="guide__highlight">380 € - 500 €</span></li>
      </ul>

      <h2>le compromis : forfait avec niveaux de risque</h2>

      <p>
        En pratique, la plupart des clients veulent un forfait. Mais vous ne pouvez pas tout
        chiffrer avec la même certitude. La solution : chiffrez au forfait, mais évaluez
        chaque poste selon son risque. Les postes certains n&apos;ont pas de marge
        supplémentaire. Les postes à risque élevé ont une marge adaptée. Vous obtenez ainsi
        un forfait qui protège votre marge.
      </p>
      <p>
        Et si un poste est vraiment impossible à chiffrer au forfait — par exemple la dépose
        dans de l&apos;ancien — proposez ce seul poste en régie. Le reste reste au forfait.
        C&apos;est équitable pour les deux parties.
      </p>

      <div className="guide__cta">
        <Link href="/fr/estimate/">[ CHIFFRER VOTRE CHANTIER ]</Link>
      </div>
    </div>
  )
}
