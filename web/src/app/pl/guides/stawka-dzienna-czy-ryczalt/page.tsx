import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'Stawka dzienna czy ryczałt? 2026 // lowriskquotes',
  description:
    'Kiedy brać stawkę dzienną, a kiedy cenę ryczałtową? Porównanie modeli rozliczania dla polskich wykonawców.',
  alternates: { canonical: '/pl/guides/stawka-dzienna-czy-ryczalt/' },
}

export default function StawkaDziennaCzyRyczaltPage() {
  return (
    <div className="guide">
      <h1>stawka dzienna czy ryczałt: który model rozliczania wybrać</h1>

      <p>
        „Ile za dzień?" kontra „Ile za całość?" — to pytanie, z którym mierzy się każdy
        wykonawca. Oba modele mają swoje miejsce, ale wybór złego modelu do złego zlecenia
        to prosta droga do straty pieniędzy lub klienta.
      </p>
      <p>
        Kluczowe pytanie brzmi: kto ponosi ryzyko? Przy stawce dziennej ryzyko jest po stronie
        klienta. Przy ryczałcie — po stronie wykonawcy.
      </p>

      <h2>kiedy stawka dzienna ma sens</h2>

      <ASCIIBox title="Stawka dzienna — zalety i wady">
        <table className="guide__table">
          <thead>
            <tr>
              <th>Zalety</th>
              <th>Wady</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Zero ryzyka dla Ciebie</td>
              <td>Klient nie zna kosztu końcowego</td>
            </tr>
            <tr>
              <td>Elastyczność przy zmianach zakresu</td>
              <td>Klient może kwestionować tempo pracy</td>
            </tr>
            <tr>
              <td>Idealna przy pracach trudnych do wyceny</td>
              <td>Ogranicza Twój zarobek przy sprawnej pracy</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        Stawka dzienna sprawdza się przy: pracach rozbiórkowych z niewiadomymi, naprawach po
        zalaniu, drobnych zleceniach jednodniowych, pracach, których zakresu klient nie potrafi
        określić. Typowe stawki dzienne w Polsce w 2026: <span className="guide__highlight">
        500-1 200 zł/dzień</span> za jednego fachowca, zależnie od specjalizacji i regionu.
      </p>

      <h2>kiedy ryczałt jest lepszy</h2>

      <p>
        Ryczałt (cena za całość) sprawdza się gdy:
      </p>
      <ul>
        <li>Zakres jest jasno zdefiniowany i mierzalny</li>
        <li>Robiłeś to wielokrotnie i znasz realne koszty</li>
        <li>Klient chce znać cenę końcową przed rozpoczęciem</li>
        <li>Jesteś sprawny i możesz zarobić więcej niż na dniówce</li>
      </ul>

      <p>
        Przy ryczałcie Twój zysk zależy od efektywności. Ekipa, która potrafi zrobić łazienkę
        w 8 dni zamiast 12, zarabia więcej za dzień pracy. Ale jeśli źle wycenisz — tracisz.
      </p>

      <h2>model hybrydowy</h2>

      <p>
        Wielu doświadczonych wykonawców łączy oba podejścia. Znane pozycje (płytki, malowanie,
        montaż) wyceniają ryczałtowo. Nieznane (rozbiórka, naprawa ukrytych uszkodzeń) —
        na stawkę dzienną. To uczciwe dla obu stron i eliminuje ryzyko niedoszacowania.
      </p>

      <h2>jak to policzyć</h2>

      <p>
        Wprowadź pozycje ryczałtowe z ich poziomem ryzyka. Pozycje dzienne oznacz jako Pewny
        koszt (bo stawka dzienna jest znana). Kalkulator pokaże łączny zakres z uwzględnieniem
        buforu na pozycjach ryzykownych.
      </p>

      <div className="guide__cta">
        <Link href="/pl/estimate/">[ PORÓWNAJ MODELE WYCENY ]</Link>
      </div>
    </div>
  )
}
