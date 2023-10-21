import { defineStore } from "pinia";
import { ref, computed } from "vue";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

// useProductStore
import { useProductStore } from "./product";

export const useCartStore = defineStore("useCartStore", () => {
  const cart = ref([]);

// Add data in Product Cart
  const add_cart = (id, price, quantity = 1) => {
    const data = {
      id,
      price,
      quantity
    };
    const findId = cart.value.find((e) => (e = e.id == data.id));
    if (findId) {
      alert_add_cart_same();
    } else {
      cart.value.push(data);
      saveTolocalStore();
      alert_add_cart();
    }
  };
  
// Add data in Product Detail
  const add_cart_detail = (id, price, quantity) =>{
    const data = {
      id,
      price,
      quantity
    }
    const findId = cart.value.find(e => e = e.id == data.id);
    if(findId){
      const findIndexProduct = cart.value.findIndex(e => e.id == data.id);
      cart.value[findIndexProduct].quantity = cart.value[findIndexProduct].quantity + quantity;
      saveTolocalStore();
      alert_add_cart();
    }else{
      cart.value.push(data);
      saveTolocalStore();
      alert_add_cart();
    }
  }
// Save Data to localStorage
  const saveTolocalStore = () => {
    localStorage.setItem("cart", JSON.stringify(cart.value));
  };

  const loadFormLocalStore = () => {
    if (localStorage.getItem("cart")) {
      cart.value = JSON.parse(localStorage.getItem("cart"));
    }
  };

// Preview data in Cart Product
  const cart_previews = computed(() => {
    const products_store = useProductStore();
    return cart.value.map((pro, i) => {
        const findIndexProduct = products_store.Products.findIndex(e => e.id == pro.id)
        return {
          products : products_store.Products[findIndexProduct],
          quantity : cart.value[i].quantity,
          total :  products_store.Products[findIndexProduct].price * cart.value[i].quantity
        }

      }); 
  });

  const total = computed(()=>{
    return  cart.value.reduce((sum,pro) => sum + pro.price * pro.quantity,0)
  })

  const total_qty = computed(()=>{
    return cart.value.reduce((sum,qty)=> sum + qty.quantity,0)
  })

  const increment_quantity = (i)=>{
      cart.value[i].quantity +=1;
      saveTolocalStore();
  }
  const decrement_quantity = (i)=>{
      cart.value[i].quantity -=1;
      saveTolocalStore();
      
      if(cart.value[i].quantity < 1){
        // cart.value.splice(i, 1);
        cart.value[i].quantity = 1;
        saveTolocalStore();
      }
  }
  const remove_cart = (i)=>{
    Swal.fire({
      title: 'ທ່ານຕ້ອງການທີຈະລົບຂໍ້ມູນແທ້ບໍ່',
      text: "ຖ້າລົບໄປແລ້ວບໍ່ສາມາດກູ້ຄືນໄດ້!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'ແມ່ນ',
      cancelButtonText: 'ບໍ່'
    }).then((result) => {
      if (result.isConfirmed) {
        cart.value.splice(i, 1);
        saveTolocalStore();
        Swal.fire(
          'ລົບຂໍ້ມູນ!',
          'ຂໍ້ມູນຂອງທ່ານໄດ້ລົບສຳເລັດແລ້ວ.',
          'success'
        )
      }
    })
      
  }

  const clear_cart = ()=>{
    cart.value = [];
    saveTolocalStore();
  }

  const alert_add_cart = () => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "ເພີ່ມສິນຄ້າສຳເລັດແລ້ວ",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  const alert_add_cart_same = () => {
    Swal.fire({
      position: "center",
      icon: "error",
      title: "ເຈົ້າເພີ່ມສິນຄ້າໄປແລ້ວ",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return { 
    cart,
    add_cart,
    loadFormLocalStore, 
    cart_previews, 
    increment_quantity,
    decrement_quantity,
    remove_cart,
    clear_cart,
    add_cart_detail,
    total,
    total_qty 
  };
});
