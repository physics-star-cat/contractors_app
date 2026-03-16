import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'Banyo renovasyon maliyetleri Türkiye 2026 // lowriskquotes',
  description:
    'Türkiye\'deki ustalar için gerçekçi banyo renovasyon maliyetleri. Para kaybetmeden fiyatlandırmak için risk seviyeleriyle kalem kalem dökümü.',
  alternates: { canonical: '/tr/guides/banyo-renovasyon-maliyetleri/' },
}

export default function BanyoRenovasyonMaliyetleriPage() {
  return (
    <div className="guide">
      <h1>banyo renovasyon maliyetleri: ustaların gerçekten bilmesi gerekenler</h1>

      <p>
        Banyo birçok ustanın ekmek kapısıdır. Aynı zamanda masada en çok para bırakılan yerdir.
        Kapsam basit görünür — söküm, yeniden tesisat, fayans, montaj. Ama gizli maliyetler
        hızla birikir: küvet arkasındaki çürük kirişler, eski yapıştırıcıdaki asbest, başladıktan
        üç hafta sonra fayans değiştiren müşteri.
      </p>
      <p>
        Bu sayfa, 2026&apos;da Türkiye&apos;deki gerçek banyo renovasyon maliyetlerini ve her
        kalemdeki riskin nerede olduğunu gösterir.
      </p>

      <h2>tipik maliyet dağılımı</h2>

      <p>
        Türkiye&apos;de standart bir banyoda (yaklaşık 5-6 m²) orta sınıf banyo renovasyonu
        maliyetleri. Ekonomik ve lüks projeler bu tutarların iki tarafında yer alacaktır.
      </p>

      <ASCIIBox title="Banyo maliyet dağılımı">
        <table className="guide__table">
          <thead>
            <tr>
              <th>Kalem</th>
              <th>Fiyat aralığı</th>
              <th>Risk seviyesi</th>
              <th>Notlar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Söküm ve moloz taşıma</td>
              <td>5.000 ₺ - 10.000 ₺</td>
              <td className="guide__highlight">Orta</td>
              <td>Duvarların arkasında ne bulacağınıza bağlı</td>
            </tr>
            <tr>
              <td>Tesisat</td>
              <td>10.000 ₺ - 20.000 ₺</td>
              <td className="guide__highlight">Orta</td>
              <td>Gider taşıma = daha pahalı. Aynı yerde = daha ucuz.</td>
            </tr>
            <tr>
              <td>Elektrik</td>
              <td>5.000 ₺ - 12.000 ₺</td>
              <td className="guide__highlight">Düşük</td>
              <td>Standart tesisat. Yerden ısıtma 5.000 ₺+ ekler.</td>
            </tr>
            <tr>
              <td>Duvar ve zemin fayansı</td>
              <td>15.000 ₺ - 35.000 ₺</td>
              <td className="guide__highlight">Düşük - Orta</td>
              <td>Büyük format = daha fazla kesim ve fire</td>
            </tr>
            <tr>
              <td>Armatürler</td>
              <td>8.000 ₺ - 30.000 ₺</td>
              <td className="guide__highlight">Orta</td>
              <td>Müşteri tedarikli ürünler = daha yüksek gecikme riski</td>
            </tr>
            <tr>
              <td>Duş camı</td>
              <td>4.000 ₺ - 25.000 ₺</td>
              <td className="guide__highlight">Yüksek</td>
              <td>Hazır ürün = Düşük. Özel cam = Yüksek.</td>
            </tr>
            <tr>
              <td>Su yalıtımı ve alçıpan</td>
              <td>4.000 ₺ - 10.000 ₺</td>
              <td className="guide__highlight">Düşük</td>
              <td>Sektör standardı. Doğru uygulama kritik.</td>
            </tr>
            <tr>
              <td>Konteyner ve atık bertarafı</td>
              <td>3.000 ₺ - 6.000 ₺</td>
              <td className="guide__highlight">Kesin</td>
              <td>Önceden sabit fiyat alın</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        Orta sınıf banyo için toplam fiyat aralığı: <span className="guide__highlight">54.000 ₺ -
        148.000 ₺</span>. Bu geniş aralık esas olarak müşterinin seçtiği donanıma ve eski
        fayansın arkasında neyin gizlendiğine bağlıdır.
      </p>

      <h2>banyolar nerede raydan çıkar</h2>

      <p>
        Banyo bütçe aşımlarının en büyük üç kaynağı:
      </p>
      <ul>
        <li>
          <strong>Gizli hasar.</strong> Çürük kirişler, duvarlarda nem, değiştirilmesi gereken
          eski kurşun borular. Sökene kadar bilemezsiniz. Yapısal sorun ihtimali varsa, bu
          kalemleri Yüksek belirsizlik olarak işaretleyin.
        </li>
        <li>
          <strong>Müşteri değişiklikleri.</strong> Sosyal medyada bir şey gördüler. İstedikleri
          fayans bitti. Klozeti diğer duvara taşımak istiyorlar. İş devam ederken yapılan her
          değişiklik zaman ve para maliyeti demektir. Müşteri her şeyi satın almadıysa armatürleri
          en az Orta olarak fiyatlandırın.
        </li>
        <li>
          <strong>Özel yapım ürünler.</strong> Özel duş camları, standart dışı lavabolar, altı
          hafta teslim süreli ithal fayans. Burası Yüksek veya Uçuk tahmin bölgesidir. Özel
          yapımsa, ilk seferde bir şeyin uymayacağını varsayın.
        </li>
      </ul>

      <h2>banyoları akıllıca fiyatlandırın</h2>

      <p>
        Banyo teklifinize standart %10 eklemek yerine, her kalemi dürüstçe değerlendirin.
        Konteyner Kesin. Her zamanki elektrikçiniz Düşük. Yeni bir camcıdan özel duş camı
        Yüksek. Hepsini simülasyona verin ve gerçek riskleri kapsayan bir teklif elde edin —
        sezgisel bir yüzde değil.
      </p>

      <div className="guide__cta">
        <Link href="/tr/estimate/">[ BANYONUZU FİYATLANDIRIN ]</Link>
      </div>
    </div>
  )
}
