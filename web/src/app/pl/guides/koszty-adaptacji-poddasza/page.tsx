import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'Koszty adaptacji poddasza 2026 // lowriskquotes',
  description:
    'Ile kosztuje adaptacja poddasza w Polsce? Pełne rozbicie kosztów z oceną ryzyka dla wykonawców.',
  alternates: { canonical: '/pl/guides/koszty-adaptacji-poddasza/' },
}

export default function KosztyAdaptacjiPoddaszaPage() {
  return (
    <div className="guide">
      <h1>koszty adaptacji poddasza: przewodnik dla wykonawcy</h1>

      <p>
        Adaptacja poddasza to projekt, który wygląda na prosty — jest już dach, są ściany, trzeba
        tylko wykończyć. Ale każdy doświadczony wykonawca wie, że poddasza potrafią zaskoczyć.
        Niska wysokość w kluczowych miejscach, słaba izolacja, krokwie za cienkie na dodatkowe
        obciążenie, brak dostępu dla materiałów.
      </p>
      <p>
        Poniżej znajdziesz realne koszty adaptacji poddasza w 2026 roku i wskazówki, które
        pozycje wyceniać ostrożnie.
      </p>

      <h2>typowe rozbicie kosztów</h2>

      <p>
        Koszty dotyczą poddasza o powierzchni użytkowej 30-50 m² w domu jednorodzinnym.
      </p>

      <ASCIIBox title="Rozbicie kosztów poddasza">
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
              <td>Wzmocnienie konstrukcji</td>
              <td>8 000 - 25 000 zł</td>
              <td className="guide__highlight">Wysokie</td>
              <td>Stare więźby mogą wymagać wymiany</td>
            </tr>
            <tr>
              <td>Ocieplenie dachu</td>
              <td>12 000 - 28 000 zł</td>
              <td className="guide__highlight">Niskie</td>
              <td>Wełna mineralna lub PIR — przewidywalny koszt</td>
            </tr>
            <tr>
              <td>Zabudowa g-k i ścianki</td>
              <td>8 000 - 18 000 zł</td>
              <td className="guide__highlight">Niskie</td>
              <td>Skosy dodają roboczogodziny</td>
            </tr>
            <tr>
              <td>Okna dachowe</td>
              <td>4 000 - 15 000 zł</td>
              <td className="guide__highlight">Średnie</td>
              <td>Każde dodatkowe okno = przeróbka więźby</td>
            </tr>
            <tr>
              <td>Podłoga</td>
              <td>6 000 - 15 000 zł</td>
              <td className="guide__highlight">Średnie</td>
              <td>Wyrównanie i wyciszenie mogą podnieść koszt</td>
            </tr>
            <tr>
              <td>Elektryka</td>
              <td>4 000 - 9 000 zł</td>
              <td className="guide__highlight">Niskie</td>
              <td>Standardowe punkty + oświetlenie</td>
            </tr>
            <tr>
              <td>Ogrzewanie</td>
              <td>5 000 - 12 000 zł</td>
              <td className="guide__highlight">Średnie</td>
              <td>Podłączenie do istniejącej instalacji c.o.</td>
            </tr>
            <tr>
              <td>Schody</td>
              <td>5 000 - 18 000 zł</td>
              <td className="guide__highlight">Wysokie</td>
              <td>Otwór w stropie + schody na wymiar</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        Łączny zakres: <span className="guide__highlight">52 000 - 140 000 zł</span>. Największy
        rozstrzał dotyczy wzmocnienia konstrukcji i schodów — obie pozycje wymagają indywidualnej
        oceny na miejscu.
      </p>

      <h2>gdzie adaptacje poddasza idą nie tak</h2>

      <ul>
        <li>
          <strong>Konstrukcja więźby.</strong> Stare domy mogą mieć krokwie zbyt słabe na dodatkowe
          obciążenie. Bez opinii konstruktora ryzykujesz kosztowne przeróbki w trakcie prac.
        </li>
        <li>
          <strong>Wysokość pomieszczeń.</strong> Minimalna wysokość użytkowa to 2,2 m na co
          najmniej 50% powierzchni. Jeśli klient oczekuje pełnowymiarowych pokoi, a dach jest niski,
          pojawią się kompromisy lub kosztowne podwyższanie ścianki kolankowej.
        </li>
        <li>
          <strong>Schody.</strong> Otwór w stropie to ingerencja w konstrukcję. Wymaga projektu
          i często wzmocnienia belek stropowych. Nie wyceniaj tego z głowy.
        </li>
      </ul>

      <h2>bezpieczna wycena poddasza</h2>

      <p>
        Oceń stan więźby i stropu przed złożeniem oferty. Pozycje konstrukcyjne oznacz jako
        Wysokie ryzyko, wykończeniowe jako Niskie. Wprowadź wszystko do kalkulatora — otrzymasz
        cenę, która chroni Twój zysk nawet przy niespodziance pod dachem.
      </p>

      <div className="guide__cta">
        <Link href="/pl/estimate/">[ WYCENĘ ADAPTACJI PODDASZA ]</Link>
      </div>
    </div>
  )
}
