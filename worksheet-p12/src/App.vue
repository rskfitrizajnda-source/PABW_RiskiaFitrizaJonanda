<script setup>
import { profil } from './data.js' // Mengambil data profil dari data.js P11
import KepalaProfil from './components/KepalaProfil.vue'
import TombolFilter from './components/TombolFilter.vue'
import DaftarProyek from './components/DaftarProyek.vue'
import FormKontak from './components/FormKontak.vue'
</script>

<template>
  <div class="page">
    <!-- Mengirim data profil ke dalam komponen lewat props -->
    <KepalaProfil :profil="profil" />

    <main class="isi">
      <aside class="sisi">
        <h2>Menu</h2>
        <nav>
          <ul>
            <li><a href="#Daftar-Aktivitas-Harian">Daftar Aktivitas Harian</a></li>
            <li><a href="#Tambah-Aktivitas">Tambah Aktivitas</a></li>
            <li><a href="#Tentang-Saya">Tentang Saya</a></li>
          </ul>
        </nav>
      </aside>

      <div class="utama">
        <section id="Daftar-Aktivitas-Harian">
          <h2>Daftar Aktivitas Harian</h2>
          
          <TombolFilter />
          <DaftarProyek />
        </section>

        <section id="Tentang-Saya">
          <h2>Tentang Saya</h2>
          <figure class="kartu" style="max-width: 320px;">
            <img src="/todo-list.jpeg" alt="Ilustrasi To Do List" width="300" height="360" loading="lazy">
            <figcaption>Ilustrasi To Do List Aktivitas Keseharian</figcaption>
          </figure>
        </section>

        <section id="Tambah-Aktivitas">
          <h2>Form Tambah Aktivitas</h2>
          <FormKontak />
        </section>
      </div>
    </main>

    <footer>
      <p>RiskiaFitrizaJonanda · 25523026 · 2026</p>
    </footer>
  </div>
</template>