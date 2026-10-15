const ALAMAT = 'data/proyek.json';   // relatif terhadap profil.html

export async function ambilProyek() {
  try {
    const respons = await fetch(ALAMAT);
    if (!respons.ok) throw new Error('status ' + respons.status);
    return await respons.json();
  } catch (galat) {
    console.error('gagal memuat', galat.message);
    throw galat;
  }
}