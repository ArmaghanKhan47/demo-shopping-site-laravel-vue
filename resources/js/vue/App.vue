<template>
    <navbar></navbar>
    <router-view></router-view>
</template>

<script>
export default {
    created(){
        console.log('created');
        this.$store.dispatch('restoreCartAction');
    },
    mounted(){
        console.log('mounted');
        this.$store.dispatch('restoreCartAction');
    }
}
</script>
