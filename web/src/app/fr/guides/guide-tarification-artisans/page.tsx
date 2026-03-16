import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'Guide de tarification pour artisans 2026 // lowriskquotes',
  description:
    'Guide de tarification pour artisans en France. Comment calculer vos heures, matériaux et frais généraux pour protéger votre marge.',
  alternates: { canonical: '/fr/guides/guide-tarification-artisans/' },
}

export default function GuideTarificationArtisansPage() {
  return (
    <div className="guide">
      <h1>guide de tarification pour artisans : étape par étape</h1>

      <p>
        Beaucoup d&apos;artisans chiffrent sur la base de l&apos;expérience et de l&apos;intuition.
        Ça fonctionne — jusqu&apos;au jour où ça ne fonctionne plus. Un chantier tourne mal,
        les prix des matériaux augmentent, un compagnon est en arrêt. Soudain, la marge
        disparaît. Un chiffrage structuré vous protège contre ces situations.
      </p>
      <p>
        Cette page montre comment structurer vos tarifs en 2026.
      </p>

      <h2>les trois composantes du tarif</h2>

      <ASCIIBox title="Structure de tarification">
        <table className="guide__table">
          <thead>
            <tr>
              <th>Composante</th>
              <th>Ce qui en fait partie</th>
              <th>Part typique</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Main d&apos;œuvre</td>
              <td>Salaire brut, charges sociales, congés, maladie</td>
              <td>40 - 55 %</td>
              <td>Coût horaire chargé ≠ salaire brut — coefficient 1,8 à 2,2</td>
            </tr>
            <tr>
              <td>Matériaux</td>
              <td>Matériaux de construction, consommables, usure outillage</td>
              <td>25 - 40 %</td>
              <td>Prix d&apos;achat + 10-15 % de marge pour la gestion</td>
            </tr>
            <tr>
              <td>Frais généraux &amp; bénéfice</td>
              <td>Véhicule, assurance, bureau, bénéfice</td>
              <td>15 - 25 %</td>
              <td>Souvent oublié — et c&apos;est la marge qui manque en fin d&apos;année</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <h2>erreurs fréquentes dans le chiffrage</h2>

      <ul>
        <li>
          <strong>Main d&apos;œuvre sous-évaluée.</strong> Un compagnon ne coûte pas 14 €/h
          brut à l&apos;entreprise, mais 28 € à 35 €/h charges comprises. Beaucoup
          d&apos;artisans calculent avec le salaire brut — et s&apos;étonnent qu&apos;il ne
          reste rien en fin d&apos;année.
        </li>
        <li>
          <strong>Frais généraux oubliés.</strong> Véhicule, outillage, assurance décennale,
          comptabilité, téléphone, formation — ça représente 500 € à 1 500 € par compagnon
          par mois. Ces coûts doivent être répartis sur les chantiers.
        </li>
        <li>
          <strong>Pas de marge bénéficiaire.</strong> Beaucoup d&apos;artisans chiffrent à
          prix coûtant et oublient le bénéfice. 8 à 12 % de marge bénéficiaire sont courants
          dans le secteur — et nécessaires pour l&apos;investissement et les réserves.
        </li>
        <li>
          <strong>Déplacements non comptés.</strong> 30 minutes de trajet par jour sur
          250 jours ouvrés, c&apos;est 125 heures par an. C&apos;est trois bonnes semaines
          de travail qui doivent apparaître quelque part dans le chiffrage.
        </li>
      </ul>

      <h2>du coût horaire chargé au prix de devis</h2>

      <p>
        Votre coût horaire chargé est la base. Multipliez-le par les heures estimées pour
        chaque poste, ajoutez les matériaux et les frais généraux. Ensuite, évaluez chaque
        poste selon son risque — Certain, Faible, Moyen, Élevé. Les postes à risque élevé
        ont besoin de plus de marge que les postes certains. Le résultat est un devis qui
        couvre vos coûts et protège votre bénéfice.
      </p>
      <p>
        Pas de calcul au doigt mouillé. Pas de forfait arbitraire. Mais un chiffrage que
        vous pouvez expliquer à votre client.
      </p>

      <div className="guide__cta">
        <Link href="/fr/estimate/">[ CHIFFRER VOTRE CHANTIER ]</Link>
      </div>
    </div>
  )
}
