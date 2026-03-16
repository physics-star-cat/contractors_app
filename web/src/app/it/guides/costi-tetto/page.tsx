import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'Costi tetto Italia 2026 // lowriskquotes',
  description:
    'Costi realistici per lavori sul tetto per artigiani in Italia. Rifacimento completo, tetto piano, riparazioni e lattoneria — con livelli di rischio per preventivare senza rimetterci.',
  alternates: { canonical: '/it/guides/costi-tetto/' },
}

export default function CostiTettoPage() {
  return (
    <div className="guide">
      <h1>costi del tetto: preventivare un cantiere che non si vede finché non ci si sale</h1>

      <p>
        Il tetto è per natura un ambito ad alto rischio per la preventivazione. Fissate il prezzo
        da terra, poi scoprite i problemi in quota. Listelli marci, travi inflesse, guaina
        impermeabilizzante che si sbriciola al tocco. Il ponteggio è montato, il contatore gira,
        e ogni sorpresa costa soldi.
      </p>
      <p>
        Questa pagina dettaglia quanto costano realmente i lavori sul tetto in Italia nel 2026
        e dove si nasconde l&apos;incertezza su ogni voce.
      </p>

      <h2>fasce di prezzo per tipo di lavoro</h2>

      <p>
        Prezzi indicativi per lavori comuni di copertura su una casa unifamiliare standard. I
        costi reali dipendono dalla pendenza, dall&apos;accessibilità, dalla scelta dei materiali e
        da quello che trovate una volta rimossa la vecchia copertura.
      </p>

      <ASCIIBox title="Costi per tipo di lavoro — tetto">
        <table className="guide__table">
          <thead>
            <tr>
              <th>Tipo di lavoro</th>
              <th>Costo tipico</th>
              <th>Durata</th>
              <th>Note</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Rifacimento completo (tegole)</td>
              <td>8.000 € - 18.000 €</td>
              <td>5-12 giorni</td>
              <td>Rimozione e rifacimento. Il prezzo varia con lo stato della struttura.</td>
            </tr>
            <tr>
              <td>Tetto piano (guaina/EPDM)</td>
              <td>2.500 € - 6.000 €</td>
              <td>2-5 giorni</td>
              <td>Per sezione di 20 m². Lo stato del sottofondo è l&apos;incognita.</td>
            </tr>
            <tr>
              <td>Riparazione tetto</td>
              <td>300 € - 2.000 €</td>
              <td>0,5-2 giorni</td>
              <td>Da tegole spostate a riparazioni di conversa. Fascia ampia.</td>
            </tr>
            <tr>
              <td>Grondaie e pluviali</td>
              <td>1.500 € - 4.000 €</td>
              <td>2-3 giorni</td>
              <td>Sostituzione rame o PVC. Teste di puntone marce = sovracosto.</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <h2>esempio concreto: rifacimento completo su villetta</h2>

      <p>
        Villetta degli anni &apos;80 in provincia di Milano. Tegole in cemento originali. Guaina
        degradata, alcuni listelli sospetti. Superficie di copertura circa 90 m². Il cliente
        vuole tegole in laterizio e colmo a secco.
      </p>

      <ASCIIBox title="Dettaglio costi — rifacimento tetto">
        <table className="guide__table">
          <thead>
            <tr>
              <th>Voce</th>
              <th>Fascia</th>
              <th>Livello di rischio</th>
              <th>Note</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ponteggio</td>
              <td>1.200 € - 2.000 €</td>
              <td className="guide__highlight">Basso</td>
              <td>Chiedete un preventivo fisso. Sforamento tempi = noleggio più lungo.</td>
            </tr>
            <tr>
              <td>Rimozione tegole e guaina esistenti</td>
              <td>800 € - 1.400 €</td>
              <td className="guide__highlight">Basso</td>
              <td>Manodopera prevedibile. Vecchi chiodi e malta rallentano.</td>
            </tr>
            <tr>
              <td>Sostituzione listelli</td>
              <td>600 € - 1.200 €</td>
              <td className="guide__highlight">Medio</td>
              <td>Rilistellatura completa standard. Quelli marci si rompono allo smontaggio.</td>
            </tr>
            <tr>
              <td>Guaina traspirante</td>
              <td>500 € - 800 €</td>
              <td className="guide__highlight">Basso</td>
              <td>Costo materiale stabile. Posa inclusa nella copertura.</td>
            </tr>
            <tr>
              <td>Riparazioni struttura (travi/arcarecci)</td>
              <td>0 € - 3.000 €</td>
              <td className="guide__highlight">Alto</td>
              <td>La grande incognita. Può essere zero. Possono essere otto travi.</td>
            </tr>
            <tr>
              <td>Tegole in laterizio (fornitura)</td>
              <td>2.000 € - 3.500 €</td>
              <td className="guide__highlight">Medio</td>
              <td>Tegole portoghesi ~1 €/pezzo. Ardesia naturale 3-4x più costosa.</td>
            </tr>
            <tr>
              <td>Manodopera posa</td>
              <td>1.800 € - 3.000 €</td>
              <td className="guide__highlight">Basso</td>
              <td>La vostra squadra. Il maltempo è la variabile principale.</td>
            </tr>
            <tr>
              <td>Colmo e bordi a secco</td>
              <td>400 € - 800 €</td>
              <td className="guide__highlight">Basso</td>
              <td>Fissaggio meccanico. Più rapido della sigillatura con malta.</td>
            </tr>
            <tr>
              <td>Lattoneria (scossaline/converse)</td>
              <td>600 € - 1.400 €</td>
              <td className="guide__highlight">Medio</td>
              <td>Il rame fluttua. Controllate le quotazioni prima di preventivare.</td>
            </tr>
            <tr>
              <td>Cassone e smaltimento rifiuti</td>
              <td>500 € - 900 €</td>
              <td className="guide__highlight">Basso</td>
              <td>Le vecchie tegole sono pesanti. Prevedete almeno due cassoni.</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        Fascia totale per un rifacimento completo: <span className="guide__highlight">8.400 € -
        18.000 €</span>. Questa differenza di 9.600 € non è approssimazione — è incertezza reale.
        La voce riparazioni struttura da sola può far variare il cantiere di 3.000 €. Tutto il
        resto è ragionevolmente prevedibile se conoscete i vostri prezzi dai fornitori e il
        ritmo della vostra squadra.
      </p>

      <h2>dove i cantieri di copertura sforano</h2>

      <p>
        Quattro fattori di rischio dominano i preventivi di copertura:
      </p>
      <ul>
        <li>
          <strong>La struttura nascosta.</strong> Non potete vedere lo stato delle travi da terra.
          Un&apos;ispezione con drone o dal sottotetto aiuta, ma non saprete con certezza fino a che
          le tegole non saranno rimosse. Se il tetto è precedente al 1990 e non è mai stato
          toccato, prevedete almeno qualche intervento strutturale e segnatelo come Alto.
        </li>
        <li>
          <strong>Il ponteggio.</strong> Il ponteggio in sé è prevedibile. Il rischio è la durata.
          Se maltempo o riparazioni strutturali aggiungono tre giorni al cantiere, pagate una
          settimana di noleggio in più. Includetelo nella voce ponteggio.
        </li>
        <li>
          <strong>Le finestre meteo.</strong> Un tetto aperto non può restare esposto alla pioggia
          tutta la notte. Vi serve una finestra meteo realistica per la fase di rimozione e
          impermeabilizzazione. In inverno al nord, questa finestra è più corta. Preventivate di
          conseguenza o accettate il rischio.
        </li>
        <li>
          <strong>La volatilità dei prezzi dei materiali.</strong> Rame, legname e tegole hanno
          tutti subito variazioni brusche negli ultimi anni. Un preventivo che resta otto settimane
          in attesa di accettazione potrebbe necessitare un aggiornamento dei prezzi. Mettete una
          data di validità sui vostri preventivi — 30 giorni al massimo.
        </li>
      </ul>

      <h2>preventivare il tetto con intelligenza</h2>

      <p>
        Ponteggio, guaina e la vostra manodopera sono tutti a incertezza Bassa. Conoscete questi
        numeri. Le riparazioni strutturali e la lattoneria sono dove il rischio si nasconde.
        Invece di gonfiare ogni voce con una contingenza fissa, valutate le voci rischiose
        onestamente e simulate la fascia. Il vostro preventivo mostra allora al cliente una
        fascia realistica — e protegge il vostro margine sulle voci che sforano davvero.
      </p>

      <div className="guide__cta">
        <Link href="/it/estimate/">[ PREVENTIVA IL TUO TETTO ]</Link>
      </div>
    </div>
  )
}
