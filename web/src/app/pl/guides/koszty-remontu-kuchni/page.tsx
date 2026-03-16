import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'Koszty remontu kuchni 2026 // lowriskquotes',
  description:
    'Realne koszty remontu kuchni dla polskich wykonawców. Pełne rozbicie pozycja po pozycji z ocenami ryzyka, abyś wycenił kuchnię trafnie.',
  alternates: { canonical: '/pl/guides/koszty-remontu-kuchni/' },
}

export default function KosztyRemontuKuchniPage() {
  return (
    <div className="guide">
      <h1>koszty remontu kuchni: rozbicie dla wykonawcy</h1>

      <p>
        Kuchnie to zlecenia o dużej wartości z wieloma ruchomymi częściami. Hydraulika,
        elektryka, gazownictwo, meble, blaty, płytki, podłoga, sprzęt AGD — sama koordynacja
        może pożreć Twoją marżę, jeśli nie wyceniłeś porządnie. Oto ile kuchnie faktycznie
        kosztują w 2026 roku i gdzie kryje się ryzyko.
      </p>

      <h2>typowe rozbicie kosztów</h2>

      <p>
        Remont kuchni średniej klasy w typowym domu. Zakładamy pełny demontaż i montaż od
        nowa, nie tylko wymianę frontów.
      </p>

      <ASCIIBox title="Rozbicie kosztów kuchni">
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
              <td>Demontaż i wywóz</td>
              <td>2 000 - 4 000 zł</td>
              <td className="guide__highlight">Niski</td>
              <td>Przewidywalne, chyba że jest azbest</td>
            </tr>
            <tr>
              <td>Meble kuchenne (dostawa i montaż)</td>
              <td>12 000 - 35 000 zł</td>
              <td className="guide__highlight">Średni</td>
              <td>IKEA/Castorama = Niski. Meble na wymiar od stolarza = Wysoki.</td>
            </tr>
            <tr>
              <td>Blaty</td>
              <td>3 000 - 15 000 zł</td>
              <td className="guide__highlight">Średni - Wysoki</td>
              <td>Laminat = Niski. Granit/kwarc szablonowany na miejscu = Wysoki.</td>
            </tr>
            <tr>
              <td>Hydraulika</td>
              <td>2 500 - 5 000 zł</td>
              <td className="guide__highlight">Średni</td>
              <td>Przenoszenie zlewu dodaje koszt i ryzyko</td>
            </tr>
            <tr>
              <td>Elektryka</td>
              <td>3 000 - 6 500 zł</td>
              <td className="guide__highlight">Średni</td>
              <td>Nowa rozdzielnia lub przebudowa instalacji podnosi cenę</td>
            </tr>
            <tr>
              <td>Gazownictwo (płyta, przeniesienie kotła)</td>
              <td>1 200 - 3 500 zł</td>
              <td className="guide__highlight">Niski</td>
              <td>Uprawnienia gazowe wymagane. Proste, jeśli bez przenoszenia.</td>
            </tr>
            <tr>
              <td>Płytki (ściana i podłoga)</td>
              <td>3 000 - 8 000 zł</td>
              <td className="guide__highlight">Niski</td>
              <td>Standardowe cegiełki = pewne. Złożone wzory = Średnie.</td>
            </tr>
            <tr>
              <td>Podłoga</td>
              <td>1 500 - 5 000 zł</td>
              <td className="guide__highlight">Niski</td>
              <td>Panele winylowe lub LVT. Przygotowanie podłoża może dodać koszt.</td>
            </tr>
            <tr>
              <td>Tynkowanie i malowanie</td>
              <td>1 500 - 3 500 zł</td>
              <td className="guide__highlight">Niski</td>
              <td>Proste. Stare kuchnie mogą wymagać więcej przygotowań.</td>
            </tr>
            <tr>
              <td>Sprzęt AGD</td>
              <td>4 000 - 18 000 zł</td>
              <td className="guide__highlight">Pewny - Niski</td>
              <td>Zwykle kupowane przez klienta. Potwierdź przed wyceną.</td>
            </tr>
            <tr>
              <td>Kontener / wywóz</td>
              <td>1 000 - 2 000 zł</td>
              <td className="guide__highlight">Pewny</td>
              <td>Stała cena, zamów z wyprzedzeniem</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        Łączny zakres dla średniej klasy kuchni: <span className="guide__highlight">34 700 -
        105 500 zł</span>. Ogromny rozstrzał wynika z jakości mebli, materiału blatów i tego,
        ile zmian w układzie jest planowanych.
      </p>

      <h2>gdzie kuchnie wysadzają budżety</h2>

      <ul>
        <li>
          <strong>Blaty.</strong> Blaty kamienne szablonowane są mierzone po montażu szafek,
          potem wycinane w zakładzie. Jeśli szablon jest błędny lub kamień ma wadę, czekasz
          tygodniami na wymianę. Oznaczaj blaty na wymiar jako Wysokie ryzyko.
        </li>
        <li>
          <strong>Zmiany układu.</strong> Przenoszenie zlewu oznacza przenoszenie odpływów i
          wody. Przenoszenie płyty oznacza przenoszenie gazu i wentylacji. Każde przeniesienie
          to kolejny podwykonawca, kolejny dzień, kolejny punkt awarii. Jeśli klient chce
          przenieść wszystko, Twoje szacunki hydrauliki i elektryki powinny być co najmniej
          na Średnim ryzyku.
        </li>
        <li>
          <strong>Terminy dostaw.</strong> Meble na wymiar, blaty kamienne i specjalistyczny
          sprzęt AGD mogą mieć 4-8 tygodni dostawy. Jeśli jedna pozycja się spóźni, cały
          harmonogram się przesuwa. Wlicz ryzyko przestoju w wycenę lub upewnij się, że
          klient rozumie, że opóźnienia idą na jego koszt.
        </li>
        <li>
          <strong>Pełzanie zakresu.</strong> &quot;Skoro już tu jesteście, możecie przesunąć ten
          grzejnik?&quot; &quot;A właściwie, możecie otynkować cały pokój?&quot; Kuchnie przyciągają
          pełzanie zakresu, bo klienci widzą bałagan i chcą naprawić wszystko naraz. Miej
          jasny zakres na piśmie przed rozpoczęciem prac.
        </li>
      </ul>

      <h2>wycenianie kuchni z pewnością</h2>

      <p>
        Kuchnia ze standardowymi szafkami z IKEA, laminowanym blatem i bez zmian układu to
        głównie praca o Niskim ryzyku. Możesz wyceniać blisko bazowego kosztorysu. Kuchnia
        z meblami na wymiar, granitowymi blatami i pełną przebudową układu jest wypełniona
        pozycjami o Wysokim ryzyku. Twoja rezerwa musi to odzwierciedlać.
      </p>
      <p>
        Oceń każdą pozycję uczciwie, uruchom symulację i wyceniaj na P80. Twoja wycena
        będzie wyższa na ryzykownych zleceniach i ciaśniejsza na prostych — dokładnie tak,
        jak powinno być.
      </p>

      <div className="guide__cta">
        <Link href="/pl/estimate/">[ WYCENĘ SWOJEJ KUCHNI ]</Link>
      </div>
    </div>
  )
}
