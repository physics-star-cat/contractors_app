import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'Combien de marge de sécurité prévoir ? 2026 // lowriskquotes',
  description:
    'Combien de marge de sécurité les artisans doivent-ils prévoir ? Pourquoi 10 % forfaitaires ne suffisent pas et comment une évaluation poste par poste fonctionne mieux.',
  alternates: { canonical: '/fr/guides/combien-de-marge-securite/' },
}

export default function CombienDeMargeSecuritePage() {
  return (
    <div className="guide">
      <h1>combien de marge de sécurité prévoir ? pourquoi 10 % forfaitaires ne suffisent pas</h1>

      <p>
        Chaque artisan connaît la situation : on ajoute un pourcentage forfaitaire sur le
        devis et on espère que ça suffira. 10 % est le classique. Certains mettent 15 %.
        Mais d&apos;où viennent ces chiffres ? Le plus souvent, de l&apos;intuition. Et
        l&apos;intuition n&apos;est pas un modèle économique.
      </p>
      <p>
        Cette page explique pourquoi les marges forfaitaires ne fonctionnent pas et
        comment chiffrer autrement.
      </p>

      <h2>le problème des marges forfaitaires</h2>

      <p>
        Une marge forfaitaire traite tous les postes de la même façon. Mais le risque
        n&apos;est pas réparti uniformément. Voici un exemple :
      </p>

      <ASCIIBox title="Pourquoi 10 % ne marche pas">
        <table className="guide__table">
          <thead>
            <tr>
              <th>Poste</th>
              <th>Coût</th>
              <th>Risque réel</th>
              <th>Marge nécessaire</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Location de benne</td>
              <td>400 €</td>
              <td className="guide__highlight">Certain</td>
              <td>0 €</td>
            </tr>
            <tr>
              <td>Carrelage (carreaux connus)</td>
              <td>2 000 €</td>
              <td className="guide__highlight">Faible</td>
              <td>100 € - 200 €</td>
            </tr>
            <tr>
              <td>Plomberie (déplacement réseaux)</td>
              <td>1 800 €</td>
              <td className="guide__highlight">Moyen</td>
              <td>200 € - 500 €</td>
            </tr>
            <tr>
              <td>Dépose dans l&apos;ancien (état inconnu)</td>
              <td>1 000 €</td>
              <td className="guide__highlight">Élevé</td>
              <td>500 € - 1 500 €</td>
            </tr>
            <tr>
              <td>Paroi de douche sur mesure</td>
              <td>2 000 €</td>
              <td className="guide__highlight">Élevé</td>
              <td>400 € - 1 000 €</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        Coût total : 7 200 €. Une marge forfaitaire de 10 % donnerait 720 €. Mais le risque
        réel se situe entre <span className="guide__highlight">1 200 € et 3 200 €</span>.
        Avec 10 %, vous ne couvrez même pas la moitié.
      </p>

      <h2>pourquoi les artisans prennent des marges trop faibles</h2>

      <ul>
        <li>
          <strong>Peur de perdre le chantier.</strong> Celui qui met trop de marge ne décroche
          pas le contrat. Mais une marge transparente, basée sur des risques réels, se justifie
          mieux auprès du client qu&apos;un pourcentage arbitraire.
        </li>
        <li>
          <strong>L&apos;expérience trompe.</strong> Le dernier chantier s&apos;est bien passé,
          donc le prochain ira aussi. Mais votre dernier chantier avait peut-être un bon
          support. Le prochain, non.
        </li>
        <li>
          <strong>Manque de temps.</strong> Une évaluation poste par poste semble longue.
          Ce n&apos;est pas le cas — si vous utilisez le bon outil.
        </li>
      </ul>

      <h2>mieux : une évaluation poste par poste</h2>

      <p>
        Au lieu d&apos;un pourcentage forfaitaire, évaluez chaque poste individuellement :
        Certain, Faible, Moyen, Élevé ou Estimation hasardeuse. La marge de sécurité qui en
        résulte reflète les vraies incertitudes — ni plus, ni moins. Le client voit un devis
        transparent, et vous protégez votre marge.
      </p>
      <p>
        Le résultat : vous décrochez des chantiers parce que votre devis est compréhensible.
        Et vous ne perdez pas d&apos;argent parce que votre marge repose sur des données
        réelles.
      </p>

      <div className="guide__cta">
        <Link href="/fr/estimate/">[ CALCULER VOTRE MARGE ]</Link>
      </div>
    </div>
  )
}
