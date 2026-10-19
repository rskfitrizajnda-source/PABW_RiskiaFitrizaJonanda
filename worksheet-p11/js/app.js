import { ambilProyek } from './api.js';
import { state, isiProyek, pulihkan, muat } from './state.js'; 
import { tampilkanGalat, aturMemuat } from './dom.js';
import { pasangPendengar } from './events.js';

async function mulai() {
  console.log("=== APLIKASI DIMULAI ===");
  pulihkan(muat()); 
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