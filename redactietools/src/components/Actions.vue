<template>
  <i-row class="actions">
    <i-button class="action-button" outline variant="danger" size="sm">Wis alles</i-button>
    <!-- <i-button class="action-button" outline variant="primary" size="sm">Kopieer Html</i-button> -->
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
        console.log('HTML copied!');
      },
      onError: function() {
        console.log('There was an error!');
      }
    }
  }
</script>