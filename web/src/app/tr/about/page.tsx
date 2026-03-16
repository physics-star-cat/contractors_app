import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'

export const metadata: Metadata = {
  title: 'hakkında // lowriskquotes',
  description: 'LowRiskQuotes, ustaların daha güvenli teklifler oluşturmasına yardımcı olmak için Monte Carlo simülasyonunu nasıl kullanır.',
  alternates: { canonical: '/tr/about/' },
}

export default function TrAboutPage() {
  return (
    <div>
      <h1 style={{ color: 'var(--accent-amber)', fontSize: '20px', marginBottom: '24px' }}>
        lowriskquotes hakkında
      </h1>

      <ASCIIBox title="Nedir">
        <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '12px' }}>
          LowRiskQuotes, ustalar, inşaat müteahhitleri ve bir projeyi düşük fiyatlandırmadan
          fiyatlandırması gereken herkes için ücretsiz bir maliyet tahmin aracıdır.
        </p>
        <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
          Teklifinize sabit bir yüzde eklemek yerine, LowRiskQuotes bir Monte Carlo simülasyonu
          çalıştırır — her kaleme, proje süresine ve ulaşımınıza atadığınız belirsizlik
          seviyelerine dayalı binlerce rastgele maliyet senaryosu. Sonuç, projenizin gerçekte
          ne kadara mal olacağını gösteren bir olasılık dağılımıdır.
        </p>
      </ASCIIBox>

      <ASCIIBox title="Monte Carlo nasıl çalışır">
        <div style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
          <p style={{ marginBottom: '12px' }}>
            Teklifinizdeki her kalem için, maliyet hakkındaki belirsizlik seviyenizi belirtirsiniz
            (&quot;kesin&quot; +/-%2&apos;den &quot;uçuk tahmin&quot; +/-%40&apos;a kadar). Aynı
            ilke proje süresi ve ulaşım süresi için de geçerlidir.
          </p>
          <p style={{ marginBottom: '12px' }}>
            Motor daha sonra projenizin 1.000 ila 10.000 simüle edilmiş versiyonunu çalıştırır;
            her biri belirsizlik aralıklarınızdan çekilen rastgele maliyetlerle. Simülasyonlar
            aşımlara doğru ağırlıklıdır — çünkü gerçekte projeler bütçeyi daha sık aşar.
          </p>
          <p>
            Sonuç size şunu gösterir: 80. yüzdelikte (önerilen teklif seviyemiz), gerçek
            maliyetlerinizin bu tutarın altında kalma olasılığı %80&apos;dir. Bu, sezgi artı
            %10&apos;dan çok daha güvenli bir teklif temelidir.
          </p>
        </div>
      </ASCIIBox>

      <ASCIIBox title="Verileriniz">
        <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
          Her şey tarayıcınızda çalışır. Teklifleriniz yalnızca cihazınıza kaydedilir
          (localStorage). Sunucuya hiçbir veri gönderilmez. Hesap gerekmez. Temel istatistikler
          dışında izleme yapılmaz.
        </p>
      </ASCIIBox>

      <div style={{ marginTop: '24px', fontSize: '13px' }}>
        <Link href="/tr/guides/is-teklifi-nasil-hazirlanir/" style={{ marginRight: '16px' }}>
          [REHBERİ OKU]
        </Link>
        <Link href="/tr/estimate/">
          [BAŞLA]
        </Link>
      </div>
    </div>
  )
}
