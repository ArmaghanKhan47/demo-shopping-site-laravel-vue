<template>
    <div class="toast-container position-fixed  end-0">
        <div class="toast align-items-center text-white bg-success border-0" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="d-flex">
                <div class="toast-body">
                Product added to the cart
                </div>
                <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
        </div>
    </div>
    <div class="container p-0 row g-1 m-auto my-2">
        <div class="col-12 col-md-6">
            <img :src="product.image" class="img-fluid">
        </div>
        <div class="col-12 col-md-6 d-flex flex-column justify-content-start align-items-start px-2">
            <span class="display-5">{{ product.name }}</span>
            <span class="fs-5">{{ product.price }} PKR</span>
            <button v-if="product.stock > 0" class="btn w-100 btn-outline-secondary rounded-0 shadow-none mt-2 align-self-center" @click="addToCart()">Add to Cart</button>
            <button v-else class="btn btn-outline-secondary w-100 rounded-0 shadow-none disabled mt-2 align-self-center">Out of Stock</button>
            <span>{{ product.discription }}</span>
        </div>
    </div>
    <div class="container p-0 m-auto my-2">
        <h3 class="my-2 fw-bold">Feedbacks & Ratings</h3>
        <div class="container-fluid">
            <span class="display-1 fw-bold">{{ product.average_rating }}</span>
        </div>
        <div class="container-fluid p-0 d-flex flex-column justify-content-center">
            <span v-for="feedback in product.feedbacks.slice(0, 4)" :key="feedback.id" class="d-flex flex-row justify-content-between align-items-center border rounded-0 my-2">
                <span class="fs-6 text-muted text-truncate" style="max-width: 75%">
                    {{ feedback.comment }}
                </span>
                <span class="display-6 text-muted">
                    {{ feedback.rating }}
                </span>
            </span>
        </div>
    </div>
    <div class="container my-2 d-flex flex-column justify-content-center align-items-start p-0">
        <span class="h3 my-2 fw-bold">Highly Rated Products</span>
        <div class="container-fluid p-0 d-flex flex-row justify-content-center align-items-center">
            <div class="container d-flex justify-content-center related-item-card" v-for="item in topproducts" :key="item.slug" @click="goToProduct(item.slug)">
                <img :src="item.image" class="img-fluid related-item-image">
                <span class="position-absolute align-self-center text-white fs-4 fw-bold related-item-text">{{ item.name }}</span>
            </div>
        </div>
    </div>
</template>

<script>
import { onBeforeRouteUpdate, onBeforeRouteLeave, useRouter } from 'vue-router';
import { ref } from 'vue';
export default {
    data(){
        return {
            quantity: 1,
            slug: this.$route.params.slug
        }
    },
    computed: {
        products(){
            return this.$store.state.products;
        },
        product(){
            return this.products.find(product => product.slug == this.slug);
        },
        topproducts(){
            return this.products.filter(product => product.average_rating >= this.product.average_rating).slice(0, 4);
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
            $('.toast').toast('show');
        },

        goToProduct(slug){
            this.$router.push({name: 'productdetail', params: {slug: slug}});
        }
    },
    watch: {
        '$route.params.slug' (){
            this.slug = this.$route.params.slug;
        }
    }
}
</script>

<style scoped>
.related-item-card{
    max-width: 25% !important;
}
.related-item-card .related-item-text{
    visibility: hidden;
    transition-timing-function: ease-in-out;
}

.related-item-card:hover .related-item-text{
    visibility: visible;
    transition-timing-function: ease-in-out;
}

.related-item-card:hover .related-item-image{
    filter: blur(2px);
    -webkit-filter: blur(2px);
    transition-duration: 0.5s;
    transition-timing-function: ease-in-out;
}

.related-item-card .related-item-image{
    filter: blur(0px);
    -webkit-filter: blur(0px);
    transition-duration: 0.5s;
    transition-timing-function: ease-in-out;
}
</style>
