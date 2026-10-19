export const profil = {
  nama: "Riska Fitria Jonanda",
  peran: "Mahasiswa Informatika",
  keahlian: ["HTML", "CSS", "JavaScript"],
  jumlahProyek: 3,
};

export function buatPerkenalan({ nama, peran }) {
  return `${nama} — ${peran}`;
}

export function formatKeahlian(daftar) {
  return daftar.join(" · ");
}

export function saring(daftar, kategori) {
  return daftar.filter(
    (proyek) => kategori === "semua" || proyek.kategori === kategori
  );
}