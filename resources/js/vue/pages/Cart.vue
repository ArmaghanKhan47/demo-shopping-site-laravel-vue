<template>
    <div class="container p-0 m-auto my-2 d-flex align-items-center justify-content-between">
        <h3 class="my-2">Cart {{ `(${cart.length})` }}</h3>
        <a class="btn btn-outline-success rounded-0">Checkout</a>
    </div>
    <div class="container p-0 m-auto my-2 d-flex flex-column align-items-center">
        <div v-for="(product, index) in cart" :key="index" class="d-flex flex-row align-items-center border my-2 w-100">
            <div class="d-flex align-items-center justify-content-start w-100">
                <img :src="product.image" class="border-0 cart-image mr-1">
                <div class="d-flex flex-column">
                    <span class="text-truncate w-100 mx-1 fw-bold fs-5">{{ product.name }}</span>
                    <span class="text-truncate w-100 mx-1 text-muted">{{product.price * product.quantity}} RS / {{ product.quantity }}</span>
                </div>
            </div>
            <div class="d-flex align-items-center justify-content-end">
                <span class="bi bi-x-square ml-auto fs-4 me-5" @click="removeFromCart(index)"></span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        cart(){
            return this.$store.getters.getCart;
        }
    },
    methods:{
        removeFromCart(i){
            console.log(i);
            this.$store.commit('DeleteItemFromCart', i);
        }
    }
}
</script>
<style scoped>
.cart-image{
    width: 20%;
    height: 13%;
}
</style>
