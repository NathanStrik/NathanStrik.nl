<template>
  <i-column md="6" class="border-right">
    <h2 class="head2">Tekstinvoer</h2>
    <i-textarea
      ref="textAreaMain"
      class="text-area"
      v-model="inputtext" 
      rows="17"
      placeholder="Plak hier je tekst..." 
    />
  </i-column>
</template>

<script>
  export default {
    name: 'LinebreakInput',
    data() {
      return {
        inputtext: ''
      }
    },
    mounted() {
      this.$root.$on('eraseCommand', () => {
        this.inputtext = '';
      });

      this.$root.$on('linebreakRemoveCommand', () => {
        this.$emit('process-input', this.inputtext);
      });
    }
  }
</script>