<script setup>
// import GridModal from './GridModal.vue';
import PreviewModal from './PreviewModal.vue';
defineProps(['productsData'])
// const addProducts=(product)=>{
//     console.log("product",product);
// }
</script>
<template>
  <div class="grid gap-4">
    <div v-for="data in productsData" :key="data">
      <img :src="data.img" alt="" />
      <div class="flex justify-between mt-2">
        <p class="font-bold">{{ data.price }}</p>
        <!-- @click="addProducts(data)" -->
       <PreviewModal :data="data"/>
      </div>
      <!-- Main modal -->
    </div>
  </div>
</template>
