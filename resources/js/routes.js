import  Index  from './vue/pages/Index.vue';
import Product from './vue/pages/Product.vue';
import Cart from './vue/pages/Cart.vue';
import Checkout from './vue/pages/Checkout.vue';
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
    },
    {
        path: '/checkout',
        name: 'checkout',
        component: Checkout
    }
]
