const profil = {
  nama: "Riska Fitria Jonanda",
  peran: "Mahasiswa Informatika",
  keahlian: ["HTML", "CSS", "JavaScript"],
  jumlahProyek: 3,
};

let pilihanAktif = "semua";

const kalimat = `Nama saya ${profil.nama}, dan saya belajar ${profil.keahlian.length} hal.`;

console.log(kalimat);
console.log(typeof profil.nama);
console.log(typeof profil.jumlahProyek);