<template>
  <i-column sm="6" class="border-right">
    <h2 class="head2">Markdownverwerker</h2>
    <MarkdownTools />
    <i-textarea
      ref="textAreaMain"
      v-on:input="processText" 
      class="text-area"
      v-model="text" 
      rows="26"
      placeholder="Voer hier je Markdown tekst in..." 
    />
  </i-column>
</template>

<script>
  import MarkdownTools from '../components/MarkdownTools';
  import defaultMarkdown from '!raw-loader!../assets/default-markdown.txt';

  export default {
    name: 'MarkdownProcessor',
    components: {
      MarkdownTools
    },
    mounted() {
      this.$root.$on('eraseAll', () => {
        this.text = '';
        document.cookie = "input=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      });

      this.$root.$on('boldCommand', () => {
        this.wrapSelection('**');
        this.processText();
      });
    },
    data() {
      return {
        text: '',
        visible: true
      }
    },
    created: function() {
      var cookieName = "input=";
      var cookieArray = document.cookie.split(';');
      for(var i = 0; i < cookieArray.length; i++) {
        var cookie = cookieArray[i];
        while (cookie.charAt(0) == ' ') {
          cookie = cookie.substring(1);
        }
        if (cookie.indexOf(cookieName) == 0) {
          var cookieValue = cookie.substring(cookieName.length, cookie.length);
        }
      }

      if (cookieValue != undefined) {
        this.text = unescape(cookieValue);
      } else {
        this.text = defaultMarkdown;
      }

      this.fireTextUpdate();
    },
    methods: {
      processText() {
        this.fireTextUpdate();
        this.storeCookie();
      },
      wrapSelection(wrapTag) {
        console.log('Wrapping shit!' + wrapTag);
        let oldValue = this.$refs.textAreaMain.$refs.input.value;
        let selectionStart = this.$refs.textAreaMain.$refs.input.selectionStart;
        let selectionEnd = this.$refs.textAreaMain.$refs.input.selectionEnd;
        let selected = oldValue.slice(selectionStart, selectionEnd);
        this.$refs.textAreaMain.$refs.input.setRangeText(`${wrapTag}${selected}${wrapTag}`);
        this.text = this.$refs.textAreaMain.$refs.input.value;
      },
      fireTextUpdate() {
        this.$emit('textupdate', this.text);
      },
      storeCookie() {
        var d = new Date();
        d.setTime(d.getTime() + (1 * 24 * 60 * 60 * 1000));
        var expires = "expires="+d.toUTCString();
        document.cookie = "input=" + escape(this.text) + ";" + expires + ";path=/";
      },
    }
  }
</script>