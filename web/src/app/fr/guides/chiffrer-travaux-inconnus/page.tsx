import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'Chiffrer des travaux inconnus 2026 // lowriskquotes',
  description:
    'Comment les artisans chiffrent des travaux qu\'ils n\'ont jamais réalisés. Stratégies pour des travaux inconnus, tarifs justes et évaluation des risques.',
  alternates: { canonical: '/fr/guides/chiffrer-travaux-inconnus/' },
}

export default function ChiffrerTravauxInconnusPage() {
  return (
    <div className="guide">
      <h1>chiffrer des travaux inconnus : comment procéder</h1>

      <p>
        Un jour, le téléphone sonne : un client veut quelque chose que vous n&apos;avez
        jamais fait. Peut-être un matériau que vous ne connaissez pas. Ou une technique
        que vous n&apos;avez vue qu&apos;en photo. Refuser est une option — mais alors
        votre entreprise ne grandit pas. Chiffrer trop bas est l&apos;autre piège.
        Comment trouver le bon prix pour quelque chose que vous n&apos;avez jamais chiffré ?
      </p>

      <h2>étape par étape vers le devis</h2>

      <ASCIIBox title="Chiffrage de travaux inconnus">
        <table className="guide__table">
          <thead>
            <tr>
              <th>Étape</th>
              <th>Action</th>
              <th>Niveau de risque</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1. Recherche</td>
              <td>Fiches techniques fabricant, forums pro, demander aux confrères</td>
              <td className="guide__highlight">—</td>
              <td>Investissez 1 à 2 heures avant de chiffrer</td>
            </tr>
            <tr>
              <td>2. Découpage</td>
              <td>Séparer les postes connus des postes inconnus</td>
              <td className="guide__highlight">—</td>
              <td>Qu&apos;est-ce que vous maîtrisez ? Qu&apos;est-ce qui est nouveau ?</td>
            </tr>
            <tr>
              <td>3. Postes connus</td>
              <td>Chiffrer normalement</td>
              <td className="guide__highlight">Faible - Moyen</td>
              <td>Ici vous êtes en terrain connu</td>
            </tr>
            <tr>
              <td>4. Postes inconnus</td>
              <td>Meilleure estimation + risque Élevé ou Estimation hasardeuse</td>
              <td className="guide__highlight">Élevé</td>
              <td>Soyez honnête — vous ne savez pas exactement</td>
            </tr>
            <tr>
              <td>5. Temps d&apos;apprentissage</td>
              <td>Prévoir du temps supplémentaire pour la prise en main</td>
              <td className="guide__highlight">Élevé</td>
              <td>La première fois, comptez 30 à 50 % de temps en plus</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <h2>les erreurs les plus fréquentes</h2>

      <ul>
        <li>
          <strong>Chiffrer comme un travail connu.</strong> Si vous n&apos;avez jamais
          poncé du béton ciré, vous ne pouvez pas estimer le temps comme pour du carrelage.
          Admettez que vous ne connaissez pas le travail — et chiffrez en conséquence
          avec un niveau Élevé.
        </li>
        <li>
          <strong>Casser les prix pour décrocher le chantier.</strong> Le premier chantier
          avec un nouveau matériau est toujours un projet d&apos;apprentissage. Celui qui
          propose au tarif normal perd de l&apos;argent. Intégrez le temps de prise en main.
        </li>
        <li>
          <strong>Pas d&apos;échantillon.</strong> Pour des matériaux ou techniques inconnus,
          réalisez un échantillon avant de chiffrer. Ça prend une demi-journée — mais ça
          économise des milliers d&apos;euros en reprise.
        </li>
        <li>
          <strong>Ne pas se couvrir.</strong> Pour des travaux totalement inconnus, proposez
          en régie ou avec un budget ouvert. Un forfait sur un travail qu&apos;on ne connaît
          pas, c&apos;est un pari.
        </li>
      </ul>

      <h2>choisir le bon niveau de risque</h2>

      <p>
        Pour des travaux inconnus, utilisez Élevé ou Estimation hasardeuse. Ce n&apos;est
        pas une faiblesse — c&apos;est de l&apos;honnêteté. Un client qui reçoit un devis
        transparent avec des incertitudes clairement identifiées vous fait davantage
        confiance qu&apos;une entreprise qui chiffre tout au forfait et présente ensuite
        des avenants.
      </p>

      <div className="guide__cta">
        <Link href="/fr/estimate/">[ CHIFFRER VOTRE CHANTIER ]</Link>
      </div>
    </div>
  )
}
