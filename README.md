# GEO HISTORY Community Website

Website komunitas statis menggunakan HTML, CSS, dan JavaScript biasa.

## File
- `index.html` — struktur dan konten halaman.
- `style.css` — desain responsif.
- `script.js` — menu mobile, tahun otomatis, dan tautan WhatsApp.

## Mengatur tombol WhatsApp
Buka `script.js`, lalu ganti nilai `GEO_HISTORY_WHATSAPP` dengan tautan undangan grup WhatsApp komunitas.

Contoh:
`const GEO_HISTORY_WHATSAPP = "https://chat.whatsapp.com/KODE_UNDANGAN";`

## Deploy ke GitHub dan Vercel
1. Ekstrak ZIP ini.
2. Unggah semua file langsung ke root repository GitHub (jangan unggah ZIP-nya).
3. Di Vercel, impor repository tersebut.
4. Pilih Framework Preset: **Other**.
5. Build Command dan Install Command dikosongkan. Output Directory gunakan `.`.
6. Deploy.
