<template>
<div class="container my-2 row mx-auto">
    <div class="col-12 col-md-6 d-flex flex-column align-items-center">
        <span class="fs-6 fw-bold my-2">Credit Card Info</span>
        <div class="container-fluid row m-0 my-1 p-0">
            <div class="col-12 col-md-6 my-1 my-md-0 p-0 pe-md-1">
                <input
                    class="form-control shadow-none"
                    id="fname"
                    type="text"
                    name="fname"
                    placeholder="First Name"
                    :disabled="paymentProcessing"
                >
            </div>
            <div class="col-12 col-md-6 my-1 my-md-0 p-0 ps-md-1">
                <input
                    class="form-control shadow-none"
                    id="lname"
                    type="text"
                    name="lname"
                    placeholder="Last Name"
                    :disabled="paymentProcessing">
            </div>
        </div>

        <input
            type="text"
            name="address"
            id="address"
            class="form-control my-1 shadow-none"
            placeholder="Address"
            :disabled="paymentProcessing"
        >

        <button
            v-if="!paymentProcessing"
            @click="checkout()"
            class="btn btn-success shadow-none my-1 w-100"
        >
            Checkout
        </button>
        <span class="my-1" v-if="paymentProcessing">
            <div class="spinner-border text-success" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </span>
    </div>
    <div class="col-12 col-md-6 d-flex flex-column align-items-center">
        <span class="fs-6 fw-bold my-2">Cart Summary</span>
        <div v-for="item in cart" :key="item.id" class="container border my-1 p-2 rounded-3 border-dark d-flex justify-content-between align-items-center">
            <span class="fs-6">{{ item.name }}</span>
            <span class="fs-6 text-muted">{{ item.quantity }}</span>
            <span class="fs-6 text-muted">{{ item.quantity * item.price }} PKR</span>
        </div>
        <div class="container border-top my-2 p-2 d-flex justify-content-between align-items-center">
            <span class="fs-6">Total</span>
            <span class="fs-6 text-muted">{{ totalprice }} PKR</span>
        </div>
    </div>
</div>

</template>

<script>
export default {
    data(){
        return {
            paymentProcessing: false
        }
    },
    methods: {
        async checkout(){
            this.paymentProcessing = true;
            await new Promise(r => setTimeout(r, 2000));
            this.$store.dispatch('clearCartAction');
            this.paymentProcessing = false;
        }
    },
    computed: {
        cart(){
            return this.$store.getters.getCart;
        },
        totalprice(){
            return this.cart.reduce((prev, cur) => (prev.price * prev.quantity) + (cur.price * cur.quantity), 0);
        }
    },
}
</script>
