import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'Costi ristrutturazione bagno Italia 2026 // lowriskquotes',
  description:
    'Costi realistici di ristrutturazione bagno per artigiani in Italia. Dettaglio voce per voce con livelli di rischio per preventivare i cantieri senza rimetterci.',
  alternates: { canonical: '/it/guides/costi-ristrutturazione-bagno/' },
}

export default function CostiRistrutturazioneBagnoPage() {
  return (
    <div className="guide">
      <h1>costi di ristrutturazione bagno: quello che l&apos;artigiano deve davvero sapere</h1>

      <p>
        Il bagno è il pane quotidiano di molti artigiani edili. È anche dove molti soldi
        vengono lasciati sul tavolo. Il capitolato sembra semplice — demolizione, rifacimento
        impianti, piastrellatura, posa. Ma i costi nascosti si accumulano in fretta: travetti
        marci dietro la vasca, amianto nella vecchia colla, un cliente che cambia le piastrelle
        tre settimane dopo l&apos;inizio.
      </p>
      <p>
        Questa pagina dettaglia i veri costi di ristrutturazione bagno nel 2026 e mostra dove
        si nasconde il rischio su ogni voce.
      </p>

      <h2>dettaglio tipico dei costi</h2>

      <p>
        Questi sono i costi di ristrutturazione bagno di fascia media per un bagno standard in
        Italia (circa 5-6 m²). Cantieri economici e di alta gamma si collocheranno al di sotto
        e al di sopra di questi importi.
      </p>

      <ASCIIBox title="Dettaglio costi — bagno">
        <table className="guide__table">
          <thead>
            <tr>
              <th>Voce</th>
              <th>Fascia di prezzo</th>
              <th>Livello di rischio</th>
              <th>Note</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Demolizione e smaltimento</td>
              <td>500 € - 1.000 €</td>
              <td className="guide__highlight">Medio</td>
              <td>Dipende da cosa trovate dietro le pareti</td>
            </tr>
            <tr>
              <td>Idraulica</td>
              <td>1.000 € - 1.800 €</td>
              <td className="guide__highlight">Medio</td>
              <td>Spostare gli scarichi = più caro. Stessa posizione = meno.</td>
            </tr>
            <tr>
              <td>Impianto elettrico</td>
              <td>500 € - 1.000 €</td>
              <td className="guide__highlight">Basso</td>
              <td>Zone standard CEI 64-8. Riscaldamento a pavimento aggiunge 400 €+.</td>
            </tr>
            <tr>
              <td>Piastrelle pavimento e pareti</td>
              <td>1.500 € - 3.000 €</td>
              <td className="guide__highlight">Basso - Medio</td>
              <td>Grande formato = più tagli e sfridi</td>
            </tr>
            <tr>
              <td>Sanitari</td>
              <td>800 € - 2.500 €</td>
              <td className="guide__highlight">Medio</td>
              <td>Fornitura del cliente = rischio di ritardo più elevato</td>
            </tr>
            <tr>
              <td>Box doccia / parete vetro</td>
              <td>400 € - 2.200 €</td>
              <td className="guide__highlight">Alto</td>
              <td>Standard da negozio = Basso. Vetro su misura = Alto.</td>
            </tr>
            <tr>
              <td>Intonaco / cartongesso</td>
              <td>400 € - 800 €</td>
              <td className="guide__highlight">Basso</td>
              <td>Semplice, salvo pareti in cattivo stato</td>
            </tr>
            <tr>
              <td>Cassone / smaltimento macerie</td>
              <td>300 € - 500 €</td>
              <td className="guide__highlight">Certo</td>
              <td>Fissate un prezzo in anticipo</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        Fascia totale per un bagno di fascia media: <span className="guide__highlight">5.400 € -
        12.800 €</span>. Questa variazione importante è dovuta principalmente ai sanitari scelti
        dal cliente e a cosa si nasconde dietro le vecchie piastrelle.
      </p>

      <h2>dove i bagni sforano</h2>

      <p>
        I maggiori sforamenti di budget sui bagni vengono da tre fonti:
      </p>
      <ul>
        <li>
          <strong>Danni nascosti.</strong> Travetti marci, umidità nelle pareti, vecchie
          tubazioni in piombo da sostituire. Lo scoprirete solo demolendo. Se c&apos;è la minima
          possibilità di problemi strutturali, segnate quelle voci in incertezza Alta.
        </li>
        <li>
          <strong>Modifiche del cliente.</strong> Hanno visto qualcosa su Instagram. Le piastrelle
          che volevano sono esaurite. Vogliono spostare il WC sull&apos;altra parete. Ogni modifica in
          corso d&apos;opera costa tempo e denaro. Preventivate i sanitari almeno in incertezza Media,
          a meno che il cliente abbia già comprato tutto.
        </li>
        <li>
          <strong>Elementi su misura.</strong> Box doccia personalizzati, mobili lavabo fuori
          standard, piastrelle importate con sei settimane di attesa. È territorio Alto o Stima
          azzardata. Se è fatto su misura, partite dal presupposto che qualcosa non andrà bene
          al primo tentativo.
        </li>
      </ul>

      <h2>preventivare i bagni con intelligenza</h2>

      <p>
        Invece di aggiungere una contingenza fissa del 10% al vostro preventivo per il bagno,
        valutate ogni voce onestamente. Il cassone è Certo. Il vostro elettricista di fiducia è
        Basso. Quel box doccia su misura da un nuovo vetraio è Alto. Passate tutto nella
        simulazione e ottenete un preventivo che copre i rischi reali — non una percentuale
        tirata a indovinare.
      </p>

      <div className="guide__cta">
        <Link href="/it/estimate/">[ PREVENTIVA IL TUO BAGNO ]</Link>
      </div>
    </div>
  )
}
