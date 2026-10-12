const profil = {
  nama: "Riska Fitria Jonanda",
  peran: "Mahasiswa Informatika",
  keahlian: ["HTML", "CSS", "JavaScript"],
  jumlahProyek : 3,
};

const kalimat = `Nama saya ${profil.nama}, dan saya belajar ${profil.keahlian.length} hal.`;

console.log(kalimat);

function buatPerkenalan({ nama, peran }) {
    return `${nama} — ${peran}`;
}

const formatKeahlian = (daftar) => daftar.join(" · ");

console.log(buatPerkenalan(profil));
console.log(formatKeahlian(profil.keahlian));

// ===== DATA PROYEK — dipakai oleh dom.js =====
export const daftarProyek = [
  { judul: "Kelas Pertama",  waktu: "08:00 - 10:00", tenggat: "2026-10-15", prioritas: "Tinggi", selesai: true,  kategori: "web"    },
  { judul: "Kelas Kedua",    waktu: "10:30 - 12:30", tenggat: "2026-10-15", prioritas: "Sedang", selesai: false, kategori: "mobile" },
  { judul: "Kelas Ketiga",   waktu: "13:00 - 15:00", tenggat: "2026-10-15", prioritas: "Rendah", selesai: true,  kategori: "web"    },
  { judul: "Kerja Kelompok", waktu: "15:30 - 18:00", tenggat: "2026-10-17", prioritas: "Rendah", selesai: false, kategori: "desain" }
];

console.table(profil.keahlian);
console.table(daftarProyek);

const selesai = daftarProyek.filter((proyek) => proyek.selesai);
console.table(selesai);

const katalog = daftarProyek.find((proyek) => proyek.judul === "Kelas Pertama");
console.log(katalog);

const judulSaja = daftarProyek.map((proyek) => proyek.judul);
console.log(judulSaja);

const urut = [...daftarProyek].sort((a, b) => a.judul.localeCompare(b.judul));
console.table(urut);

console.table(daftarProyek);