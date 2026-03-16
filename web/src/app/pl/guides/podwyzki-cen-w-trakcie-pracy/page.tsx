import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'Podwyżki cen w trakcie pracy 2026 // lowriskquotes',
  description:
    'Jak radzić sobie z podwyżkami cen materiałów w trakcie zlecenia? Strategie dla wykonawców na niestabilnym rynku.',
  alternates: { canonical: '/pl/guides/podwyzki-cen-w-trakcie-pracy/' },
}

export default function PodwyzkiCenPage() {
  return (
    <div className="guide">
      <h1>podwyżki cen w trakcie pracy: jak się zabezpieczyć</h1>

      <p>
        Złożyłeś ofertę w styczniu, prace zaczynają się w marcu. W międzyczasie stal poszła
        w górę o 15%, a drewno o 20%. Twoja wycena jest nieaktualna, ale klient trzyma Cię
        za słowo. Znasz tę sytuację?
      </p>
      <p>
        Ostatnie lata pokazały, że ceny materiałów budowlanych potrafią skakać w ciągu tygodni.
        Wykonawca, który nie zabezpieczy się przed tym ryzykiem, może stracić cały zysk z
        powodu podwyżki, na którą nie miał wpływu.
      </p>

      <h2>skala problemu</h2>

      <ASCIIBox title="Przykładowe wzrosty cen 2024-2026">
        <table className="guide__table">
          <thead>
            <tr>
              <th>Materiał</th>
              <th>Typowy wzrost roczny</th>
              <th>Wpływ na wycenę 100 000 zł</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Stal zbrojeniowa</td>
              <td>5 - 20%</td>
              <td className="guide__highlight">1 500 - 6 000 zł</td>
            </tr>
            <tr>
              <td>Drewno konstrukcyjne</td>
              <td>8 - 25%</td>
              <td className="guide__highlight">2 000 - 7 500 zł</td>
            </tr>
            <tr>
              <td>Cement i beton</td>
              <td>5 - 12%</td>
              <td className="guide__highlight">500 - 2 400 zł</td>
            </tr>
            <tr>
              <td>Izolacja termiczna</td>
              <td>3 - 10%</td>
              <td className="guide__highlight">300 - 1 500 zł</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        Przy dużych zleceniach trwających miesiące, niezabezpieczona podwyżka materiałów
        potrafi pochłonąć 5 000-15 000 zł zysku.
      </p>

      <h2>strategie zabezpieczenia</h2>

      <ul>
        <li>
          <strong>Klauzula waloryzacyjna.</strong> W umowie zapisz, że ceny materiałów mogą
          ulec zmianie w przypadku wzrostu cen hurtowych powyżej określonego progu (np. 5%).
          To standard w branży i uczciwi klienci to akceptują.
        </li>
        <li>
          <strong>Krótki termin ważności oferty.</strong> Oferta ważna 14-30 dni, nie 90.
          Im dłuższa ważność, tym większe ryzyko podwyżek.
        </li>
        <li>
          <strong>Kupuj materiały wcześniej.</strong> Jeśli masz pewność, że zlecenie dojdzie
          do skutku, zamów kluczowe materiały z góry i zablokuj cenę. Wymaga kapitału, ale
          eliminuje ryzyko.
        </li>
        <li>
          <strong>Pozycje materiałowe osobno.</strong> W wycenie oddziel materiał od robocizny.
          Materiały podaj jako „wg aktualnych cen hurtowych + X%". Robociznę wyceniaj ryczałtowo.
        </li>
      </ul>

      <h2>jak to uwzględnić w wycenie</h2>

      <p>
        Pozycje materiałowe z długim terminem realizacji oznacz jako Średnie lub Wysokie ryzyko.
        Materiały kupione z góry to Pewny koszt. Robocizna Twojej stałej ekipy to Niskie ryzyko.
        Kalkulator dobierze bufor odpowiedni do każdej pozycji.
      </p>

      <p>
        Pamiętaj: lepsza jest uczciwa rozmowa z klientem o ryzyku podwyżek na etapie oferty
        niż trudna rozmowa o dopłacie w trakcie prac.
      </p>

      <div className="guide__cta">
        <Link href="/pl/estimate/">[ WYCENĘ Z OCHRONĄ PRZED PODWYŻKAMI ]</Link>
      </div>
    </div>
  )
}
