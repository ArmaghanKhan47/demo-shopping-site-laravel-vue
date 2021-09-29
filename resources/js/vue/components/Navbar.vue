<template>
    <nav class="navbar navbar-expand-md navbar-light bg-transparent shadow-sm sticky-top glass-background">
        <div class="container">
            <router-link class="navbar-brand" :to="{name: 'index'}">
                Shopping Site
            </router-link>
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label=""
            >
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <!-- Left Side Of Navbar -->
                <ul class="navbar-nav me-auto">

                </ul>

                <!-- Right Side Of Navbar -->
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <router-link :to="{name: 'cart'}" class="nav-link">Cart <span class="badge bg-secondary">{{ cartlength }}</span></router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    computed: {
        cartlength(){
            return this.$store.state.cart.length;
        }
    }
}
</script>
<style scoped>
.glass-background{
    background: rgba( 255, 255, 255, 0.2 ) !important;
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 12.5px );
    -webkit-backdrop-filter: blur( 12.5px );
}
</style>
