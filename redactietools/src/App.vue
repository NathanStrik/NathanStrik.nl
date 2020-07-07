<template>
  <div id="app">
    <i-container class="container">
      <!-- <TODO: Implement ToastMessage /> -->
      <Actions />
      <i-row>
        <MarkdownProcessor @textupdate="changeText($event)"/>
        <HtmlPreview :text="text" />
      </i-row>
    </i-container>
  </div>
</template>

<script>
  import MarkdownProcessor from './components/MarkdownProcessor';
  import HtmlPreview from './components/HtmlPreview';
  import Actions from './components/Actions';

  export default {
    name: 'App',
    title: 'Redactietools',
    components: {
      Actions,
      MarkdownProcessor,
      HtmlPreview
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

<style>
  .action-button {
    margin-left: 15px;
  }

  .button-group {
    margin-right: 5px;
  }

  .container {
    padding: 20px;
    height: 100vh;
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

  .output-column {
    background: palegoldenrod;
  }

</style>
