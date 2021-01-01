<template>
  <i-column md="6" class="border-right">
    <h2 class="head2">Markdownverwerker</h2>
    <!-- <MarkdownTools /> -->
    <i-textarea
      ref="textAreaMain"
      v-on:input="processText" 
      class="text-area"
      v-model="text" 
      rows="17"
      placeholder="Voer hier je Markdown tekst in..." 
    />
  </i-column>
</template>

<script>
  // import MarkdownTools from '@/components/MarkdownTools';
  import defaultMarkdown from '!raw-loader!../assets/default-markdown.txt';

  export default {
    name: 'MarkdownProcessor',
    components: {
      // MarkdownTools
    },
    mounted() {
      this.$root.$on('eraseAll', () => {
        this.text = '';
        document.cookie = "input=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      });

      this.$root.$on('boldCommand', () => {
        this.processSelection('**', 'wrap');
      });

      this.$root.$on('italicCommand', () => {
        this.processSelection('*', 'wrap');
      });

      this.$root.$on('h1Command', () => {
        this.processSelection('# ', 'prefix');
      });

      this.$root.$on('h2Command', () => {
        this.processSelection('## ', 'prefix');
      })

      this.$root.$on('h3Command', () => {
        this.processSelection('### ', 'prefix');
      })
      
      this.$root.$on('olCommand', () => {
        this.makeList('ol');
      })
      
      this.$root.$on('ulCommand', () => {
        this.makeList('ul');
      })
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
      processSelection(tag, type) {
        let input = this.$refs.textAreaMain.$refs.input;
        const START = input.selectionStart;
        const END = input.selectionEnd;
        const SELECTED = input.value.slice(START, END);
        const LINE_NUMBER = this.getColumnNumber(input);

        console.log('Line number: ' + LINE_NUMBER);

        let selectedExpanded = input.value.slice(START - tag.length);
        let removeTag = selectedExpanded.slice(0, tag.length) === tag;

        console.log('Remove tag? ' + removeTag);

        input.focus();

        if (!removeTag && type === 'wrap') {
          input.setRangeText(`${tag}${SELECTED}${tag}`, START, END);
          input.setSelectionRange(START + tag.length, END + tag.length);
        } 
        
        if (removeTag && type === 'wrap') {
          input.setRangeText(SELECTED, START - tag.length, END + tag.length, 'select');
        }

        if (!removeTag && type === 'prefix') {
          input.setRangeText(`${tag}${SELECTED}`, START, END);
          input.setSelectionRange(START + tag.length, END + tag.length);
        }

        if (removeTag && type === 'prefix') {
          input.setRangeText(SELECTED, START - tag.length, END, 'select');
        }

        this.text = input.value;
        this.processText();

      },
      makeList(type) {
        let input = this.$refs.textAreaMain.$refs.input;
        const START = input.selectionStart;
        const END = input.selectionEnd;
        const SELECTED = input.value.slice(START, END);
        const lines = SELECTED.split('\n');
        let list = '';

        if (type === 'ol') {
          for (var x = 1; x <= lines.length; x++) {
            list = list + x + '. ' + lines[x-1] + '\n';
          }
        } else {
          for (var y = 1; y <= lines.length; y++) {
            list = list + '- ' + lines[y-1] + '\n';
          }
        }

        list = list.substring(0, list.length - 1);
        input.setRangeText(`${list}`, START, END);
        this.text = input.value;
        this.processText();
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
      getColumnNumber(textarea) {
        var textLines = textarea.value.substr(0, textarea.selectionStart).split("\n");
        return textLines[textLines.length-1].length;
      },
    }
  }
</script>