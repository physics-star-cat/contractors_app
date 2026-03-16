import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'Coût plâtrage France 2026 // lowriskquotes',
  description:
    'Coûts réalistes de plâtrage en France. Enduit intérieur, ravalement, doublage — ventilation poste par poste avec niveaux de risque.',
  alternates: { canonical: '/fr/guides/cout-platrage/' },
}

export default function CoutPlatragePage() {
  return (
    <div className="guide">
      <h1>coût du plâtrage : ce que les artisans doivent vraiment savoir</h1>

      <p>
        Les travaux de plâtrerie et d&apos;enduit font partie du cœur de métier du second
        œuvre. Que ce soit en neuf ou en rénovation — enduit intérieur, ravalement de façade
        et enduit de réparation ont chacun leur structure de coûts et leurs risques propres.
        En rénovation, le support est souvent en moins bon état que prévu, et on ne s&apos;en
        rend compte qu&apos;une fois l&apos;ancien enduit piqué.
      </p>
      <p>
        Cette page détaille les vrais coûts de plâtrage en 2026 et montre où se situe
        le risque sur chaque poste.
      </p>

      <h2>ventilation typique des coûts</h2>

      <p>
        Voici les coûts au mètre carré pour différents types de travaux de plâtrage
        en gamme moyenne. Le coût total dépend fortement de la surface à traiter.
      </p>

      <ASCIIBox title="Ventilation des coûts plâtrage">
        <table className="guide__table">
          <thead>
            <tr>
              <th>Poste</th>
              <th>Fourchette / m²</th>
              <th>Niveau de risque</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Enduit intérieur neuf (plâtre projeté)</td>
              <td>15 € - 25 €</td>
              <td className="guide__highlight">Faible</td>
              <td>Travail standard sur maçonnerie régulière</td>
            </tr>
            <tr>
              <td>Enduit intérieur rénovation</td>
              <td>25 € - 45 €</td>
              <td className="guide__highlight">Moyen - Élevé</td>
              <td>Piquage ancien enduit, vérification support, armature éventuelle</td>
            </tr>
            <tr>
              <td>ITE (isolation thermique par l&apos;extérieur)</td>
              <td>80 € - 160 €</td>
              <td className="guide__highlight">Moyen</td>
              <td>Isolant + armature + enduit de finition + peinture</td>
            </tr>
            <tr>
              <td>Ravalement simple (enduit sur enduit)</td>
              <td>30 € - 55 €</td>
              <td className="guide__highlight">Faible - Moyen</td>
              <td>Sans isolation — sous-enduit et enduit de finition</td>
            </tr>
            <tr>
              <td>Enduit de réparation (murs humides)</td>
              <td>40 € - 70 €</td>
              <td className="guide__highlight">Élevé</td>
              <td>La cause de l&apos;humidité doit être traitée d&apos;abord</td>
            </tr>
            <tr>
              <td>Échafaudage (travaux extérieurs)</td>
              <td>6 € - 12 €</td>
              <td className="guide__highlight">Certain</td>
              <td>Prix fixe à obtenir en amont — attention à la durée de location</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        Exemple : une maison individuelle avec 150 m² de façade en ITE coûte en milieu
        de gamme : <span className="guide__highlight">12 000 € - 24 000 €</span> pour
        la façade plus échafaudage.
      </p>

      <h2>où le plâtrage dérape</h2>

      <p>
        Les pièges les plus fréquents :
      </p>
      <ul>
        <li>
          <strong>Support.</strong> En rénovation, le support est souvent en plus mauvais
          état que prévu. Zones friables, sels, humidité — cela ne se voit qu&apos;après
          le piquage. Chiffrez l&apos;enduit de réparation toujours en Élevé.
        </li>
        <li>
          <strong>Météo.</strong> L&apos;enduit extérieur nécessite des températures
          supérieures à 5 °C et des conditions sèches. Les retards liés à la météo sont
          inévitables pour les travaux extérieurs. Prévoyez une marge de temps.
        </li>
        <li>
          <strong>Points singuliers.</strong> Tableaux de fenêtres, soubassements,
          traversées — c&apos;est là que le surplus de travail se concentre. Ces détails
          sont souvent sous-estimés dans le chiffrage.
        </li>
      </ul>

      <h2>chiffrer le plâtrage intelligemment</h2>

      <p>
        Évaluez chaque poste séparément. L&apos;enduit neuf est Faible. L&apos;enduit de
        réparation sur mur humide est Élevé. L&apos;échafaudage est Certain — prenez un
        prix fixe. Avec une évaluation poste par poste, vous obtenez un devis qui reflète
        les vraies incertitudes.
      </p>

      <div className="guide__cta">
        <Link href="/fr/estimate/">[ CHIFFRER VOS TRAVAUX DE PLÂTRAGE ]</Link>
      </div>
    </div>
  )
}
