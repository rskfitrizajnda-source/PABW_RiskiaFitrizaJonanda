<script setup>
import { computed } from 'vue'
import { state, tambahFavorit } from '../state.js'
import { saring } from '../data.js' 

const tampil = computed(() => {
  return saring(state.daftarProyek, state.kategoriAktif)
})
</script>

<template>
  <p v-if="state.memuat">Memuat data...</p>
  <p v-else-if="state.galat">{{ state.galat }}</p>
  <p v-else-if="tampil.length === 0">Belum ada data.</p>

  <ul v-else id="daftar" class="galeri">
    <li v-for="proyek in tampil" :key="proyek.id" class="kartu">
      
      <div class="kartu__isi">
        <h3 class="kartu__judul">{{ proyek.judul }}</h3>
        <p>{{ proyek.waktu }}</p>
        <p>Tenggat: {{ proyek.tenggat }}</p>
        <p>Prioritas: {{ proyek.prioritas }}</p>
      </div>

      <div class="kartu__kaki">
        <span>{{ proyek.selesai ? 'Selesai' : 'Belum selesai' }}</span>
        
        <button 
          type="button" 
          class="favorit" 
          @click="tambahFavorit(proyek.id)"
        >
          {{ state.favorit.includes(proyek.id) ? '★' : '☆' }}
        </button>
        
        <button type="button">Tandai</button>
      </div>

    </li>
  </ul>
</template>