import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'Koszty malowania 2026 // lowriskquotes',
  description:
    'Ile kosztuje malowanie mieszkania lub domu w Polsce? Stawki za m², ukryte koszty i ocena ryzyka dla wykonawców.',
  alternates: { canonical: '/pl/guides/koszty-malowania/' },
}

export default function KosztyMalowaniaPage() {
  return (
    <div className="guide">
      <h1>koszty malowania: stawki, pułapki i realna wycena</h1>

      <p>
        Malowanie to pozornie najprostsza usługa remontowa. Klient widzi farbę i wałek, więc
        oczekuje niskiej ceny. Tymczasem 60-70% czasu malarza to przygotowanie — szpachlowanie,
        szlifowanie, gruntowanie, zabezpieczanie. Wykonawca, który wycenia tylko nakładanie farby,
        zawsze traci.
      </p>
      <p>
        Poniżej realne koszty malowania w 2026 roku z uwzględnieniem przygotowania powierzchni.
      </p>

      <h2>typowe rozbicie kosztów</h2>

      <p>
        Ceny dla mieszkania o powierzchni ścian i sufitów 120-200 m².
      </p>

      <ASCIIBox title="Rozbicie kosztów malowania">
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
              <td>Malowanie ścian (2 warstwy)</td>
              <td>18 - 30 zł/m²</td>
              <td className="guide__highlight">Niskie</td>
              <td>Na przygotowanym podłożu</td>
            </tr>
            <tr>
              <td>Malowanie sufitów</td>
              <td>22 - 35 zł/m²</td>
              <td className="guide__highlight">Niskie</td>
              <td>Wolniejsza praca, trudniejszy dostęp</td>
            </tr>
            <tr>
              <td>Szpachlowanie i szlifowanie</td>
              <td>15 - 30 zł/m²</td>
              <td className="guide__highlight">Średnie</td>
              <td>Zależy od stanu ścian</td>
            </tr>
            <tr>
              <td>Gruntowanie</td>
              <td>5 - 10 zł/m²</td>
              <td className="guide__highlight">Pewny</td>
              <td>Zawsze potrzebne, łatwe do wyceny</td>
            </tr>
            <tr>
              <td>Zabezpieczenie mebli i podłóg</td>
              <td>500 - 1 500 zł</td>
              <td className="guide__highlight">Pewny</td>
              <td>Folia, taśma, kartony</td>
            </tr>
            <tr>
              <td>Malowanie stolarki (drzwi, listwy)</td>
              <td>80 - 200 zł/szt.</td>
              <td className="guide__highlight">Średnie</td>
              <td>Stara farba = zdzieranie + podkład</td>
            </tr>
            <tr>
              <td>Farba (materiał)</td>
              <td>1 500 - 4 000 zł</td>
              <td className="guide__highlight">Niskie</td>
              <td>Zależy od marki i liczby kolorów</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        Łączny koszt malowania mieszkania 60 m² (ok. 160 m² ścian): <span className="guide__highlight">
        6 500 - 15 000 zł</span> z przygotowaniem i materiałem.
      </p>

      <h2>gdzie malarze tracą pieniądze</h2>

      <ul>
        <li>
          <strong>Niedoszacowanie przygotowania.</strong> Ściany po tapecie, z pęknięciami lub
          wilgocią wymagają znacznie więcej pracy niż świeży tynk. Zawsze obejrzyj ściany
          przed wyceną.
        </li>
        <li>
          <strong>Kolory ciemne i nasycone.</strong> Ciemne barwy wymagają 3-4 warstw zamiast 2.
          To podwaja czas i zużycie farby. Pytaj o kolor przed wyceną.
        </li>
        <li>
          <strong>Meble w pomieszczeniu.</strong> Klient obiecuje opróżnić pokój, ale tego nie
          robi. Przekładanie i zabezpieczanie mebli pochłania godziny. Ustal to pisemnie.
        </li>
      </ul>

      <h2>wycena malowania z głową</h2>

      <p>
        Zmierz powierzchnię, oceń stan ścian, zapytaj o kolory. Malowanie przygotowanego pokoju
        to Niskie ryzyko. Stare ściany po tapecie to Średnie. Wprowadź każdą pozycję do
        kalkulatora i uzyskaj cenę, która nie zjada Twojego zysku.
      </p>

      <div className="guide__cta">
        <Link href="/pl/estimate/">[ WYCENĘ MALOWANIA ]</Link>
      </div>
    </div>
  )
}
