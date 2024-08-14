<script setup>
import { onMounted, reactive } from 'vue'
import Layout from '../layout/Layout.vue'

const state = reactive({ data: [] })
onMounted(() => {
  console.log('onMounted')
  const addToCartProducts = JSON.parse(sessionStorage.getItem('addToCart'))
  state.data = addToCartProducts
  console.log('data', state.data)
})
const deleteProduct=((data)=>{
    const filterData=state.data.filter(item=>item.id!==data.id)
    state.data=filterData
    sessionStorage.setItem('addToCart',filterData)
})
</script>
<template>
  <Layout>
    Your Cart Product are
    <div class="grid sm:grid-cols-3 md:grid-cols-4 m-2 gap-2">
    <div v-for="data in state.data" :key="data" >
      <img :src="data.img"  alt=""  class="w-[400px] h-[400px]"/>
      <div class="flex justify-between mt-2">
        <p class="font-bold">{{ data.price }}</p>
        <button @click="deleteProduct(data)" class="bg-red-600 text-white text-xl font-semibold px-4 py-1 rounded-lg ">Delete</button>
      </div>
    </div>
</div>
  </Layout>
</template>
