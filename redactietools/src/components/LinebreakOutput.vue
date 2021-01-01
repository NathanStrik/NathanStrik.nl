<template>
  <i-column md="6">
    <h2 class="head2">Tekstuitvoer</h2>
    <i-textarea
      ref="textAreaMain"
      class="text-area"
      v-model="processedText" 
      rows="17"
      placeholder="Hier komt de uitgevoerde tekst..."
    />
  </i-column>
</template>

<script>
  export default {
    name: 'LinebreakOutput',
    data() {
      return {}
    },
    props: {
      processedText: String
    },
    mounted() {
        this.$root.$on('eraseCommand', () => {
        this.processedText = '';
      });
    }
  }
</script>