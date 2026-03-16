import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIILogo from '@/components/layout/ASCIILogo'
import ASCIIBox from '@/components/ui/ASCIIBox'
import RecentEstimates from '@/components/home/RecentEstimates'
import '../page.css'

export const metadata: Metadata = {
  title: 'lowriskquotes // ustalar için maliyet tahmini',
  description: 'Ustalar ve müteahhitler için Monte Carlo maliyet projeksiyonları. Tekliflerinizi tahmin etmeyi bırakın — doğru fiyatı bulmak için binlerce senaryo simüle edin.',
  alternates: { canonical: '/tr/' },
}

const SAMPLE_OUTPUT = `┌────────────────┬─────────────┐
│ Tutucu          │ 98.900 ₺    │
│ Önerilen        │ 118.400 ₺   │
│ İhtiyatlı       │ 137.400 ₺   │
└────────────────┴─────────────┘

RİSK DAĞILIMI
Malzeme        [██████░░░░░░░░░░░░░░] %30
Süre           [█████████░░░░░░░░░░░] %45
Ulaşım         [███░░░░░░░░░░░░░░░░░] %15`

export default function TrHomePage() {
  return (
    <div className="home">
      <section className="home__hero">
        <ASCIILogo />
        <p className="home__tagline">tahmin etmeyi bırakın // simüle etmeye başlayın</p>
        <p className="home__subtitle">ustalar için Monte Carlo maliyet projeksiyonları</p>
      </section>

      <section className="home__how-it-works">
        <ASCIIBox title="Nasıl çalışır">
          <div className="home__steps">
            <div className="home__step"><span className="home__step-num">[1]</span> Kalemlerinizi, sürenizi ve ulaşımınızı belirsizlik seviyeleriyle birlikte girin</div>
            <div className="home__step"><span className="home__step-num">[2]</span> Monte Carlo simülasyonu 10.000 maliyet senaryosu hesaplar</div>
            <div className="home__step"><span className="home__step-num">[3]</span> İstatistiksel olarak güvenli bir teklif alın — tahmin değil</div>
          </div>
        </ASCIIBox>
      </section>

      <section className="home__preview">
        <ASCIIBox title="Örnek sonuç">
          <pre className="home__sample">{SAMPLE_OUTPUT}</pre>
        </ASCIIBox>
      </section>

      <RecentEstimates />

      <section className="home__cta">
        <Link href="/tr/estimate/" className="home__cta-button">[TEKLİF OLUŞTUR]</Link>
      </section>

      <section className="home__seo">
        <p>
          LowRiskQuotes, ustaların ve müteahhitlerin gerçek belirsizliği hesaba katan teklifler
          oluşturmasına yardımcı olmak için Monte Carlo simülasyonu kullanır. Sabit bir yüzde
          eklemek yerine, para kaybetme riskinizin çok düşük olduğu fiyatı bulmak için binlerce
          maliyet senaryosu simüle edin.
        </p>
        <p>
          Çevrimdışı çalışır. Hesap gerekmez. Verileriniz asla tarayıcınızdan çıkmaz.
        </p>
      </section>
    </div>
  )
}
