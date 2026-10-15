import { muat } from './api.js';

muat()
  .then((data) => {
    console.log('data dari api.js:', data);
    console.table(data);
  })
  .catch((galat) => {
    console.error('gagal:', galat.message);
  });