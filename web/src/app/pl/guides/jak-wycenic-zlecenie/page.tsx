import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'Jak wycenić zlecenie jako wykonawca // lowriskquotes',
  description:
    'Praktyczny poradnik wyceniania zleceń. Dowiedz się, dlaczego wykonawcy zaniżają ceny, jak oceniać ryzyko na każdej pozycji i jak symulacja Monte Carlo buduje bezpieczniejsze wyceny.',
  alternates: { canonical: '/pl/guides/jak-wycenic-zlecenie/' },
}

export default function JakWycenicZleceniePage() {
  return (
    <div className="guide">
      <h1>jak wycenić zlecenie (i nie stracić na tym)</h1>

      <p>
        Większość wykonawców straciła kiedyś pieniądze na zleceniu. Nie dlatego, że źle
        pracowali — bo źle wycenili. Ustalili cenę na podstawie optymistycznych założeń,
        dostali zlecenie, a potem patrzyli, jak marża znika, gdy rzeczywistość dała o sobie
        znać.
      </p>
      <p>
        Ten poradnik wyjaśnia, dlaczego tak się dzieje i jak to naprawić metodą, która
        zajmuje około pięciu minut dłużej niż Twoje obecne podejście.
      </p>

      <h2>dlaczego wykonawcy zaniżają wyceny</h2>

      <p>
        Trzy siły spychają każdą wycenę w dół:
      </p>

      <p>
        <strong className="guide__highlight">Błąd optymizmu.</strong> Wyobrażasz sobie, że
        zlecenie pójdzie gładko. Stary tynk schodzi czysto. Belki stropowe są zdrowe.
        Dostawca dowozi na czas. Wyceniasz wersję zlecenia, gdzie nic nie idzie nie tak —
        mimo że ta wersja prawie nigdy się nie zdarza.
      </p>
      <p>
        <strong className="guide__highlight">Presja konkurencyjna.</strong> Wiesz, że klient
        ma trzy oferty. Więc ostrzysz ołówek, przycinasz każdą pozycję, zaokrąglasz w dół.
        Teraz Twoja wycena jest ciasna. Za ciasna. Wygrywasz zlecenie i tracisz zysk.
      </p>
      <p>
        <strong className="guide__highlight">Jednorazowe szacunki.</strong> Wpisujesz jedną
        liczbę dla każdej pozycji: płytki 8 000 zł. To nie jest szacunek. To zgadywanie
        przebrane za fakt. Realne koszty to zakresy. Płytki mogą kosztować 7 200 zł, jeśli
        Twój stały dostawca ma je na stanie, albo 9 600 zł, jeśli nie ma i zamawiasz od
        kogoś nowego.
      </p>

      <h2>pięć poziomów niepewności</h2>

      <p>
        Nie każda pozycja w Twojej wycenie niesie takie samo ryzyko. Kontener od firmy, z
        której korzystasz od lat, to nie to samo co niestandardowa kabina prysznicowa od
        szklarza, którego znalazłeś w zeszłym tygodniu. Traktowanie ich tak samo jest
        podstawowym błędem ryczałtowej rezerwy.
      </p>
      <p>
        LowRiskQuotes używa pięciu poziomów niepewności. Oto co każdy z nich oznacza w
        praktyce:
      </p>

      <ASCIIBox title="Poziomy niepewności">
        <table className="guide__table">
          <thead>
            <tr>
              <th>Poziom</th>
              <th>Zakres</th>
              <th>Przykład z praktyki</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="guide__highlight">Pewny</td>
              <td>+/- 2%</td>
              <td>Kontener na gruz, pisemna oferta od dostawcy ze stałą ceną</td>
            </tr>
            <tr>
              <td className="guide__highlight">Niski</td>
              <td>+/- 8%</td>
              <td>Materiały od stałego dostawcy, standardowe wyposażenie</td>
            </tr>
            <tr>
              <td className="guide__highlight">Średni</td>
              <td>+/- 15%</td>
              <td>Podwykonawca, z którym pracowałeś, ale dawno temu</td>
            </tr>
            <tr>
              <td className="guide__highlight">Wysoki</td>
              <td>+/- 25%</td>
              <td>Nowy podwykonawca, specjalistyczne materiały, nieznane warunki na budowie</td>
            </tr>
            <tr>
              <td className="guide__highlight">Szacunek na oko</td>
              <td>+/- 40%</td>
              <td>Brak wizji lokalnej, nieznany zakres, &quot;powinno być około...&quot;</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        Kluczowe pytanie dla każdej pozycji brzmi: <em>jak pewny jestem, że ta kwota jest
        prawidłowa?</em> Nie jak pewny chcesz być. Jak pewny faktycznie jesteś, na podstawie
        dowodów. Masz pisemną ofertę? To Pewny. Szacujesz z pamięci na podstawie zlecenia
        sprzed dwóch lat w innym mieście? To co najwyżej Wysoki.
      </p>

      <h2>przykład: remont łazienki</h2>

      <p>
        Przejdźmy przez realną wycenę. Pani Kowalska chce wyremontować łazienkę — demontaż,
        nowe płytki, nowe wyposażenie, szklana kabina na wymiar, nowa hydraulika, elektryka
        i kontener na gruz. Twój bazowy kosztorys wynosi 25 600 zł.
      </p>

      <ASCIIBox title="Pozycje kosztowe">
        <table className="guide__table">
          <thead>
            <tr>
              <th>Pozycja</th>
              <th>Szacunek</th>
              <th>Poziom</th>
              <th>Dlaczego</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Płytki ścienne i podłogowe</td>
              <td>8 000 zł</td>
              <td className="guide__highlight">Niski</td>
              <td>Stały dostawca, wyceniałeś podobne wcześniej</td>
            </tr>
            <tr>
              <td>Wyposażenie (umywalka, WC, baterie)</td>
              <td>3 200 zł</td>
              <td className="guide__highlight">Średni</td>
              <td>Klient wybrał średnią półkę, ale jeszcze nie zdecydował ostatecznie</td>
            </tr>
            <tr>
              <td>Kabina prysznicowa na wymiar</td>
              <td>6 000 zł</td>
              <td className="guide__highlight">Wysoki</td>
              <td>Nowy szklarz, niestandardowy wymiar, nigdy od niego nie zamawiałeś</td>
            </tr>
            <tr>
              <td>Hydraulika (podwykonawca)</td>
              <td>4 800 zł</td>
              <td className="guide__highlight">Średni</td>
              <td>Marek jest solidny, ale nie wycenił jeszcze tego zlecenia</td>
            </tr>
            <tr>
              <td>Elektryk</td>
              <td>2 400 zł</td>
              <td className="guide__highlight">Niski</td>
              <td>Standardowa elektryka łazienkowa, Twój stały elektryk</td>
            </tr>
            <tr>
              <td>Kontener na gruz</td>
              <td>1 200 zł</td>
              <td className="guide__highlight">Pewny</td>
              <td>Stała cena od Twojej firmy kontenerowej</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        Gdybyś wycenił 25 600 zł na sztywno, wyceniasz scenariusz, w którym każda pozycja
        wychodzi dokładnie na szacunek. To jest najmniej prawdopodobny wynik. To jak
        obstawianie, że każda z sześciu monet wypadnie orłem.
      </p>
      <p>
        Przepuść te liczby przez symulację Monte Carlo i otrzymasz rozkład. Symulacja
        uruchamia tysiące wersji tego zlecenia, za każdym razem losując koszty z zakresu
        niepewności, który ustawiłeś. Ponieważ przekroczenia są częstsze niż oszczędności,
        symulacja jest skrzywiona w górę — dokładnie jak w rzeczywistości.
      </p>

      <ASCIIBox title="Wynik symulacji">
        <p style={{ fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '8px' }}>
          Bazowy kosztorys: <span className="guide__highlight">25 600 zł</span>
        </p>
        <p style={{ fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '8px' }}>
          P50 (szanse 50/50): <span className="guide__highlight">26 880 zł</span>
        </p>
        <p style={{ fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '8px' }}>
          P80 (zalecana wycena): <span className="guide__highlight">28 720 zł</span>
        </p>
        <p style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
          P95 (bufor na najgorszy scenariusz): <span className="guide__highlight">31 360 zł</span>
        </p>
      </ASCIIBox>

      <p>
        Różnica między 25 600 zł a 28 720 zł to 3 120 zł — około 12%. Ale to nie jest
        ryczałtowe 12% rezerwy. To obliczony bufor oparty na konkretnych ryzykach w tym
        konkretnym zleceniu. Zlecenie z samymi pozycjami Niskiego ryzyka potrzebowałoby
        mniej. Zlecenie pełne Szacunków na oko potrzebowałoby znacznie więcej.
      </p>

      <h2>czytanie wyników: co oznacza krzywa dzwonowa</h2>

      <p>
        Symulacja daje Ci rozkład prawdopodobieństwa — krzywą dzwonową pokazującą, jak
        prawdopodobny jest każdy łączny koszt. Oto jak ją czytać:
      </p>
      <ul>
        <li>
          <strong className="guide__highlight">P50</strong> oznacza, że jest 50% szans, że
          faktyczny koszt będzie poniżej tej kwoty. Szanse jak przy rzucie monetą. To nie
          jest bezpieczna wycena.
        </li>
        <li>
          <strong className="guide__highlight">P80</strong> oznacza 80% szans, że faktyczny
          koszt będzie poniżej. To optymalny punkt dla większości wykonawców. Jesteś
          chroniony przed większością przekroczeń, nie wyceniając się poza rynek.
        </li>
        <li>
          <strong className="guide__highlight">P95</strong> oznacza 95% szans. To Twoja
          kwota &quot;śpij spokojnie&quot;. Używaj jej przy kontraktach ryczałtowych lub klientach,
          którzy nie zaakceptują żadnych zmian.
        </li>
      </ul>
      <p>
        Który percentyl podajesz w wycenie, zależy od zlecenia i klienta. Zlecenie na czas
        i materiały z dobrym klientem? P50 może wystarczyć. Ryczałtowy remont kuchni dla
        prawnika, który będzie trzymał Cię za każdą złotówkę? Wyceniaj na P80 lub P95 i
        chroń się.
      </p>

      <h2>częste błędy przy wycenianiu</h2>

      <p>
        Po przepuszczeniu tysięcy kosztorysów przez symulator, wyłaniają się wzorce. Oto
        błędy, które kosztują wykonawców najwięcej pieniędzy:
      </p>

      <ol>
        <li>
          <strong>Oznaczanie wszystkiego jako Niskie ryzyko.</strong> Jeśli nie masz pisemnej
          oferty, to nie jest Niskie. Jeśli nie robiłeś dokładnie takiego zakresu wcześniej,
          to nie jest Niskie. Bądź z sobą szczery.
        </li>
        <li>
          <strong>Zapominanie o kosztach dojazdu i czasu.</strong> Dwie godziny jazdy dziennie
          po 50 zł/godzinę przez trzytygodniowe zlecenie to 3 000 zł. To realne pieniądze.
          Wlicz je w cenę.
        </li>
        <li>
          <strong>Nieprzewidywanie opóźnień.</strong> Pogoda, spóźnione dostawy, zmiany
          klienta. To nie są rzadkie zdarzenia. To norma. Twój szacunek czasu trwania
          zlecenia potrzebuje własnego poziomu niepewności.
        </li>
        <li>
          <strong>Kopiowanie zeszłorocznych cen.</strong> Koszty materiałów się zmieniają.
          Drewno poszło w górę. Miedź poszła w górę. Jeśli Twoje ceny mają pół roku, są
          nieaktualne.
        </li>
        <li>
          <strong>Wycenianie na wygranie zamiast na zysk.</strong> Zlecenie wygrane przy złej
          cenie jest gorsze niż zlecenie, którego nie dostałeś. Najgorszy wynik to nie
          przegrana oferta. To wygrana i praca za darmo.
        </li>
      </ol>

      <h2>podsumowanie</h2>

      <p>
        Oto schemat działania. Dodaje około pięciu minut do procesu wyceny:
      </p>
      <ol>
        <li>Wypisz każdą pozycję kosztową jak zwykle.</li>
        <li>Dla każdej zadaj sobie pytanie: jak pewny jestem tej kwoty? Przypisz poziom.</li>
        <li>Dodaj swoją stawkę dzienną, czas trwania zlecenia i dojazd.</li>
        <li>Uruchom symulację.</li>
        <li>Wyceniaj na P80 dla większości zleceń. Dostosuj w górę lub w dół w zależności od typu umowy.</li>
      </ol>
      <p>
        Nie dodajesz wymyślonej rezerwy. Budujesz wycenę, która odzwierciedla faktyczny
        profil ryzyka faktycznego zlecenia. To jest różnica między nadzieją na zarobek a
        pewnością, że zarobisz.
      </p>

      <div className="guide__cta">
        <Link href="/pl/estimate/">[ STWÓRZ SWOJĄ WYCENĘ ]</Link>
      </div>
    </div>
  )
}
