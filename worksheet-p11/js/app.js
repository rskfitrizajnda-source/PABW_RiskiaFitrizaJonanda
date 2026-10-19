import { ambilProyek } from './api.js';
import { isiProyek, pulihkan, muat } from './state.js';
import { tampilkanGalat, aturMemuat } from './dom.js';
import { pasangPendengar } from './events.js';

async function mulai() {
  
  pasangPendengar();
  
  aturMemuat(true);
  try {
    isiProyek(await ambilProyek()); 
  } catch (galat) {
    tampilkanGalat('Data gagal dimuat. Periksa koneksi, lalu muat ulang.');
    console.error(galat.message);
  } finally {
    aturMemuat(false);
  }
}

mulai();