import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'Ile zapasu w wycenie? Rezerwa budżetowa 2026 // lowriskquotes',
  description:
    'Ile rezerwy dodać do wyceny budowlanej? Poradnik dla wykonawców — jak kalkulować zapas na nieprzewidziane wydatki.',
  alternates: { canonical: '/pl/guides/ile-zapasu-w-wycenie/' },
}

export default function IleZapasuWWycenieePage() {
  return (
    <div className="guide">
      <h1>ile zapasu w wycenie? rezerwa budżetowa bez zgadywania</h1>

      <p>
        Każdy wykonawca wie, że trzeba dodać „coś na nieprzewidziane". Pytanie brzmi: ile? 5%?
        10%? 20%? Większość ekip stosuje jedną ryczałtową rezerwę do wszystkiego — i albo
        przeszacowuje (tracąc zlecenia), albo niedoszacowuje (tracąc pieniądze).
      </p>
      <p>
        Problem polega na tym, że ryczałtowy procent nie rozróżnia między pewnym kosztem
        a kompletną niewiadomą. Jest lepszy sposób.
      </p>

      <h2>dlaczego ryczałtowa rezerwa nie działa</h2>

      <p>
        Wyobraź sobie dwa zlecenia:
      </p>

      <ASCIIBox title="Porównanie zleceń">
        <table className="guide__table">
          <thead>
            <tr>
              <th>Zlecenie</th>
              <th>Wartość</th>
              <th>Rezerwa 10%</th>
              <th>Realne ryzyko</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Malowanie 3 pokoi (znane ściany)</td>
              <td>8 000 zł</td>
              <td>800 zł</td>
              <td className="guide__highlight">Bardzo niskie — 200 zł wystarczy</td>
            </tr>
            <tr>
              <td>Remont łazienki w kamienicy</td>
              <td>35 000 zł</td>
              <td>3 500 zł</td>
              <td className="guide__highlight">Wysokie — 7 000 zł może nie wystarczyć</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        10% to za dużo dla malowania i za mało dla kamienicy. Ryczałt nie odzwierciedla
        rzeczywistości.
      </p>

      <h2>podejście pozycyjne</h2>

      <p>
        Zamiast jednego procenta, oceń ryzyko każdej pozycji osobno:
      </p>
      <ul>
        <li>
          <strong>Pewny koszt</strong> — znasz cenę, masz ofertę od dostawcy. Rezerwa: 0%.
        </li>
        <li>
          <strong>Niskie ryzyko</strong> — robiłeś to wielokrotnie, ceny stabilne. Rezerwa: 3-5%.
        </li>
        <li>
          <strong>Średnie ryzyko</strong> — znasz zakres, ale są niewiadome (stan podłoża, dostęp).
          Rezerwa: 10-15%.
        </li>
        <li>
          <strong>Wysokie ryzyko</strong> — pierwszy raz, niestandardowy materiał, zależność od
          pogody. Rezerwa: 20-30%.
        </li>
        <li>
          <strong>Szacunek na oko</strong> — zgadujesz. Rezerwa: 30-50% lub więcej.
        </li>
      </ul>

      <h2>jak to wygląda w praktyce</h2>

      <p>
        Remont łazienki z 8 pozycjami. Kontener i wywóz to Pewny — 0%. Elektryka u stałego
        podwykonawcy to Niskie — 5%. Kabina prysznicowa na wymiar to Wysokie — 25%. Łączna
        rezerwa wynikająca z pozycji będzie inna niż ryczałtowe 10% — i będzie celniejsza.
      </p>

      <p>
        Ten sposób ma jeszcze jedną zaletę: łatwiej go wyjaśnić klientowi. Zamiast „dodałem 10%
        na wszelki wypadek", mówisz „ta pozycja ma wyższy bufor, bo nie wiemy co jest pod
        starymi płytkami". Klient rozumie i akceptuje.
      </p>

      <h2>policz to automatycznie</h2>

      <p>
        Wprowadź swoje pozycje z oceną ryzyka do kalkulatora. System sam obliczy bezpieczną
        rezerwę dla każdej pozycji i pokaże łączną kwotę zapasu — bez zgadywania.
      </p>

      <div className="guide__cta">
        <Link href="/pl/estimate/">[ OBLICZ REZERWĘ DLA SWOJEGO ZLECENIA ]</Link>
      </div>
    </div>
  )
}
