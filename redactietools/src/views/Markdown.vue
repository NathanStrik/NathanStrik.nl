<template>
  <div id="app">
    <i-container class="container">
      <Actions />
      <i-row>
        <MarkdownProcessor @textupdate="changeText($event)"/>
        <HtmlPreview :text="text" />
      </i-row>
    </i-container>
  </div>
</template>

<script>
  import MarkdownProcessor from '@/components/MarkdownProcessor';
  import HtmlPreview from '@/components/HtmlPreview';
  import Actions from '@/components/Actions';

  export default {
    name: 'Markdown',
    title: 'Markdownverwerker',
    components: {
      Actions,
      MarkdownProcessor,
      HtmlPreview
    },
    mounted() {
      this.$root.$on('eraseAll', () => {
        this.text = '';
      });
    },
    methods: {
      changeText(newText) {
        this.text = newText;
      },
      eraseAll() {
        this.text = 'Poep!';
      }
    },
    data() {
      return {
        text: '',
        visible: true
      }
    }
  }
</script>
