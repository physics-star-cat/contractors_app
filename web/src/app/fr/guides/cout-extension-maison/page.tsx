import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'Coût extension maison France 2026 // lowriskquotes',
  description:
    'Coûts réalistes d\'une extension de maison en France. Ventilation poste par poste avec niveaux de risque pour chiffrer sans perdre d\'argent.',
  alternates: { canonical: '/fr/guides/cout-extension-maison/' },
}

export default function CoutExtensionMaisonPage() {
  return (
    <div className="guide">
      <h1>coût d&apos;une extension de maison : ce que les artisans doivent vraiment savoir</h1>

      <p>
        L&apos;extension de maison est l&apos;un des chantiers les plus rentables — mais aussi
        l&apos;un des plus risqués à chiffrer. Fondations, raccord toiture, permis de construire,
        jonction ancien-neuf : chaque poste peut faire exploser le budget si la kalkulation
        n&apos;est pas rigoureuse. Le client attend un résultat harmonieux entre l&apos;existant
        et la partie neuve, et c&apos;est précisément là que se concentrent les difficultés.
      </p>
      <p>
        Cette page détaille les vrais coûts d&apos;une extension en 2026 et montre où se situe
        le risque sur chaque poste.
      </p>

      <h2>ventilation typique des coûts</h2>

      <p>
        Voici les coûts pour une extension de plain-pied de gamme moyenne (environ 20 à 30 m²).
        Un étage supplémentaire, un sous-sol ou des finitions haut de gamme augmentent
        sensiblement les montants.
      </p>

      <ASCIIBox title="Ventilation des coûts extension">
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
              <td>Fondations &amp; dalle</td>
              <td>4 000 € - 10 000 €</td>
              <td className="guide__highlight">Élevé</td>
              <td>Étude de sol recommandée — surprises dans le terrain coûtent cher</td>
            </tr>
            <tr>
              <td>Maçonnerie / gros œuvre</td>
              <td>12 000 € - 25 000 €</td>
              <td className="guide__highlight">Moyen</td>
              <td>Prix des matériaux fluctuants — commander tôt</td>
            </tr>
            <tr>
              <td>Toiture &amp; raccord</td>
              <td>5 000 € - 12 000 €</td>
              <td className="guide__highlight">Élevé</td>
              <td>Le raccord à la toiture existante est le point le plus critique</td>
            </tr>
            <tr>
              <td>Menuiseries extérieures</td>
              <td>3 000 € - 8 000 €</td>
              <td className="guide__highlight">Moyen</td>
              <td>Sur mesure = plus cher. Standard = économique.</td>
            </tr>
            <tr>
              <td>Électricité &amp; plomberie</td>
              <td>3 000 € - 7 000 €</td>
              <td className="guide__highlight">Moyen</td>
              <td>Raccordement aux réseaux existants souvent plus long que prévu</td>
            </tr>
            <tr>
              <td>Second œuvre &amp; finitions</td>
              <td>4 000 € - 8 000 €</td>
              <td className="guide__highlight">Faible</td>
              <td>Bien planifiable une fois le gros œuvre terminé</td>
            </tr>
            <tr>
              <td>Permis de construire &amp; études</td>
              <td>2 000 € - 5 000 €</td>
              <td className="guide__highlight">Certain</td>
              <td>À régler avant tout — pas de permis, pas de chantier</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        Fourchette totale pour une extension de plain-pied : <span className="guide__highlight">33 000 € -
        75 000 €</span>. Les principaux facteurs de variation sont le sol, la toiture et le
        niveau de finition.
      </p>

      <h2>où les extensions dérapent</h2>

      <p>
        Les plus gros dépassements viennent de trois sources :
      </p>
      <ul>
        <li>
          <strong>Conditions de sol.</strong> Roche, nappe phréatique haute ou remblais
          peuvent doubler le coût des fondations. Une étude de sol coûte 500 € à 1 000 € —
          c&apos;est un investissement rentable.
        </li>
        <li>
          <strong>Permis de construire.</strong> Recul obligatoire, PLU, exigences
          architecturales — si le permis impose des modifications au projet, tous les
          postes bougent. Clarifiez le permis avant de chiffrer.
        </li>
        <li>
          <strong>Jonction ancien-neuf.</strong> Là où l&apos;ancien et le neuf se rejoignent,
          des ponts thermiques, des fissures de tassement et des infiltrations apparaissent.
          Chiffrez le raccord toiture toujours en Élevé.
        </li>
      </ul>

      <h2>chiffrer les extensions intelligemment</h2>

      <p>
        Au lieu d&apos;ajouter un forfait sur le total, évaluez chaque poste séparément.
        Le permis est Certain. Les finitions sont Faibles. Les fondations sur terrain
        inconnu sont Élevées. Passez ces valeurs dans une simulation et vous obtenez
        un devis qui reflète les vrais risques.
      </p>

      <div className="guide__cta">
        <Link href="/fr/estimate/">[ CHIFFRER VOTRE EXTENSION ]</Link>
      </div>
    </div>
  )
}
