import { ambilProyek } from './api.js';
import { render, simpanData, tampilkanGalat, aturMemuat } from './dom.js';

async function muat() {
  aturMemuat(true);
  try {
    const data = await ambilProyek();
    simpanData(data);
    render(data);
  } catch (galat) {
    tampilkanGalat('Data gagal dimuat. Periksa koneksi, lalu muat ulang halaman.');
    console.error(galat.message);
  } finally {
    aturMemuat(false);
  }
}

muat();