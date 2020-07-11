<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/markdown">Markdown</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
  .action-button {
    margin-left: 15px;
  }

  .button-group {
    margin-right: 5px;
  }

  .container {
    padding: 20px;
    height: 100vh;
  }
  
  .head2 {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight: 700;
    margin: 20px 0;
  }

  .border-right {
    border-right: 1px dashed #ace;
  }

  .text-area {
    margin: 20px 0;
  }

  .button-text {
    position: relative;
    top: -7px;
    left: 1px;
    font-weight: 650;
    font-size: 0.9em;
    height: 10px;
  }

</style>
