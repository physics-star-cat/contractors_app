import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'Costi ristrutturazione cucina Italia 2026 // lowriskquotes',
  description:
    'Costi realistici di ristrutturazione cucina per artigiani in Italia. Dettaglio completo voce per voce con livelli di rischio per preventivare le cucine con precisione.',
  alternates: { canonical: '/it/guides/costi-ristrutturazione-cucina/' },
}

export default function CostiRistrutturazioneCucinaPage() {
  return (
    <div className="guide">
      <h1>costi di ristrutturazione cucina: il dettaglio dell&apos;artigiano</h1>

      <p>
        Le cucine sono cantieri ad alto valore con molte maestranze coinvolte. Idraulica,
        elettricità, gas, falegnameria, piani di lavoro, piastrelle, pavimento, elettrodomestici
        — il coordinamento da solo può mangiare il vostro margine se non avete preventivato
        correttamente. Ecco quanto costano realmente le cucine in Italia nel 2026 e dove si
        nascondono i rischi.
      </p>

      <h2>dettaglio tipico dei costi</h2>

      <p>
        Ristrutturazione cucina di fascia media per una casa standard in Italia. Questo presuppone
        una demolizione completa e un rifacimento, non una semplice sostituzione delle ante.
      </p>

      <ASCIIBox title="Dettaglio costi — cucina">
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
              <td>600 € - 1.200 €</td>
              <td className="guide__highlight">Basso</td>
              <td>Prevedibile, salvo presenza di amianto</td>
            </tr>
            <tr>
              <td>Mobili cucina (fornitura e posa)</td>
              <td>4.000 € - 12.000 €</td>
              <td className="guide__highlight">Medio</td>
              <td>Cucina componibile standard = Basso. Falegnameria su misura = Alto.</td>
            </tr>
            <tr>
              <td>Piani di lavoro</td>
              <td>1.000 € - 4.500 €</td>
              <td className="guide__highlight">Medio - Alto</td>
              <td>Laminato = Basso. Granito/quarzo sagomato in opera = Alto.</td>
            </tr>
            <tr>
              <td>Idraulica</td>
              <td>800 € - 1.500 €</td>
              <td className="guide__highlight">Medio</td>
              <td>Spostare il lavello = più costi e rischi</td>
            </tr>
            <tr>
              <td>Impianto elettrico</td>
              <td>1.000 € - 2.000 €</td>
              <td className="guide__highlight">Medio</td>
              <td>Adeguamento CEI 64-8 o rifacimento completo</td>
            </tr>
            <tr>
              <td>Gas (piano cottura, caldaia)</td>
              <td>400 € - 1.000 €</td>
              <td className="guide__highlight">Basso</td>
              <td>Tecnico abilitato. Semplice se non si sposta nulla.</td>
            </tr>
            <tr>
              <td>Piastrelle (paraschizzi e pavimento)</td>
              <td>1.000 € - 2.500 €</td>
              <td className="guide__highlight">Basso</td>
              <td>Piastrelle metro standard = certo. Disegni complessi = Medio.</td>
            </tr>
            <tr>
              <td>Pavimentazione</td>
              <td>500 € - 1.500 €</td>
              <td className="guide__highlight">Basso</td>
              <td>LVT o vinilico. La preparazione del sottofondo può aggiungere costi.</td>
            </tr>
            <tr>
              <td>Intonaco e pittura</td>
              <td>500 € - 1.000 €</td>
              <td className="guide__highlight">Basso</td>
              <td>Semplice. Le vecchie cucine possono richiedere più preparazione.</td>
            </tr>
            <tr>
              <td>Elettrodomestici</td>
              <td>1.500 € - 5.000 €</td>
              <td className="guide__highlight">Certo - Basso</td>
              <td>Generalmente acquistati dal cliente. Confermate prima di preventivare.</td>
            </tr>
            <tr>
              <td>Cassone / rifiuti</td>
              <td>350 € - 600 €</td>
              <td className="guide__highlight">Certo</td>
              <td>Prezzo fisso, prenotate in anticipo</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        Fascia totale per una cucina di fascia media: <span className="guide__highlight">11.650 € -
        32.800 €</span>. La variazione enorme si spiega con la qualità dei mobili, il materiale del
        piano di lavoro e l&apos;entità delle modifiche di layout.
      </p>

      <h2>dove le cucine fanno esplodere i budget</h2>

      <ul>
        <li>
          <strong>I piani di lavoro.</strong> I piani in pietra sagomati vengono misurati dopo la
          posa dei mobili, poi fabbricati fuori sede. Se la sagoma è sbagliata o la pietra ha un
          difetto, aspettate settimane per la sostituzione. Segnate i piani su misura in incertezza
          Alta.
        </li>
        <li>
          <strong>Le modifiche di layout.</strong> Spostare il lavello significa spostare scarichi
          e alimentazioni. Spostare il piano cottura significa spostare gas e aspirazione. Ogni
          spostamento è un subappaltatore in più, un giorno in più, un punto di rischio in più.
          Se il cliente vuole spostare tutto, le vostre stime di idraulica ed elettricità devono
          essere almeno in Medio.
        </li>
        <li>
          <strong>I tempi di consegna.</strong> Mobili su misura, piani in pietra ed
          elettrodomestici specifici possono richiedere 4-8 settimane. Se un elemento è in ritardo,
          tutto il vostro programma slitta. Includete il rischio di fermo nel preventivo o
          assicuratevi che il cliente capisca che i ritardi sono a suo carico.
        </li>
        <li>
          <strong>Lo slittamento dell&apos;ambito.</strong> &quot;Già che siete qui, potete spostare
          quel termosifone?&quot; &quot;In realtà, potete rifare l&apos;intonaco di tutta la stanza?&quot;
          Le cucine attirano lo slittamento dell&apos;ambito perché i clienti vedono il cantiere e
          vogliono fare tutto insieme. Abbiate un ambito chiaro per iscritto prima di iniziare.
        </li>
      </ul>

      <h2>preventivare le cucine con fiducia</h2>

      <p>
        Una cucina con mobili componibili standard, piano in laminato e nessuna modifica di
        layout è un cantiere essenzialmente a incertezza Bassa. Potete preventivare vicino alla
        stima base. Una cucina con falegnameria su misura, piano in granito e rifacimento completo
        del layout è piena di voci a incertezza Alta. La vostra contingenza deve tenerne conto.
      </p>
      <p>
        Valutate ogni voce onestamente, avviate la simulazione e preventivate al P80. Il vostro
        preventivo sarà più alto sui cantieri rischiosi e più stretto su quelli semplici —
        è esattamente così che dovrebbe funzionare.
      </p>

      <div className="guide__cta">
        <Link href="/it/estimate/">[ PREVENTIVA LA TUA CUCINA ]</Link>
      </div>
    </div>
  )
}
