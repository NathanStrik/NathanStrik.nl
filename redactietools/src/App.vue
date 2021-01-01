<template>
  <router-view/>
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

  .hidden-feedback {
    color: #36912c;
    font-weight: 800;
    position: relative;
    left: 20px;
    top: 4px;
    visibility: hidden;
  }

  .fade-in {
    visibility: visible;
    animation: fadeIn ease 0.5s;
    -webkit-animation: fadeIn ease 0.5s;
    -moz-animation: fadeIn ease 0.5s;
    -o-animation: fadeIn ease 0.5s;
    -ms-animation: fadeIn ease 0.5s;
  }

  .fade-out {
    visibility: visible;
    animation: fadeOut ease 3s;
    -webkit-animation: fadeOut ease 3s;
    -moz-animation: fadeOut ease 3s;
    -o-animation: fadeOut ease 3s;
    -ms-animation: fadeOut ease 3s;
  }

  @keyframes fadeIn {
    0% {
      opacity:0;
    }
    100% {
      opacity:1;
    }
  }

  @-moz-keyframes fadeIn {
    0% {
      opacity:0;
    }
    100% {
      opacity:1;
    }
  }

  @-webkit-keyframes fadeIn {
    0% {
      opacity:0;
    }
    100% {
      opacity:1;
    }
  }

  @-o-keyframes fadeIn {
    0% {
      opacity:0;
    }
    100% {
      opacity:1;
    }
  }

  @-ms-keyframes fadeIn {
    0% {
      opacity:0;
    }
    100% {
      opacity:1;
    }
  }

  @keyframes fadeOut {
    0% {
      opacity:1;
    }
    100% {
      opacity:0;
    }
  }

  @-moz-keyframes fadeOut {
    0% {
      opacity:1;
    }
    100% {
      opacity:0;
    }
  }

  @-webkit-keyframes fadeOut {
    0% {
      opacity:1;
    }
    100% {
      opacity:0;
    }
  }

  @-o-keyframes fadeOut {
    0% {
      opacity:1;
    }
    100% {
      opacity:0;
    }
  }

  @-ms-keyframes fadeOut {
    0% {
      opacity:1;
    }
    100% {
      opacity:0;
    }
  }

  @media screen and (max-width: 767px) {
    .border-right {
      border-right: none;
    }
  }

</style>
