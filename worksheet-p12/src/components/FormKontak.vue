<script setup>
</script>

<template>
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
</template>