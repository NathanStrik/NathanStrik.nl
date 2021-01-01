<template>
  <div id="linebreak-remover">
    <Navbar/>
    <div class="editor">
      <LinebreakActions/>
      <i-row>
        <LinebreakInput @process-input="processInput"/>
        <LinebreakOutput :processedText="processedText"/>
      </i-row>
    </div>
  </div>
</template>

<script>
  import Navbar from '@/views/base/Navbar.vue';
  import LinebreakActions from '@/components/LinebreakActions';
  import LinebreakInput from '../components/LinebreakInput.vue';
  import LinebreakOutput from '../components/LinebreakOutput.vue';

  export default {
    name: 'Regeleindeverwijderaar',
    title: 'Regeleindeverwijderaar',
    components: {
      Navbar,
      LinebreakActions,
      LinebreakInput,
      LinebreakOutput
    },
    methods: {
      processInput(input) {
        // vervang alle plekken met 2 spaties of meer door een enkele spatie
        input = input.replace(/ {2,}/g," ");
        
        // vervang alle regeleindes door een enkele spatie
        input = input.replace(/(\r\n|\n|\r)/gm," ");

      // vervang de nu ontstane dubbele spaties met twee regeleindes om paragrafen te behouden
        input = input.replace(/\s{2,}/g, '\n\n');

      // vervang ligaturen met een spatie door enkel de ligatuur, zonder spatie
        input = input.replace(/ff e/g, "ffe");
        input = input.replace(/ff a/g, "ffa");
        input = input.replace(/ff i/g, "ffi");
        input = input.replace(/fb /g, "fb");
        input = input.replace(/fl /g, "fl");
        input = input.replace(/fi /g, "fi");
        input = input.replace(/fj /g, "fj");
        input = input.replace(/ft e /g, "fte ");
        input = input.replace(/ft e\./g, "fte.");

      // fix voor engelse woorden met combinatie ff + e
        input = input.replace(/sheriffen/g, "sheriff en");

      // vervang spaties direct voorafgaand aan een punt
        input = input.replace(/ \./g, ".");

        this.processedText = input;
      }
    },
    data() {
      return {
        processedText: '',
        visible: true
      }
    }
  }
</script>
