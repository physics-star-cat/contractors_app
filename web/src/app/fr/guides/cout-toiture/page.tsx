import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'Coût toiture France 2026 // lowriskquotes',
  description:
    'Coûts réalistes de toiture pour artisans couvreurs en France. Réfection complète, toiture plate, réparations et zinguerie — avec niveaux de risque pour chiffrer sans se brûler.',
  alternates: { canonical: '/fr/guides/cout-toiture/' },
}

export default function CoutToiturePage() {
  return (
    <div className="guide">
      <h1>coût de toiture : chiffrer un chantier qu&apos;on ne voit pas avant d&apos;y monter</h1>

      <p>
        La couverture est par nature un domaine à haut risque pour le chiffrage. Vous établissez
        le prix depuis le sol, puis vous découvrez les problèmes en hauteur. Liteaux pourris,
        chevrons affaissés, écran sous-toiture qui se désintègre au toucher. L&apos;échafaudage est
        monté, le compteur tourne, et chaque surprise coûte de l&apos;argent.
      </p>
      <p>
        Cette page détaille ce que coûtent réellement les travaux de toiture en France en 2026
        et où se cache l&apos;incertitude sur chaque poste.
      </p>

      <h2>fourchettes de prix par type de chantier</h2>

      <p>
        Prix indicatifs pour des travaux courants de couverture sur une maison individuelle
        standard. Les coûts réels dépendent de la pente, de l&apos;accessibilité, du choix des
        matériaux et de ce que vous trouvez une fois l&apos;ancienne couverture enlevée.
      </p>

      <ASCIIBox title="Coûts par type de chantier toiture">
        <table className="guide__table">
          <thead>
            <tr>
              <th>Type de chantier</th>
              <th>Coût typique</th>
              <th>Durée</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Réfection complète (tuiles)</td>
              <td>8 000 € - 18 000 €</td>
              <td>5-12 jours</td>
              <td>Dépose et repose. Le prix varie selon l&apos;état de la charpente.</td>
            </tr>
            <tr>
              <td>Toiture plate (EPDM/bitume)</td>
              <td>2 500 € - 6 000 €</td>
              <td>2-5 jours</td>
              <td>Par section de 20 m². L&apos;état du support est l&apos;inconnue.</td>
            </tr>
            <tr>
              <td>Réparation de toiture</td>
              <td>300 € - 2 000 €</td>
              <td>0,5-2 jours</td>
              <td>Tuiles glissées aux réparations de noue. Fourchette large.</td>
            </tr>
            <tr>
              <td>Gouttières et descentes</td>
              <td>1 500 € - 4 000 €</td>
              <td>2-3 jours</td>
              <td>Remplacement zinc ou PVC. Pieds de chevrons pourris = surcoût.</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <h2>exemple concret : réfection complète sur pavillon</h2>

      <p>
        Pavillon des années 1980 en région parisienne. Tuiles béton d&apos;origine. Écran sous-toiture
        dégradé, certains liteaux suspects. Surface de toiture environ 90 m². Le client veut des
        tuiles terre cuite et un faîtage à sec.
      </p>

      <ASCIIBox title="Ventilation des coûts réfection toiture">
        <table className="guide__table">
          <thead>
            <tr>
              <th>Poste</th>
              <th>Fourchette</th>
              <th>Niveau de risque</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Échafaudage</td>
              <td>1 200 € - 2 000 €</td>
              <td className="guide__highlight">Faible</td>
              <td>Demandez un devis fixe. Dépassement de durée = location plus longue.</td>
            </tr>
            <tr>
              <td>Dépose tuiles et écran existants</td>
              <td>800 € - 1 400 €</td>
              <td className="guide__highlight">Faible</td>
              <td>Main-d&apos;œuvre prévisible. Anciens clous et mortier ralentissent.</td>
            </tr>
            <tr>
              <td>Remplacement des liteaux</td>
              <td>600 € - 1 200 €</td>
              <td className="guide__highlight">Moyen</td>
              <td>Re-liteaunage complet standard. Les pourris cassent au démontage.</td>
            </tr>
            <tr>
              <td>Écran sous-toiture HPV</td>
              <td>500 € - 800 €</td>
              <td className="guide__highlight">Faible</td>
              <td>Coût matériau stable. Pose incluse dans la couverture.</td>
            </tr>
            <tr>
              <td>Réparations charpente (chevrons/pannes)</td>
              <td>0 € - 3 000 €</td>
              <td className="guide__highlight">Élevé</td>
              <td>La grande inconnue. Peut être zéro. Peut être huit chevrons.</td>
            </tr>
            <tr>
              <td>Fourniture tuiles terre cuite</td>
              <td>2 000 € - 3 500 €</td>
              <td className="guide__highlight">Moyen</td>
              <td>Tuiles mécaniques ~1 €/pièce. Ardoise naturelle 3-4x plus cher.</td>
            </tr>
            <tr>
              <td>Main-d&apos;œuvre pose</td>
              <td>1 800 € - 3 000 €</td>
              <td className="guide__highlight">Faible</td>
              <td>Votre équipe. Les intempéries sont la principale variable.</td>
            </tr>
            <tr>
              <td>Faîtage et rives à sec</td>
              <td>400 € - 800 €</td>
              <td className="guide__highlight">Faible</td>
              <td>Fixation mécanique. Plus rapide que le scellement au mortier.</td>
            </tr>
            <tr>
              <td>Zinguerie (solins/noues)</td>
              <td>600 € - 1 400 €</td>
              <td className="guide__highlight">Moyen</td>
              <td>Le zinc fluctue. Vérifiez les cours avant de deviser.</td>
            </tr>
            <tr>
              <td>Benne et évacuation des déchets</td>
              <td>500 € - 900 €</td>
              <td className="guide__highlight">Faible</td>
              <td>Les anciennes tuiles sont lourdes. Comptez deux bennes minimum.</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        Fourchette totale pour une réfection complète : <span className="guide__highlight">8 400 € -
        18 000 €</span>. Cet écart de 9 600 € n&apos;est pas de l&apos;approximation — c&apos;est de
        l&apos;incertitude réelle. Le poste réparation charpente seul peut faire varier le chantier
        de 3 000 €. Tout le reste est raisonnablement prévisible si vous connaissez vos prix
        fournisseurs et la cadence de votre équipe.
      </p>

      <h2>où les chantiers de toiture dérapent</h2>

      <p>
        Quatre facteurs de risque dominent les devis de couverture :
      </p>
      <ul>
        <li>
          <strong>La charpente cachée.</strong> Vous ne pouvez pas voir l&apos;état des chevrons depuis
          le sol. Une inspection par drone ou depuis les combles aide, mais vous ne saurez pas avec
          certitude tant que les tuiles ne sont pas enlevées. Si la toiture est d&apos;avant 1990 et n&apos;a
          jamais été touchée, prévoyez au moins un peu de charpente et marquez-la en Élevé.
        </li>
        <li>
          <strong>L&apos;échafaudage.</strong> L&apos;échafaudage lui-même est prévisible. Le risque est la
          durée. Si les intempéries ou les réparations de charpente ajoutent trois jours au
          chantier, vous payez une semaine de location supplémentaire. Intégrez cela dans votre
          poste échafaudage.
        </li>
        <li>
          <strong>Les fenêtres météo.</strong> Une toiture ouverte ne peut pas rester exposée à la
          pluie une nuit entière. Il vous faut une fenêtre météo réaliste pour l&apos;étape
          dépose-et-écran. En hiver, cette fenêtre est plus courte. Chiffrez en conséquence ou
          acceptez le risque.
        </li>
        <li>
          <strong>La volatilité des prix des matériaux.</strong> Le zinc, le bois et les tuiles ont
          tous connu des variations brutales ces dernières années. Un devis qui reste huit semaines
          en attente avant acceptation peut nécessiter une actualisation des prix. Mettez une date
          de validité sur vos devis — 30 jours maximum.
        </li>
      </ul>

      <h2>chiffrer la toiture intelligemment</h2>

      <p>
        L&apos;échafaudage, l&apos;écran et votre main-d&apos;œuvre sont tous en incertitude Faible. Vous
        connaissez ces chiffres. Les réparations de charpente et la zinguerie sont là où le risque
        se cache. Au lieu de gonfler chaque poste avec une contingence forfaitaire, évaluez les
        postes risqués honnêtement et simulez la fourchette. Votre devis montre alors au client
        une fourchette réaliste — et protège votre marge sur les postes qui explosent réellement.
      </p>

      <div className="guide__cta">
        <Link href="/fr/estimate/">[ CHIFFRER VOTRE TOITURE ]</Link>
      </div>
    </div>
  )
}
