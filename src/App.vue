<template>
  <div id="app">
    <NavBar></NavBar><br>
    <router-view/>
    <br>
  </div>
</template>

<script>

import NavBar from './components/NavBar'

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style>

</style>
