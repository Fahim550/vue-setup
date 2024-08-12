<script setup>
import { data } from 'autoprefixer'
import { reactive } from 'vue'
import GridProducts from './GridProducts.vue';

const state = reactive({
  data1: [
    {
      id: 1,
      name: 'medicine',
      price: 500,
      img: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg'
    },
    {
      id: 2,
      name: 'nike shoes',
      price: 3200,
      img: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg'
    },
    {
      id: 3,
      name: 'gucci bag',
      price: 1300,
      img: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg'
    }
  ],
  data2: [
    {
      id: 4,
      name: 'treepot',
      price: 500,
      img: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg'
    },
    {
      id: 5,
      name: 'smart watch',
      price: 2000,
      img: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg'
    },
    {
      id: 6,
      name: 'puma shoes',
      price: 2500,
      img: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg'
    }
  ],
  data3: [
    {
      id: 7,
      name: 'face wash',
      price: 300,
      img: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg'
    },
    {
      id: 8,
      name: 'gucci bag',
      price: 1300,
      img: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg'
    },
    {
      id: 9,
      name: 'light',
      price: 500,
      img: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg'
    }
  ],
  data4: [
    {
      id: 10,
      name: 'charger',
      price: 150,
      img: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg'
    },
    {
      id: 11,
      name: 'gamepad',
      price: 900,
      img: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg'
    },
    {
      id: 12,
      name: 'atelle bag',
      price: 1400,
      img: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg'
    }
  ]
})
</script>
<template>
  <div class="mt-8">
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <GridProducts :products-data="state.data1"/>
      <GridProducts :products-data="state.data2"/>
      <GridProducts :products-data="state.data3"/>
      <GridProducts :products-data="state.data4"/>
    </div>
  </div>
</template>
