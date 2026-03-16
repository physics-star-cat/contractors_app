import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'Küchen-Renovierung Kosten Deutschland 2026 // lowriskquotes',
  description:
    'Realistische Kosten für Küchenrenovierung in Deutschland. Vollständige Kostenaufschlüsselung mit Risikobewertungen für eine sichere Auftragskalkulation.',
  alternates: { canonical: '/de/guides/kuchen-renovierung-kosten/' },
}

export default function KuchenRenovierungKostenPage() {
  return (
    <div className="guide">
      <h1>Küchen-Renovierung Kosten: Aufschlüsselung für Handwerker</h1>

      <p>
        Küchen sind hochwertige Aufträge mit vielen beweglichen Teilen. Sanitär, Elektrik,
        Gas, Tischlerarbeit, Arbeitsplatten, Fliesen, Bodenbelag, Geräte — allein die
        Koordination kann Ihre Marge auffressen, wenn Sie nicht richtig kalkuliert haben.
        Hier erfahren Sie, was Küchen 2026 in Deutschland tatsächlich kosten und wo die
        Risiken versteckt sind.
      </p>

      <h2>typische Kostenaufschlüsselung</h2>

      <p>
        Küchenrenovierung im mittleren Segment für ein typisches Einfamilienhaus. Dies
        setzt einen kompletten Rückbau und Neueinbau voraus, nicht nur den Austausch von
        Fronten.
      </p>

      <ASCIIBox title="Kostenaufschlüsselung Küche">
        <table className="guide__table">
          <thead>
            <tr>
              <th>Position</th>
              <th>Kostenspanne</th>
              <th>Risikostufe</th>
              <th>Hinweise</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Rückbau &amp; Entsorgung</td>
              <td>€600 - €1.200</td>
              <td className="guide__highlight">Niedrig</td>
              <td>Planbar, es sei denn Asbest ist vorhanden</td>
            </tr>
            <tr>
              <td>Küchenmöbel (Lieferung &amp; Montage)</td>
              <td>€4.000 - €12.000</td>
              <td className="guide__highlight">Mittel</td>
              <td>IKEA/Nobilia = Niedrig. Schreinerkiche = Hoch.</td>
            </tr>
            <tr>
              <td>Arbeitsplatten</td>
              <td>€1.000 - €5.000</td>
              <td className="guide__highlight">Mittel - Hoch</td>
              <td>Laminat = Niedrig. Granit/Quarz vor Ort aufmaß = Hoch.</td>
            </tr>
            <tr>
              <td>Sanitärinstallation</td>
              <td>€800 - €1.800</td>
              <td className="guide__highlight">Mittel</td>
              <td>Spüle versetzen erhöht Kosten und Risiko</td>
            </tr>
            <tr>
              <td>Elektroinstallation</td>
              <td>€1.000 - €2.500</td>
              <td className="guide__highlight">Mittel</td>
              <td>Neuer Sicherungskasten oder Teilerneuerung treibt Kosten hoch</td>
            </tr>
            <tr>
              <td>Gas (Kochfeld, Heizungsanschluss)</td>
              <td>€400 - €1.200</td>
              <td className="guide__highlight">Niedrig</td>
              <td>Konzessionierter Installateur. Unkompliziert ohne Umsetzung.</td>
            </tr>
            <tr>
              <td>Fliesen (Rückwand &amp; Boden)</td>
              <td>€1.000 - €3.000</td>
              <td className="guide__highlight">Niedrig</td>
              <td>Standardfliesen = sicher. Aufwändige Muster = Mittel.</td>
            </tr>
            <tr>
              <td>Bodenbelag</td>
              <td>€500 - €1.800</td>
              <td className="guide__highlight">Niedrig</td>
              <td>Vinyl oder Designbelag. Untergrundvorbereitung kann Mehrkosten verursachen.</td>
            </tr>
            <tr>
              <td>Putz- &amp; Malerarbeiten</td>
              <td>€500 - €1.200</td>
              <td className="guide__highlight">Niedrig</td>
              <td>Unkompliziert. Alte Küchen benötigen evtl. mehr Vorbereitung.</td>
            </tr>
            <tr>
              <td>Elektrogeräte</td>
              <td>€1.500 - €6.000</td>
              <td className="guide__highlight">Sicher - Niedrig</td>
              <td>Meist vom Kunden beschafft. Vor Kalkulation bestätigen.</td>
            </tr>
            <tr>
              <td>Container / Entsorgung</td>
              <td>€300 - €600</td>
              <td className="guide__highlight">Sicher</td>
              <td>Festpreis, vorab bestellen</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        Gesamtspanne für eine Küche im mittleren Segment: <span className="guide__highlight">€11.600 -
        €36.300</span>. Die enorme Bandbreite ergibt sich aus der Qualität der Möbel, dem
        Arbeitsplattenmaterial und dem Umfang der Grundrissänderung.
      </p>

      <h2>wo Küchenprojekte das Budget sprengen</h2>

      <ul>
        <li>
          <strong>Arbeitsplatten.</strong> Naturstein-Arbeitsplatten werden nach Montage der
          Schränke aufgemessen und dann außerhalb gefertigt. Wenn die Schablone nicht stimmt
          oder der Stein einen Fehler hat, warten Sie Wochen auf Ersatz. Markieren Sie
          maßgefertigte Arbeitsplatten als Hoch.
        </li>
        <li>
          <strong>Grundrissänderungen.</strong> Spüle versetzen bedeutet Abwasser und Wasser
          verlegen. Kochfeld versetzen bedeutet Gas und Abluft umbauen. Jede Umsetzung ist
          ein weiterer Subunternehmer, ein weiterer Tag, eine weitere Fehlerquelle. Wenn der
          Kunde alles umstellen will, sollten Ihre Sanitär- und Elektrikpositionen mindestens
          Mittel sein.
        </li>
        <li>
          <strong>Lieferzeiten.</strong> Maßgefertigte Möbel, Steinarbeitsplatten und
          Spezialgeräte können 4-8 Wochen dauern. Wenn ein Teil zu spät kommt, verschiebt
          sich Ihr gesamter Zeitplan. Kalkulieren Sie das Risiko von Leerlaufzeiten in Ihr
          Angebot ein oder stellen Sie sicher, dass der Kunde versteht, dass Verzögerungen
          zu seinen Lasten gehen.
        </li>
        <li>
          <strong>Leistungsausweitung.</strong> &quot;Wenn Sie schon mal da sind, können Sie den
          Heizkörper versetzen?&quot; &quot;Eigentlich könnten wir den ganzen Raum neu verputzen.&quot;
          Küchen ziehen Leistungsausweitung an, weil Kunden das Chaos sehen und alles auf
          einmal erledigen wollen. Haben Sie einen klaren Leistungsumfang schriftlich, bevor
          Sie anfangen.
        </li>
      </ul>

      <h2>Küchen mit Zuversicht kalkulieren</h2>

      <p>
        Eine Küche mit Standard-Nobilia-Möbeln, Laminat-Arbeitsplatte und ohne
        Grundrissänderung besteht hauptsächlich aus Niedrig-Unsicherheits-Positionen. Sie
        können nah an Ihrer Basiskalkulation anbieten. Eine Küche mit Schreinereinbau,
        Granitarbeitsplatte und komplettem Grundrissumbau ist voller Hoch-Unsicherheits-
        Positionen. Ihr Aufschlag muss das widerspiegeln.
      </p>
      <p>
        Bewerten Sie jede Position ehrlich, starten Sie die Simulation und bieten Sie bei
        P80 an. Ihr Angebot wird bei riskanten Aufträgen höher und bei einfachen enger sein
        — genau so soll es sein.
      </p>

      <div className="guide__cta">
        <Link href="/de/estimate/">[ KÜCHENAUFTRAG KALKULIEREN ]</Link>
      </div>
    </div>
  )
}
