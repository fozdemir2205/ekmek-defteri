# Ekmek Defteri

Bir ekmek fırınının dağıtımcısının günlük teslimatlarını, iadelerini ve nakit tahsilatını kaydettiği; gün sonunda raporu fırın sahibine WhatsApp ile ilettiği uygulama.

## Kişiler ve yerler

**Dağıtımcı**:
Uygulamayı kullanan, aracıyla müşterilere ekmek götüren tek kişi.
_Avoid_: Şoför, kurye, kullanıcı

**Fırın Sahibi**:
Gün sonu raporunu WhatsApp'tan alan kişi; uygulamayı kendisi kullanmaz.
_Avoid_: Patron, yönetici

**Müşteri**:
Ekmeğin bırakıldığı dükkân (bakkal, market, lokanta vb.); her müşterinin rota sırasında bir yeri vardır.
_Avoid_: Durak, nokta, bayi

**Pasif Müşteri**:
Artık listeye gelmeyen ama geçmiş kayıtlarda kalan müşteri.
_Avoid_: Silinmiş müşteri

**Rota Sırası**:
Müşterilerin her mesaide kontrol listesinde görünme sırası.
_Avoid_: Güzergâh, sıra no

## Çalışma

**Mesai**:
Dağıtımcının "Mesaiyi Başlat" ile açıp "Mesaiyi Bitir" ile kapattığı bir dağıtım turu; aynı günde birden fazla olabilir.
_Avoid_: Vardiya, dağıtım, tur, gün

**Teslimat**:
Bir mesai içinde bir müşteriye bir seferde bırakılan ürünlerin, alınan iadenin ve varsa tahsilatın kaydı; ürün adetleri sıfır olup yalnızca iade içerebilir.
_Avoid_: Dağıtım, sevkiyat, sipariş

**Ek Teslimat**:
Aynı mesaide aynı müşteriye yapılan ikinci veya sonraki teslimat.

**Çeşit**:
Dağıtılan, adetle sayılan bir fırın ürünü (Normal Ekmek, Tam Buğday, Pide gibi); adı araç yüklemesinde belirlenir.
_Avoid_: Ürün, mal, kalem

**Standart Adet**:
Bir müşterinin bir üründen her gün olağan olarak aldığı miktar.
_Avoid_: Sabit sipariş, varsayılan

**Taze**:
Bir teslimatta müşteriye verilen, o günün ürünü.
_Avoid_: Yeni, sıcak

**Bayat**:
Bir teslimatta müşteriye verilen, önceki günden kalmış ürün; iadeyle aynı şey değildir.
_Avoid_: Bayat iade, eski

**İade**:
Bir teslimatta müşteriden geri alınan ürün (taze ya da bayat olabilir); her ürün çeşidi için ayrı sayılır ve araca geri konur.
_Avoid_: Bayat iade, geri dönüş, fire

**Yükleme**:
Mesai başında veya gün içinde fırından araca bir seferde konan çeşitler ve adetleri; her yükleme raporda saatiyle ayrı görünür.
_Avoid_: Stok, çıkış

**Araçta Kalan**:
Araçtaki ürün adedi: yüklenen eksi verilen taze ve bayat, artı müşteriden geri alınan iade.
_Avoid_: Artan, kalan stok

## Müşteri durumları (bir mesai içinde)

**Bekliyor**:
Mesai açıkken henüz hiçbir işaret konmamış müşteri.

**Teslim edildi**:
Mesaide en az bir teslimat kaydı olan müşteri; kapalı dükkânın kapısına bırakılan ekmek ve yalnızca iade alınan ziyaret de bu durumdadır.
_Avoid_: Tamamlandı, verildi

**Kapalı**:
Gidilen ama dükkân kapalı olduğu için hiç ekmek bırakılmayan müşteri.

**Uğranmadı**:
Mesaide hiç gidilmeyen müşteri; bilerek atlanan da, mesai bitince hâlâ Bekliyor durumunda kalan da budur.
_Avoid_: Atlandı, gidilmedi

## Para

**Tahsilat**:
Bir teslimat sırasında müşteriden alınan, dağıtımcının elle girdiği tam lira nakit tutar; yalnızca nakit vardır ve uygulama beklenen tutarı hesaplamaz.
_Avoid_: Ödeme, kasa, havale

**Günlük Tahsilatlı Müşteri**:
Her teslimatta nakit tahsilat yapılan müşteri; diğer müşterilerden günlük para alınmaz.
_Avoid_: Peşin müşteri

**Tahsilat Yok**:
Günlük tahsilatlı bir müşterinin teslimatında nakit alınmamış olması; raporda uyarı olarak görünür.

## Rapor

**Mesai Raporu**:
Mesai bitince oluşan, başlangıç saatini, teslimatları, gidilmeyen müşterileri ve ürün bazında verilen taze ve bayat toplamlarını, iadenin çeşit sayısını ve her çeşidin adedini içeren metin; bitiş saati ve süre içermez.
_Avoid_: Özet, dağıtım listesi

**Detaylı Rapor / Kısa Rapor**:
Mesai raporunun müşteri satırlarını içeren ve yalnızca toplamları içeren iki biçimi.
