import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'Comment faire un devis en tant qu\'artisan // lowriskquotes',
  description:
    'Guide pratique pour chiffrer vos chantiers avec précision. Découvrez pourquoi les artisans sous-évaluent leurs devis, comment évaluer le risque sur chaque poste, et comment la simulation Monte Carlo construit des devis plus sûrs.',
  alternates: { canonical: '/fr/guides/comment-faire-un-devis/' },
}

export default function CommentFaireUnDevisPage() {
  return (
    <div className="guide">
      <h1>comment faire un devis (sans y laisser votre chemise)</h1>

      <p>
        La plupart des artisans ont déjà perdu de l&apos;argent sur un chantier. Pas parce qu&apos;ils
        ont mal travaillé — parce qu&apos;ils ont mal chiffré. Ils ont établi leur prix en pensant
        au meilleur scénario, décroché le contrat, puis regardé leur marge fondre quand la
        réalité s&apos;est imposée.
      </p>
      <p>
        Ce guide explique pourquoi cela arrive et comment y remédier avec une méthode qui
        ne prend que cinq minutes de plus que votre approche habituelle.
      </p>

      <h2>pourquoi les artisans sous-évaluent leurs devis</h2>

      <p>
        Trois forces poussent chaque devis vers le bas :
      </p>

      <p>
        <strong className="guide__highlight">Le biais d&apos;optimisme.</strong> Vous imaginez le
        chantier se déroulant sans accroc. L&apos;enduit se décolle proprement. Les solives sont
        saines. Le fournisseur livre à temps. Vous chiffrez pour la version du chantier où rien
        ne va de travers — alors que cette version n&apos;arrive quasiment jamais.
      </p>
      <p>
        <strong className="guide__highlight">La pression concurrentielle.</strong> Vous savez que
        le client a demandé trois devis. Alors vous taillez dans les coûts, arrondissez vers le
        bas, serrez les prix. Votre devis est serré. Trop serré. Vous décrochez le chantier mais
        perdez le bénéfice.
      </p>
      <p>
        <strong className="guide__highlight">Les estimations ponctuelles.</strong> Vous notez un
        seul chiffre pour chaque poste : carrelage 2 400 €. Ce n&apos;est pas une estimation.
        C&apos;est une supposition déguisée en fait. Les coûts réels sont des fourchettes. Le
        carrelage peut coûter 2 100 € si votre fournisseur habituel a du stock, ou 2 900 € s&apos;il
        n&apos;en a pas et que vous commandez chez un autre.
      </p>

      <h2>les cinq niveaux d&apos;incertitude</h2>

      <p>
        Chaque poste de votre devis ne porte pas le même risque. Une benne de chantier chez le
        loueur que vous utilisez depuis dix ans, ce n&apos;est pas la même chose qu&apos;une paroi de
        douche sur mesure chez un verrier trouvé la semaine dernière. Les traiter de la même façon
        est l&apos;erreur fondamentale du pourcentage de contingence forfaitaire.
      </p>
      <p>
        LowRiskQuotes utilise cinq niveaux d&apos;incertitude. Voici ce que chacun signifie
        concrètement :
      </p>

      <ASCIIBox title="Niveaux d'incertitude">
        <table className="guide__table">
          <thead>
            <tr>
              <th>Niveau</th>
              <th>Fourchette</th>
              <th>Exemple concret</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="guide__highlight">Certain</td>
              <td>+/- 2%</td>
              <td>Location de benne, devis écrit d&apos;un fournisseur à prix fixe</td>
            </tr>
            <tr>
              <td className="guide__highlight">Faible</td>
              <td>+/- 8%</td>
              <td>Matériaux chez votre fournisseur habituel, quincaillerie standard</td>
            </tr>
            <tr>
              <td className="guide__highlight">Moyen</td>
              <td>+/- 15%</td>
              <td>Sous-traitant avec qui vous avez travaillé mais pas récemment</td>
            </tr>
            <tr>
              <td className="guide__highlight">Élevé</td>
              <td>+/- 25%</td>
              <td>Nouveau sous-traitant, matériaux spéciaux, inconnues du chantier</td>
            </tr>
            <tr>
              <td className="guide__highlight">Estimation hasardeuse</td>
              <td>+/- 40%</td>
              <td>Pas de visite technique, portée inconnue, &quot;ça devrait être environ...&quot;</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        La question clé pour chaque poste est : <em>à quel point suis-je confiant que ce
        chiffre est juste ?</em> Pas à quel point vous voulez l&apos;être. À quel point vous
        l&apos;êtes réellement, sur la base de preuves. Vous avez un devis écrit ? C&apos;est Certain.
        Vous estimez à partir d&apos;un chantier fait il y a deux ans dans un autre département ?
        C&apos;est Élevé au mieux.
      </p>

      <h2>exemple concret : rénovation de salle de bain</h2>

      <p>
        Prenons un vrai devis. Mme Dupont veut refaire sa salle de bain — dépose, recarrelage,
        nouveaux sanitaires, paroi de douche sur mesure, plomberie, électricité et évacuation
        des gravats. Votre estimation de base s&apos;élève à 7 700 €.
      </p>

      <ASCIIBox title="Postes de coûts">
        <table className="guide__table">
          <thead>
            <tr>
              <th>Poste</th>
              <th>Estimation</th>
              <th>Niveau</th>
              <th>Pourquoi</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Carrelage murs et sol</td>
              <td>2 400 €</td>
              <td className="guide__highlight">Faible</td>
              <td>Votre fournisseur habituel, vous avez déjà chiffré du similaire</td>
            </tr>
            <tr>
              <td>Sanitaires (lavabo, WC, robinetterie)</td>
              <td>1 000 €</td>
              <td className="guide__highlight">Moyen</td>
              <td>Le client a choisi du milieu de gamme mais n&apos;a pas encore finalisé</td>
            </tr>
            <tr>
              <td>Paroi de douche sur mesure</td>
              <td>1 800 €</td>
              <td className="guide__highlight">Élevé</td>
              <td>Nouveau verrier, dimensions non standard, jamais commandé chez eux</td>
            </tr>
            <tr>
              <td>Plomberie (sous-traitant)</td>
              <td>1 400 €</td>
              <td className="guide__highlight">Moyen</td>
              <td>Marc est fiable mais n&apos;a pas encore chiffré ce chantier</td>
            </tr>
            <tr>
              <td>Électricien</td>
              <td>750 €</td>
              <td className="guide__highlight">Faible</td>
              <td>Électricité standard de salle de bain, votre électricien habituel</td>
            </tr>
            <tr>
              <td>Benne de chantier</td>
              <td>350 €</td>
              <td className="guide__highlight">Certain</td>
              <td>Prix fixe chez votre loueur habituel</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        Si vous avez devisé 7 700 € à plat, vous chiffrez pour le scénario où chaque poste
        tombe exactement sur l&apos;estimation. C&apos;est le résultat le plus improbable. C&apos;est comme
        parier que six pièces de monnaie tombent toutes sur face.
      </p>
      <p>
        Passez ces chiffres dans une simulation Monte Carlo et vous obtenez une distribution.
        La simulation lance des milliers de versions de ce chantier, en tirant à chaque fois des
        coûts dans la fourchette d&apos;incertitude que vous avez définie. Comme les dépassements sont
        plus fréquents que les économies, la simulation est biaisée vers le haut — exactement
        comme dans la réalité.
      </p>

      <ASCIIBox title="Résultat de la simulation">
        <p style={{ fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '8px' }}>
          Estimation de base : <span className="guide__highlight">7 700 €</span>
        </p>
        <p style={{ fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '8px' }}>
          P50 (pile ou face) : <span className="guide__highlight">8 090 €</span>
        </p>
        <p style={{ fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '8px' }}>
          P80 (devis recommandé) : <span className="guide__highlight">8 640 €</span>
        </p>
        <p style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
          P95 (marge de sécurité maximale) : <span className="guide__highlight">9 410 €</span>
        </p>
      </ASCIIBox>

      <p>
        La différence entre 7 700 € et 8 640 € est de 940 € — environ 12%. Mais ce n&apos;est pas
        une contingence forfaitaire de 12%. C&apos;est un tampon calculé en fonction des risques
        spécifiques de ce chantier précis. Un chantier avec des postes tous à risque Faible aurait
        besoin de moins. Un chantier rempli d&apos;estimations hasardeuses aurait besoin de beaucoup plus.
      </p>

      <h2>lire les résultats : ce que signifie la courbe en cloche</h2>

      <p>
        La simulation vous donne une distribution de probabilité — une courbe en cloche montrant
        la probabilité de chaque coût total. Voici comment la lire :
      </p>
      <ul>
        <li>
          <strong className="guide__highlight">P50</strong> signifie qu&apos;il y a 50% de chances que
          le coût réel soit inférieur à ce montant. C&apos;est du pile ou face. Pas un devis sûr.
        </li>
        <li>
          <strong className="guide__highlight">P80</strong> signifie 80% de chances que le coût
          réel soit inférieur. C&apos;est le point idéal pour la plupart des artisans. Vous êtes
          protégé contre la majorité des dépassements sans vous exclure du marché.
        </li>
        <li>
          <strong className="guide__highlight">P95</strong> signifie 95% de chances. C&apos;est votre
          chiffre pour &quot;dormir sur vos deux oreilles&quot;. Utilisez-le pour les contrats à prix fixe
          ou les clients qui n&apos;accepteront aucune variation.
        </li>
      </ul>
      <p>
        Le percentile auquel vous devisez dépend du chantier et du client. Un chantier en régie
        avec un bon client ? P50 peut suffire. Une cuisine à prix fixe pour un client qui vous
        tiendra au centime près ? Devisez à P80 ou P95 et protégez-vous.
      </p>

      <h2>erreurs de chiffrage courantes</h2>

      <p>
        Après avoir passé des milliers de devis dans le simulateur, des tendances se dégagent.
        Voici les erreurs qui coûtent le plus cher aux artisans :
      </p>

      <ol>
        <li>
          <strong>Tout marquer en incertitude Faible.</strong> Si vous n&apos;avez pas de devis écrit,
          ce n&apos;est pas Faible. Si vous n&apos;avez jamais réalisé exactement cette prestation,
          ce n&apos;est pas Faible. Soyez honnête avec vous-même.
        </li>
        <li>
          <strong>Oublier les coûts de déplacement et de temps.</strong> Deux heures de route
          par jour à 35 €/heure pendant trois semaines, c&apos;est 1 050 €. C&apos;est de l&apos;argent réel.
          Chiffrez-le.
        </li>
        <li>
          <strong>Ne pas chiffrer les retards.</strong> Météo, livraisons tardives, modifications
          du client. Ce ne sont pas des événements rares. C&apos;est la norme. Votre estimation de durée
          de chantier a aussi besoin de son propre niveau d&apos;incertitude.
        </li>
        <li>
          <strong>Reprendre les prix de l&apos;année dernière.</strong> Les coûts des matériaux
          bougent. Le bois a augmenté. Le cuivre a augmenté. Si vos prix ont six mois, ils sont
          faux.
        </li>
        <li>
          <strong>Deviser pour gagner au lieu de deviser pour gagner de l&apos;argent.</strong> Un
          chantier que vous remportez au mauvais prix est pire qu&apos;un chantier que vous ne
          décrochez pas. Le pire résultat n&apos;est pas de perdre l&apos;appel d&apos;offres. C&apos;est de le
          gagner et de travailler gratuitement.
        </li>
      </ol>

      <h2>mettre tout ensemble</h2>

      <p>
        Voici la méthode. Elle ajoute environ cinq minutes à votre processus de chiffrage :
      </p>
      <ol>
        <li>Listez chaque poste comme vous le faites habituellement.</li>
        <li>Pour chacun, demandez-vous : à quel point suis-je confiant dans ce chiffre ? Attribuez un niveau.</li>
        <li>Ajoutez votre taux journalier, la durée du chantier et les déplacements.</li>
        <li>Lancez la simulation.</li>
        <li>Devisez au P80 pour la plupart des chantiers. Ajustez à la hausse ou à la baisse selon le type de contrat.</li>
      </ol>
      <p>
        Vous n&apos;ajoutez pas une contingence inventée. Vous construisez un devis qui reflète le
        profil de risque réel du chantier réel. C&apos;est la différence entre espérer gagner de
        l&apos;argent et savoir que vous en gagnerez.
      </p>

      <div className="guide__cta">
        <Link href="/fr/estimate/">[ CRÉER VOTRE DEVIS ]</Link>
      </div>
    </div>
  )
}
