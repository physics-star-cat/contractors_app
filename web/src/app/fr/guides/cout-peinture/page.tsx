import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'Coût peinture France 2026 // lowriskquotes',
  description:
    'Coûts réalistes de peinture en France. Intérieur, façade, laquage — ventilation poste par poste avec niveaux de risque pour artisans.',
  alternates: { canonical: '/fr/guides/cout-peinture/' },
}

export default function CoutPeinturePage() {
  return (
    <div className="guide">
      <h1>coût de peinture : ce que les artisans doivent vraiment savoir</h1>

      <p>
        La peinture semble facile à chiffrer — surface fois prix au mètre carré. Mais
        celui qui calcule ainsi oublie la préparation. Enduit, ponçage, impression, bâchage,
        protection : en rénovation, c&apos;est souvent 40 à 60 % du temps de travail. Ajoutez
        des supports difficiles, des hauteurs sous plafond importantes et des clients qui
        changent de couleur trois jours avant la fin.
      </p>
      <p>
        Cette page détaille les vrais coûts de peinture en 2026 et montre où se situe
        le risque sur chaque poste.
      </p>

      <h2>ventilation typique des coûts</h2>

      <p>
        Voici les coûts au mètre carré pour différents travaux de peinture. Le coût total
        dépend de la surface et de l&apos;état du support.
      </p>

      <ASCIIBox title="Ventilation des coûts peinture">
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
              <td>Murs peinture neuf (2 couches)</td>
              <td>8 € - 14 €</td>
              <td className="guide__highlight">Faible</td>
              <td>Support lisse, peu de préparation</td>
            </tr>
            <tr>
              <td>Murs peinture rénovation (2 couches)</td>
              <td>12 € - 22 €</td>
              <td className="guide__highlight">Moyen</td>
              <td>Préparation : enduit, ponçage, impression</td>
            </tr>
            <tr>
              <td>Plafonds</td>
              <td>10 € - 18 €</td>
              <td className="guide__highlight">Faible - Moyen</td>
              <td>Hauteur &gt; 3 m = échafaudage nécessaire, supplément</td>
            </tr>
            <tr>
              <td>Pose de toile de verre</td>
              <td>12 € - 20 €</td>
              <td className="guide__highlight">Faible</td>
              <td>Travail standard sur support régulier</td>
            </tr>
            <tr>
              <td>Décollage ancien papier peint</td>
              <td>5 € - 12 €</td>
              <td className="guide__highlight">Moyen - Élevé</td>
              <td>Plusieurs couches ou polystyrène collé = Élevé</td>
            </tr>
            <tr>
              <td>Peinture façade (avec échafaudage)</td>
              <td>25 € - 45 €</td>
              <td className="guide__highlight">Moyen</td>
              <td>Dépend de la météo — durée de location échafaudage à surveiller</td>
            </tr>
            <tr>
              <td>Laquage (portes, fenêtres)</td>
              <td>40 € - 80 € / unité</td>
              <td className="guide__highlight">Faible</td>
              <td>Par vantail de porte ou ouvrant de fenêtre</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        Exemple : peindre entièrement un appartement de 80 m² (murs + plafonds, rénovation)
        coûte en milieu de gamme : <span className="guide__highlight">3 000 € -
        6 000 €</span> préparation comprise.
      </p>

      <h2>où la peinture dérape</h2>

      <p>
        Les pièges les plus fréquents :
      </p>
      <ul>
        <li>
          <strong>Préparation sous-estimée.</strong> Reboucher les fissures, appliquer un
          fixateur anti-nicotine, décoller du polystyrène au plafond — ces travaux prennent
          souvent plus de temps que la peinture elle-même. Chiffrez la préparation séparément.
        </li>
        <li>
          <strong>Changement de teinte.</strong> Passer d&apos;un rouge foncé à du blanc
          demande trois couches au lieu de deux. C&apos;est 50 % de temps et de matériau
          en plus. Demandez toujours la couleur actuelle.
        </li>
        <li>
          <strong>Mobilier et protection.</strong> Dans un logement occupé, le bâchage et
          la protection prennent un temps considérable. Beaucoup de peintres le sous-estiment
          dans leur chiffrage.
        </li>
      </ul>

      <h2>chiffrer la peinture intelligemment</h2>

      <p>
        Séparez la préparation de l&apos;application. La peinture en neuf est Faible.
        Le décollage de papier peint est Moyen à Élevé selon le nombre de couches. La
        façade est Moyen à cause de la météo. Évaluez chaque poste et vous obtiendrez
        un devis réaliste.
      </p>

      <div className="guide__cta">
        <Link href="/fr/estimate/">[ CHIFFRER VOS TRAVAUX DE PEINTURE ]</Link>
      </div>
    </div>
  )
}
