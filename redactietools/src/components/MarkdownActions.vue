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
    name: 'MarkdownActions',
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
