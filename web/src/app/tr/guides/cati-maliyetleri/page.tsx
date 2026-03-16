import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'Çatı maliyetleri Türkiye 2026 // lowriskquotes',
  description:
    'Türkiye\'deki ustalar için gerçekçi çatı maliyetleri. Komple yenileme, düz çatı, onarımlar ve sac işleri — fiyatlandırmada yanılmamak için risk seviyeleriyle.',
  alternates: { canonical: '/tr/guides/cati-maliyetleri/' },
}

export default function CatiMaliyetleriPage() {
  return (
    <div className="guide">
      <h1>çatı maliyetleri: yukarı çıkmadan göremeyeceğiniz bir işi fiyatlandırmak</h1>

      <p>
        Çatı işleri, doğası gereği fiyatlandırma açısından yüksek riskli bir alandır. Fiyatı
        yerden belirlersiniz, sorunları yüksekte keşfedersiniz. Çürük çıtalar, eğilmiş makaslar,
        dokunulduğunda dağılan su yalıtımı. İskele kurulmuştur, sayaç işliyor ve her sürpriz
        para demektir.
      </p>
      <p>
        Bu sayfa, 2026&apos;da Türkiye&apos;deki çatı işlerinin gerçekte ne kadara mal olduğunu
        ve her kalemdeki belirsizliğin nerede gizlendiğini gösterir.
      </p>

      <h2>proje türüne göre fiyat aralıkları</h2>

      <p>
        Standart bir evde yaygın çatı işleri için gösterge fiyatlar. Gerçek maliyetler eğime,
        erişilebilirliğe, malzeme seçimine ve eski çatı kaldırıldığında ne bulduğunuza bağlıdır.
      </p>

      <ASCIIBox title="Çatı proje türüne göre maliyetler">
        <table className="guide__table">
          <thead>
            <tr>
              <th>Proje türü</th>
              <th>Tipik maliyet</th>
              <th>Süre</th>
              <th>Notlar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Komple yenileme (kiremit)</td>
              <td>80.000 ₺ - 200.000 ₺</td>
              <td>5-12 gün</td>
              <td>Söküm ve yeniden örtme. Fiyat çatı iskeletinin durumuna göre değişir.</td>
            </tr>
            <tr>
              <td>Düz çatı (membran/bitüm)</td>
              <td>25.000 ₺ - 70.000 ₺</td>
              <td>2-5 gün</td>
              <td>20 m²&apos;lik bölüm başına. Altlığın durumu bilinmiyor.</td>
            </tr>
            <tr>
              <td>Çatı onarımı</td>
              <td>3.000 ₺ - 25.000 ₺</td>
              <td>0,5-2 gün</td>
              <td>Kiremit değişiminden dere onarımına. Geniş aralık.</td>
            </tr>
            <tr>
              <td>Oluklar ve iniş boruları</td>
              <td>15.000 ₺ - 45.000 ₺</td>
              <td>2-3 gün</td>
              <td>Galvaniz veya PVC değişimi. Çürük saçak tahtası = ek maliyet.</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <h2>somut örnek: müstakil evde komple çatı yenileme</h2>

      <p>
        1980&apos;lerden kalma müstakil ev. Orijinal beton kiremitler. Su yalıtımı bozulmuş,
        bazı çıtalar şüpheli. Çatı yüzeyi yaklaşık 90 m². Müşteri kil kiremit ve kuru mahya
        istiyor.
      </p>

      <ASCIIBox title="Çatı yenileme maliyet dağılımı">
        <table className="guide__table">
          <thead>
            <tr>
              <th>Kalem</th>
              <th>Aralık</th>
              <th>Risk seviyesi</th>
              <th>Notlar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>İskele</td>
              <td>12.000 ₺ - 22.000 ₺</td>
              <td className="guide__highlight">Düşük</td>
              <td>Sabit fiyat teklifi alın. Süre aşımı = daha uzun kira.</td>
            </tr>
            <tr>
              <td>Mevcut kiremit ve örtü sökümü</td>
              <td>8.000 ₺ - 15.000 ₺</td>
              <td className="guide__highlight">Düşük</td>
              <td>Öngörülebilir işçilik. Eski çiviler ve harç yavaşlatır.</td>
            </tr>
            <tr>
              <td>Çıta değişimi</td>
              <td>6.000 ₺ - 14.000 ₺</td>
              <td className="guide__highlight">Orta</td>
              <td>Komple çıta yenileme standart. Çürükler sökümde kırılır.</td>
            </tr>
            <tr>
              <td>Difüzyon örtüsü (su yalıtımı)</td>
              <td>5.000 ₺ - 10.000 ₺</td>
              <td className="guide__highlight">Düşük</td>
              <td>Stabil malzeme maliyeti. Uygulama çatı örtüsüne dahil.</td>
            </tr>
            <tr>
              <td>Çatı iskeleti onarımları (makaslar)</td>
              <td>0 ₺ - 35.000 ₺</td>
              <td className="guide__highlight">Yüksek</td>
              <td>Büyük bilinmeyen. Sıfır olabilir. Sekiz makas olabilir.</td>
            </tr>
            <tr>
              <td>Kil kiremit (tedarik)</td>
              <td>20.000 ₺ - 40.000 ₺</td>
              <td className="guide__highlight">Orta</td>
              <td>Beton kiremit daha ucuz. Doğal arduvaz 3-4 kat pahalı.</td>
            </tr>
            <tr>
              <td>İşçilik (uygulama)</td>
              <td>18.000 ₺ - 35.000 ₺</td>
              <td className="guide__highlight">Düşük</td>
              <td>Sizin ekibiniz. Hava koşulları ana değişken.</td>
            </tr>
            <tr>
              <td>Mahya ve saçaklar (kuru montaj)</td>
              <td>4.000 ₺ - 10.000 ₺</td>
              <td className="guide__highlight">Düşük</td>
              <td>Mekanik tespit. Harçla sabitlemeden daha hızlı.</td>
            </tr>
            <tr>
              <td>Sac işleri (dereler/baca dipleri)</td>
              <td>6.000 ₺ - 16.000 ₺</td>
              <td className="guide__highlight">Orta</td>
              <td>Çinko/galvaniz fiyatları dalgalanır. Teklif vermeden önce kontrol edin.</td>
            </tr>
            <tr>
              <td>Konteyner ve atık bertarafı</td>
              <td>5.000 ₺ - 10.000 ₺</td>
              <td className="guide__highlight">Düşük</td>
              <td>Eski kiremitler ağırdır. En az iki konteyner hesaplayın.</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        Komple yenileme için toplam fiyat aralığı: <span className="guide__highlight">84.000 ₺ -
        207.000 ₺</span>. Bu 123.000 ₺&apos;lik fark ihmal değil — gerçek belirsizliktir.
        Sadece çatı iskeleti onarımları projeyi 35.000 ₺ değiştirebilir. Geri kalanı,
        tedarikçi fiyatlarınızı ve ekibinizin kapasitesini biliyorsanız makul ölçüde
        öngörülebilirdir.
      </p>

      <h2>çatı projeleri nerede raydan çıkar</h2>

      <p>
        Çatı tekliflerinde dört risk faktörü baskındır:
      </p>
      <ul>
        <li>
          <strong>Gizli çatı iskeleti.</strong> Makasların durumunu yerden göremezsiniz. Drone
          incelemesi veya çatı arasından kontrol yardımcı olur, ama kiremitler kaldırılana kadar
          kesin bilemezsiniz. Çatı 1990 öncesiyse ve hiç dokunulmamışsa, en azından biraz iskelet
          çalışması planlayın ve Yüksek olarak işaretleyin.
        </li>
        <li>
          <strong>İskele.</strong> İskelenin kendisi öngörülebilirdir. Risk süredir. Hava
          koşulları veya iskelet onarımları projeye üç gün eklerse, bir haftalık ek kira
          ödersiniz. Bunu iskele kalemine dahil edin.
        </li>
        <li>
          <strong>Hava penceresi.</strong> Açık bir çatı bir gece boyunca yağmura maruz kalamaz.
          Söküm-ve-örtü aşaması için gerçekçi bir hava penceresine ihtiyacınız var. Kışın bu
          pencere daha kısadır. Buna göre fiyatlandırın veya riski kabul edin.
        </li>
        <li>
          <strong>Malzeme fiyat dalgalanmaları.</strong> Çinko, kereste ve kiremitlerin hepsi
          son yıllarda sert fiyat hareketleri yaşadı. Kabul edilmeden önce sekiz hafta bekleyen
          bir teklif fiyat güncellemesi gerektirebilir. Tekliflerinize geçerlilik tarihi koyun —
          en fazla 30 gün.
        </li>
      </ul>

      <h2>çatıyı akıllıca fiyatlandırın</h2>

      <p>
        İskele, su yalıtımı ve kendi işçiliğiniz Düşük belirsizliktir. Bu rakamları bilirsiniz.
        Çatı iskeleti onarımları ve sac işleri riskin gizlendiği yerdir. Her kalemi şablon bir
        yüzdeyle şişirmek yerine, riskli kalemleri dürüstçe değerlendirin ve aralığı simüle
        edin. Teklifiniz müşteriye gerçekçi bir aralık gösterir — ve gerçekten patlayabilen
        kalemlerde marjınızı korur.
      </p>

      <div className="guide__cta">
        <Link href="/tr/estimate/">[ ÇATINIZI FİYATLANDIRIN ]</Link>
      </div>
    </div>
  )
}
