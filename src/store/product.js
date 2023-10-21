import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import axios from 'axios';

export const useProductStore = defineStore('useProductStore',()=>{

    const Products = ref([]);

    const input = ref('');

    const list_products = computed(()=>Products.value);

    const load_products = computed(()=>Products.value.length > 0);

    const fetch_products = async()=>{
        await  axios.get(`${import.meta.env.VITE_API}`).then((response)=>{
            Products.value = response.data;
        }).catch((error)=>{
            console.log(error);
        });
    } 

    const search_products = computed(()=>{
        
        if(input.value.length < 0 ) return Products.value;

        return Products.value.filter((pro)=>{
            if(pro.title.toLowerCase().includes(input.value.toLowerCase()) == false){
                return false
            }else{
                return pro.title.toLowerCase().includes(input.value.toLowerCase());
            }
        })
    })

    return { Products, fetch_products, list_products, load_products, input,search_products}
})