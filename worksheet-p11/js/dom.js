// 1. Impor fungsi saring dari data.js
import { saring } from './data.js';

// 2. Ambil elemen DOM (hanya yang dibutuhkan untuk render)
const wadah       = document.querySelector("#daftar");
const pesanKosong = document.querySelector("#pesan-kosong");
const pesanMuat   = document.querySelector("#muat"); 

// 3. Fungsi buatKartu (Ditambah tombol favorit dari Lembar C)
function buatKartu(proyek, favorit) {
  const li = document.createElement("li");
  li.className = "kartu";

  const isi = document.createElement("div");
  isi.className = "kartu__isi";

  const judul = document.createElement("h3");
  judul.className = "kartu__judul";
  judul.textContent = proyek.judul;

  const waktu = document.createElement("p");
  waktu.textContent = proyek.waktu;

  const tenggat = document.createElement("p");
  tenggat.textContent = "Tenggat: " + proyek.tenggat;

  const prioritas = document.createElement("p");
  prioritas.textContent = "Prioritas: " + proyek.prioritas;

  isi.append(judul, waktu, tenggat, prioritas);

  const kaki = document.createElement("div");
  kaki.className = "kartu__kaki";

  const status = document.createElement("span");
  status.textContent = proyek.selesai ? "Selesai" : "Belum selesai";

  // --- TOMBOL FAVORIT BARU ---
  const tombolFav = document.createElement("button");
  tombolFav.type = "button";
  tombolFav.className = "favorit";
  tombolFav.dataset.id = proyek.id;
  tombolFav.textContent = favorit.includes(proyek.id) ? "★" : "☆"; // Bintang penuh jika favorit
  
  // Tombol Tandai (dari P9)
  const tombolTandai = document.createElement("button");
  tombolTandai.type = "button";
  tombolTandai.textContent = "Tandai";

  kaki.append(status, tombolFav, tombolTandai);
  li.append(isi, kaki);

  return li;
}

// 4. Fungsi render() yang baru (Menerima state)
export function render(state) {
  wadah.textContent = ""; // 1. Kosongkan dulu

  // 2. Ambil data yang sudah difilter menggunakan fungsi saring
  const tampil = saring(state.daftarProyek, state.kategoriAktif);

  if (tampil.length === 0) { // 3. Keadaan kosong
    pesanKosong.textContent = "Belum ada data.";
    pesanKosong.hidden = false;
    return;
  }

  pesanKosong.hidden = true; // 4. Isi ulang
  
  // Gambar kartu berdasarkan data yang tampil dan state favorit
  tampil.forEach((proyek) => wadah.append(buatKartu(proyek, state.favorit)));

  // Panggil fungsi penanda tombol filter aktif
  tandaiTombolAktif(state.kategoriAktif);
}

// 5. Penanda tombol filter aktif (Dipanggil dari render)
function tandaiTombolAktif(kategoriAktif) {
  document.querySelectorAll("#filter button").forEach((tombol) => {
    // Bandingkan dataset dengan state
    tombol.classList.toggle("aktif", tombol.dataset.kategori === kategoriAktif);
  });
}

// 6. Fungsi pendukung memuat dan error
export function aturMemuat(status) {
  if (status) {
    pesanMuat.hidden   = false;
    wadah.hidden       = true;
    pesanKosong.hidden = true;
  } else {
    pesanMuat.hidden   = true;
    wadah.hidden       = false;
  }
}

export function tampilkanGalat(pesan) {
  wadah.textContent = "";
  pesanKosong.textContent = pesan;
  pesanKosong.hidden = false;
}