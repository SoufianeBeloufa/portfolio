<template>
  
  <landing_page/>
  <!-- <about_me/> -->
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
</template>

<script>
import landing_page from './components/landing_page.vue';
// import about_me from './components/about_me.vue';

export default {
  name: 'App',
  components: {
    landing_page,
    // about_me
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50; */
  /* margin-top: 60px; */
  
}
</style>
