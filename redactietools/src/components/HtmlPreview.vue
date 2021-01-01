<template>
  <i-column md="6" id="output-column">
    <h2 class="head2">Html voorproef</h2>
    <vue-markdown @rendered="emitRenderedHtml($event)" :source=text ref="html"></vue-markdown>
  </i-column>
</template>

<script>
  import VueMarkdown from 'vue-markdown';

  export default {
    name: 'HtmlPreview',
    props: {
      text: String
    },
    components: {
      VueMarkdown
    },
    methods: {
      emitRenderedHtml(renderedHtml) {
        this.$root.$emit('renderFinished', renderedHtml);
      }
    }
  }
</script>