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

const daftarProyek = [
  { judul: "Kelas Pertama", tahun: 2026, selesai: true },
  { judul: "Kelas Kedua", tahun: 2026, selesai: false },
  { judul: "Kelas Ketiga", tahun: 2026, selesai: true },
  { judul: "Kerja Kelompok", tahun: 2026, selesai: false }
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