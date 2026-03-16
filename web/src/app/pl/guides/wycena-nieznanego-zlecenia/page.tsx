import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'Wycena nieznanego zlecenia 2026 // lowriskquotes',
  description:
    'Jak wycenić robotę, której nigdy nie robiłeś? Poradnik dla wykonawców — strategie wyceny nieznanych zleceń.',
  alternates: { canonical: '/pl/guides/wycena-nieznanego-zlecenia/' },
}

export default function WycenaNieznanego() {
  return (
    <div className="guide">
      <h1>wycena nieznanego zlecenia: jak nie stracić na robocie, której nie znasz</h1>

      <p>
        Dzwoni klient z robotą, której nigdy nie robiłeś. Montaż pergoli. Renowacja tarasu.
        Zabudowa kominka. Masz ekipę, masz narzędzia, pewnie dasz radę — ale ile to wycenić?
        Tu zaczynają się problemy.
      </p>
      <p>
        Nieznane zlecenia to największe źródło strat dla wykonawców. Nie dlatego, że robota jest
        trudna, ale dlatego, że nie wiesz, czego nie wiesz. Oto jak podejść do tego bezpiecznie.
      </p>

      <h2>strategia 1: rozbij na znane elementy</h2>

      <p>
        Każda robota składa się z mniejszych czynności. Pergola to: fundamenty punktowe, słupy,
        belki, połączenia, wykończenie. Fundamenty umiesz wycenić. Cięcie drewna i montaż —
        też. Rozbij nieznaną robotę na znane elementy i wyceniaj te, które znasz, normalnie.
      </p>

      <h2>strategia 2: oznacz niewiadome uczciwie</h2>

      <ASCIIBox title="Przykład rozbicia">
        <table className="guide__table">
          <thead>
            <tr>
              <th>Pozycja</th>
              <th>Twoja ocena</th>
              <th>Poziom ryzyka</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Wykop pod fundamenty</td>
              <td>Robię regularnie</td>
              <td className="guide__highlight">Niskie</td>
            </tr>
            <tr>
              <td>Słupy i belki drewniane</td>
              <td>Robiłem podobne</td>
              <td className="guide__highlight">Średnie</td>
            </tr>
            <tr>
              <td>Połączenia ciesielskie</td>
              <td>Pierwszy raz</td>
              <td className="guide__highlight">Wysokie</td>
            </tr>
            <tr>
              <td>Pokrycie dachu pergoli</td>
              <td>Nigdy nie robiłem</td>
              <td className="guide__highlight">Szacunek na oko</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        Pozycje oznaczone jako Wysokie ryzyko i Szacunek na oko dostaną wyższy bufor w kalkulacji.
        To uczciwe — nie udajesz, że znasz cenę, której nie znasz.
      </p>

      <h2>strategia 3: szukaj informacji</h2>

      <ul>
        <li>
          <strong>Zapytaj kolegów z branży.</strong> Inni wykonawcy mogą mieć doświadczenie
          z podobną robotą. Jeden telefon może uratować wycenę.
        </li>
        <li>
          <strong>Sprawdź ceny podwykonawców.</strong> Jeśli sam nie umiesz czegoś zrobić,
          weź ofertę od specjalisty. Jego cena to Pewny koszt w Twojej wycenie.
        </li>
        <li>
          <strong>Poszukaj w internecie.</strong> Fora budowlane, grupy na Facebooku, filmy
          instruktażowe — nie dadzą Ci dokładnej ceny, ale pomogą oszacować czas i materiał.
        </li>
      </ul>

      <h2>kiedy odmówić</h2>

      <p>
        Jeśli po rozbicia zlecenia większość pozycji to Szacunek na oko — zastanów się, czy
        warto brać tę robotę. Lepiej odmówić lub zaproponować rozliczenie godzinowe niż
        podać cenę ryczałtową, w której nie masz pewności.
      </p>

      <h2>wycenę z buforem na niewiadome</h2>

      <p>
        Wprowadź pozycje z ich realnymi poziomami ryzyka. Kalkulator dobierze bufor do każdej
        pozycji osobno — znane elementy dostaną mały, nieznane duży.
      </p>

      <div className="guide__cta">
        <Link href="/pl/estimate/">[ WYCENĘ NIEZNANEGO ZLECENIA ]</Link>
      </div>
    </div>
  )
}
