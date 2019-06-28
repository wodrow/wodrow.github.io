<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <img alt="Vue logo" src="../../assets/logo.png">
          <HelloWorld msg="Welcome to Your Vue.js App"/>
        </div>
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
