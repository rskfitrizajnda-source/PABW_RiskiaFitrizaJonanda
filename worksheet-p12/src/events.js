import { pilihKategori, tambahFavorit, aturUlang } from './state.js';

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

export function pasangPendengar() {
  
  barisFilter.addEventListener("click", (event) => {
    const tombol = event.target.closest("button");
    if (!tombol) return;
    
    if (tombol.id === "atur-ulang") {
      aturUlang();
    } else {
      pilihKategori(tombol.dataset.kategori); 
    }
  });

  wadahDaftar.addEventListener("click", (event) => {
    const tombol = event.target.closest(".favorit");
    if (!tombol) return;
    
    tambahFavorit(Number(tombol.dataset.id));
  });

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

  periksaForm(); 
}