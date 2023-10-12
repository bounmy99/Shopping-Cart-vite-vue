import { createRouter, createWebHistory } from 'vue-router';
import products from '../views/product.vue';
import products_detail from '../views/product_detail.vue';
import products_carts from '../views/product_cart.vue';
const routes = [
  {
    path: '/',
    name: 'products',
    component: products
  },
  {
    path: '/products_detail/:id',
    name: 'products_detail',
    component: products_detail
  },
  {
    path: '/products_carts',
    name: 'products_carts',
    component: products_carts
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes 
})
export default router