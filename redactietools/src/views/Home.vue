<template>
  <i-container class="_padding-0" fluid>
    <Navbar/>
    <div class="editor">
      <i-row>
        <i-column md="12">
          <h2 class="head2">Hier komt de homepage</h2>
        </i-column>
      </i-row>
    </div>
  </i-container>

  <!-- <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div> -->
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
  import Navbar from '@/views/base/Navbar.vue';

export default {
  name: 'Home',
  components: {
    Navbar
  }
}
</script>
