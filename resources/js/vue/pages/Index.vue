<template>
    <div class="container p-0 row g-1 m-auto my-2">
        <h3 class="my-2">Home</h3>
        <div v-for="product in products" :key="product.id" class="col-12 col-md-4 d-flex flex-column" @click="goToProductPage(product.id)">
                <img :src="product.image">
                <span class="text-truncate w-100">{{ product.name }}</span>
                <div class="d-flex flex-row justify-content-between align-items-center">
                    <span>Price</span>
                    <span>{{ product.price }}</span>
                </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            title: 'Shopping Site',
        }
    },
    computed: {
        products(){
            return this.$store.getters.getProducts;
        }
    },
    methods: {
        goToProductPage(id){
            this.$router.push({
                name: 'productdetail',
                params: {
                    id: id
                }
            });
        }
    }
}
</script>
