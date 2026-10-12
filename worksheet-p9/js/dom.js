import { daftarProyek } from './app.js';

// ===== Lembar A: pilih elemen =====
const wadah       = document.querySelector("#daftar");
const barisFilter = document.querySelector("#filter");
const pesanKosong = document.querySelector("#pesan-kosong");

const form           = document.querySelector("#form-profil");
const inputNama      = document.querySelector("#Nama-Aktivitas");
const inputTenggat   = document.querySelector("#Tenggat");
const inputWaktu     = document.querySelector("#Waktu");
const inputPrioritas = document.querySelector("#Prioritas");
const errorNama      = document.querySelector("#error-nama");
const errorTenggat   = document.querySelector("#error-tenggat");
const errorWaktu     = document.querySelector("#error-waktu");
const errorPrioritas = document.querySelector("#error-prioritas");
const tombolKirim    = document.querySelector("#kirim");

// ===== Lembar B: buat kartu dari data =====
function buatKartu(proyek) {
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

  const tombol = document.createElement("button");
  tombol.type = "button";
  tombol.textContent = "Tandai";

  kaki.append(status, tombol);
  li.append(isi, kaki);

  return li;
}

// ===== Lembar B.2 + C.2: render =====
function render(daftar) {
  wadah.textContent = "";

  if (daftar.length === 0) {
    pesanKosong.hidden = false;
    return;
  }

  pesanKosong.hidden = true;
  daftar.forEach((proyek) => wadah.append(buatKartu(proyek)));
}

// ===== Lembar C.2: tandai tombol yang aktif =====
function tandaiTombolAktif(tombolAktif) {
  document.querySelectorAll("#filter button").forEach((tombol) => {
    tombol.classList.toggle("aktif", tombol === tombolAktif);
  });
}

// ===== Lembar C.1: satu pendengar di induk =====
barisFilter.addEventListener("click", (event) => {
  const tombol = event.target.closest("button");
  if (!tombol) return;

  const kategori = tombol.dataset.kategori;
  const terpilih = daftarProyek.filter(
    (proyek) => kategori === "semua" || proyek.kategori === kategori
  );

  tandaiTombolAktif(tombol);
  render(terpilih);
});

// ===== Lembar D.2: validasi per kolom =====
function validasiNama() {
  const sah = inputNama.value.trim() !== "";
  errorNama.textContent = sah ? "" : "Nama aktivitas wajib diisi.";
  inputNama.setAttribute("aria-invalid", String(!sah));
  return sah;
}

function validasiTenggat() {
  const sah = inputTenggat.value.trim() !== "";
  errorTenggat.textContent = sah ? "" : "Tenggat wajib diisi.";
  inputTenggat.setAttribute("aria-invalid", String(!sah));
  return sah;
}

function validasiWaktu() {
  const sah = inputWaktu.value.trim() !== "";
  errorWaktu.textContent = sah ? "" : "Waktu wajib diisi.";
  inputWaktu.setAttribute("aria-invalid", String(!sah));
  return sah;
}

function validasiPrioritas() {
  const sah = inputPrioritas.value.trim() !== "";
  errorPrioritas.textContent = sah ? "" : "Prioritas wajib dipilih.";
  inputPrioritas.setAttribute("aria-invalid", String(!sah));
  return sah;
}

function periksaForm() {
  const sah =
    validasiNama() &&
    validasiTenggat() &&
    validasiWaktu() &&
    validasiPrioritas();
  tombolKirim.disabled = !sah;
  return sah;
}

// Validasi saat pengguna mengetik / memilih
[inputNama, inputTenggat, inputWaktu, inputPrioritas].forEach((el) => {
  el.addEventListener("input", periksaForm);
  el.addEventListener("change", periksaForm);
});

// ===== Lembar D.2: submit handler =====
form.addEventListener("submit", (event) => {
  event.preventDefault(); // halaman tidak dimuat ulang

  if (!periksaForm()) {
    const kolomSalah = form.querySelector('[aria-invalid="true"]');
    if (kolomSalah) kolomSalah.focus();
    return;
  }

  alert("Form valid! Data siap dikirim.");
});

// ===== Render pertama kali + tandai tombol "Semua" =====
tandaiTombolAktif(document.querySelector('#filter button[data-kategori="semua"]'));
render(daftarProyek);
periksaForm();