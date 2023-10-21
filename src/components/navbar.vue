<template>
  <nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">Shopping Cart</router-link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" to="/">ໜ້າທຳອິດ</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link position-relative" to="/products_carts">
              ໜ້າກະຕ່າສິນຄ້າ
              <span class="position-absolute top-1 start-100 translate-middle badge rounded-pill bg-danger">
                  99+
                  <span class="visually-hidden">unread messages</span>
              </span>
            </router-link>
          </li>
        </ul>
        <div class="d-flex" role="search">
          <input class="form-control" type="search" placeholder="ຄົ້ນຫາ......." aria-label="Search" v-model="products_store.input"/>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
    import { useProductStore } from '../store/product';
    const products_store = useProductStore();
    const alert = true
</script>