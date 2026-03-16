import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'Coût allée France 2026 // lowriskquotes',
  description:
    'Coûts réalistes pour une allée en France. Pavés, enrobé ou béton — ventilation poste par poste avec niveaux de risque.',
  alternates: { canonical: '/fr/guides/cout-allee/' },
}

export default function CoutAlleePage() {
  return (
    <div className="guide">
      <h1>coût d&apos;une allée : ce que les artisans doivent vraiment savoir</h1>

      <p>
        Une allée semble être un chantier simple — décaisser, compacter, poser le revêtement.
        Mais le diable est dans les détails : gestion des eaux pluviales, terrain inconnu,
        canalisations enterrées et la question de savoir si le drainage existant suffit.
        Celui qui ne chiffre pas correctement laisse de la marge sur la table.
      </p>
      <p>
        Cette page détaille les vrais coûts d&apos;une allée en 2026 et montre où se situe
        le risque sur chaque poste.
      </p>

      <h2>ventilation typique des coûts</h2>

      <p>
        Voici les coûts pour une allée pavée milieu de gamme (environ 40 à 60 m²).
        L&apos;enrobé est moins cher, la pierre naturelle plus chère.
      </p>

      <ASCIIBox title="Ventilation des coûts allée">
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
              <td>Dépose ancienne allée</td>
              <td>800 € - 2 500 €</td>
              <td className="guide__highlight">Moyen</td>
              <td>Anciennes fondations ou racines peuvent surprendre</td>
            </tr>
            <tr>
              <td>Terrassement &amp; décaissement</td>
              <td>1 500 € - 4 000 €</td>
              <td className="guide__highlight">Moyen - Élevé</td>
              <td>Nature du sol décisive — argile ou roche = plus cher</td>
            </tr>
            <tr>
              <td>Fondation &amp; sous-couche</td>
              <td>1 200 € - 3 000 €</td>
              <td className="guide__highlight">Faible</td>
              <td>Grave, compactage, réglage — travail standard</td>
            </tr>
            <tr>
              <td>Revêtement (pavés)</td>
              <td>2 000 € - 6 000 €</td>
              <td className="guide__highlight">Faible</td>
              <td>Pavés béton = Faible. Pierre naturelle = Moyen (plus de coupes).</td>
            </tr>
            <tr>
              <td>Bordures</td>
              <td>400 € - 1 200 €</td>
              <td className="guide__highlight">Faible</td>
              <td>Travail standard — pose de bordures béton</td>
            </tr>
            <tr>
              <td>Drainage &amp; évacuation EP</td>
              <td>800 € - 3 000 €</td>
              <td className="guide__highlight">Moyen - Élevé</td>
              <td>Vérifier la gestion des eaux pluviales — caniveau ou puisard ?</td>
            </tr>
            <tr>
              <td>Benne &amp; évacuation</td>
              <td>400 € - 800 €</td>
              <td className="guide__highlight">Certain</td>
              <td>Prendre un prix fixe à l&apos;avance</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        Fourchette totale pour une allée pavée : <span className="guide__highlight">7 100 € -
        20 500 €</span>. Le drainage et la nature du terrain sont les plus grandes inconnues.
      </p>

      <h2>où les allées dérapent</h2>

      <p>
        Les pièges les plus fréquents :
      </p>
      <ul>
        <li>
          <strong>Terrain.</strong> Ce qui se cache sous l&apos;ancienne allée, on ne le sait
          qu&apos;après avoir décaissé. Anciennes fondations, racines, réseaux enterrés ou
          sol argileux peuvent augmenter significativement les terrassements.
        </li>
        <li>
          <strong>Eaux pluviales.</strong> Avec le renforcement des règles d&apos;imperméabilisation,
          beaucoup d&apos;allées doivent désormais intégrer des solutions de drainage ou
          d&apos;infiltration. C&apos;est souvent oublié — et ça coûte 1 000 € à 3 000 € en plus.
        </li>
        <li>
          <strong>Abaissement de bordure de trottoir.</strong> Si l&apos;allée donne sur une
          voie communale, un abaissement de bordure est nécessaire. C&apos;est la mairie qui
          intervient — comptez des délais de plusieurs semaines et 500 € à 1 500 €.
        </li>
      </ul>

      <h2>chiffrer les allées intelligemment</h2>

      <p>
        Évaluez chaque poste séparément. La sous-couche est Faible — travail standard.
        Le terrassement sur terrain inconnu est Moyen à Élevé. Le drainage est Moyen tant
        que les obligations ne sont pas clarifiées. Avec une évaluation poste par poste,
        vous obtenez un devis réaliste.
      </p>

      <div className="guide__cta">
        <Link href="/fr/estimate/">[ CHIFFRER VOTRE ALLÉE ]</Link>
      </div>
    </div>
  )
}
