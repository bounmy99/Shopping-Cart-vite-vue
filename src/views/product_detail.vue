<template>
    <div class="d-flex justify-content-center mt-3" v-if="!load_products">
        <h3>ກຳລັງໂຫຼດຂໍ້ມູນ.............</h3>
    </div>
    <div class="row mx-3 my-3" v-else>
        <div class="col-md-6">
            <img :src="products.image" alt="" class="img-fluid">
        </div>
        <div class="col-md-6">
                <h1>{{ products.title }}</h1>
                <p>{{ products.description }}</p>
                <h4>ລາຄາ {{ formated(products.price) }} ກີບ</h4>
                <div class="d-sm-flex justify-content-between">
                    <div class="btn-group mt-2" role="group" aria-label="Basic mixed styles example">
                        <button type="button" class="btn btn-primary" @click="increment_quantity()">ເພີ່ມສິນຄ້າ</button>
                        <button type="button" class="btn btn-outline-primary">{{ quantity }}</button>
                        <button type="button" class="btn btn-primary" @click="decrement_quantity()" :disabled="quantity == 1">ລົບສິນຄ້າ</button>
                    </div>
                    <button type="button" class="btn btn-success mt-2" @click="carts_store.add_cart_detail(products.id, products.price, quantity)">ເພີ່ມສິນຄ້າລົງກະຕ່າ</button>
                </div>
        </div>
    </div>
</template>

<script setup>
    import axios from 'axios';
    import  { ref, onMounted} from 'vue';
    import { useRoute } from 'vue-router';
    import {useCartStore} from '../store/cart';

    import { formated } from '../share/cerrency';

    const carts_store = useCartStore();

    const route = useRoute();
    const products = ref({});
    const quantity = ref(1);

    const increment_quantity = () => quantity.value ++;
    const decrement_quantity = () => quantity.value --;

    const load_products = ref(false)
    const Products_details = async()=>{
        await axios.get(`${import.meta.env.VITE_API}/${route.params.id}`).then((response)=>{
            products.value = response.data;
            load_products.value = true
        }).catch((error)=>{
            console.log(error);
        })
    }
    onMounted(() => Products_details());


</script>

<style scoped>
    img{
        width:25rem;
        height: 30rem;
    }
</style>