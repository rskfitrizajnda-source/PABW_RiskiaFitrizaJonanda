import { render } from './dom.js';

const KUNCI = "pabw-p11";
const VERSI = 2; 

export const state = {
  daftarProyek: [],
  kategoriAktif: "semua",
  favorit: []
};

export function simpan(state) {
  const isi = { 
    versi: VERSI, 
    kategoriAktif: state.kategoriAktif, 
    favorit: state.favorit 
  };
  localStorage.setItem(KUNCI, JSON.stringify(isi));
}


export function muat() {
  try {
    const isi = JSON.parse(localStorage.getItem(KUNCI));
    console.log("1. Data yang dibaca muat():", isi);

    if (!isi) return null; 

    if (isi?.versi !== VERSI) {
      console.log("2. Versi tidak cocok, menghapus data!");
      localStorage.removeItem(KUNCI); 
      return null;
    }
    return isi;
  } catch {
    console.log("3. Data rusak, menghapus data!");
    localStorage.removeItem(KUNCI); 
    return null;
  }
}

export function pulihkan(isi) {
  if (!isi) return; 
  state.kategoriAktif = isi.kategoriAktif;
  state.favorit = isi.favorit;
}

export function aturUlang() {
  localStorage.removeItem(KUNCI);
  state.kategoriAktif = "semua";
  state.favorit = [];
  render(state);
}

export function isiProyek(daftar) {
  state.daftarProyek = daftar;
  simpan(state);
  render(state); 
}

export function pilihKategori(nilai) {
  state.kategoriAktif = nilai;
  simpan(state);
  render(state); 
}

export function tambahFavorit(id) {
  if (state.favorit.includes(id)) return;
  state.favorit = [...state.favorit, id]; 
  simpan(state);
  render(state); 
}