<template>
    <div class="container d-flex flex-column m-auto my-2">
        <h3 class="my-2">Home</h3>
        <!-- Products -->
        <div class="container-fluid m-0 g-2 row p-1">
            <div v-for="product in products" :key="product.slug" class="col-12 col-md-4 d-flex flex-column" @click="goToProductPage(product.slug)">
                <img :src="product.image" class="img-fluid">
                <span class="text-truncate w-100 fs-5 fw-bold">{{ product.name }}</span>
                <div class="d-flex flex-row justify-content-between align-items-center">
                    <span class="fs-6">Price</span>
                    <span class="text-muted fs-6">{{ product.price }} / Unit</span>
                </div>
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
        goToProductPage(slug){
            this.$router.push({
                name: 'productdetail',
                params: {
                    slug: slug
                }
            });
        }
    }
}
</script>
