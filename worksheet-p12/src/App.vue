<script setup>
// Bagian script ini nanti akan kita isi di Tahap D dan E (untuk data & reaktivitas)
</script>

<template>
  <!-- Ini adalah isi dari <body> profil.html milikmu -->
  <div class="page">

    <header>
      <div class="header-baris">
        <h1>To Do List Aktivitas Keseharian</h1>
        
        <nav aria-label="Navigasi utama">
          <ul>
            <li><a href="#Daftar-Aktivitas-Harian">Daftar Aktivitas</a></li>
            <li><a href="#Tambah-Aktivitas">Tambah Aktivitas</a></li>
            <li><a href="#Tentang-Saya">Tentang Saya</a></li>
          </ul>
        </nav>

        <!-- Pengalih tema gelap -->
        <input type="checkbox" id="tema" class="pengalih-tema">
        <label for="tema" class="tombol-tema">Tema gelap</label>
      </div>
    </header>

    <main class="isi">
      <!-- SIDEBAR KIRI -->
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

      <!-- KONTEN UTAMA (KANAN) -->
      <div class="utama">
        
        <!-- Section 1: Daftar Aktivitas -->
        <section id="Daftar-Aktivitas-Harian">
          <h2>Daftar Aktivitas Harian</h2>

          <div id="filter" class="baris-filter">
            <button type="button" data-kategori="semua">Semua</button>
            <button type="button" data-kategori="web">Kelas</button>
            <button type="button" data-kategori="mobile">Belajar</button>
            <button type="button" data-kategori="desain">Kelompok</button>
            <button type="button" id="atur-ulang">Atur ulang</button>
          </div>

          <ul id="daftar" class="galeri"></ul>

          <p id="pesan-kosong" hidden>Belum ada aktivitas untuk kategori ini.</p>
          <p id="muat" hidden>Memuat data...</p>
        </section>

        <!-- Section 2: Tentang Saya -->
        <section id="Tentang-Saya">
          <h2>Tentang Saya</h2>
          <figure class="kartu" style="max-width: 320px;">
            <img src="/todo-list.jpeg" alt="Ilustrasi To Do List Aktivitas Keseharian" width="300" height="360" loading="lazy">
            <figcaption>Ilustrasi To Do List Aktivitas Keseharian</figcaption>
          </figure>
        </section>

        <!-- Section 3: Form Tambah Aktivitas -->
        <section id="Tambah-Aktivitas">
          <h2>Form Tambah Aktivitas</h2>

          <form action="/simpan" method="post" id="form-profil" novalidate>
            
            <div class="form-kolom">
              <label for="Nama-Aktivitas">Nama Aktivitas</label>
              <input type="text" id="Nama-Aktivitas" name="Nama-Aktivitas">
              <span class="pesan-galat" id="error-nama"></span>
            </div>

            <div class="form-kolom">
              <label for="Tenggat">Tenggat</label>
              <input type="date" id="Tenggat" name="Tenggat">
              <span class="pesan-galat" id="error-tenggat"></span>
            </div>

            <div class="form-kolom">
              <label for="Waktu">Waktu</label>
              <input type="time" id="Waktu" name="Waktu">
              <span class="pesan-galat" id="error-waktu"></span>
            </div>

            <div class="form-kolom">
              <label for="Prioritas">Prioritas</label>
              <select id="Prioritas" name="Prioritas">
                <option value="">Pilih prioritas</option>
                <option>Tinggi</option>
                <option>Sedang</option>
                <option>Rendah</option>
              </select>
              <span class="pesan-galat" id="error-prioritas"></span>
            </div>

            <button type="submit" id="kirim">Simpan</button>          
          </form>
        </section>

      </div>
    </main>

    <footer>
      <p>RiskiaFitrizaJonanda · 25523026 · 2026</p>
    </footer>

  </div>
</template>