import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'Koszty podjazdu 2026 // lowriskquotes',
  description:
    'Ile kosztuje wykonanie podjazdu w Polsce? Kostka, asfalt, beton — realne ceny z oceną ryzyka dla wykonawców.',
  alternates: { canonical: '/pl/guides/koszty-podjazdu/' },
}

export default function KosztyPodjazduPage() {
  return (
    <div className="guide">
      <h1>koszty podjazdu: kostka, asfalt i beton w 2026 roku</h1>

      <p>
        Podjazdy to zlecenia, które wyglądają na proste i powtarzalne. Wymiary znane, materiał
        wybrany, praca na zewnątrz. Ale grunt pod spodem potrafi zmienić opłacalne zlecenie
        w koszmar — zwłaszcza gdy okaże się, że trzeba wymienić podbudowę, odprowadzić wodę
        albo przenieść studzienkę.
      </p>
      <p>
        Poniżej realne koszty wykonania podjazdu w Polsce w 2026 roku.
      </p>

      <h2>typowe rozbicie kosztów</h2>

      <p>
        Koszty dla standardowego podjazdu o powierzchni 30-50 m².
      </p>

      <ASCIIBox title="Rozbicie kosztów podjazdu">
        <table className="guide__table">
          <thead>
            <tr>
              <th>Pozycja</th>
              <th>Zakres kosztów</th>
              <th>Poziom ryzyka</th>
              <th>Uwagi</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Usunięcie starego podjazdu</td>
              <td>2 000 - 5 000 zł</td>
              <td className="guide__highlight">Średnie</td>
              <td>Grubość starej nawierzchni bywa zaskoczeniem</td>
            </tr>
            <tr>
              <td>Korytowanie i podbudowa</td>
              <td>4 000 - 12 000 zł</td>
              <td className="guide__highlight">Wysokie</td>
              <td>Słaby grunt = głębsze korytowanie + geowłóknina</td>
            </tr>
            <tr>
              <td>Kostka brukowa (materiał + robocizna)</td>
              <td>8 000 - 22 000 zł</td>
              <td className="guide__highlight">Niskie</td>
              <td>Standardowe wzory = przewidywalne</td>
            </tr>
            <tr>
              <td>Obrzeża i krawężniki</td>
              <td>1 500 - 4 000 zł</td>
              <td className="guide__highlight">Pewny</td>
              <td>Mierzalne z góry</td>
            </tr>
            <tr>
              <td>Odwodnienie</td>
              <td>2 000 - 6 000 zł</td>
              <td className="guide__highlight">Średnie</td>
              <td>Odwodnienie liniowe lub punkt — zależy od spadku</td>
            </tr>
            <tr>
              <td>Brama wjazdowa (opcjonalnie)</td>
              <td>4 000 - 15 000 zł</td>
              <td className="guide__highlight">Średnie</td>
              <td>Automatyka podnosi koszt i ryzyko</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        Łączny zakres (bez bramy): <span className="guide__highlight">17 500 - 49 000 zł</span>.
        Główna niewiadoma to podłoże — dobry grunt skraca prace o dni.
      </p>

      <h2>najczęstsze pułapki</h2>

      <ul>
        <li>
          <strong>Grunt i woda.</strong> Gliniaste podłoże trzyma wodę i wymaga grubszej
          podbudowy. Jeśli nie znasz działki, oznacz korytowanie jako Wysokie ryzyko.
        </li>
        <li>
          <strong>Ukryte instalacje.</strong> Rury wodociągowe, kable energetyczne, studzienki
          kanalizacyjne pod starym podjazdem. Zawsze pytaj o mapę uzbrojenia terenu.
        </li>
        <li>
          <strong>Pogoda.</strong> Prace na zewnątrz w Polsce od listopada do marca to loteria.
          Deszcz i mróz opóźniają betonowanie i układanie kostki. Uwzględnij bufor czasowy.
        </li>
      </ul>

      <h2>wycena bez ryzyka</h2>

      <p>
        Zmierz powierzchnię, sprawdź grunt i określ materiał. Podbudowa na nieznanym gruncie
        to Wysokie ryzyko, kostka na przygotowanej podbudowie to Niskie. Wprowadź pozycje do
        kalkulatora i uzyskaj cenę, która pokrywa realne zagrożenia.
      </p>

      <div className="guide__cta">
        <Link href="/pl/estimate/">[ WYCENĘ PODJAZDU ]</Link>
      </div>
    </div>
  )
}
