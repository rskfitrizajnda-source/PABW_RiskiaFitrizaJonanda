<script setup>
const props = defineProps({
  profil: { type: Object, required: true },
})
</script>

<template>
  <header>
    <div class="header-baris">
      <!-- Judul Utama -->
      <h1>To Do List Aktivitas Keseharian</h1>
      
      <!-- Navigasi -->
      <nav aria-label="Navigasi utama">
        <ul>
          <li><a href="#Daftar-Aktivitas-Harian">Daftar Aktivitas</a></li>
          <li><a href="#Tambah-Aktivitas">Tambah Aktivitas</a></li>
          <li><a href="#Tentang-Saya">Tentang Saya</a></li>
        </ul>
      </nav>

      <!-- Pengalih Tema Gelap (Dikembalikan seperti aslinya) -->
      <input type="checkbox" id="tema" class="pengalih-tema">
      <label for="tema" class="tombol-tema">Tema gelap</label>
    </div>
  </header>
</template>