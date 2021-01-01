<template>
  <div id="markdown">
    <Navbar/>
    <div class="editor">
      <MarkdownActions />
      <i-row>
        <MarkdownProcessor @textupdate="changeText($event)"/>
        <HtmlPreview :text="text" />
      </i-row>
    </div>
  </div>
</template>

<script>
  import Navbar from '@/views/base/Navbar.vue';
  import MarkdownActions from '@/components/MarkdownActions';
  import MarkdownProcessor from '@/components/MarkdownProcessor';
  import HtmlPreview from '@/components/HtmlPreview';

  export default {
    name: 'Markdown',
    title: 'Markdownverwerker',
    components: {
      Navbar,
      MarkdownActions,
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
