import  Index  from './vue/pages/Index.vue';
import Product from './vue/pages/Product.vue';
export default [
    {
        path: '/',
        name: 'index',
        component: Index
    },
    {
        path: '/product/:id',
        name: 'productdetail',
        component: Product
    }
]
