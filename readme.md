# Chats SimSimi


[![Node.js Package](https://github.com/srart24/chats-simsimi/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/srart24/chats-simsimi/actions/workflows/npm-publish.yml [![npm version](https://badge.fury.io/js/chats-simsimi.svg)](https://www.npmjs.com/package/chats-simsimi)



Chats SimSimi adalah modul yang memungkinkan Anda berinteraksi dengan bot SimSimi untuk percakapan yang menyenangkan.

--------

## Instalasi

Anda dapat menginstal modul ini melalui npm. Pastikan Anda memiliki Node.js terpasang di sistem Anda sebelum melanjutkan.

```bash
npm install chats-simsimi

```

## import module
``` js

const simsimi = require('chats-simsimi')

```

--------

### `simsimi(message, language)`

Fungsi ini mengirim pesan ke SimSimi dan mengembalikan respons.

**Parameter:**

- `message` (string): Pesan yang akan dikirim ke SimSimi.
- `language` (string): Bahasa percakapan dengan SimSimi. 



Berikut adalah bahasa yang didukung beserta kode bahasanya:


- `vn`: Bahasa Vietnam
- `en`: Bahasa Inggris (English)
- `he`: Bahasa Ibrani (Hebrew)
- `zh`: Bahasa Tionghoa (Chinese)
- `ch`: Bahasa Tionghoa (Chinese)
- `id`: Bahasa Indonesia
- `ko`: Bahasa Korea
- `ph`: Bahasa Filipina (Filipino)
- `ru`: Bahasa Rusia (Russian)
- `ar`: Bahasa Arab
- `ms`: Bahasa Melayu (Malay)
- `es`: Bahasa Spanyol (Spanish)
- `pt`: Bahasa Portugis (Portuguese)
- `de`: Bahasa Jerman (German)
- `th`: Bahasa Thailand (Thai)
- `ja`: Bahasa Jepang (Japanese)
- `fr`: Bahasa Prancis (French)
- `sv`: Bahasa Swedia (Swedish)
- `tr`: Bahasa Turki (Turkish)
- `da`: Bahasa Denmark (Danish)
- `nb`: Bahasa Norwegia Bokmål (Norwegian Bokmål)
- `it`: Bahasa Italia (Italian)
- `nl`: Bahasa Belanda (Dutch)
- `fi`: Bahasa Finlandia (Finnish)
- `ml`: Bahasa Malayalam
- `hi`: Bahasa Hindi
- `kh`: Bahasa Khmer
- `ca`: Bahasa Katalan (Catalan)
- `ta`: Bahasa Tamil
- `rs`: Bahasa Serbia
- `mn`: Bahasa Mongolia
- `fa`: Bahasa Persia (Persian)
- `pa`: Bahasa Punjabi
- `cy`: Bahasa Wales (Welsh)
- `hr`: Bahasa Kroasia (Croatian)
- `el`: Bahasa Yunani (Greek)
- `az`: Bahasa Azerbaijan
- `sw`: Bahasa Swahili

--------

## Penggunaan

Berikut adalah contoh penggunaan dasar modul ini:

``` js

const simsimi = require('chats-simsimi');

// Mengirim pesan ke SimSimi
simsimi('Halo, apa kabar?', 'id')
  .then(response => {
    console.log('SimSimi:', response);
  })
  .catch(error => {
    console.error('Terjadi kesalahan:', error);
  });

```

### Response
``` js
Response: {
  "status": true,
  "creator": "@srart24",
  "result": "Baik, kalau kamu?"
}
```

--------


## Lisensi

 [MIT LISENSI](LICENSE)


--------


## Kontak

Jika Anda memiliki pertanyaan, silakan hubungi Saya melalui:

-  Email:[srrart.024@gmail.com](mailto:rart.024@gmail.com)
- GitHub: [@srart24](https://github.com/srart24)

--------

## Donasi

Jika Anda ingin donasi di [Klik Di Sini](https://saweria.co/srart24)


Terima kasih atas dukungan Anda!




