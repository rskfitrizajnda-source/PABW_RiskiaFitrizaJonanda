<script setup>
import { state, pilihKategori, aturUlang } from '../state.js'
</script>

<template>
  <div id="filter" class="baris-filter">
    <button 
      type="button" 
      @click="pilihKategori('semua')"
      :class="{ aktif: state.kategoriAktif === 'semua' }"
    >Semua</button>
    
    <button 
      type="button" 
      @click="pilihKategori('web')"
      :class="{ aktif: state.kategoriAktif === 'web' }"
    >Kelas</button>
    
    <button 
      type="button" 
      @click="pilihKategori('mobile')"
      :class="{ aktif: state.kategoriAktif === 'mobile' }"
    >Belajar</button>
    
    <button 
      type="button" 
      @click="pilihKategori('desain')"
      :class="{ aktif: state.kategoriAktif === 'desain' }"
    >Kelompok</button>
    
    <button type="button" @click="aturUlang()">Atur ulang</button>
  </div>
</template>