import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'Wie man einen Auftrag als Handwerker kalkuliert // lowriskquotes',
  description:
    'Ein praktischer Leitfaden zur genauen Auftragskalkulation. Erfahren Sie, warum Handwerker zu niedrig kalkulieren, wie Sie das Risiko jeder Position bewerten und wie Monte-Carlo-Simulation sicherere Angebote erstellt.',
  alternates: { canonical: '/de/guides/wie-man-einen-auftrag-kalkuliert/' },
}

export default function WieManEinenAuftragKalkuliertPage() {
  return (
    <div className="guide">
      <h1>wie man einen Auftrag kalkuliert (ohne draufzuzahlen)</h1>

      <p>
        Die meisten Handwerker haben schon einmal bei einem Auftrag Geld verloren. Nicht weil
        sie schlecht gearbeitet haben — sondern weil sie falsch kalkuliert haben. Sie haben auf
        Basis des besten Falls kalkuliert, den Auftrag bekommen und dann zugesehen, wie ihre
        Marge verschwand, als die Realität kam.
      </p>
      <p>
        Dieser Ratgeber erklärt, warum das passiert, und wie Sie es mit einer Methode beheben,
        die etwa fünf Minuten länger dauert als Ihr bisheriger Ansatz.
      </p>

      <h2>warum Handwerker zu niedrig kalkulieren</h2>

      <p>
        Drei Kräfte drücken jedes Angebot nach unten:
      </p>

      <p>
        <strong className="guide__highlight">Optimismus-Verzerrung.</strong> Sie stellen sich
        vor, dass der Auftrag reibungslos läuft. Der Putz geht sauber ab. Die Balken sind
        solide. Der Lieferant liefert pünktlich. Sie kalkulieren für die Version des Auftrags,
        bei der nichts schiefgeht — obwohl diese Version fast nie eintritt.
      </p>
      <p>
        <strong className="guide__highlight">Wettbewerbsdruck.</strong> Sie wissen, dass der
        Kunde drei Angebote hat. Also spitzen Sie den Bleistift, kürzen überall, runden
        alles ab. Jetzt ist Ihr Angebot knapp. Zu knapp. Sie gewinnen den Auftrag und
        verlieren den Gewinn.
      </p>
      <p>
        <strong className="guide__highlight">Einzelpunkt-Schätzungen.</strong> Sie schreiben
        eine Zahl für jede Position: Fliesen €2.000. Das ist keine Kalkulation. Das ist eine
        Vermutung, die als Fakt verkleidet ist. Echte Kosten sind Spannen. Fliesen könnten
        €1.800 kosten, wenn Ihr Stammlieferant Ware hat, oder €2.400, wenn nicht und Sie bei
        einem neuen Händler bestellen müssen.
      </p>

      <h2>die fünf Unsicherheitsstufen</h2>

      <p>
        Nicht jede Position in Ihrer Kalkulation birgt das gleiche Risiko. Eine
        Containerstellung beim Entsorger, den Sie seit Jahren kennen, ist nicht dasselbe wie
        eine maßgefertigte Glasdusche von einem Betrieb, den Sie letzte Woche gefunden haben.
        Beides gleich zu behandeln ist der Kernfehler bei pauschalen Aufschlägen.
      </p>
      <p>
        LowRiskQuotes verwendet fünf Unsicherheitsstufen. Das bedeuten sie in der Praxis:
      </p>

      <ASCIIBox title="Unsicherheitsstufen">
        <table className="guide__table">
          <thead>
            <tr>
              <th>Stufe</th>
              <th>Spanne</th>
              <th>Praxisbeispiel</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="guide__highlight">Sicher</td>
              <td>+/- 2%</td>
              <td>Containerstellung, schriftliches Festpreisangebot vom Lieferanten</td>
            </tr>
            <tr>
              <td className="guide__highlight">Niedrig</td>
              <td>+/- 8%</td>
              <td>Material vom Stammlieferanten, Standardarmaturen</td>
            </tr>
            <tr>
              <td className="guide__highlight">Mittel</td>
              <td>+/- 15%</td>
              <td>Subunternehmer, den Sie kennen, aber nicht kürzlich beauftragt haben</td>
            </tr>
            <tr>
              <td className="guide__highlight">Hoch</td>
              <td>+/- 25%</td>
              <td>Erstmalige Zusammenarbeit, Spezialmaterial, unbekannte Bausubstanz</td>
            </tr>
            <tr>
              <td className="guide__highlight">Grobe Schätzung</td>
              <td>+/- 40%</td>
              <td>Keine Begehung gemacht, unbekannter Umfang, &quot;müsste ungefähr...&quot;</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        Die Schlüsselfrage für jede Position lautet: <em>Wie sicher bin ich, dass diese Zahl
        stimmt?</em> Nicht wie sicher Sie sein wollen. Wie sicher Sie tatsächlich sind,
        basierend auf Fakten. Haben Sie ein schriftliches Angebot? Das ist Sicher. Schätzen
        Sie anhand eines Auftrags, den Sie vor zwei Jahren in einer anderen Stadt gemacht
        haben? Das ist bestenfalls Hoch.
      </p>

      <h2>Rechenbeispiel: Badezimmer-Renovierung</h2>

      <p>
        Gehen wir ein echtes Angebot durch. Frau Müller möchte ihr Bad erneuern — Rückbau,
        neu fliesen, neue Sanitärobjekte, maßgefertigte Glasdusche, neue Sanitärinstallation,
        Elektrik und ein Container für den Abfall. Ihre Basiskalkulation ergibt €7.200.
      </p>

      <ASCIIBox title="Positionen">
        <table className="guide__table">
          <thead>
            <tr>
              <th>Position</th>
              <th>Kalkulation</th>
              <th>Stufe</th>
              <th>Begründung</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Wand- &amp; Bodenfliesen</td>
              <td>€2.200</td>
              <td className="guide__highlight">Niedrig</td>
              <td>Stammlieferant, ähnliches schon kalkuliert</td>
            </tr>
            <tr>
              <td>Sanitärobjekte (Waschbecken, WC, Armaturen)</td>
              <td>€900</td>
              <td className="guide__highlight">Mittel</td>
              <td>Kunde hat Mittelklasse gewählt, aber noch nicht endgültig entschieden</td>
            </tr>
            <tr>
              <td>Maßgefertigte Glasdusche</td>
              <td>€1.800</td>
              <td className="guide__highlight">Hoch</td>
              <td>Neuer Hersteller, Sondermaß, noch nie bei denen bestellt</td>
            </tr>
            <tr>
              <td>Sanitärinstallation (Subunternehmer)</td>
              <td>€1.400</td>
              <td className="guide__highlight">Mittel</td>
              <td>Thomas ist zuverlässig, hat aber für diesen Auftrag noch nicht kalkuliert</td>
            </tr>
            <tr>
              <td>Elektriker</td>
              <td>€600</td>
              <td className="guide__highlight">Niedrig</td>
              <td>Standard-Badelektrik, Ihr Stammelektriker</td>
            </tr>
            <tr>
              <td>Container / Entsorgung</td>
              <td>€300</td>
              <td className="guide__highlight">Sicher</td>
              <td>Festpreis vom Stammentsorgungsunternehmen</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        Wenn Sie pauschal €7.200 anbieten, kalkulieren Sie für das Szenario, in dem jede
        einzelne Position genau auf den Cent stimmt. Das ist das unwahrscheinlichste aller
        Ergebnisse. Es ist, als würden Sie darauf wetten, dass bei sechs Münzwürfen alle
        Kopf zeigen.
      </p>
      <p>
        Lassen Sie diese Zahlen durch eine Monte-Carlo-Simulation laufen und Sie erhalten
        eine Verteilung. Die Simulation berechnet tausende Versionen dieses Auftrags, wobei
        die Kosten jedes Mal aus dem von Ihnen festgelegten Unsicherheitsbereich gezogen
        werden. Weil Mehrkosten häufiger sind als Einsparungen, ist die Simulation nach oben
        verzerrt — genau wie im echten Leben.
      </p>

      <ASCIIBox title="Simulationsergebnis">
        <p style={{ fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '8px' }}>
          Basiskalkulation: <span className="guide__highlight">€7.200</span>
        </p>
        <p style={{ fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '8px' }}>
          P50 (Münzwurf-Chancen): <span className="guide__highlight">€7.560</span>
        </p>
        <p style={{ fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '8px' }}>
          P80 (empfohlenes Angebot): <span className="guide__highlight">€8.080</span>
        </p>
        <p style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
          P95 (Worst-Case-Puffer): <span className="guide__highlight">€8.820</span>
        </p>
      </ASCIIBox>

      <p>
        Der Unterschied zwischen €7.200 und €8.080 beträgt €880 — etwa 12%. Aber es ist
        kein pauschaler 12%-Aufschlag. Es ist ein berechneter Puffer, der auf den spezifischen
        Risiken dieses spezifischen Auftrags basiert. Ein Auftrag mit lauter Niedrig-Positionen
        braucht weniger. Ein Auftrag voller grober Schätzungen braucht deutlich mehr.
      </p>

      <h2>die Ergebnisse lesen: was die Glockenkurve bedeutet</h2>

      <p>
        Die Simulation liefert eine Wahrscheinlichkeitsverteilung — eine Glockenkurve, die
        zeigt, wie wahrscheinlich jede Gesamtkostenhöhe ist. So lesen Sie sie:
      </p>
      <ul>
        <li>
          <strong className="guide__highlight">P50</strong> bedeutet, dass es eine 50%ige
          Wahrscheinlichkeit gibt, dass die tatsächlichen Kosten unter dieser Zahl liegen.
          Münzwurf-Chancen. Kein sicheres Angebot.
        </li>
        <li>
          <strong className="guide__highlight">P80</strong> bedeutet 80% Wahrscheinlichkeit,
          dass die tatsächlichen Kosten darunter liegen. Das ist der optimale Bereich für die
          meisten Handwerker. Sie sind gegen die meisten Mehrkosten abgesichert, ohne sich
          aus dem Markt zu preisen.
        </li>
        <li>
          <strong className="guide__highlight">P95</strong> bedeutet 95% Wahrscheinlichkeit.
          Das ist Ihre &quot;ruhig schlafen&quot;-Zahl. Nutzen Sie sie für Festpreisverträge oder
          Kunden, die keine Nachträge akzeptieren.
        </li>
      </ul>
      <p>
        Welches Perzentil Sie anbieten, hängt vom Auftrag und Kunden ab. Ein Auftrag nach
        Aufwand mit einem guten Kunden? P50 kann ausreichen. Eine Festpreisküche für einen
        Anwalt, der Sie auf jeden Cent festnagelt? Kalkulieren Sie bei P80 oder P95 und
        sichern Sie sich ab.
      </p>

      <h2>häufige Kalkulationsfehler</h2>

      <p>
        Nach der Auswertung tausender Kalkulationen in der Simulation zeigen sich Muster.
        Hier sind die Fehler, die Handwerker am meisten Geld kosten:
      </p>

      <ol>
        <li>
          <strong>Alles als Niedrig einstufen.</strong> Wenn Sie kein schriftliches Angebot
          haben, ist es nicht Niedrig. Wenn Sie diesen genauen Umfang noch nie gemacht haben,
          ist es nicht Niedrig. Seien Sie ehrlich zu sich selbst.
        </li>
        <li>
          <strong>Anfahrt und Zeitkosten vergessen.</strong> Zwei Stunden Fahrt pro Tag bei
          €35/Stunde über drei Wochen sind €1.050. Das ist echtes Geld. Kalkulieren Sie es.
        </li>
        <li>
          <strong>Verzögerungen nicht einpreisen.</strong> Wetter, verspätete Lieferungen,
          Kundenwünsche. Das sind keine Ausnahmeereignisse. Das ist der Normalfall. Ihre
          Auftragsdauer braucht ihre eigene Unsicherheitsstufe.
        </li>
        <li>
          <strong>Vorjahrespreise übernehmen.</strong> Materialkosten bewegen sich. Holz ist
          gestiegen. Kupfer ist gestiegen. Wenn Ihre Preise sechs Monate alt sind, stimmen
          sie nicht mehr.
        </li>
        <li>
          <strong>Kalkulieren um zu gewinnen statt um zu verdienen.</strong> Ein Auftrag, den
          Sie zum falschen Preis gewinnen, ist schlimmer als ein Auftrag, den Sie nicht
          bekommen. Das schlimmste Ergebnis ist nicht, den Auftrag zu verlieren. Es ist, ihn
          zu gewinnen und umsonst zu arbeiten.
        </li>
      </ol>

      <h2>alles zusammensetzen</h2>

      <p>
        Hier ist der Ablauf. Er fügt etwa fünf Minuten zu Ihrem Kalkulationsprozess hinzu:
      </p>
      <ol>
        <li>Listen Sie jede Position auf wie gewohnt.</li>
        <li>Fragen Sie sich bei jeder: Wie sicher bin ich bei dieser Zahl? Weisen Sie eine Stufe zu.</li>
        <li>Tragen Sie Ihren Stundensatz, die Auftragsdauer und Anfahrt ein.</li>
        <li>Starten Sie die Simulation.</li>
        <li>Bieten Sie bei P80 für die meisten Aufträge an. Passen Sie nach oben oder unten an, je nach Vertragsart.</li>
      </ol>
      <p>
        Sie fügen keinen erfundenen Aufschlag hinzu. Sie erstellen ein Angebot, das das
        tatsächliche Risikoprofil des tatsächlichen Auftrags widerspiegelt. Das ist der
        Unterschied zwischen hoffen, dass Sie Geld verdienen, und wissen, dass Sie es tun.
      </p>

      <div className="guide__cta">
        <Link href="/de/estimate/">[ KALKULATION ERSTELLEN ]</Link>
      </div>
    </div>
  )
}
