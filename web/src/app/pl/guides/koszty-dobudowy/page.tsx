import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'Koszty dobudowy 2026 // lowriskquotes',
  description:
    'Realne koszty dobudowy domu w Polsce. Kompletne rozbicie pozycji z oceną ryzyka, aby wycenić rozbudowę bez straty.',
  alternates: { canonical: '/pl/guides/koszty-dobudowy/' },
}

export default function KosztyDobudowyPage() {
  return (
    <div className="guide">
      <h1>koszty dobudowy: ile naprawdę kosztuje rozbudowa domu</h1>

      <p>
        Dobudowa to jeden z najbardziej dochodowych, ale też ryzykownych projektów dla wykonawcy.
        Zakres prac jest szeroki — fundamenty, ściany, dach, instalacje, wykończenie — i na każdym
        etapie mogą pojawić się niespodzianki. Źle wyceniona dobudowa potrafi pochłonąć cały zysk
        ekipy w ciągu pierwszych dwóch tygodni.
      </p>
      <p>
        Poniżej znajdziesz realne koszty dobudowy w 2026 roku z podziałem na poszczególne etapy
        i wskazaniem, gdzie kryje się największe ryzyko.
      </p>

      <h2>typowe rozbicie kosztów</h2>

      <p>
        Koszty dotyczą standardowej dobudowy parterowej o powierzchni 15-25 m², konstrukcja
        murowana, dach jednospadowy lub płaski.
      </p>

      <ASCIIBox title="Rozbicie kosztów dobudowy">
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
              <td>Fundamenty</td>
              <td>15 000 - 35 000 zł</td>
              <td className="guide__highlight">Wysokie</td>
              <td>Warunki gruntowe mogą zaskoczyć</td>
            </tr>
            <tr>
              <td>Ściany nośne</td>
              <td>20 000 - 45 000 zł</td>
              <td className="guide__highlight">Średnie</td>
              <td>Zależy od materiału i wysokości</td>
            </tr>
            <tr>
              <td>Konstrukcja dachu</td>
              <td>12 000 - 30 000 zł</td>
              <td className="guide__highlight">Średnie</td>
              <td>Połączenie z istniejącym dachem = wyższy koszt</td>
            </tr>
            <tr>
              <td>Stolarka okienna i drzwi</td>
              <td>8 000 - 20 000 zł</td>
              <td className="guide__highlight">Niskie</td>
              <td>Standardowe wymiary = pewny koszt</td>
            </tr>
            <tr>
              <td>Instalacje (elektryka, hydraulika)</td>
              <td>10 000 - 25 000 zł</td>
              <td className="guide__highlight">Średnie</td>
              <td>Podłączenie do istniejących instalacji bywa problematyczne</td>
            </tr>
            <tr>
              <td>Ocieplenie i elewacja</td>
              <td>8 000 - 18 000 zł</td>
              <td className="guide__highlight">Niskie</td>
              <td>Przewidywalny zakres prac</td>
            </tr>
            <tr>
              <td>Wykończenie wnętrza</td>
              <td>15 000 - 40 000 zł</td>
              <td className="guide__highlight">Średnie</td>
              <td>Zależy od standardu wybranego przez klienta</td>
            </tr>
            <tr>
              <td>Projekt i pozwolenia</td>
              <td>5 000 - 12 000 zł</td>
              <td className="guide__highlight">Pewny</td>
              <td>Ustal z góry, zanim zaczniesz</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        Łączny zakres dla standardowej dobudowy parterowej: <span className="guide__highlight">93 000 -
        225 000 zł</span>. Rozpiętość wynika głównie z warunków gruntowych, standardu wykończenia
        i regionu Polski.
      </p>

      <h2>gdzie dobudowy generują straty</h2>

      <p>
        Trzy główne źródła problemów:
      </p>
      <ul>
        <li>
          <strong>Fundamenty i grunt.</strong> Wysoki poziom wód gruntowych, glina ekspansywna,
          stare fundamenty istniejącego budynku w złym stanie. Badanie geotechniczne kosztuje
          1 500-3 000 zł i może uratować cały budżet.
        </li>
        <li>
          <strong>Połączenie z istniejącym budynkiem.</strong> Dylatacja, uszczelnienie dachu,
          wyrównanie poziomów podłóg — to miejsca, gdzie pojawiają się niezaplanowane godziny pracy.
        </li>
        <li>
          <strong>Formalności.</strong> Brak pozwolenia lub zmiana warunków zabudowy w trakcie
          projektu. Zawsze sprawdź MPZP przed wyceną i uwzględnij czas oczekiwania na decyzję.
        </li>
      </ul>

      <h2>jak wyceniać dobudowę bezpiecznie</h2>

      <p>
        Nie rzucaj jednej kwoty za metr kwadratowy. Rozbij wycenę na etapy i oceń ryzyko każdego
        osobno. Fundamenty na nieznanym gruncie to Wysokie ryzyko. Montaż okien standardowych
        to Niskie. Wprowadź każdą pozycję do kalkulatora i pozwól, żeby matematyka pokazała
        bezpieczną cenę.
      </p>

      <div className="guide__cta">
        <Link href="/pl/estimate/">[ WYCENĘ SWOJEJ DOBUDOWY ]</Link>
      </div>
    </div>
  )
}
