import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'

export const metadata: Metadata = {
  title: 'o nas // lowriskquotes',
  description: 'Jak LowRiskQuotes wykorzystuje symulację Monte Carlo, aby pomóc wykonawcom tworzyć bezpieczniejsze wyceny.',
  alternates: { canonical: '/pl/about/' },
}

export default function PlAboutPage() {
  return (
    <div>
      <h1 style={{ color: 'var(--accent-amber)', fontSize: '20px', marginBottom: '24px' }}>
        o lowriskquotes
      </h1>

      <ASCIIBox title="Co to jest">
        <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '12px' }}>
          LowRiskQuotes to darmowe narzędzie do wyceny kosztów dla wykonawców, rzemieślników
          i każdego, kto musi wycenić zlecenie bez zaniżania ceny.
        </p>
        <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
          Zamiast dodawać ryczałtowy procent rezerwy do wyceny, LowRiskQuotes uruchamia
          symulację Monte Carlo — tysiące losowych scenariuszy kosztowych opartych na
          poziomach niepewności, które przypisujesz każdej pozycji, czasie trwania zlecenia
          i dojazdach. Wynikiem jest rozkład prawdopodobieństwa pokazujący, ile zlecenie
          prawdopodobnie będzie faktycznie kosztować.
        </p>
      </ASCIIBox>

      <ASCIIBox title="Jak działa Monte Carlo">
        <div style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
          <p style={{ marginBottom: '12px' }}>
            Dla każdej pozycji w wycenie określasz, jak bardzo jesteś niepewny co do kosztu
            (od &quot;pewny&quot; przy +/-2% do &quot;szacunek na oko&quot; przy +/-40%). To samo dotyczy
            czasu trwania zlecenia i dojazdu.
          </p>
          <p style={{ marginBottom: '12px' }}>
            Silnik następnie uruchamia od 1000 do 10 000 symulowanych wersji Twojego projektu,
            każda z losowymi kosztami wyciągniętymi z Twoich zakresów niepewności. Symulacje
            są skrzywione w kierunku przekroczeń — ponieważ w rzeczywistości projekty częściej
            przekraczają budżet niż schodzą poniżej.
          </p>
          <p>
            Wynik mówi Ci: na 80. percentylu (nasz zalecany poziom wyceny) jest 80% szans,
            że Twoje faktyczne koszty będą niższe od tej kwoty. To znacznie bezpieczniejsza
            podstawa do wyceny niż przeczucie plus 10%.
          </p>
        </div>
      </ASCIIBox>

      <ASCIIBox title="Twoje dane">
        <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
          Wszystko działa w Twojej przeglądarce. Twoje wyceny są zapisywane tylko na Twoim
          urządzeniu (localStorage). Żadne dane nie są wysyłane na żaden serwer. Nie wymaga
          konta. Brak śledzenia poza podstawowymi statystykami.
        </p>
      </ASCIIBox>

      <div style={{ marginTop: '24px', fontSize: '13px' }}>
        <Link href="/pl/guides/jak-wycenic-zlecenie/" style={{ marginRight: '16px' }}>
          [CZYTAJ PORADNIK]
        </Link>
        <Link href="/pl/estimate/">
          [ROZPOCZNIJ]
        </Link>
      </div>
    </div>
  )
}
