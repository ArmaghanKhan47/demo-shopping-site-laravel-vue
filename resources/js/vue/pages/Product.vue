<template>
    <div class="container p-0 row g-1 m-auto my-2">
        <div class="col-12 col-md-6">
            <img :src="product.image" class="img-fluid">
        </div>
        <div class="col-12 col-md-6 d-flex flex-column justify-content-start align-items-start">
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
    <div class="container p-0 m-auto my-2">
        <h3 class="my-2">Feedbacks & Ratings</h3>
        <div class="container-fluid">
            <span class="display-1">{{ product.average_rating }}</span>
        </div>
        <div class="container-fluid d-flex flex-column justify-content-center">
            <span v-for="feedback in product.feedbacks" :key="feedback.id" class="d-flex flex-row justify-content-between align-items-center border rounded-0 my-2">
                <span class="fs-6 text-muted text-truncate" style="max-width: 75%">
                    {{ feedback.comment }}
                </span>
                <span class="display-6 text-muted">
                    {{ feedback.rating }}
                </span>
            </span>
        </div>
    </div>
</template>

<script>
import { onBeforeRouteUpdate, onBeforeRouteLeave, useRouter } from 'vue-router';
export default {
    setup(){
        onBeforeRouteUpdate((to, from) => {

        })
    },
    data(){
        return {
            quantity: 0,
            slug: this.$route.params.slug
        }
    },
    computed: {
        products(){
            return this.$store.state.products;
        },
        product(){
            return this.products.find(product => product.slug == this.slug);
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
    },
}
</script>
