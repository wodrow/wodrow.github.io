<template>
    <div class="about">
        <div class="row">
            <div class="col-12">
                <router-link to="/">Home</router-link>
                |
                <router-link to="/about">About</router-link>
            </div>
            <div class="col-12">
                <img alt="Vue logo" src="../../assets/logo.png">
                <HelloWorld msg="Welcome to Your Vue.js App"/>
            </div>
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src
    import HelloWorld from '@/components/HelloWorld.vue'

    export default {
        name: "About",
        components: {
            HelloWorld
        }
    }
</script>
