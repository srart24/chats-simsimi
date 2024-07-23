# Chats-simSimi


![srart24](img/srart24.jpg)

<br><br>

---

[![Node.js Package](https://github.com/srart24/chats-simsimi/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/srart24/chats-simsimi/actions/workflows/npm-publish.yml)
[![npm version](https://badge.fury.io/js/chats-simsimi.svg)](https://www.npmjs.com/package/chats-simsimi)

---

> Chats SimSimi adalah modul yang memungkinkan Anda berinteraksi dengan bot SimSimi untuk percakapan yang menyenangkan.

---

## Instalasi

Anda dapat menginstal modul ini melalui npm. Pastikan Anda memiliki Node.js terpasang di sistem Anda sebelum melanjutkan.

```bash
npm install chats-simsimi
```

``` bash
yarn add chats-simsimi

```

## import module
``` js
// CJS
const { chatsimsimi } = require('chats-simsimi');

```

``` js
// ESM
import { chatsimsimi } from 'chats-simsimi';

```

---

#### `simsimi(message, language)`

Fungsi ini mengirim pesan ke SimSimi dan mengembalikan respons.

**Parameter:**

- `message` (string): Pesan yang akan dikirim ke SimSimi.
- `language` (string): Bahasa percakapan dengan SimSimi. 



##### Bahasa yang Di Dukung

---

| Language                   | Code  |
|-------------------------|-------|
| Vietnam           | vn    |
| Inggris (English) | en    |
| Ibrani (Hebrew)   | he    |
| Tionghoa (Chinese)| zh    |
| Indonesia         | id    |
| Korea             | ko    |
| Filipina (Filipino)| ph   |
| Rusia (Russian)   | ru    |
| Arab              | ar    |
| Melayu (Malay)    | ms    |
| Spanyol (Spanish) | es    |
| Portugis (Portuguese) | pt |
| Jerman (German)   | de    |
| Thailand (Thai)   | th    |
| Jepang (Japanese) | ja    |
| Prancis (French)  | fr    |
| Swedia (Swedish)  | sv    |
| Turki (Turkish)   | tr    |
| Denmark (Danish)  | da    |
| Norwegia Bokmål (Norwegian Bokmål) | nb |
| Italia (Italian)  | it    |
| Belanda (Dutch)   | nl    |
| Finlandia (Finnish) | fi   |
| Malayalam         | ml    |
| Hindi             | hi    |
| Khmer             | kh    |
| Katalan (Catalan) | ca    |
| Tamil             | ta    |
| Serbia            | rs    |
| Mongolia          | mn    |
| Persia (Persian)  | fa    |
| Punjabi           | pa    |
| Wales (Welsh)     | cy    |
| Kroasia (Croatian)| hr    |
| Yunani (Greek)    | el    |
| Azerbaijan        | az    |
| Swahili           | sw    |

---

## Penggunaan

### Berikut adalah contoh penggunaan dasar modul ini:


#### CJS
``` js

// Mengimpor fungsi dari modul menggunakan CommonJS
const { chatsimsimi } = require('chats-simsimi');

// Menggunakan fungsi
async function run() {
    try {
        const response = await chatsimsimi("Hallo apa kabar", "id");
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}

run();

```

#### ESM
``` js
// Mengimpor fungsi dari modul menggunakan ES Modules
import { chatsimsimi } from 'chats-simsimi';

// Menggunakan fungsi
async function run() {
    try {
        const response = await chatsimsimi("Hello", "en");
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}

run();

```

---


## Lisensi

 [MIT LISENSI](LICENSE)


---



## Author

---

| <img src="https://github.com/srart24.png" width="70" height="70"> |
| :---: |
| [srart24](https://github.com/srart24) |

---
