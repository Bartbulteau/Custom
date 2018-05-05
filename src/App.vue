<template>
  <div id="app">
    <div id="title-bar">
      <img src="./assets/error.png" width="15" height="15">
    </div>
    <div>
      <NavBar></NavBar>
      <br>
      <br>
      <router-view/>
      <br>
    </div>
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
#title-bar {
  height: 35px;
  background-color: #303030;
  width: 100%;
  padding-top: 3px;
  padding-left: 10px;
}
</style>
