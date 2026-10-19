import { saring } from './data.js';

const wadah       = document.querySelector("#daftar");
const pesanKosong = document.querySelector("#pesan-kosong");
const pesanMuat   = document.querySelector("#muat");

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

  const tombolFav = document.createElement("button");
  tombolFav.type = "button";
  tombolFav.className = "favorit";
  tombolFav.dataset.id = proyek.id;
  tombolFav.textContent = favorit.includes(proyek.id) ? "★" : "☆";
  
  const tombolTandai = document.createElement("button");
  tombolTandai.type = "button";
  tombolTandai.textContent = "Tandai";

  kaki.append(status, tombolFav, tombolTandai);
  li.append(isi, kaki);

  return li;
}

export function render(state) {
  wadah.textContent = "";

  const tampil = saring(state.daftarProyek, state.kategoriAktif);

  if (tampil.length === 0) {
    pesanKosong.textContent = "Belum ada data.";
    pesanKosong.hidden = false;
    return;
  }

  pesanKosong.hidden = true;
  
  tampil.forEach((proyek) => wadah.append(buatKartu(proyek, state.favorit)));

  tandaiTombolAktif(state.kategoriAktif);
}

function tandaiTombolAktif(kategoriAktif) {
  document.querySelectorAll("#filter button").forEach((tombol) => {
    tombol.classList.toggle("aktif", tombol.dataset.kategori === kategoriAktif);
  });
}

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