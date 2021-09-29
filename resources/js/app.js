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
        },
        addItemToCart(state, product){
            let exist = false;
            state.cart.forEach(element => {
                if (element.id === product.id){
                    exist = true;
                    element.quantity += product.quantity;
                }
            });
            if (!exist){
                state.cart.push(product);
            }

            window.localStorage.setItem('cart', JSON.stringify(state.cart));
        },
        DeleteItemFromCart(state, index){
            state.cart.splice(index, 1);
            window.localStorage.setItem('cart', JSON.stringify(state.cart));
        },
        restoreCart(state, cart){
            if (!state.cart.length){
                state.cart = cart;
            }
        }
    },
    getters: {
        getProducts(state){
            return state.products;
        },
        getCart(state){
            return state.cart;
        }
    },
    actions: {
        async getProductsAction({commit}){
            await axios.get('/products').then(function(response){
                commit('updateProducts', response.data);
            });
        },

        restoreCartAction({commit}){
            if (window.localStorage.getItem('cart')){
                commit('restoreCart', JSON.parse(window.localStorage.getItem('cart')));
            }
        }
    }
});

const router = createRouter({
    routes: routes,
    history: createWebHistory()
});

router.beforeEach((to, from) => {
    if (to.path === from.path && to.params === from.params)
    {
        console.log('Global Nav Guard');
        console.log(to);
        console.log(from);
        return false;
    }
});

const app = createApp(App);
app.use(store);
app.use(router);
store.dispatch('getProductsAction');
store.dispatch('restoreCartAction');
app.component('navbar', Navbar);
app.mount('#app');
