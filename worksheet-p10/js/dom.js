const wadah       = document.querySelector("#daftar");
const barisFilter = document.querySelector("#filter");
const pesanKosong = document.querySelector("#pesan-kosong");
const pesanMuat   = document.querySelector("#muat"); // baru hari ini

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

// Data mentah hasil fetch, disimpan untuk keperluan filter.
// Diisi dari app.js lewat simpanData(data).
let semuaProyek = [];

// --- Fungsi dari P9 ---
function buatKartu(proyek) {
  const li = document.createElement("li");
  li.className = "kartu";

  const isi = document.createElement("div");
  isi.className = "kartu__isi";

  const judul = document.createElement("h3");
  judul.className = "kartu__judul";
  judul.textContent = proyek.judul;              // textContent, bukan innerHTML

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

// --- render() dari P9, diperluas hari ini ---
export function render(daftar) {
  wadah.textContent = "";                          // 1. kosongkan dulu

  if (daftar.length === 0) {                       // 2. keadaan kosong
    pesanKosong.textContent = "Belum ada data.";
    pesanKosong.hidden = false;
    return;
  }

  pesanKosong.hidden = true;                       // 3. isi ulang
  daftar.forEach((proyek) => wadah.append(buatKartu(proyek)));
}

// --- Simpan data mentah (dari app.js) untuk keperluan filter ---
export function simpanData(data) {
  semuaProyek = data;
}

// --- Fungsi baru: atur pesan "memuat" ---
export function aturMemuat(status) {
  if (status) {
    pesanMuat.hidden   = false;   // tampilkan "Memuat data..."
    wadah.hidden       = true;
    pesanKosong.hidden = true;
  } else {
    pesanMuat.hidden   = true;
    wadah.hidden       = false;
  }
}

// --- Fungsi baru: tampilkan pesan galat di halaman ---
export function tampilkanGalat(pesan) {
  wadah.textContent = "";
  pesanKosong.textContent = pesan;
  pesanKosong.hidden = false;
}

// --- Filter dari P9, disesuaikan: pakai semuaProyek ---
function tandaiTombolAktif(tombolAktif) {
  document.querySelectorAll("#filter button").forEach((tombol) => {
    tombol.classList.toggle("aktif", tombol === tombolAktif);
  });
}

barisFilter.addEventListener("click", (event) => {
  const tombol = event.target.closest("button");
  if (!tombol) return;

  const kategori = tombol.dataset.kategori;
  const terpilih = semuaProyek.filter(
    (proyek) => kategori === "semua" || proyek.kategori === kategori
  );

  tandaiTombolAktif(tombol);
  render(terpilih);
});

// --- Validasi form dari P9, tidak berubah ---
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

[inputNama, inputTenggat, inputWaktu, inputPrioritas].forEach((el) => {
  el.addEventListener("input", periksaForm);
  el.addEventListener("change", periksaForm);
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!periksaForm()) {
    const kolomSalah = form.querySelector('[aria-invalid="true"]');
    if (kolomSalah) kolomSalah.focus();
    return;
  }
  alert("Form valid! Data siap dikirim.");
});

periksaForm();