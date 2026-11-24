# Dağıtım Günlüğü

Bir ekmek fırınının dağıtımcısının günlük teslimatlarını, iadelerini ve nakit tahsilatını kaydettiği; gün sonunda raporu rapor adresine WhatsApp ile ilettiği uygulama.

## Kişiler ve yerler

**Dağıtımcı**:
Uygulamayı kullanan, aracıyla bayilere ekmek götüren tek kişi.
_Avoid_: Şoför, kurye, kullanıcı

**Rapor Adresi**:
Gün sonu raporunun gönderildiği WhatsApp numarası (genellikle fırın sahibi); telefon rehberinden seçilebilir. Ekranda "Rapor yollanacak adres" diye geçer.
_Avoid_: Fırın sahibi numarası, alıcı

**Bayi**:
Ekmeğin bırakıldığı dükkân (bakkal, market, lokanta vb.); her bayinin rota sırasında bir yeri vardır.
_Avoid_: Müşteri, durak, nokta

**Pasif Bayi**:
Artık listeye gelmeyen ama geçmiş kayıtlarda kalan bayi.
_Avoid_: Silinmiş bayi

**Rota Sırası**:
Bayilerin her mesaide kontrol listesinde görünme sırası.
_Avoid_: Güzergâh, sıra no

## Çalışma

**Mesai**:
Dağıtımcının "Mesaiyi Başlat" ile açıp "Mesaiyi Bitir" ile kapattığı bir dağıtım turu; aynı günde birden fazla olabilir.
_Avoid_: Vardiya, dağıtım, tur, gün

**Teslimat**:
Bir mesai içinde bir bayiye bir seferde bırakılan ürünlerin, alınan iadenin ve varsa tahsilatın kaydı; ürün adetleri sıfır olup yalnızca iade içerebilir.
_Avoid_: Dağıtım, sevkiyat, sipariş

**Ek Teslimat**:
Aynı mesaide aynı bayiye yapılan ikinci veya sonraki teslimat.

**Çeşit**:
Dağıtılan, adetle sayılan bir fırın ürünü (Normal Ekmek, Tam Buğday, Pide gibi); adı araç yüklemesinde belirlenir.
_Avoid_: Ürün, mal, kalem

**Standart Adet**:
Bir bayinin bir üründen her gün olağan olarak aldığı miktar.
_Avoid_: Sabit sipariş, varsayılan

**Taze**:
Bir teslimatta bayiye verilen, o günün ürünü.
_Avoid_: Yeni, sıcak

**Bayat**:
Bir teslimatta bayiye verilen, önceki günden kalmış ürün; iadeyle aynı şey değildir.
_Avoid_: Bayat iade, eski

**İade**:
Bir teslimatta bayiden geri alınan ürün (taze ya da bayat olabilir); her ürün çeşidi için ayrı sayılır ve araca geri konur.
_Avoid_: Bayat iade, geri dönüş, fire

**Yükleme**:
Mesai başında veya gün içinde fırından araca bir seferde konan çeşitler ve adetleri; her yükleme raporda saatiyle ayrı görünür.
_Avoid_: Stok, çıkış

**Araçta Kalan**:
Araçtaki ürün adedi: yüklenen eksi verilen taze ve bayat, artı bayiden geri alınan iade.
_Avoid_: Artan, kalan stok

## Bayi durumları (bir mesai içinde)

**Bekliyor**:
Mesai açıkken henüz hiçbir işaret konmamış bayi.

**Teslim edildi**:
Mesaide en az bir teslimat kaydı olan bayi; kapalı dükkânın kapısına bırakılan ekmek ve yalnızca iade alınan ziyaret de bu durumdadır.
_Avoid_: Tamamlandı, verildi

**Kapalı**:
Gidilen ama dükkân kapalı olduğu için hiç ekmek bırakılmayan bayi.

**Uğranmadı**:
Mesaide hiç gidilmeyen bayi; bilerek atlanan da, mesai bitince hâlâ Bekliyor durumunda kalan da budur.
_Avoid_: Atlandı, gidilmedi

## Para

**Tahsilat**:
Bir teslimat sırasında bayiden alınan, dağıtımcının elle girdiği tam lira nakit tutar; yalnızca nakit vardır ve uygulama beklenen tutarı hesaplamaz.
_Avoid_: Ödeme, kasa, havale

**Günlük Tahsilatlı Bayi**:
Her teslimatta nakit tahsilat yapılan bayi; diğer bayilerden günlük para alınmaz.
_Avoid_: Peşin bayi

**Masraf**:
Dağıtımcının mesai içinde toplanan nakitten yaptığı harcama (yakıt, yemek gibi); mesai bitirilmeden önce girilir.
_Avoid_: Gider, harcırah

**Kasaya Teslim (Net)**:
Mesai sonunda fırın kasasına teslim edilmesi gereken tutar: toplanan nakit eksi masraflar.
_Avoid_: Kalan para, hesap

**Tahsilat Yok**:
Günlük tahsilatlı bir bayinin teslimatında nakit alınmamış olması; raporda uyarı olarak görünür.

## Rapor

**Mesai Raporu**:
Mesai bitince oluşan, başlangıç saatini, teslimatları, gidilmeyen bayileri ve ürün bazında verilen taze ve bayat toplamlarını, iadenin çeşit sayısını ve her çeşidin adedini içeren metin; bitiş saati ve süre içermez.
_Avoid_: Özet, dağıtım listesi

**Detaylı Rapor / Kısa Rapor**:
Mesai raporunun bayi satırlarını içeren ve yalnızca toplamları içeren iki biçimi.
