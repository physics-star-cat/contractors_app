import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'Usta olarak iş teklifi nasıl hazırlanır // lowriskquotes',
  description:
    'Projelerinizi hassas bir şekilde fiyatlandırmak için pratik rehber. Ustaların neden düşük fiyat verdiğini, her kalemde riski nasıl değerlendireceğinizi ve Monte Carlo simülasyonunun nasıl daha güvenli teklifler oluşturduğunu öğrenin.',
  alternates: { canonical: '/tr/guides/is-teklifi-nasil-hazirlanir/' },
}

export default function IsTeklifiNasilHazirlanirPage() {
  return (
    <div className="guide">
      <h1>iş teklifi nasıl hazırlanır (zarar etmeden)</h1>

      <p>
        Çoğu usta bir projede para kaybetmiştir. Kötü iş yaptığı için değil — yanlış
        fiyatlandırdığı için. En iyi senaryoyu düşünerek fiyat belirlediler, işi aldılar ve
        gerçekler ortaya çıktığında marjlarının eridiğini izlediler.
      </p>
      <p>
        Bu rehber bunun neden olduğunu ve mevcut yaklaşımınıza sadece beş dakika ekleyerek
        nasıl düzelteceğinizi açıklar.
      </p>

      <h2>ustalar neden düşük teklif verir</h2>

      <p>
        Üç güç her teklifi aşağı çeker:
      </p>

      <p>
        <strong className="guide__highlight">İyimserlik önyargısı.</strong> İşin sorunsuz
        gideceğini hayal edersiniz. Sıva temiz çıkar. Kirişler sağlamdır. Tedarikçi zamanında
        teslim eder. Hiçbir şeyin ters gitmediği versiyonu fiyatlandırırsınız — ama o versiyon
        neredeyse hiç gerçekleşmez.
      </p>
      <p>
        <strong className="guide__highlight">Rekabet baskısı.</strong> Müşterinin üç teklif
        istediğini bilirsiniz. Böylece maliyetleri kısarsınız, aşağı yuvarlarsınız, fiyatları
        sıkıştırırsınız. Teklifiniz dar. Çok dar. İşi alırsınız ama kârı kaybedersiniz.
      </p>
      <p>
        <strong className="guide__highlight">Nokta tahmini.</strong> Her kalem için tek bir
        rakam yazarsınız: fayans 24.000 ₺. Bu bir tahmin değil. Gerçek gibi görünen bir
        tahmindir. Gerçek maliyetler aralıklardır. Fayans, düzenli tedarikçinizde stok varsa
        21.000 ₺ olabilir, yoksa ve başka yerden sipariş ederseniz 29.000 ₺ olabilir.
      </p>

      <h2>beş belirsizlik seviyesi</h2>

      <p>
        Teklifinizdeki her kalem aynı riski taşımaz. On yıldır kullandığınız kiralık şirketten
        bir konteyner, geçen hafta bulduğunuz bir camcıdan özel yapım duş camıyla aynı şey
        değildir. İkisine aynı muameleyi yapmak, standart yüzde eklemenin temel hatasıdır.
      </p>
      <p>
        LowRiskQuotes beş belirsizlik seviyesi kullanır. Her birinin pratikte ne anlama
        geldiğini burada bulabilirsiniz:
      </p>

      <ASCIIBox title="Belirsizlik seviyeleri">
        <table className="guide__table">
          <thead>
            <tr>
              <th>Seviye</th>
              <th>Aralık</th>
              <th>Pratik örnek</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="guide__highlight">Kesin</td>
              <td>+/- %2</td>
              <td>Konteyner kirası, sabit fiyatlı tedarikçi teklifi</td>
            </tr>
            <tr>
              <td className="guide__highlight">Düşük</td>
              <td>+/- %8</td>
              <td>Düzenli tedarikçinizden malzeme, standart hırdavat</td>
            </tr>
            <tr>
              <td className="guide__highlight">Orta</td>
              <td>+/- %15</td>
              <td>Daha önce çalıştığınız ama son zamanlarda çalışmadığınız taşeron</td>
            </tr>
            <tr>
              <td className="guide__highlight">Yüksek</td>
              <td>+/- %25</td>
              <td>Yeni taşeron, özel malzemeler, bilinmeyen şantiye koşulları</td>
            </tr>
            <tr>
              <td className="guide__highlight">Uçuk tahmin</td>
              <td>+/- %40</td>
              <td>Şantiye ziyareti yok, kapsam belirsiz, &quot;yaklaşık şu kadar olur...&quot;</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        Her kalem için kilit soru şudur: <em>bu rakamın doğru olduğundan ne kadar eminim?</em>
        Ne kadar emin olmak istediğiniz değil. Kanıtlara dayanarak gerçekte ne kadar emin
        olduğunuz. Yazılı bir teklifiniz mi var? O zaman Kesin. İki yıl önce başka bir şehirde
        yaptığınız bir işten mi tahmin ediyorsunuz? En iyi ihtimalle Yüksek.
      </p>

      <h2>somut örnek: banyo renovasyonu</h2>

      <p>
        Gerçek bir teklif alalım. Yılmaz ailesi banyosunu yeniletmek istiyor — söküm, yeni
        fayans, yeni armatürler, özel yapım duş camı, tesisat, elektrik ve moloz taşıma.
        Temel tahmininiz 77.000 ₺.
      </p>

      <ASCIIBox title="Maliyet kalemleri">
        <table className="guide__table">
          <thead>
            <tr>
              <th>Kalem</th>
              <th>Tahmin</th>
              <th>Seviye</th>
              <th>Neden</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Duvar ve zemin fayansı</td>
              <td>24.000 ₺</td>
              <td className="guide__highlight">Düşük</td>
              <td>Düzenli tedarikçiniz, benzerini daha önce fiyatlandırdınız</td>
            </tr>
            <tr>
              <td>Armatürler (lavabo, klozet, batarya)</td>
              <td>10.000 ₺</td>
              <td className="guide__highlight">Orta</td>
              <td>Müşteri orta sınıf seçti ama henüz kesinleştirmedi</td>
            </tr>
            <tr>
              <td>Özel yapım duş camı</td>
              <td>18.000 ₺</td>
              <td className="guide__highlight">Yüksek</td>
              <td>Yeni camcı, standart dışı ölçüler, daha önce sipariş vermediniz</td>
            </tr>
            <tr>
              <td>Tesisat (taşeron)</td>
              <td>14.000 ₺</td>
              <td className="guide__highlight">Orta</td>
              <td>Mehmet güvenilir ama bu iş için henüz teklif vermedi</td>
            </tr>
            <tr>
              <td>Elektrikçi</td>
              <td>7.500 ₺</td>
              <td className="guide__highlight">Düşük</td>
              <td>Standart banyo elektrik tesisatı, her zamanki elektrikçiniz</td>
            </tr>
            <tr>
              <td>Konteyner</td>
              <td>3.500 ₺</td>
              <td className="guide__highlight">Kesin</td>
              <td>Düzenli kiralama şirketinizden sabit fiyat</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        77.000 ₺&apos;yi düz olarak teklif ettiyseniz, her kalemin tam tahmine denk geldiği
        senaryo için fiyat veriyorsunuz demektir. Bu en olası olmayan sonuçtur. Altı paranın
        hepsinin tura geleceğine bahis oynamak gibidir.
      </p>
      <p>
        Bu rakamları Monte Carlo simülasyonuna verin ve bir dağılım elde edersiniz. Simülasyon,
        bu projenin binlerce versiyonunu çalıştırır ve her seferinde tanımladığınız belirsizlik
        aralığından maliyetler çeker. Aşımlar tasarruflardan daha yaygın olduğundan, simülasyon
        yukarıya doğru ağırlıklıdır — tıpkı gerçekte olduğu gibi.
      </p>

      <ASCIIBox title="Simülasyon sonucu">
        <p style={{ fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '8px' }}>
          Temel tahmin: <span className="guide__highlight">77.000 ₺</span>
        </p>
        <p style={{ fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '8px' }}>
          P50 (yarı yarıya): <span className="guide__highlight">80.900 ₺</span>
        </p>
        <p style={{ fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '8px' }}>
          P80 (önerilen teklif): <span className="guide__highlight">86.400 ₺</span>
        </p>
        <p style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
          P95 (maksimum güvenlik payı): <span className="guide__highlight">94.100 ₺</span>
        </p>
      </ASCIIBox>

      <p>
        77.000 ₺ ile 86.400 ₺ arasındaki fark 9.400 ₺ — yaklaşık %12. Ama bu standart bir
        %12 ekleme değil. Bu projenin spesifik risklerine göre hesaplanmış bir tampondur.
        Tamamı Düşük seviyeli kalemlerden oluşan bir proje daha azına ihtiyaç duyar. Uçuk
        tahminlerle dolu bir proje çok daha fazlasına ihtiyaç duyar.
      </p>

      <h2>sonuçları okumak: çan eğrisi ne anlama gelir</h2>

      <p>
        Simülasyon size bir olasılık dağılımı verir — her toplam maliyetin olasılığını gösteren
        bir çan eğrisi. İşte nasıl okunur:
      </p>
      <ul>
        <li>
          <strong className="guide__highlight">P50</strong>, gerçek maliyetin bu tutarın altında
          kalma olasılığının %50 olduğu anlamına gelir. Bu yarı yarıya bir ihtimaldir. Güvenli
          bir teklif değildir.
        </li>
        <li>
          <strong className="guide__highlight">P80</strong>, gerçek maliyetin altında kalma
          olasılığının %80 olduğu anlamına gelir. Çoğu usta için ideal noktadır. Aşımların
          çoğuna karşı korunursunuz, fiyatınızı da piyasadan çıkarmamış olursunuz.
        </li>
        <li>
          <strong className="guide__highlight">P95</strong>, %95 olasılık anlamına gelir.
          Bu &quot;rahat uyuyun&quot; rakamınızdır. Sabit fiyatlı sözleşmeler veya hiçbir
          sapma kabul etmeyecek müşteriler için kullanın.
        </li>
      </ul>
      <p>
        Hangi yüzdelikte teklif vereceğiniz projeye ve müşteriye bağlıdır. İyi bir müşteriyle
        hakediş usulü bir proje mi? P50 yeterli olabilir. Sıkı bir müşteri için sabit fiyatlı
        mutfak mı? P80 veya P95&apos;te teklif verin ve kendinizi koruyun.
      </p>

      <h2>yaygın teklif hataları</h2>

      <p>
        Binlerce teklifi simülatörden geçirdikten sonra kalıplar ortaya çıkıyor. İşte ustalara
        en pahalıya mal olan hatalar:
      </p>

      <ol>
        <li>
          <strong>Her şeyi Düşük belirsizlik olarak işaretlemek.</strong> Yazılı teklifiniz
          yoksa Düşük değildir. Daha önce tam olarak bu işi yapmadıysanız Düşük değildir.
          Kendinize karşı dürüst olun.
        </li>
        <li>
          <strong>Ulaşım ve zaman maliyetlerini unutmak.</strong> Günde iki saat yol, saat
          başı 350 ₺, üç hafta boyunca = 10.500 ₺. Bu gerçek paradır. Fiyatlandırın.
        </li>
        <li>
          <strong>Gecikmeleri fiyatlandırmamak.</strong> Hava koşulları, geç teslimatlar,
          müşteri değişiklikleri. Bunlar nadir olaylar değildir. Normaldir. Proje süresi
          tahmininizin de kendi belirsizlik seviyesine ihtiyacı vardır.
        </li>
        <li>
          <strong>Geçen yılın fiyatlarını kullanmak.</strong> Malzeme maliyetleri değişir.
          Kereste arttı. Bakır arttı. Fiyatlarınız altı aylıksa yanlıştır.
        </li>
        <li>
          <strong>Kazanmak için değil, para kazanmak için teklif vermek.</strong> Yanlış fiyata
          kazandığınız bir iş, almadığınız bir işten daha kötüdür. En kötü sonuç ihaleyi
          kaybetmek değildir. İhaleyi kazanıp bedavaya çalışmaktır.
        </li>
      </ol>

      <h2>her şeyi bir araya getirmek</h2>

      <p>
        İşte yöntem. Teklif sürecinize yaklaşık beş dakika ekler:
      </p>
      <ol>
        <li>Her kalemi her zamanki gibi listeleyin.</li>
        <li>Her biri için kendinize sorun: bu rakamdan ne kadar eminim? Bir seviye atayın.</li>
        <li>Günlük ücretinizi, proje süresini ve ulaşımı ekleyin.</li>
        <li>Simülasyonu çalıştırın.</li>
        <li>Çoğu proje için P80&apos;de teklif verin. Sözleşme türüne göre yukarı veya aşağı ayarlayın.</li>
      </ol>
      <p>
        Uydurma bir yüzde eklemiyorsunuz. Gerçek projenin gerçek risk profilini yansıtan bir
        teklif oluşturuyorsunuz. Bu, para kazanmayı ummak ile kazanacağınızı bilmek arasındaki
        farktır.
      </p>

      <div className="guide__cta">
        <Link href="/tr/estimate/">[ TEKLİFİNİZİ OLUŞTURUN ]</Link>
      </div>
    </div>
  )
}
