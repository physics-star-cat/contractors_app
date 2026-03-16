import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'Coût rénovation salle de bain France 2026 // lowriskquotes',
  description:
    'Coûts réalistes de rénovation de salle de bain pour artisans en France. Ventilation poste par poste avec niveaux de risque pour chiffrer vos chantiers sans perdre d\'argent.',
  alternates: { canonical: '/fr/guides/cout-renovation-salle-de-bain/' },
}

export default function CoutRenovationSalleDeBainPage() {
  return (
    <div className="guide">
      <h1>coût de rénovation d&apos;une salle de bain : ce que les artisans doivent vraiment savoir</h1>

      <p>
        La salle de bain est le pain quotidien de beaucoup d&apos;artisans. C&apos;est aussi là que
        beaucoup d&apos;argent est laissé sur la table. Le cahier des charges semble simple — dépose,
        replomberie, carrelage, pose. Mais les coûts cachés s&apos;accumulent vite : solives pourries
        derrière le tablier de baignoire, amiante dans l&apos;ancien mortier-colle, un client qui
        change de carrelage trois semaines après le début.
      </p>
      <p>
        Cette page détaille les vrais coûts de rénovation de salle de bain en 2026 et montre où
        se situe le risque sur chaque poste.
      </p>

      <h2>ventilation typique des coûts</h2>

      <p>
        Voici les coûts de rénovation de salle de bain milieu de gamme pour une salle de bain
        standard en France (environ 5 à 6 m²). Les chantiers économiques et haut de gamme se
        situeront de part et d&apos;autre de ces montants.
      </p>

      <ASCIIBox title="Ventilation des coûts salle de bain">
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
              <td>Dépose et évacuation</td>
              <td>500 € - 1 000 €</td>
              <td className="guide__highlight">Moyen</td>
              <td>Dépend de ce que vous trouvez derrière les murs</td>
            </tr>
            <tr>
              <td>Plomberie</td>
              <td>1 000 € - 1 800 €</td>
              <td className="guide__highlight">Moyen</td>
              <td>Déplacer les évacuations = plus cher. À l&apos;identique = moins.</td>
            </tr>
            <tr>
              <td>Électricité</td>
              <td>500 € - 1 000 €</td>
              <td className="guide__highlight">Faible</td>
              <td>Volumes standards NF C 15-100. Plancher chauffant ajoute 400 €+.</td>
            </tr>
            <tr>
              <td>Carrelage murs et sol</td>
              <td>1 500 € - 3 000 €</td>
              <td className="guide__highlight">Faible - Moyen</td>
              <td>Grand format = plus de coupes et de chutes</td>
            </tr>
            <tr>
              <td>Sanitaires</td>
              <td>800 € - 2 500 €</td>
              <td className="guide__highlight">Moyen</td>
              <td>Fournitures client = risque de retard plus élevé</td>
            </tr>
            <tr>
              <td>Paroi de douche / écran</td>
              <td>400 € - 2 200 €</td>
              <td className="guide__highlight">Élevé</td>
              <td>Standard du commerce = Faible. Verre sur mesure = Élevé.</td>
            </tr>
            <tr>
              <td>Plâtrerie / doublage</td>
              <td>400 € - 800 €</td>
              <td className="guide__highlight">Faible</td>
              <td>Simple sauf si les murs sont en mauvais état</td>
            </tr>
            <tr>
              <td>Benne / évacuation des gravats</td>
              <td>300 € - 500 €</td>
              <td className="guide__highlight">Certain</td>
              <td>Prenez un prix fixe à l&apos;avance</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        Fourchette totale pour une salle de bain milieu de gamme : <span className="guide__highlight">5 400 € -
        12 800 €</span>. Cet écart important est principalement dû aux équipements choisis par le
        client et à ce qui se cache derrière l&apos;ancien carrelage.
      </p>

      <h2>où les salles de bain dérapent</h2>

      <p>
        Les plus gros dépassements de budget sur les salles de bain viennent de trois sources :
      </p>
      <ul>
        <li>
          <strong>Dégâts cachés.</strong> Solives pourries, humidité dans les murs, anciennes
          canalisations en plomb à remplacer. Vous ne le saurez qu&apos;en déposant. S&apos;il y a la
          moindre chance de problème structurel, marquez ces postes en incertitude Élevée.
        </li>
        <li>
          <strong>Changements du client.</strong> Ils ont vu quelque chose sur Instagram. Le
          carrelage qu&apos;ils voulaient est en rupture. Ils veulent déplacer les WC sur l&apos;autre
          mur. Chaque changement en cours de chantier coûte du temps et de l&apos;argent. Chiffrez
          vos sanitaires au minimum en incertitude Moyenne sauf si le client a déjà tout acheté.
        </li>
        <li>
          <strong>Éléments sur mesure.</strong> Parois de douche sur mesure, meubles vasque
          non standard, carrelage importé avec six semaines de délai. C&apos;est du territoire
          Élevé ou Estimation hasardeuse. Si c&apos;est fait sur mesure, partez du principe que
          quelque chose ne conviendra pas du premier coup.
        </li>
      </ul>

      <h2>chiffrer les salles de bain intelligemment</h2>

      <p>
        Au lieu d&apos;ajouter une contingence forfaitaire de 10% à votre devis de salle de bain,
        évaluez chaque poste honnêtement. La benne est Certaine. Votre électricien habituel est
        Faible. Cette paroi de douche sur mesure chez un nouveau verrier est Élevée. Passez tout
        cela dans une simulation et vous obtenez un devis qui couvre les risques réels — pas un
        pourcentage au doigt mouillé.
      </p>

      <div className="guide__cta">
        <Link href="/fr/estimate/">[ CHIFFRER VOTRE SALLE DE BAIN ]</Link>
      </div>
    </div>
  )
}
