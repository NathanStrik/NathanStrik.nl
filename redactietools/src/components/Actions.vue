<template>
  <i-row class="actions">
    <i-button 
      class="action-button" 
      outline variant="danger" 
      size="sm"
      v-on:click="emitEraseCommand"
    >
      Wis alles
    </i-button>
    <i-button 
      class="action-button" 
      outline variant="primary" 
      size="sm" 
      v-clipboard:copy="renderedHtml" 
      v-clipboard:success="onCopy" 
      v-clipboard:error="onError"
    >
      Kopieer Html
    </i-button>
    <span ref="feedback" class="hidden-feedback">HTML gekopieerd!</span>
  </i-row>
</template>

<script>
  export default {
    name: 'Actions',
    mounted() {
      this.$root.$on('renderFinished', renderedHtml => {
        this.renderedHtml = renderedHtml;
      });
    },
    data() {
      return {
        renderedHtml: '',
        visible: true
      }
    },
    methods: {
      onCopy: function() {
        this.$refs.feedback.classList.add("fade-in");
        setTimeout(() => {
          this.$refs.feedback.classList.remove("fade-in");
          this.$refs.feedback.classList.add("fade-out");
        }, 2500);
        setTimeout(() => {
          this.$refs.feedback.classList.remove("fade-out");
        }, 5500);
      },
      onError: function() {
        console.log('There was an error!');
      },
      emitEraseCommand() {
        this.$root.$emit('eraseAll');
      }
    }
  }
</script>

<style>
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

</style>