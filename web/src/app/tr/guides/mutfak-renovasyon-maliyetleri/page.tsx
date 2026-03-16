import type { Metadata } from 'next'
import Link from 'next/link'
import ASCIIBox from '@/components/ui/ASCIIBox'
import '../../../guides/guides.css'

export const metadata: Metadata = {
  title: 'Mutfak renovasyon maliyetleri Türkiye 2026 // lowriskquotes',
  description:
    'Türkiye\'deki ustalar için gerçekçi mutfak renovasyon maliyetleri. Mutfaklarınızı hassas bir şekilde fiyatlandırmak için risk seviyeleriyle eksiksiz kalem kalem dökümü.',
  alternates: { canonical: '/tr/guides/mutfak-renovasyon-maliyetleri/' },
}

export default function MutfakRenovasyonMaliyetleriPage() {
  return (
    <div className="guide">
      <h1>mutfak renovasyon maliyetleri: bir ustanın dökümü</h1>

      <p>
        Mutfaklar, birçok meslek grubunun dahil olduğu yüksek değerli projelerdir. Tesisat,
        elektrik, doğalgaz, marangozluk, tezgah, fayans, zemin kaplama, beyaz eşya —
        koordinasyonun kendisi bile doğru fiyatlandırmazsanız marjınızı yiyebilir. İşte
        Türkiye&apos;de 2026&apos;da mutfakların gerçek maliyeti ve risklerin nerede gizlendiği.
      </p>

      <h2>tipik maliyet dağılımı</h2>

      <p>
        Türkiye&apos;de standart bir evde orta sınıf mutfak renovasyonu. Bu, tam söküm ve yeniden
        kurulumu kapsar, sadece kapak değişimi değil.
      </p>

      <ASCIIBox title="Mutfak maliyet dağılımı">
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
              <td>6.000 ₺ - 12.000 ₺</td>
              <td className="guide__highlight">Düşük</td>
              <td>Asbest bulunmadığı sürece öngörülebilir</td>
            </tr>
            <tr>
              <td>Mutfak dolapları (tedarik ve montaj)</td>
              <td>40.000 ₺ - 150.000 ₺</td>
              <td className="guide__highlight">Orta</td>
              <td>Hazır dolap = Düşük. Özel marangozluk = Yüksek.</td>
            </tr>
            <tr>
              <td>Tezgah</td>
              <td>10.000 ₺ - 55.000 ₺</td>
              <td className="guide__highlight">Orta - Yüksek</td>
              <td>Laminat = Düşük. Yerinde ölçülen granit/kuvars = Yüksek.</td>
            </tr>
            <tr>
              <td>Tesisat</td>
              <td>8.000 ₺ - 18.000 ₺</td>
              <td className="guide__highlight">Orta</td>
              <td>Evyeyi taşımak = daha fazla maliyet ve risk</td>
            </tr>
            <tr>
              <td>Elektrik</td>
              <td>10.000 ₺ - 25.000 ₺</td>
              <td className="guide__highlight">Orta</td>
              <td>Modern standartlara yükseltme veya komple yenileme</td>
            </tr>
            <tr>
              <td>Doğalgaz (ocak, kombi taşıma)</td>
              <td>4.000 ₺ - 12.000 ₺</td>
              <td className="guide__highlight">Düşük</td>
              <td>Yetkili taşeron. Taşıma yoksa basit.</td>
            </tr>
            <tr>
              <td>Fayans (tezgah arkası ve zemin)</td>
              <td>10.000 ₺ - 28.000 ₺</td>
              <td className="guide__highlight">Düşük</td>
              <td>Standart metro fayans = kesin. Karmaşık desenler = Orta.</td>
            </tr>
            <tr>
              <td>Zemin kaplama</td>
              <td>5.000 ₺ - 18.000 ₺</td>
              <td className="guide__highlight">Düşük</td>
              <td>LVT veya vinil. Şap hazırlığı maliyet ekleyebilir.</td>
            </tr>
            <tr>
              <td>Alçı ve boya</td>
              <td>5.000 ₺ - 12.000 ₺</td>
              <td className="guide__highlight">Düşük</td>
              <td>Basit. Eski mutfaklar daha fazla hazırlık gerektirebilir.</td>
            </tr>
            <tr>
              <td>Beyaz eşya</td>
              <td>15.000 ₺ - 60.000 ₺</td>
              <td className="guide__highlight">Kesin - Düşük</td>
              <td>Genellikle müşteri tarafından alınır. Teklif vermeden önce doğrulayın.</td>
            </tr>
            <tr>
              <td>Konteyner ve atık</td>
              <td>3.500 ₺ - 7.000 ₺</td>
              <td className="guide__highlight">Kesin</td>
              <td>Sabit fiyat, önceden rezerve edin</td>
            </tr>
          </tbody>
        </table>
      </ASCIIBox>

      <p>
        Orta sınıf mutfak için toplam fiyat aralığı: <span className="guide__highlight">116.500 ₺ -
        397.000 ₺</span>. Bu devasa fark, dolap kalitesi, tezgah malzemesi ve plan değişikliklerinin
        kapsamıyla açıklanır.
      </p>

      <h2>mutfaklar nerede bütçeyi patlatır</h2>

      <ul>
        <li>
          <strong>Tezgahlar.</strong> Doğal taş tezgahlar, dolaplar monte edildikten sonra
          ölçülür ve dış mekanda üretilir. Şablon yanlışsa veya taşta kusur varsa, değişim için
          haftalarca beklersiniz. Özel tezgahları Yüksek belirsizlik olarak işaretleyin.
        </li>
        <li>
          <strong>Plan değişiklikleri.</strong> Evyeyi taşımak, gideri ve suyu taşımak demektir.
          Ocağı taşımak, gaz ve havalandırmayı taşımak demektir. Her taşıma ek bir taşeron, ek
          bir gün, ek bir arıza noktasıdır. Müşteri her şeyi taşımak istiyorsa, tesisat ve
          elektrik tahminleriniz en az Orta olmalıdır.
        </li>
        <li>
          <strong>Teslimat süreleri.</strong> Özel dolaplar, taş tezgahlar ve belirli beyaz
          eşyalar 4-8 hafta sürebilir. Bir parça gecikirse tüm programınız kayar. Boş süre
          riskini teklifinize dahil edin veya gecikmelerin müşterinin sorumluluğunda olduğundan
          emin olun.
        </li>
        <li>
          <strong>Kapsam kayması.</strong> &quot;Madem buradasınız, şu radyatörü taşıyabilir
          misiniz?&quot; &quot;Tüm odayı boyasak?&quot; Mutfaklar kapsam kaymasını çeker çünkü
          müşteriler inşaatı görür ve her şeyi bir anda yaptırmak ister. Başlamadan önce net
          bir kapsam yazılı olarak belirleyin.
        </li>
      </ul>

      <h2>mutfakları güvenle fiyatlandırın</h2>

      <p>
        Standart dolaplar, laminat tezgah ve plan değişikliği olmayan bir mutfak esas olarak
        Düşük belirsizlik projeleridir. Temel tahmininize yakın teklif verebilirsiniz. Özel
        marangozluk, granit tezgah ve tamamen yeniden düzenlenmiş bir mutfak, Yüksek kalemlerle
        doludur. Tamponunuz bunu yansıtmalıdır.
      </p>
      <p>
        Her kalemi dürüstçe değerlendirin, simülasyonu çalıştırın ve P80&apos;de teklif verin.
        Teklifiniz riskli projelerde daha yüksek, basit projelerde daha sıkı olacaktır — tam
        da olması gerektiği gibi.
      </p>

      <div className="guide__cta">
        <Link href="/tr/estimate/">[ MUTFAĞINIZI FİYATLANDIRIN ]</Link>
      </div>
    </div>
  )
}
