<template>
  <div>
    <Navbar />
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import Navbar from './components/navbar.vue';
import { onMounted } from 'vue';

// import ProductStore
import { useProductStore } from './store/product';
const Product_store = useProductStore()

// import Cart Store
import { useCartStore } from "./store/cart";
const Cart_store = useCartStore() 

onMounted(()=>Product_store.fetch_products());
onMounted(()=>Cart_store.loadFormLocalStore());

</script>

<style lang="scss" scoped>

</style>