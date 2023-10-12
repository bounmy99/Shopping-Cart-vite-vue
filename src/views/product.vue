<template>
    <div class="d-flex justify-content-center mt-3" v-if="!products_store.load_products">
        <h3>ກຳລັງໂຫຼດຂໍ້ມູນ.............</h3>
    </div>
    <div class="row row-cols-1 row-cols-md-3 g-4 mt-3" v-else-if="products_store">
    <div class="col mb-3" v-for="(product, index) in Search_product" :key="index">
        <div class="card">
        <img :src="product.image" class="card-img-top mx-auto my-3" alt="...">
        <div class="card-body">
            <h5 class="card-title">{{product.title}}</h5>
            <p class="card-text">ໝວດໝູ່ : {{ product.category}}</p>
            <p class="card-text">ລາຄາ : {{ formated(product.price) }} ກີບ</p>
            <div class="d-flex justify-content-between">
                <router-link class="btn btn-primary" :to="`/products_detail/${product.id}`">ລາຍລະອຽດ</router-link>
                <button class="btn btn-success" @click="carts_store.add_cart(product.id,product.price)">ເພີ່ມລົງກະຕ່າສິນຄ້າ</button>
            </div>
        </div>
        </div>
    </div>
    </div>
    <div class="d-flex justify-content-center mt-3" v-if="Search_product.length == 0">
        <h3>ບໍ່ມີຂໍ້ມູນທີ່ຄົ້ນຫາ.....</h3>
    </div>
</template>

<script setup>
    import { computed } from "vue";
// import Products Store
    import { useProductStore } from "../store/product";
    const products_store = useProductStore();

    const list = computed(()=>products_store.list_products);

// search product
    const Search_product = computed(()=>products_store.search_products)


// import Cart Store
    import { useCartStore } from '../store/cart';
    const carts_store = useCartStore();

    import { cerrencyKP, formated } from "../share/cerrency";


</script>

<style  scoped>
    #card{
        width :17rem
    }
    img{
        width: 12rem;
        height: 12rem;
    }

</style>