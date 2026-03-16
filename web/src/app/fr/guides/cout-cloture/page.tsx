import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'Prix clôture France 2026 // lowriskquotes',
  description:
    'Prix réalistes de clôture au mètre linéaire en France. Grillage, palissade bois, PVC, aluminium — détaillés avec évaluations de risque pour les artisans.',
  alternates: { canonical: '/fr/guides/cout-cloture/' },
}

export default function CoutCloturePage() {
  return (
    <div className="guide">
      <h1>Coût clôture : ce que les artisans doivent vraiment chiffrer au mètre</h1>

      <p>
        La pose de clôtures est l'un des chantiers les plus demandés en aménagement extérieur.
        Sur le papier, c'est simple : creuser, poser les poteaux, fixer les panneaux. En
        réalité, les imprévus s'accumulent vite : terrain rocheux, racines d'arbres, limites
        de propriété floues, et des prix de matériaux qui fluctuent d'un mois à l'autre.
      </p>
      <p>
        Cette page vous donne les coûts réels de clôture en France en 2026 — au mètre linéaire,
        par type de clôture, avec des évaluations de risque honnêtes.
      </p>

      <h2>coûts types au mètre linéaire</h2>

      <p>
        Les prix ci-dessous incluent la fourniture et la pose complète : poteaux, fondations et
        main-d'œuvre. Le coût réel dépend fortement de la nature du sol et de la hauteur choisie.
      </p>

      <ASCIIBox title="Coûts de clôture au mètre linéaire">
        <table className="guide__table">
          <thead>
            <tr>
              <th>Type de clôture</th>
              <th>Coût / ml</th>
              <th>Niveau de risque</th>
              <th>Remarques</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Grillage simple torsion</td>
              <td>€20 - €40</td>
              <td className="guide__highlight">Faible</td>
              <td>Option la moins chère. Pose rapide sur terrain plat.</td>
            </tr>
            <tr>
              <td>Grillage rigide (panneaux soudés)</td>
              <td>€40 - €80</td>
              <td className="guide__highlight">Faible</td>
              <td>Très courant. Le prix varie selon la hauteur et le diamètre du fil.</td>
            </tr>
            <tr>
              <td>Palissade bois</td>
              <td>€60 - €130</td>
              <td className="guide__highlight">Moyen</td>
              <td>Prix du bois variable. Traitement autoclave recommandé.</td>
            </tr>
            <tr>
              <td>Clôture PVC</td>
              <td>€50 - €110</td>
              <td className="guide__highlight">Faible - Moyen</td>
              <td>Sans entretien. Coloris limités en stock, délais pour teintes spéciales.</td>
            </tr>
            <tr>
              <td>Clôture aluminium</td>
              <td>€100 - €220</td>
              <td className="guide__highlight">Moyen</td>
              <td>Haut de gamme. Délais longs pour les dimensions sur mesure.</td>
            </tr>
            <tr>
              <td>Clôture composite</td>
              <td>€80 - €170</td>
              <td className="guide__highlight">Faible - Moyen</td>
              <td>Peu d'entretien. Poteaux alu inclus dans le prix supérieur.</td>
            </tr>
            <tr>
              <td>Muret + clôture</td>
              <td>€150 - €350</td>
              <td className="guide__highlight">Moyen - Élevé</td>
              <td>Fondation béton obligatoire. Terrassement en sus sur terrain en pente.</td>
            </tr>
            <tr>
              <td>Scellement des poteaux</td>
              <td>€12 - €30</td>
              <td className="guide__highlight">Moyen</td>
              <td>Roche ou racines = surcoût important. Sonder le sol avant devis.</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        Exemple : 25 ml de grillage rigide avec pose reviennent à <span className="guide__highlight">€1.000 -
        €2.000</span>. Ajoutez un portail (€400 - €1.200 selon la largeur et le matériau) et les
        fondations spécifiques si le sol l'exige.
      </p>

      <h2>où les chantiers de clôture dérapent</h2>

      <p>
        Les sources principales de surcoûts :
      </p>
      <ul>
        <li>
          <strong>Nature du sol.</strong> Roche affleurante, argile compacte ou nappe phréatique
          haute rendent le creusement des trous de poteaux beaucoup plus long. Sans étude de sol
          préalable, vous chiffrez à l'aveugle.
        </li>
        <li>
          <strong>Limites de propriété.</strong> Des bornes introuvables ou des clôtures
          existantes mal positionnées provoquent des litiges et des arrêts de chantier. Toujours
          vérifier le cadastre ou faire intervenir un géomètre avant de commencer.
        </li>
        <li>
          <strong>Dénivelé.</strong> Sur terrain en pente, les panneaux doivent être posés en
          escalier ou en rampant. Cela augmente les découpes et le temps de pose de manière
          significative. Chiffrez ces tronçons en Élevé.
        </li>
      </ul>

      <h2>mieux chiffrer vos clôtures</h2>

      <p>
        Plutôt qu'un prix au mètre unique, évaluez chaque tronçon séparément. Le tronçon droit
        sur terrain plat est Faible. La partie en pente avec des souches est Élevé. Le portail
        sur mesure est Moyen à Élevé. Saisissez ces valeurs dans une simulation de risque et vous
        obtiendrez un devis qui protège votre marge — pas une estimation approximative qui vous
        fait perdre de l'argent.
      </p>

      <div className="guide__cta">
        <Link href="/fr/estimate/">[ CHIFFRER MON PROJET DE CLÔTURE ]</Link>
      </div>
    </div>
  )
}
