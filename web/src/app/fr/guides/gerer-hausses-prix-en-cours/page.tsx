import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'Gérer les hausses de prix en cours de chantier 2026 // lowriskquotes',
  description:
    'Comment les artisans gèrent les hausses de prix de matériaux et de sous-traitants pendant un chantier. Cadre juridique et stratégies pratiques.',
  alternates: { canonical: '/fr/guides/gerer-hausses-prix-en-cours/' },
}

export default function GererHaussesPrixEnCoursPage() {
  return (
    <div className="guide">
      <h1>gérer les hausses de prix en cours de chantier : comment faire</h1>

      <p>
        Vous avez envoyé un devis, le client a signé — et les prix des matériaux augmentent.
        Ou le sous-traitant revoit ses tarifs à la hausse. Ou les délais de livraison doublent
        et vous devez acheter plus cher ailleurs. Ce n&apos;est pas un cas isolé — depuis 2021,
        les hausses de prix font partie du quotidien sur les chantiers français.
      </p>
      <p>
        Cette page montre comment vous protéger et gérer professionnellement les hausses de prix.
      </p>

      <h2>quand pouvez-vous répercuter les hausses ?</h2>

      <ASCIIBox title="Cadre juridique">
        <table className="guide__table">
          <thead>
            <tr>
              <th>Situation</th>
              <th>Répercussion possible ?</th>
              <th>Base juridique</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Marché public avec clause de révision</td>
              <td className="guide__highlight">Oui</td>
              <td>Clause contractuelle (CCAG)</td>
              <td>Clause standard dans les marchés publics</td>
            </tr>
            <tr>
              <td>Marché privé sans clause, hausse &gt; 20 %</td>
              <td className="guide__highlight">Possible</td>
              <td>Art. 1195 Code civil (imprévision)</td>
              <td>Analyse au cas par cas — conseil juridique recommandé</td>
            </tr>
            <tr>
              <td>Marché privé sans clause, hausse &lt; 20 %</td>
              <td className="guide__highlight">Difficile</td>
              <td>Risque normal de l&apos;entreprise</td>
              <td>Doit être absorbé dans le chiffrage</td>
            </tr>
            <tr>
              <td>Devis non encore accepté</td>
              <td className="guide__highlight">Oui</td>
              <td>Actualiser le devis</td>
              <td>Validité du devis courte (4 semaines max)</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <h2>stratégies pratiques</h2>

      <ul>
        <li>
          <strong>Validité du devis courte.</strong> Limitez la validité de vos devis à
          quatre semaines maximum. Après, vous pouvez actualiser. Pour les matériaux
          volatils (acier, bois, cuivre), deux semaines seulement.
        </li>
        <li>
          <strong>Clause de révision.</strong> Intégrez dans vos CGV ou votre contrat une
          clause permettant l&apos;ajustement des prix en cas de hausse des matériaux
          au-delà d&apos;un certain seuil (par exemple 5 %). Faites-la rédiger par un avocat.
        </li>
        <li>
          <strong>Commander les matériaux tôt.</strong> Si vous avez le chantier et que les
          prix risquent de monter, commandez immédiatement. Stocker coûte moins cher qu&apos;une
          hausse de prix.
        </li>
        <li>
          <strong>Communiquer en transparence.</strong> Quand les prix augmentent, informez
          le client immédiatement avec un justificatif (facture fournisseur, tarif catalogue).
          Les clients acceptent mieux les hausses quand elles sont documentées.
        </li>
      </ul>

      <h2>intégrer le risque prix dans le chiffrage</h2>

      <p>
        La meilleure stratégie est d&apos;intégrer le risque de prix dès le chiffrage.
        Les matériaux à prix stables (plaques de plâtre, carrelage standard) sont Faibles.
        Les matériaux à prix volatils (cuivre, bois, acier) sont Moyens à Élevés. En
        intégrant ces niveaux de risque dans votre chiffrage, vous disposez d&apos;une
        marge qui absorbe les fluctuations normales — sans surprendre le client.
      </p>

      <div className="guide__cta">
        <Link href="/fr/estimate/">[ CHIFFRER LE RISQUE PRIX ]</Link>
      </div>
    </div>
  )
}
