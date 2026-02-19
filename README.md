# Website Candi Borobudur - Struktur dan Petunjuk

## 📁 Struktur File
```
website/
├── index.html              # Halaman pertama (intro/animasi)
├── MyCandi.html            # Halaman 3D Borobudur Temple
├── app.js                  # JavaScript untuk index.html
├── style.css               # Styling untuk index.html
├── pure.css                # CSS Framework (sudah include)
├── eung.webp              # Gambar 1
├── out.webp               # Gambar 2
├── bye.webp               # Gambar 3
└── The_Beatles_-_I_Will__cover__-_rendypandugo_-_SoundLoadMate_com.mp3 (opsional)
```

## 🎯 Alur Website

1. **index.html** → Halaman pertama dengan pertanyaan romantis
2. User klik "Mau" → Countdown 5 detik
3. Setelah countdown → Muncul tombol "✨ Masuk ke Candi ✨"
4. User klik tombol → Fade out → **MyCandi.html** (3D Borobudur Temple)

## ✨ Fitur yang Sudah Diperbaiki

### ✅ Yang Sudah Dikerjakan:
- ✅ index.html sebagai halaman pertama
- ✅ Tombol "Masuk ke Candi" muncul setelah countdown
- ✅ **HAPUS semua fitur random jumlahMantan**
- ✅ Transisi smooth dengan fade out
- ✅ 3D Borobudur Temple yang elegant dengan moonlight
- ✅ Responsive design
- ✅ Animasi smooth dan profesional

### ❌ Yang Sudah Dihapus:
- ❌ slide-3 (yang menampilkan jumlahMantan)
- ❌ Math.random() untuk generate angka
- ❌ Variabel jumlahMantan
- ❌ Semua logic random

## 🎵 Setup Musik (Opsional)

File musik **The_Beatles_-_I_Will__cover__.mp3** sudah diatur di MyCandi.html.

**Jika file musik tidak ada:**
1. Tambahkan file mp3 ke folder yang sama
2. Atau ganti dengan URL musik online
3. Atau biarkan kosong (musik tidak akan play)

**Untuk mengubah musik:**
Edit file `MyCandi.html` baris ~85:
```html
<source src="NAMA_FILE_MUSIK_ANDA.mp3" type="audio/mpeg">
```

## 🚀 Cara Deploy

### Upload ke Hosting:
1. Upload semua file ke root folder hosting
2. Pastikan index.html ada di root
3. Buka website, index.html akan otomatis terbuka

### Testing Lokal:
1. Buka folder dengan Live Server / XAMPP
2. Akses http://localhost/index.html
3. Test tombol dan navigasi

## 🎨 Customization

### Mengubah Warna Tombol:
Edit `style.css` baris ~37-42:
```css
background: linear-gradient(135deg, #ffd700 0%, #ffed4e 100%);
```

### Mengubah Teks:
Edit `index.html`:
- Baris 13: Judul pertanyaan
- Baris 50: Teks setelah klik "Mau"

### Mengubah Waktu Countdown:
Edit `app.js` baris 3:
```javascript
let countdownTime = 5  // ubah angka ini (dalam detik)
```

## 🐛 Troubleshooting

**Tombol tidak muncul?**
- Pastikan countdown sudah selesai
- Check console browser (F12) untuk error
- Pastikan app.js ter-load dengan benar

**Musik tidak play?**
- Pastikan file mp3 ada di folder yang sama
- Nama file harus sama persis (case-sensitive)
- Beberapa browser block autoplay, user harus klik tombol audio

**3D Temple tidak tampil?**
- Pastikan internet connection aktif (three.js load dari CDN)
- Check console untuk error
- Pastikan browser support WebGL

## 📱 Browser Support

✅ Chrome (Recommended)
✅ Firefox
✅ Safari
✅ Edge
✅ Mobile browsers

## 💝 Credits

- 3D Temple: Three.js
- CSS Framework: Pure CSS
- Font: Comic Neue (Google Fonts)
- Meme Images: User uploads

---

**Dibuat dengan ❤️ untuk seseorang yang spesial**
