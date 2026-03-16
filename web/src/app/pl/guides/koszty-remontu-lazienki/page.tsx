import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'Koszty remontu łazienki 2026 // lowriskquotes',
  description:
    'Realne koszty remontu łazienki dla polskich wykonawców. Pozycja po pozycji z ocenami ryzyka, abyś mógł wycenić łazienkę bez straty.',
  alternates: { canonical: '/pl/guides/koszty-remontu-lazienki/' },
}

export default function KosztyRemontuLazienkiPage() {
  return (
    <div className="guide">
      <h1>koszty remontu łazienki: co wykonawca naprawdę musi wiedzieć</h1>

      <p>
        Łazienki to chleb powszedni większości ekip remontowych. To też miejsce, gdzie wielu
        wykonawców zostawia pieniądze na stole. Zakres wygląda prosto — wyburz, przeprowadź
        instalacje, połóż płytki, zamontuj. Ale ukryte koszty rosną szybko: zgniłe legary
        pod wanną, grzyb w ścianach, klient, który zmienia wybór płytek trzy tygodnie po
        rozpoczęciu prac.
      </p>
      <p>
        Ta strona pokazuje realne koszty remontu łazienki w 2026 roku i wskazuje, gdzie
        kryje się ryzyko na każdej pozycji.
      </p>

      <h2>typowe rozbicie kosztów</h2>

      <p>
        To są średniej klasy koszty remontu łazienki dla standardowej łazienki (ok. 4-6 m²).
        Budżetowe i luksusowe realizacje będą odpowiednio niżej lub wyżej.
      </p>

      <ASCIIBox title="Rozbicie kosztów łazienki">
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
              <td>1 500 - 3 500 zł</td>
              <td className="guide__highlight">Średnie</td>
              <td>Zależy, co znajdziesz za ścianami</td>
            </tr>
            <tr>
              <td>Hydraulika</td>
              <td>3 000 - 7 000 zł</td>
              <td className="guide__highlight">Średnie</td>
              <td>Przenoszenie odpływów = wyższy koszt. Wymiana 1:1 = mniej.</td>
            </tr>
            <tr>
              <td>Elektryka</td>
              <td>1 500 - 3 500 zł</td>
              <td className="guide__highlight">Niskie</td>
              <td>Standardowe strefy. Ogrzewanie podłogowe dodaje 1 200+ zł.</td>
            </tr>
            <tr>
              <td>Płytki ścienne i podłogowe</td>
              <td>4 000 - 10 000 zł</td>
              <td className="guide__highlight">Niskie - Średnie</td>
              <td>Wielkoformatowe = więcej cięć i odpadów</td>
            </tr>
            <tr>
              <td>Ceramika sanitarna</td>
              <td>2 500 - 8 000 zł</td>
              <td className="guide__highlight">Średnie</td>
              <td>Produkty dostarczane przez klienta = wyższe ryzyko opóźnień</td>
            </tr>
            <tr>
              <td>Kabina prysznicowa / parawan</td>
              <td>1 200 - 7 000 zł</td>
              <td className="guide__highlight">Wysokie</td>
              <td>Gotowa z marketu = Niskie. Szkło na wymiar = Wysokie.</td>
            </tr>
            <tr>
              <td>Tynkowanie / zabudowa g-k</td>
              <td>1 200 - 2 500 zł</td>
              <td className="guide__highlight">Niskie</td>
              <td>Proste, chyba że ściany są w złym stanie</td>
            </tr>
            <tr>
              <td>Kontener / wywóz gruzu</td>
              <td>800 - 1 500 zł</td>
              <td className="guide__highlight">Pewny</td>
              <td>Ustal cenę z góry</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        Łączny zakres dla średniej klasy łazienki: <span className="guide__highlight">15 700 -
        43 000 zł</span>. Ten szeroki rozstrzał wynika głównie z wyposażenia wybranego przez
        klienta i tego, co kryje się za starymi płytkami.
      </p>

      <h2>gdzie remonty łazienek idą nie tak</h2>

      <p>
        Największe przekroczenia budżetu w łazienkach pochodzą z trzech źródeł:
      </p>
      <ul>
        <li>
          <strong>Ukryte uszkodzenia.</strong> Zgniłe legary podłogowe, wilgoć w ścianach, stare
          rury ołowiane wymagające wymiany. Nie dowiesz się, dopóki nie zdemolujesz. Jeśli
          istnieje jakiekolwiek ryzyko problemów konstrukcyjnych, oznacz te pozycje jako
          Wysokie ryzyko.
        </li>
        <li>
          <strong>Zmiany klienta.</strong> Zobaczył coś na Instagramie. Płytki, które wybrał,
          zostały wycofane ze sprzedaży. Chce przenieść toaletę na drugą ścianę. Każda zmiana
          w trakcie prac kosztuje czas i pieniądze. Wyceniaj wyposażenie na co najmniej Średnim
          ryzyku, chyba że klient już wszystko kupił.
        </li>
        <li>
          <strong>Produkty na zamówienie.</strong> Szklane kabiny na wymiar, niestandardowe
          szafki, importowane płytki z sześciotygodniowym terminem dostawy. To jest terytorium
          Wysokiego ryzyka lub Szacunku na oko. Jeśli coś musi być robione na wymiar,
          zakładaj, że coś nie pasuje za pierwszym razem.
        </li>
      </ul>

      <h2>mądrzejsze wycenianie łazienek</h2>

      <p>
        Zamiast dodawać ryczałtowe 10% rezerwy do wyceny łazienki, oceń każdą pozycję
        uczciwie. Kontener to Pewny koszt. Twój stały elektryk to Niskie ryzyko. Kabina
        prysznicowa na wymiar od nowego dostawcy to Wysokie ryzyko. Wprowadź to do symulacji
        i otrzymasz wycenę, która pokrywa faktyczne ryzyka — a nie procent wyssany z palca.
      </p>

      <div className="guide__cta">
        <Link href="/pl/estimate/">[ WYCENĘ SWOJEJ ŁAZIENKI ]</Link>
      </div>
    </div>
  )
}
