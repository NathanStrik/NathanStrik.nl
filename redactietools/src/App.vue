<template>
  <router-view/>
  <!-- <i-container class="container">
    <i-layout>
      <i-layout-header>
        <i-navbar variant="dark">
          <i-navbar-brand :to="{ name: 'index' }">Navbar</i-navbar-brand>
          <i-navbar-items>
              <i-nav>
                  <i-nav-item :to="{ name: 'index' }">Home</i-nav-item>
                  <i-nav-item :to="{ name: 'about' }">About</i-nav-item>
                  <i-nav-item :to="{ name: 'contact' }">Contact</i-nav-item>
              </i-nav>
          </i-navbar-items>
        </i-navbar>
      </i-layout-header>
      
      <i-layout-content>
      </i-layout-content>
    </i-layout>
  </i-container> -->


  <!-- <div id="app">
    <i-container class="container">
      <i-layout>
        <i-layout-header>
          <i-navbar>
            <i-navbar-brand :to="{ name: 'index' }">Navbar</i-navbar-brand>
            <i-navbar-items class="_justify-content-center">
                <i-nav>
                    <i-nav-item to="/">Home</i-nav-item>
                    <i-nav-item to="/markdown">Markdown</i-nav-item>
                </i-nav>
            </i-navbar-items>
          </i-navbar>
        </i-layout-header>
        <i-row id="nav">
          Row
        </i-row> -->

        <!-- <i-row id="nav">
          <i-nav>
            <i-nav-item to="/">Home</i-nav-item> |
            <i-nav-item to="/markdown">Markdown</i-nav-item>
          </i-nav>
        </i-row> -->
        <!-- <router-view/> -->
      <!-- </i-layout> -->
    <!-- </i-container> -->
  <!-- </div> -->
</template>

<style>
  .editor {
    padding: 20px;
  }

  .action-button {
    margin-left: 15px;
  }

  .button-group {
    margin-right: 5px;
  }

  .container {
    padding: 20px;
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

  @media screen and (max-width: 767px) {
    .border-right {
      border-right: none;
    }
  }

</style>
