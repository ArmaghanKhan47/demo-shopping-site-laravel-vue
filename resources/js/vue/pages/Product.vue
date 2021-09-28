<template>
    <div class="container p-0 row g-1 m-auto my-2">
        <h3 class="my-2">{{ product.name }}</h3>
        <div class="col-12 col-md-6">
            <img :src="product.image" class="img-fluid">
        </div>
        <div class="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center">
            <span class="h4">{{ product.name }}</span>
            <span>{{ product.discription }}</span>
            <span>In Stock: {{ product.stock }}</span>
            <span>{{ product.price }} / unit</span>
            <span>
                <input v-model="quantity" type="number" min="0" :max="product.stock" step="1" class="form-control shadow-none rounded-0">
            </span>
            <button v-if="product.stock > 0" class="btn btn-outline-secondary rounded-0 shadow-none mt-2" @click="addToCart()">Add to Cart</button>
            <button v-else class="btn btn-outline-secondary rounded-0 shadow-none disabled mt-2">Out of Stock</button>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            quantity: 0
        }
    },
    computed: {
        products(){
            return this.$store.state.products;
        },
        product(){
            return this.products.find(product => product.id == this.$route.params.id);
        }
    },
    methods: {
        increaseQuantity(){
            if (this.quantity < this.product.stock){
                this.quantity++;
            }
        },
        decreaseQuantity(){
            if (this.quantity > 0){
                this.quantity--;
            }
        },
        addToCart(){
            this.$store.commit('addItemToCart', {
                id: this.product.id,
                quantity: this.quantity,
                name: this.product.name,
                image: this.product.image,
                price: this.product.price
            });
        }
    }
}
</script>
