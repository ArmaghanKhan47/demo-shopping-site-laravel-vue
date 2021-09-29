import  Index  from './vue/pages/Index.vue';
import Product from './vue/pages/Product.vue';
import Cart from './vue/pages/Cart.vue';
export default [
    {
        path: '/',
        name: 'index',
        component: Index
    },
    {
        path: '/product/:slug',
        name: 'productdetail',
        component: Product,
    },
    {
        path: '/cart',
        name: 'cart',
        component: Cart
    }
]
