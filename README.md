
# ASMAB.net — Statik Site Paketi

Bu paket; **Anasayfa (slider)**, **Hakkımızda**, **Yaptığımız İşler**, **Referanslarımız** ve **İletişim** sayfalarını içerir.
Tamamen **HTML + CSS + küçük JS** ile yazılmıştır; GitHub Pages’a uygundur.

## Kurulum
1. Bu klasörü bir GitHub repository'ye yükleyin.
2. **Settings → Pages**: Source `main` / Root `/` olsun.
3. GoDaddy DNS kayıtlarınızı GitHub Pages IP'lerine yönlendirin (A: 185.199.108/109/110/111.153, CNAME: www → kullaniciadi.github.io).

## Özelleştirme
- `assets/logo.png` dosyasını kendi logonuzla değiştirin (dosya adı aynı kalsın).
- Renkler `styles.css` içindeki `:root` değişkenlerindedir.
- İletişim formu için `iletisim.html` dosyasındaki `action` değerini kendi Formspree URL’nizle değiştirin.

## Dosya Yapısı
- index.html
- hakkimizda.html
- yaptigimiz-isler.html
- referanslar.html
- iletisim.html
- styles.css
- script.js
- assets/logo.png
