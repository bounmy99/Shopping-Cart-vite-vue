<template>
    <div class="d-flex justify-content-center mt-3" v-if="!products_store.load_products">
        <h3>ກຳລັງໂຫຼດຂໍ້ມູນ.............</h3>
    </div>
    <div class="mt-3" v-else>
            <h1>ກະຕ່າສິ້ນຄ້າ</h1>
        
            <table class="table">
                <thead>
                    <tr>
                        <th>ຮູບພາບ</th>
                        <th>ສິນຄ້າ</th>
                        <th>ລາຄາ</th>
                        <th>ຈຳນວນ</th>
                        <th>ລວມ</th>
                        <th>ລົບ</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(cart,index) in carts" :key="index.id" class="align-middle">
                        <td>
                            <img :src="cart.products.image" alt="" class="img-thumbnail" width="100">
                        </td>
                        <td>{{cart.products.title}}</td>
                        <td>{{ formated(cart.products.price) }} ກີບ</td>
                        <td>
                            <button class="btn btn-sm btn-secondary" @click="carts_store.decrement_quantity(index)">-</button>
                            <span class="mx-2">{{ cart.quantity }}</span>
                            <button class="btn btn-sm btn-secondary" @click="carts_store.increment_quantity(index)">+</button>
                        </td>
                        <td>{{ formated(cart.total) }} ກີບ</td>
                        <td>
                            <button class="btn btn-danger" @click="carts_store.remove_cart(index)">ລົບ</button>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="5">
                            <div class="d-flex justify-content-between" v-if="carts.length > 1">
                                <button class="btn btn-danger" @click="carts_store.clear_cart">ລ້າງຂໍ້ມູນໃນກະຕ່າ</button>
                                <h5 class="text-primary">ລວມທັງໝົດ {{ formated(carts_store.total) }} ກີບ</h5>
                            </div>
                        </td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
    </div>
</template>
 
<script setup>
    import { computed } from 'vue';

    import { cerrencyKP, formated } from '../share/cerrency';

    // import Products Store
    import { useProductStore } from "../store/product";
        const products_store = useProductStore();

    // import CartStore
    import { useCartStore } from '../store/cart';
        const carts_store = useCartStore();
        const carts = computed(()=>carts_store.cart_previews);

        const  options = {
					prefix:'ກີບ',
                    numeral:true,
                    numeralPositveOnly:true,
                    noImmediaPrefix:true,
                    rawValueTrimPrefix:true,
                    numeralIntegerScale:10,
                    numeralDecimalScale:2,
                    numeralDecimalMark:'.',
                    delimiter:','
                }
    
 
</script>
 