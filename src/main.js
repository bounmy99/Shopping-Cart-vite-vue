import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from './router';

// import pinia
import { createPinia } from 'pinia'
const pinia = createPinia()

// import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

const app = createApp(App)

app.use(pinia)
app.use(router)
app.mount("#app");
