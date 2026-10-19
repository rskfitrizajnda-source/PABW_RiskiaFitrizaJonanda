import { pilihKategori, tambahFavorit } from './state.js';

// 1. Ambil semua elemen DOM yang dibutuhkan untuk event
const barisFilter    = document.querySelector("#filter");
const wadahDaftar    = document.querySelector("#daftar");
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

// 2. Bungkus semuanya dalam satu fungsi perakit event
export function pasangPendengar() {
  
  // --- A. Event untuk Filter Kategori ---
  barisFilter.addEventListener("click", (event) => {
    const tombol = event.target.closest("button");
    if (!tombol) return;
    
    // Panggil fungsi pengubah state, BUKAN manipulasi DOM langsung
    pilihKategori(tombol.dataset.kategori); 
  });

  // --- B. Event untuk Tombol Favorit (Lembar C) ---
  wadahDaftar.addEventListener("click", (event) => {
    const tombol = event.target.closest(".favorit");
    if (!tombol) return;
    
    // Panggil fungsi tambahFavorit dari state.js
    tambahFavorit(Number(tombol.dataset.id));
  });

  // --- C. Event untuk Validasi Form (dari P9) ---
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
    const sah = validasiNama() && validasiTenggat() && validasiWaktu() && validasiPrioritas();
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

  // Jalankan pengecekan form saat pertama kali dimuat
  periksaForm(); 
}