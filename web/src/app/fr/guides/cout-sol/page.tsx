import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'Prix revêtement de sol France 2026 // lowriskquotes',
  description:
    'Prix réalistes de pose de sol au m² en France. Parquet, carrelage, vinyle, béton ciré — détaillés avec évaluations de risque pour les artisans.',
  alternates: { canonical: '/fr/guides/cout-sol/' },
}

export default function CoutSolPage() {
  return (
    <div className="guide">
      <h1>Coût sol : ce que les artisans doivent vraiment chiffrer au m²</h1>

      <p>
        La pose de revêtements de sol est un chantier classique pour de nombreux artisans. En
        apparence, c'est prévisible : mesurer la surface, commander le matériau, poser. Mais la
        réalité rattrape vite — ragréage à refaire, ancien carrelage collé impossible à déposer,
        client qui change d'avis sur le calepinage en plein chantier. Tout cela grignote la marge.
      </p>
      <p>
        Cette page vous donne les coûts réels de revêtement de sol en France en 2026 — au m²,
        par type de sol, avec des évaluations de risque honnêtes.
      </p>

      <h2>coûts types au mètre carré</h2>

      <p>
        Les prix ci-dessous comprennent la fourniture et la pose. La préparation du support et
        les plinthes sont indiquées séparément.
      </p>

      <ASCIIBox title="Coûts de revêtement de sol au m²">
        <table className="guide__table">
          <thead>
            <tr>
              <th>Type de sol</th>
              <th>Coût / m²</th>
              <th>Niveau de risque</th>
              <th>Remarques</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Stratifié</td>
              <td>€20 - €45</td>
              <td className="guide__highlight">Faible</td>
              <td>Pose clipsée rapide. Matériau le plus économique.</td>
            </tr>
            <tr>
              <td>Vinyle / LVT</td>
              <td>€25 - €55</td>
              <td className="guide__highlight">Faible</td>
              <td>Clipsé ou collé. Adapté aux pièces humides. Support très plan requis.</td>
            </tr>
            <tr>
              <td>Parquet contrecollé</td>
              <td>€45 - €85</td>
              <td className="guide__highlight">Faible - Moyen</td>
              <td>Pose flottante. Prévoir le temps d'acclimatation du bois.</td>
            </tr>
            <tr>
              <td>Parquet massif</td>
              <td>€75 - €150</td>
              <td className="guide__highlight">Moyen - Élevé</td>
              <td>Pose collée. Ponçage et vitrification = journées supplémentaires.</td>
            </tr>
            <tr>
              <td>Carrelage (grès cérame)</td>
              <td>€40 - €95</td>
              <td className="guide__highlight">Moyen</td>
              <td>Grand format = plus de chutes. Pose diagonale plus coûteuse.</td>
            </tr>
            <tr>
              <td>Béton ciré</td>
              <td>€80 - €180</td>
              <td className="guide__highlight">Élevé</td>
              <td>Application en plusieurs couches. Très sensible aux conditions de chantier.</td>
            </tr>
            <tr>
              <td>Pierre naturelle</td>
              <td>€80 - €200</td>
              <td className="guide__highlight">Élevé</td>
              <td>Chaque dalle unique. Chutes importantes, traitement hydrofuge nécessaire.</td>
            </tr>
            <tr>
              <td>Ragréage / préparation support</td>
              <td>€8 - €25</td>
              <td className="guide__highlight">Moyen</td>
              <td>Enduit de lissage, primaire. État réel visible après dépose de l'ancien sol.</td>
            </tr>
            <tr>
              <td>Plinthes</td>
              <td>€5 - €15 / ml</td>
              <td className="guide__highlight">Faible</td>
              <td>Fourniture et pose. Coupes d'onglet plus longues dans les pièces complexes.</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        Exemple : 50 m² de parquet contrecollé dans un séjour reviennent à <span className="guide__highlight">€2.250 -
        €4.250</span> pour la fourniture et la pose, plus €400 - €1.250 pour le ragréage et les
        plinthes.
      </p>

      <h2>où les chantiers de sol dérapent</h2>

      <p>
        Les sources de surcoûts les plus fréquentes :
      </p>
      <ul>
        <li>
          <strong>Surprises sous l'ancien revêtement.</strong> Colle noire à l'amiante sous le
          lino, chape fissurée, humidité résiduelle trop élevée — tout cela n'apparaît qu'une
          fois la dépose faite. Chiffrez toujours la préparation du support en Moyen minimum,
          sauf si vous connaissez déjà l'état du sol.
        </li>
        <li>
          <strong>Changement de calepinage.</strong> Le client veut finalement une pose en
          chevrons au lieu d'une pose droite. Cela double les chutes et augmente le temps de pose
          de 30 à 50 %. Faites valider le calepinage par écrit avant de commencer.
        </li>
        <li>
          <strong>Portes et seuils.</strong> Recouper les huisseries, adapter les barres de
          seuil aux différences de niveau, gérer les joints de dilatation dans les grands
          espaces ouverts — des détails qui s'accumulent quand il y a quinze portes.
        </li>
      </ul>

      <h2>mieux chiffrer vos chantiers de sol</h2>

      <p>
        Ne chiffrez pas toute la surface d'un bloc. Évaluez chaque pièce individuellement. La
        chambre avec un support connu est Faible. La cuisine avec un ancien carrelage collé est
        Moyen. Le séjour avec du parquet massif en chevrons est Élevé. Saisissez ces valeurs dans
        une simulation de risque — vous obtiendrez un devis qui reflète vos coûts réels, pas une
        estimation optimiste.
      </p>

      <div className="guide__cta">
        <Link href="/fr/estimate/">[ CHIFFRER MON PROJET DE SOL ]</Link>
      </div>
    </div>
  )
}
