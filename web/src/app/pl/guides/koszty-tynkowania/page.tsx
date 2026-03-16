import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'Koszty tynkowania 2026 // lowriskquotes',
  description:
    'Realne koszty tynkowania ścian i sufitów w Polsce. Tynk gipsowy, cementowo-wapienny, maszynowy — ceny z oceną ryzyka.',
  alternates: { canonical: '/pl/guides/koszty-tynkowania/' },
}

export default function KosztyTynkowaniaPage() {
  return (
    <div className="guide">
      <h1>koszty tynkowania: ceny za m² i ukryte ryzyka</h1>

      <p>
        Tynkowanie to jedno z najbardziej powtarzalnych zleceń w budownictwie. Stawki za metr
        kwadratowy są dobrze znane na rynku, a doświadczona ekipa potrafi dokładnie oszacować
        czas pracy. Mimo to zdarzają się wyceny, które nie pokrywają kosztów — najczęściej przez
        stan podłoża, trudny dostęp lub zmiany zakresu w trakcie prac.
      </p>
      <p>
        Poniżej rozbicie kosztów tynkowania w 2026 roku z oceną ryzyka na każdej pozycji.
      </p>

      <h2>typowe rozbicie kosztów</h2>

      <p>
        Ceny dotyczą tynkowania mieszkania lub domu o powierzchni ścian 150-300 m².
      </p>

      <ASCIIBox title="Rozbicie kosztów tynkowania">
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
              <td>Tynk gipsowy maszynowy</td>
              <td>35 - 55 zł/m²</td>
              <td className="guide__highlight">Niskie</td>
              <td>Standardowa praca, dobrze mierzalna</td>
            </tr>
            <tr>
              <td>Tynk cementowo-wapienny</td>
              <td>40 - 65 zł/m²</td>
              <td className="guide__highlight">Niskie</td>
              <td>Pomieszczenia mokre i piwnice</td>
            </tr>
            <tr>
              <td>Przygotowanie podłoża</td>
              <td>2 000 - 6 000 zł</td>
              <td className="guide__highlight">Średnie</td>
              <td>Skucie starych tynków, gruntowanie</td>
            </tr>
            <tr>
              <td>Narożniki i listwy</td>
              <td>1 000 - 3 000 zł</td>
              <td className="guide__highlight">Pewny</td>
              <td>Liczone na metry bieżące</td>
            </tr>
            <tr>
              <td>Sufity</td>
              <td>45 - 70 zł/m²</td>
              <td className="guide__highlight">Średnie</td>
              <td>Trudniejszy dostęp, wolniejsza praca</td>
            </tr>
            <tr>
              <td>Gładź gipsowa (wykończenie)</td>
              <td>20 - 35 zł/m²</td>
              <td className="guide__highlight">Niskie</td>
              <td>Po tynku maszynowym — opcjonalnie</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        Przykład: tynk gipsowy maszynowy w mieszkaniu 200 m² ścian: <span className="guide__highlight">
        7 000 - 11 000 zł</span> za samo nakładanie, plus przygotowanie podłoża i materiał.
      </p>

      <h2>co podrożeje wycenę</h2>

      <ul>
        <li>
          <strong>Stare tynki do skucia.</strong> Skucie i wywóz starych tynków to dodatkowe
          2 000-6 000 zł, zależnie od grubości i twardości. Jeśli nie wiesz, co jest pod spodem,
          oznacz jako Średnie ryzyko.
        </li>
        <li>
          <strong>Nierówne ściany.</strong> Odchyłki powyżej 2-3 cm wymagają dodatkowych warstw
          lub wyrównywania zaprawą. To podnosi zużycie materiału i czas pracy.
        </li>
        <li>
          <strong>Wysoko i ciasno.</strong> Klatki schodowe, sufity powyżej 3 m, wąskie korytarze
          — wszystko to spowalnia pracę i wymaga rusztowań.
        </li>
      </ul>

      <h2>pewna wycena tynkowania</h2>

      <p>
        Zmierz powierzchnię ścian i sufitów, oceń stan podłoża. Tynk maszynowy na nowym murze
        to Niskie ryzyko. Skuwanie starych tynków w kamienicy to Średnie lub Wysokie. Wprowadź
        pozycje do symulacji i uzyskaj cenę dopasowaną do rzeczywistego ryzyka.
      </p>

      <div className="guide__cta">
        <Link href="/pl/estimate/">[ WYCENĘ TYNKOWANIA ]</Link>
      </div>
    </div>
  )
}
