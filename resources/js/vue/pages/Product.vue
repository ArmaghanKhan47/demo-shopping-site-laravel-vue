<template>
    <div class="container p-0 row g-1 m-auto my-2">
        <h3 class="my-2">{{ product.name }}</h3>
        <div class="col-12 col-md-6">
            <img :src="product.image">
        </div>
        <div class="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center">
            <span class="h4">{{ product.name }}</span>
            <span>{{ product.discription }}</span>
            <span>In Stock: {{ product.stock }}</span>
            <span>{{ product.price }} / unit</span>
            <button v-if="product.stock > 0" class="btn btn-outline-secondary rounded-0 shadow-none">Add to Cart</button>
            <button v-else class="btn btn-outline-secondary rounded-0 shadow-none disabled">Out of Stock</button>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {

        }
    },
    computed: {
        products(){
            return this.$store.state.products;
        },
        product(){
            return this.products.find(product => product.id == this.$route.params.id);
        }
    }
}
</script>
