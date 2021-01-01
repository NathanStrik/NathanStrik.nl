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
      v-on:click="emitLineBreakRemoveCommand"
    >
      Verwijder regeleindes
    </i-button>
    <span ref="feedback" class="hidden-feedback">Regeleindes verwijderd!</span>
  </i-row>
</template>

<script>
  export default {
    name: 'LinebreakActions',
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
      emitLineBreakRemoveCommand() {
        this.$root.$emit('linebreakRemoveCommand');
        this.$refs.feedback.classList.add("fade-in");
        setTimeout(() => {
          this.$refs.feedback.classList.remove("fade-in");
          this.$refs.feedback.classList.add("fade-out");
        }, 2500);
        setTimeout(() => {
          this.$refs.feedback.classList.remove("fade-out");
        }, 5500);
      },
      emitEraseCommand() {
        this.$root.$emit('eraseCommand');
      }
    }
  }
</script>