require('./bootstrap');

import axios from 'axios';
import { createApp } from 'vue';
import { createStore } from 'vuex';
import { createRouter, createWebHistory } from 'vue-router';
import  App  from './vue/App.vue';
import Navbar from './vue/components/Navbar.vue';
import routes from './routes';

const store = createStore({
    state(){
        return {
            products: [],
            cart: []
        }
    },
    mutations: {
        updateProducts(state, products){
            state.products = products;
        }
    },
    getters: {
        getProducts(state){
            return state.products;
        }
    },
    actions: {
        async getProductsAction({commit}){
            await axios.get('/products').then(function(response){
                commit('updateProducts', response.data);
            });
        }
    }
});

const router = createRouter({
    routes: routes,
    history: createWebHistory()
});

const app = createApp(App);
app.use(store);
app.use(router);
store.dispatch('getProductsAction');
app.component('navbar', Navbar);
app.mount('#app');
