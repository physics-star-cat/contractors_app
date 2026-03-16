import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'Coût rénovation cuisine France 2026 // lowriskquotes',
  description:
    'Coûts réalistes de rénovation de cuisine pour artisans en France. Ventilation complète poste par poste avec niveaux de risque pour chiffrer vos cuisines avec précision.',
  alternates: { canonical: '/fr/guides/cout-renovation-cuisine/' },
}

export default function CoutRenovationCuisinePage() {
  return (
    <div className="guide">
      <h1>coût de rénovation de cuisine : la ventilation d&apos;un artisan</h1>

      <p>
        Les cuisines sont des chantiers à haute valeur avec beaucoup de corps de métier.
        Plomberie, électricité, gaz, menuiserie, plans de travail, carrelage, revêtement de sol,
        électroménager — la coordination seule peut manger votre marge si vous n&apos;avez pas chiffré
        correctement. Voici ce que coûtent réellement les cuisines en France en 2026 et où se
        cachent les risques.
      </p>

      <h2>ventilation typique des coûts</h2>

      <p>
        Rénovation de cuisine milieu de gamme pour une maison standard en France. Cela suppose
        une dépose complète et une repose, pas un simple remplacement des façades.
      </p>

      <ASCIIBox title="Ventilation des coûts cuisine">
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
              <td>600 € - 1 200 €</td>
              <td className="guide__highlight">Faible</td>
              <td>Prévisible sauf présence d&apos;amiante</td>
            </tr>
            <tr>
              <td>Meubles cuisine (fourniture et pose)</td>
              <td>4 000 € - 12 000 €</td>
              <td className="guide__highlight">Moyen</td>
              <td>Cuisiniste standard = Faible. Menuiserie sur mesure = Élevé.</td>
            </tr>
            <tr>
              <td>Plans de travail</td>
              <td>1 000 € - 4 500 €</td>
              <td className="guide__highlight">Moyen - Élevé</td>
              <td>Stratifié = Faible. Granit/quartz gabarité sur place = Élevé.</td>
            </tr>
            <tr>
              <td>Plomberie</td>
              <td>800 € - 1 500 €</td>
              <td className="guide__highlight">Moyen</td>
              <td>Déplacer l&apos;évier = plus de coût et de risque</td>
            </tr>
            <tr>
              <td>Électricité</td>
              <td>1 000 € - 2 000 €</td>
              <td className="guide__highlight">Moyen</td>
              <td>Mise aux normes NF C 15-100 ou remise à neuf complète</td>
            </tr>
            <tr>
              <td>Gaz (plaque, déplacement chaudière)</td>
              <td>400 € - 1 000 €</td>
              <td className="guide__highlight">Faible</td>
              <td>Sous-traitant qualifié PG. Simple si pas de déplacement.</td>
            </tr>
            <tr>
              <td>Carrelage (crédence et sol)</td>
              <td>1 000 € - 2 500 €</td>
              <td className="guide__highlight">Faible</td>
              <td>Carrelage métro standard = certain. Motifs complexes = Moyen.</td>
            </tr>
            <tr>
              <td>Revêtement de sol</td>
              <td>500 € - 1 500 €</td>
              <td className="guide__highlight">Faible</td>
              <td>LVT ou vinyle. La préparation du support peut ajouter du coût.</td>
            </tr>
            <tr>
              <td>Plâtrerie et peinture</td>
              <td>500 € - 1 000 €</td>
              <td className="guide__highlight">Faible</td>
              <td>Simple. Les anciennes cuisines peuvent nécessiter plus de préparation.</td>
            </tr>
            <tr>
              <td>Électroménager</td>
              <td>1 500 € - 5 000 €</td>
              <td className="guide__highlight">Certain - Faible</td>
              <td>Généralement acheté par le client. Confirmez avant de deviser.</td>
            </tr>
            <tr>
              <td>Benne / déchets</td>
              <td>350 € - 600 €</td>
              <td className="guide__highlight">Certain</td>
              <td>Prix fixe, réservez à l&apos;avance</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        Fourchette totale pour une cuisine milieu de gamme : <span className="guide__highlight">11 650 € -
        32 800 €</span>. L&apos;écart énorme s&apos;explique par la qualité des meubles, le matériau du plan
        de travail et l&apos;ampleur des modifications d&apos;agencement.
      </p>

      <h2>où les cuisines font exploser les budgets</h2>

      <ul>
        <li>
          <strong>Les plans de travail.</strong> Les plans en pierre sur gabarit sont mesurés après
          la pose des meubles, puis fabriqués hors site. Si le gabarit est faux ou que la pierre
          a un défaut, vous attendez des semaines pour le remplacement. Marquez les plans de
          travail sur mesure en incertitude Élevée.
        </li>
        <li>
          <strong>Les modifications d&apos;agencement.</strong> Déplacer l&apos;évier implique de déplacer
          les évacuations et l&apos;alimentation. Déplacer la plaque implique de déplacer le gaz et
          l&apos;extraction. Chaque déplacement est un sous-traitant supplémentaire, un jour de plus,
          un point de défaillance supplémentaire. Si le client veut tout déplacer, vos estimations
          plomberie et électricité doivent être au minimum en Moyen.
        </li>
        <li>
          <strong>Les délais de livraison.</strong> Meubles sur mesure, plans de travail en pierre
          et électroménager spécifique peuvent prendre 4 à 8 semaines. Si un élément est en retard,
          tout votre planning se décale. Intégrez le risque de temps mort dans votre devis ou
          assurez-vous que le client comprend que les retards sont à sa charge.
        </li>
        <li>
          <strong>Le glissement de périmètre.</strong> &quot;Puisque vous êtes là, vous pouvez
          déplacer ce radiateur ?&quot; &quot;En fait, on peut replâtrer toute la pièce ?&quot; Les cuisines
          attirent le glissement de périmètre parce que les clients voient le chantier et veulent
          tout faire d&apos;un coup. Ayez un périmètre clair par écrit avant de commencer.
        </li>
      </ul>

      <h2>chiffrer les cuisines avec confiance</h2>

      <p>
        Une cuisine avec des meubles de cuisiniste standard, un plan de travail stratifié et
        aucune modification d&apos;agencement est un chantier essentiellement en incertitude Faible.
        Vous pouvez deviser près de votre estimation de base. Une cuisine avec de la menuiserie
        sur mesure, un plan en granit et une refonte complète de l&apos;agencement est bourrée de
        postes en incertitude Élevée. Votre contingence doit en tenir compte.
      </p>
      <p>
        Évaluez chaque poste honnêtement, lancez la simulation et devisez au P80. Votre devis
        sera plus élevé sur les chantiers risqués et plus serré sur les chantiers simples —
        c&apos;est exactement comme cela que ça devrait fonctionner.
      </p>

      <div className="guide__cta">
        <Link href="/fr/estimate/">[ CHIFFRER VOTRE CUISINE ]</Link>
      </div>
    </div>
  )
}
