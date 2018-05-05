<template>
  <div id="main">
    <br><br>
    <div class="container">
    <div class="jumbotron">
      <h1 class="display-3">$> Hello, world! <blink>_</blink></h1>
      <p class="lead">This is a simple tool to write, create and set-up your own terminal commands</p>
      <hr  style="color: white;">
      <p>If you've never used this app before, please click the set-up button.</p>
      <p class="lead">
        <a class="btn btn-primary btn-lg" href="#" role="button">Set-up</a>
      </p>
    </div>
  </div>


  </div>
</template>

<script>

import '../js/blink.js'

export default {
  name: 'Main',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
