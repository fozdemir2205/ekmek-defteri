# Dağıtım Günlüğü

Ekmek dağıtımcısının mesaisini, teslimatlarını, iadelerini ve nakit tahsilatını telefondan takip ettiği, gün sonu raporunu WhatsApp ile rapor adresine gönderdiği uygulama. Yalnızca Android Chrome için yapıldı.

Terimlerin tanımları [GLOSSARY.md](GLOSSARY.md) dosyasında. Verilerin neden yalnızca telefonda tutulduğu [docs/adr/0001](docs/adr/0001-veriler-yalnizca-telefonda.md) dosyasında yazıyor.

## Klasörler

| Klasör | İçerik |
|---|---|
| `app/` | Yayınlanacak uygulama: `index.html`, `manifest.webmanifest`, `sw.js`, `icons/` |
| `prototip/` | Örnek verilerle açılan ilk prototip (claude.ai artifact) |

## Yayınlama (GitHub Pages)

Uygulama **https://fozdemir2205.github.io/ekmek-defteri/** adresinde yayında.

`main` dalına her gönderimde `.github/workflows/pages.yml` iş akışı çalışır ve `app/` klasörünü yeniden yayınlar. Yayın 1–2 dakika sürer; durumunu deponun *Actions* sekmesinden görebilirsiniz.

Uygulama HTTPS üzerinden yayınlanmalıdır, aksi hâlde Android'de kurulum ve internetsiz çalışma olmaz. GitHub Pages HTTPS'i kendiliğinden sağlar.

## Dağıtımcının telefonuna kurulum

1. Adresi Android telefonda **Chrome** ile açın.
2. Sağ üstteki ⋮ menüsünden **Uygulamayı yükle** (bazı telefonlarda **Ana ekrana ekle**) seçeneğine dokunun.
3. Dağıtım Günlüğü ana ekranda normal bir uygulama gibi görünür. Bir kez açıldıktan sonra internet olmadan da çalışır. İnternet yalnızca WhatsApp'a gönderirken gerekir.
4. İlk açılışta 3 adımlık kurulum gelir: ad, rapor yollanacak adres (WhatsApp numarası, rehberden seçilebilir) ve müşteriler. Ekmek çeşitleri mesai başlayınca açılan araç yükleme ekranında yazılır; adlar her yüklemede düzeltilebilir.

## Güncelleme yayınlarken

1. `app/sw.js` içindeki `VERSION` değerini artırın (`'v1'` → `'v2'`).
2. Değişikliği commit'leyip `main` dalına gönderin (`git push`).
3. Telefon, yeni sürümü uygulama ikinci kez açıldığında alır. Kayıtlı veriler silinmez.

## Yedek

Veriler yalnızca telefonda durur. Telefonu değiştirmeden ya da Chrome verilerini temizlemeden önce **Ayarlar → Yedek → Yedeği WhatsApp'a gönder** ile yedek alın. Yeni telefonda **Yedekten yükle** ekranına bu metni yapıştırın.
