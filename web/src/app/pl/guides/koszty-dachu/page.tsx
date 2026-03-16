import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'Koszty dachu 2026 // lowriskquotes',
  description:
    'Realne koszty prac dachowych dla polskich wykonawców. Wymiana dachu, naprawy, rynny — pozycja po pozycji z ocenami ryzyka, abyś wycenił dach bez strat.',
  alternates: { canonical: '/pl/guides/koszty-dachu/' },
}

export default function KosztyDachuPage() {
  return (
    <div className="guide">
      <h1>koszty dachu: wycena pracy, której nie widać z dołu</h1>

      <p>
        Prace dachowe to z natury ryzykowne wyceny. Wyceniasz z poziomu gruntu, a problemy
        znajdujesz na wysokości. Zgniłe łaty, ugięte krokwie, przegniła papa, która rozpada
        się przy dotknięciu. Rusztowanie staje, zegar tyka, a każda niespodzianka kosztuje.
      </p>
      <p>
        Ta strona pokazuje, ile faktycznie kosztują prace dachowe w 2026 roku i gdzie na
        każdej pozycji kryje się niepewność.
      </p>

      <h2>zakresy kosztów wg typu zlecenia</h2>

      <p>
        Orientacyjne kwoty dla typowych prac dachowych na standardowym domu jednorodzinnym
        (ok. 120-150 m² powierzchni dachu). Faktyczne koszty zależą od kąta nachylenia,
        dostępu, wyboru materiałów i tego, co znajdziesz po zdjęciu starego pokrycia.
      </p>

      <ASCIIBox title="Koszty wg typu prac dachowych">
        <table className="guide__table">
          <thead>
            <tr>
              <th>Typ prac</th>
              <th>Typowy koszt</th>
              <th>Czas trwania</th>
              <th>Uwagi</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Pełna wymiana dachu (skośny)</td>
              <td>25 000 - 60 000 zł</td>
              <td>5-12 dni</td>
              <td>Zdjęcie i nowe pokrycie. Cena zależy od stanu drewna.</td>
            </tr>
            <tr>
              <td>Dach płaski (papa/membrana)</td>
              <td>8 000 - 20 000 zł</td>
              <td>2-5 dni</td>
              <td>Za sekcję ~20 m². Stan deskowania to niewiadoma.</td>
            </tr>
            <tr>
              <td>Naprawa dachu</td>
              <td>800 - 6 000 zł</td>
              <td>0,5-2 dni</td>
              <td>Od przesuniętej dachówki po naprawę koszy. Szeroki zakres.</td>
            </tr>
            <tr>
              <td>Rynny i obróbki</td>
              <td>6 000 - 15 000 zł</td>
              <td>2-4 dni</td>
              <td>Wymiana PVC. Zgniłe krokwie podnoszą koszt.</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <h2>przykład: pełna wymiana dachu na domu jednorodzinnym</h2>

      <p>
        Standardowy dom jednorodzinny. Dachówka betonowa z lat 90. Papa do wymiany, część
        łat podejrzana. Powierzchnia dachu ok. 130 m². Klient chce nową dachówkę ceramiczną
        i suchy system kalenicowy.
      </p>

      <ASCIIBox title="Rozbicie kosztów wymiany dachu">
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
              <td>Rusztowanie</td>
              <td>4 000 - 7 000 zł</td>
              <td className="guide__highlight">Niski</td>
              <td>Weź stałą ofertę. Dłuższy wynajem = więcej, jeśli się przeciągnie.</td>
            </tr>
            <tr>
              <td>Demontaż starych dachówek i papy</td>
              <td>3 000 - 5 000 zł</td>
              <td className="guide__highlight">Niski</td>
              <td>Przewidywalna robocizna. Stare gwoździe i zaprawa spowalniają.</td>
            </tr>
            <tr>
              <td>Wymiana łat</td>
              <td>2 000 - 4 000 zł</td>
              <td className="guide__highlight">Średni</td>
              <td>Pełne przełatowanie to standard. Zgniłe łaty łamią się przy demontażu.</td>
            </tr>
            <tr>
              <td>Membrana dachowa</td>
              <td>1 500 - 2 500 zł</td>
              <td className="guide__highlight">Niski</td>
              <td>Koszt materiału stabilny. Robocizna wliczona w kładzenie dachówek.</td>
            </tr>
            <tr>
              <td>Naprawy drewna (krokwie/jętki)</td>
              <td>0 - 10 000 zł</td>
              <td className="guide__highlight">Wysoki</td>
              <td>Wielka niewiadoma. Może być nic. Może być sześć krokwi.</td>
            </tr>
            <tr>
              <td>Dachówki (materiał)</td>
              <td>7 000 - 12 000 zł</td>
              <td className="guide__highlight">Średni</td>
              <td>Beton ~4 zł/szt. Ceramika 2-3x drożej.</td>
            </tr>
            <tr>
              <td>Robocizna — kładzenie dachówek</td>
              <td>6 000 - 10 000 zł</td>
              <td className="guide__highlight">Niski</td>
              <td>Twoja ekipa. Pogoda to główna zmienna.</td>
            </tr>
            <tr>
              <td>System kalenicowy suchy</td>
              <td>1 500 - 3 000 zł</td>
              <td className="guide__highlight">Niski</td>
              <td>Mocowanie mechaniczne. Szybsze niż tradycyjna zaprawa.</td>
            </tr>
            <tr>
              <td>Obróbki blacharskie (kosze, kominy)</td>
              <td>2 000 - 4 500 zł</td>
              <td className="guide__highlight">Średni</td>
              <td>Ceny blachy się wahają. Sprawdź aktualne stawki przed wyceną.</td>
            </tr>
            <tr>
              <td>Kontener i wywóz odpadów</td>
              <td>2 000 - 3 500 zł</td>
              <td className="guide__highlight">Niski</td>
              <td>Stare dachówki są ciężkie. Zwykle potrzeba min. dwóch kontenerów.</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        Łączny zakres pełnej wymiany dachu: <span className="guide__highlight">29 000 -
        61 500 zł</span>. Ten rozstrzał ponad 30 000 zł to nie niechlujność — to realna
        niepewność. Sama pozycja naprawy drewna może przesunąć zlecenie o 10 000 zł.
        Reszta jest dość przewidywalna, jeśli znasz ceny swoich dostawców i tempo ekipy.
      </p>

      <h2>gdzie zlecenia dachowe idą nie tak</h2>

      <p>
        Cztery czynniki ryzyka dominują w wycenach dachów:
      </p>
      <ul>
        <li>
          <strong>Ukryte zgnilizny.</strong> Nie zobaczysz stanu krokwi z poziomu gruntu.
          Inspekcja z poddasza pomaga, ale na pewno się nie dowiesz, dopóki dachówki nie
          zejdą. Jeśli dach ma ponad 30 lat i nigdy go nie ruszano, zabudżetuj przynajmniej
          trochę prac drewnianych i oznacz je jako Wysokie ryzyko.
        </li>
        <li>
          <strong>Wynajem rusztowania.</strong> Samo rusztowanie jest przewidywalne. Ryzyko
          to czas trwania. Jeśli zła pogoda lub naprawy drewna dodadzą trzy dni do zlecenia,
          płacisz za dodatkowy tydzień wynajmu. Uwzględnij to w pozycji rusztowania.
        </li>
        <li>
          <strong>Okna pogodowe.</strong> Otwarty dach nie może stać na noc w ulewnym deszczu.
          Potrzebujesz realistycznego okna pogodowego na etap zdejmowania i kładzenia
          membrany. Zimą to okno jest węższe. Wyceniaj odpowiednio lub akceptuj ryzyko.
        </li>
        <li>
          <strong>Zmienność cen materiałów.</strong> Blacha, drewno i dachówki miały ostre
          skoki cenowe w ostatnich latach. Oferta, która leży osiem tygodni przed akceptacją,
          może wymagać ponownej wyceny. Daj termin ważności na swoje oferty — maksymalnie
          30 dni.
        </li>
      </ul>

      <h2>mądrzejsze wycenianie dachów</h2>

      <p>
        Rusztowanie, membrana i Twoja robocizna to Niskie ryzyko. Znasz te kwoty. Naprawy
        drewna i obróbki blacharskie to miejsca, gdzie mieszka ryzyko. Zamiast dodawać do
        każdej pozycji ryczałtową rezerwę, oceń ryzykowne pozycje uczciwie i przepuść je
        przez symulację. Twoja wycena pokaże klientowi realistyczny zakres — i ochroni Twoją
        marżę na pozycjach, które faktycznie mogą eksplodować.
      </p>

      <div className="guide__cta">
        <Link href="/pl/estimate/">[ WYCENĘ SWOJEGO DACHU ]</Link>
      </div>
    </div>
  )
}
