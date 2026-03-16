import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'Poradnik wyceny dla wykonawców 2026 // lowriskquotes',
  description:
    'Jak wyceniać zlecenia budowlane? Kompletny poradnik dla wykonawców — od obmiaru po prezentację oferty klientowi.',
  alternates: { canonical: '/pl/guides/poradnik-wyceny-dla-wykonawcow/' },
}

export default function PoradnikWycenyPage() {
  return (
    <div className="guide">
      <h1>poradnik wyceny dla wykonawców: od obmiaru do oferty</h1>

      <p>
        Wycena to umiejętność, która decyduje o tym, czy Twoja firma zarabia. Zbyt niska cena —
        pracujesz za darmo lub na minus. Zbyt wysoka — tracisz zlecenie. Większość wykonawców
        uczy się wyceniania metodą prób i błędów, płacąc za naukę własnymi pieniędzmi.
      </p>
      <p>
        Ten poradnik pokazuje systematyczne podejście do wyceny, które minimalizuje ryzyko
        i pozwala składać oferty z pewnością.
      </p>

      <h2>krok 1: dokładny obmiar</h2>

      <p>
        Wszystko zaczyna się od wizji lokalnej. Nigdy nie wyceniaj ze zdjęć ani z opisu
        telefonicznego. Na miejscu zmierz:
      </p>
      <ul>
        <li>Powierzchnie ścian, podłóg, sufitów</li>
        <li>Długości instalacji do wymiany lub poprowadzenia</li>
        <li>Stan podłoża i istniejących elementów</li>
        <li>Dostęp — dojazd, winda, klatka schodowa, parking</li>
      </ul>

      <h2>krok 2: lista pozycji</h2>

      <p>
        Rozbij zlecenie na osobne pozycje. Każda pozycja powinna mieć:
      </p>

      <ASCIIBox title="Struktura pozycji">
        <table className="guide__table">
          <thead>
            <tr>
              <th>Element</th>
              <th>Przykład</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Nazwa pozycji</td>
              <td>Demontaż starej glazury</td>
            </tr>
            <tr>
              <td>Koszt materiału</td>
              <td>200 zł (worki, narzędzia)</td>
            </tr>
            <tr>
              <td>Koszt robocizny</td>
              <td>1 200 zł (2 dni × 600 zł)</td>
            </tr>
            <tr>
              <td>Poziom ryzyka</td>
              <td>Średnie — nie wiadomo co pod spodem</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <h2>krok 3: ocena ryzyka</h2>

      <p>
        Każdej pozycji przypisz poziom pewności — od Pewny (masz twardą ofertę dostawcy) do
        Szacunek na oko (zgadujesz). To nie jest dodawanie ryczałtowych 10%. To uczciwa ocena
        każdej pozycji z osobna.
      </p>

      <h2>krok 4: kalkulacja końcowa</h2>

      <p>
        Zsumuj koszty, dodaj narzut na zarządzanie i zysk, uwzględnij rezerwy wynikające z
        poziomu ryzyka. Twoja cena końcowa powinna pokrywać:
      </p>
      <ul>
        <li>Materiały i robociznę</li>
        <li>Koszty pośrednie (dojazd, narzędzia, ubezpieczenie)</li>
        <li>Rezerwę na ryzyko (różną dla każdej pozycji)</li>
        <li>Twój zysk</li>
      </ul>

      <h2>krok 5: prezentacja oferty</h2>

      <p>
        Klient doceni przejrzystą wycenę z rozbiciem na pozycje. Nie musisz pokazywać poziomu
        ryzyka — ale pokaż zakres kosztów. „Demontaż: 1 200-1 800 zł, zależnie od stanu pod
        glazurą" brzmi profesjonalnie i uczciwie.
      </p>

      <h2>zacznij wyceniać systematycznie</h2>

      <p>
        Wprowadź swoje pozycje do kalkulatora. System obliczy bezpieczny zakres cenowy
        i pokaże, ile rezerwy potrzebujesz na każdym etapie.
      </p>

      <div className="guide__cta">
        <Link href="/pl/estimate/">[ WYCENĘ ZLECENIA ]</Link>
      </div>
    </div>
  )
}
