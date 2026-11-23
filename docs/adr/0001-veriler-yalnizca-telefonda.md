# Veriler yalnızca dağıtımcının telefonunda tutulur

Status: accepted

Ekmek Defteri, sunucusu olmayan bir PWA'dır (yalnızca Android Chrome). Bütün müşteri, mesai ve teslimat verileri telefonun yerel depolamasında tutulur ve dışarıya çıkan tek veri, dağıtımcının kendisinin gönderdiği WhatsApp raporudur. Bu yolu seçtik, çünkü tek kullanıcı vardır, uygulama çekmeyen yerlerde de çalışmalıdır, ücretsiz kalmalıdır ve müşteri telefonları üçüncü bir tarafa gitmemelidir.

## Consequences

- Telefon kaybolursa veya tarayıcı verileri silinirse kayıtlar da kaybolur. Bunun tek koruması, elle alınan JSON yedeğidir ("Yedeği gönder / yükle").
- Fırın sahibi verileri canlı göremez. Gördüğü tek şey WhatsApp raporudur.
- İleride ikinci bir dağıtımcı, aylık rapor ya da müşteriye özel fiyat eklenirse sunucu gerekebilir. O zaman bu karar yeniden değerlendirilmelidir.
