import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'Come fare un preventivo da artigiano // lowriskquotes',
  description:
    'Guida pratica per preventivare i tuoi cantieri con precisione. Scopri perché gli artigiani sottovalutano i preventivi, come valutare il rischio su ogni voce e come la simulazione Monte Carlo costruisce preventivi più sicuri.',
  alternates: { canonical: '/it/guides/come-fare-un-preventivo/' },
}

export default function ComeFareUnPreventivoPage() {
  return (
    <div className="guide">
      <h1>come fare un preventivo (senza rimetterci)</h1>

      <p>
        La maggior parte degli artigiani ha già perso soldi su un cantiere. Non perché hanno
        lavorato male — perché hanno preventivato male. Hanno fissato il prezzo pensando allo
        scenario migliore, ottenuto il contratto, poi guardato il margine sciogliersi quando la
        realtà si è imposta.
      </p>
      <p>
        Questa guida spiega perché succede e come rimediare con un metodo che richiede solo
        cinque minuti in più rispetto al vostro approccio abituale.
      </p>

      <h2>perché gli artigiani sottovalutano i preventivi</h2>

      <p>
        Tre forze spingono ogni preventivo verso il basso:
      </p>

      <p>
        <strong className="guide__highlight">Il bias dell&apos;ottimismo.</strong> Immaginate il
        cantiere che fila liscio. L&apos;intonaco viene via pulito. Le travi sono sane. Il fornitore
        consegna in tempo. Preventivate per la versione del cantiere dove nulla va storto — ma
        questa versione non si verifica quasi mai.
      </p>
      <p>
        <strong className="guide__highlight">La pressione competitiva.</strong> Sapete che il
        cliente ha chiesto tre preventivi. Allora tagliate i costi, arrotondate per difetto,
        stringete i prezzi. Il vostro preventivo è tirato. Troppo tirato. Ottenete il lavoro ma
        perdete il profitto.
      </p>
      <p>
        <strong className="guide__highlight">Le stime puntuali.</strong> Annotate un solo numero
        per ogni voce: piastrelle 2.400 €. Non è una stima. È un&apos;ipotesi travestita da fatto.
        I costi reali sono fasce. Le piastrelle possono costare 2.100 € se il vostro fornitore
        abituale ha disponibilità, o 2.900 € se non ce l&apos;ha e ordinate da un altro.
      </p>

      <h2>i cinque livelli di incertezza</h2>

      <p>
        Ogni voce del preventivo non porta lo stesso rischio. Un cassone di macerie dal
        noleggiatore che usate da dieci anni non è la stessa cosa di un box doccia su misura
        da un vetraio trovato la settimana scorsa. Trattarli allo stesso modo è l&apos;errore
        fondamentale della percentuale fissa di contingenza.
      </p>
      <p>
        LowRiskQuotes usa cinque livelli di incertezza. Ecco cosa significa ciascuno in pratica:
      </p>

      <ASCIIBox title="Livelli di incertezza">
        <table className="guide__table">
          <thead>
            <tr>
              <th>Livello</th>
              <th>Fascia</th>
              <th>Esempio pratico</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="guide__highlight">Certo</td>
              <td>+/- 2%</td>
              <td>Noleggio cassone, preventivo scritto di un fornitore a prezzo fisso</td>
            </tr>
            <tr>
              <td className="guide__highlight">Basso</td>
              <td>+/- 8%</td>
              <td>Materiali dal vostro fornitore abituale, ferramenta standard</td>
            </tr>
            <tr>
              <td className="guide__highlight">Medio</td>
              <td>+/- 15%</td>
              <td>Subappaltatore con cui avete lavorato ma non di recente</td>
            </tr>
            <tr>
              <td className="guide__highlight">Alto</td>
              <td>+/- 25%</td>
              <td>Nuovo subappaltatore, materiali speciali, incognite del cantiere</td>
            </tr>
            <tr>
              <td className="guide__highlight">Stima azzardata</td>
              <td>+/- 40%</td>
              <td>Nessun sopralluogo, ambito sconosciuto, &quot;dovrebbe essere circa...&quot;</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        La domanda chiave per ogni voce è: <em>quanto sono sicuro che questo numero sia
        giusto?</em> Non quanto vorreste esserlo. Quanto lo siete realmente, sulla base di
        prove. Avete un preventivo scritto? È Certo. State stimando da un cantiere fatto due
        anni fa in un&apos;altra regione? È Alto, nel migliore dei casi.
      </p>

      <h2>esempio concreto: ristrutturazione bagno</h2>

      <p>
        Prendiamo un preventivo reale. La signora Rossi vuole rifare il bagno — demolizione,
        nuove piastrelle, nuovi sanitari, box doccia su misura, idraulica, elettricità e
        smaltimento macerie. La vostra stima base è di 7.700 €.
      </p>

      <ASCIIBox title="Voci di costo">
        <table className="guide__table">
          <thead>
            <tr>
              <th>Voce</th>
              <th>Stima</th>
              <th>Livello</th>
              <th>Perché</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Piastrelle pavimento e pareti</td>
              <td>2.400 €</td>
              <td className="guide__highlight">Basso</td>
              <td>Il vostro fornitore abituale, avete già preventivato materiale simile</td>
            </tr>
            <tr>
              <td>Sanitari (lavabo, WC, rubinetteria)</td>
              <td>1.000 €</td>
              <td className="guide__highlight">Medio</td>
              <td>Il cliente ha scelto fascia media ma non ha ancora confermato</td>
            </tr>
            <tr>
              <td>Box doccia su misura</td>
              <td>1.800 €</td>
              <td className="guide__highlight">Alto</td>
              <td>Nuovo vetraio, dimensioni non standard, mai ordinato da loro</td>
            </tr>
            <tr>
              <td>Idraulica (subappaltatore)</td>
              <td>1.400 €</td>
              <td className="guide__highlight">Medio</td>
              <td>Marco è affidabile ma non ha ancora preventivato questo cantiere</td>
            </tr>
            <tr>
              <td>Elettricista</td>
              <td>750 €</td>
              <td className="guide__highlight">Basso</td>
              <td>Impianto elettrico standard da bagno, il vostro elettricista di fiducia</td>
            </tr>
            <tr>
              <td>Cassone macerie</td>
              <td>350 €</td>
              <td className="guide__highlight">Certo</td>
              <td>Prezzo fisso dal vostro noleggiatore abituale</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        Se avete preventivato 7.700 € senza margine, state preventivando per lo scenario in cui
        ogni voce ricade esattamente sulla stima. È il risultato più improbabile. È come
        scommettere che sei monete cadano tutte su testa.
      </p>
      <p>
        Passate questi numeri in una simulazione Monte Carlo e ottenete una distribuzione. La
        simulazione esegue migliaia di versioni di questo cantiere, estraendo ogni volta costi
        all&apos;interno della fascia di incertezza che avete definito. Poiché gli sforamenti sono
        più frequenti dei risparmi, la simulazione è sbilanciata verso l&apos;alto — esattamente
        come nella realtà.
      </p>

      <ASCIIBox title="Risultato della simulazione">
        <p style={{ fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '8px' }}>
          Stima base: <span className="guide__highlight">7.700 €</span>
        </p>
        <p style={{ fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '8px' }}>
          P50 (testa o croce): <span className="guide__highlight">8.090 €</span>
        </p>
        <p style={{ fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '8px' }}>
          P80 (preventivo raccomandato): <span className="guide__highlight">8.640 €</span>
        </p>
        <p style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
          P95 (margine di sicurezza massimo): <span className="guide__highlight">9.410 €</span>
        </p>
      </ASCIIBox>

      <p>
        La differenza tra 7.700 € e 8.640 € è di 940 € — circa il 12%. Ma non è una
        contingenza fissa del 12%. È un margine calcolato in funzione dei rischi specifici di
        questo cantiere preciso. Un cantiere con voci tutte a rischio Basso avrebbe bisogno di
        meno. Un cantiere pieno di stime azzardate avrebbe bisogno di molto di più.
      </p>

      <h2>leggere i risultati: cosa significa la curva a campana</h2>

      <p>
        La simulazione vi dà una distribuzione di probabilità — una curva a campana che mostra
        la probabilità di ogni costo totale. Ecco come leggerla:
      </p>
      <ul>
        <li>
          <strong className="guide__highlight">P50</strong> significa che c&apos;è il 50% di
          probabilità che il costo reale sia inferiore a questo importo. È testa o croce. Non è
          un preventivo sicuro.
        </li>
        <li>
          <strong className="guide__highlight">P80</strong> significa l&apos;80% di probabilità che
          il costo reale sia inferiore. È il punto ideale per la maggior parte degli artigiani.
          Siete protetti dalla maggior parte degli sforamenti senza escludervi dal mercato.
        </li>
        <li>
          <strong className="guide__highlight">P95</strong> significa il 95% di probabilità. È il
          numero per &quot;dormire sonni tranquilli&quot;. Usatelo per contratti a prezzo fisso o
          clienti che non accetteranno alcuna variazione.
        </li>
      </ul>
      <p>
        Il percentile a cui preventivate dipende dal cantiere e dal cliente. Un lavoro in
        economia con un buon cliente? P50 può bastare. Una cucina a prezzo fisso per un cliente
        che vi terrà al centesimo? Preventivate a P80 o P95 e proteggetevi.
      </p>

      <h2>errori comuni di preventivazione</h2>

      <p>
        Dopo aver passato migliaia di preventivi nel simulatore, emergono delle tendenze. Ecco
        gli errori che costano di più agli artigiani:
      </p>

      <ol>
        <li>
          <strong>Segnare tutto come incertezza Bassa.</strong> Se non avete un preventivo scritto,
          non è Basso. Se non avete mai eseguito esattamente quella lavorazione, non è Basso.
          Siate onesti con voi stessi.
        </li>
        <li>
          <strong>Dimenticare i costi di spostamento e tempo.</strong> Due ore di viaggio al giorno
          a 35 €/ora per tre settimane sono 1.050 €. Sono soldi veri. Preventivate.
        </li>
        <li>
          <strong>Non preventivare i ritardi.</strong> Maltempo, consegne in ritardo, modifiche del
          cliente. Non sono eventi rari. Sono la norma. La vostra stima della durata del cantiere
          ha bisogno del suo livello di incertezza.
        </li>
        <li>
          <strong>Usare i prezzi dell&apos;anno scorso.</strong> I costi dei materiali cambiano. Il
          legno è aumentato. Il rame è aumentato. Se i vostri prezzi hanno sei mesi, sono sbagliati.
        </li>
        <li>
          <strong>Preventivare per vincere invece di preventivare per guadagnare.</strong> Un
          cantiere che ottenete al prezzo sbagliato è peggio di un cantiere che non ottenete. Il
          peggior risultato non è perdere la gara. È vincerla e lavorare gratis.
        </li>
      </ol>

      <h2>mettere tutto insieme</h2>

      <p>
        Ecco il metodo. Aggiunge circa cinque minuti al vostro processo di preventivazione:
      </p>
      <ol>
        <li>Elencate ogni voce come fate di solito.</li>
        <li>Per ciascuna, chiedetevi: quanto sono sicuro di questo numero? Assegnate un livello.</li>
        <li>Aggiungete la vostra tariffa giornaliera, la durata del cantiere e gli spostamenti.</li>
        <li>Avviate la simulazione.</li>
        <li>Preventivate al P80 per la maggior parte dei cantieri. Aggiustate al rialzo o al ribasso in base al tipo di contratto.</li>
      </ol>
      <p>
        Non state aggiungendo una contingenza inventata. State costruendo un preventivo che
        riflette il profilo di rischio reale del cantiere reale. È la differenza tra sperare di
        guadagnare e sapere che guadagnerete.
      </p>

      <div className="guide__cta">
        <Link href="/it/estimate/">[ CREA IL TUO PREVENTIVO ]</Link>
      </div>
    </div>
  )
}
