<template>
  <div id="app">
    <i-container class="container">
      <i-row>
        <i-column sm="6" class="border-right">
          <h2 class="head2">Markdownverwerker</h2>
          <i-textarea 
            v-on:input="testHandler" 
            class="text-area"
            v-model="text" 
            rows="30"
            placeholder="Voer hier je Markdown tekst in..." 
          />
        </i-column>
        <i-column sm="6" id="output-column">
          <h2 class="head2">Html voorproef</h2>
          <vue-markdown :source="text">{{text}}</vue-markdown>
        </i-column>
      </i-row>
    </i-container>
  </div>
</template>

<script>
  import VueMarkdown from 'vue-markdown';

  export default {
    name: 'App',
    components: {
      VueMarkdown
    },
    data() {
      return {
        text: ''
      }
    },
    created: function() {
      console.log('Thingy is created!');

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

      console.log('Value in cookie:');
      console.log(cookieValue);
      
      if (cookieValue != ' ') {
        this.text = unescape(cookieValue);
      } else {
        this.text = "%23%23%20Verkorte%20Markdown-handleiding%0A%0ADit%20is%20een%20live%20%5BMarkdown%5D%5B1%5D%20editor%20op%20basis%20van%20%5BWMD%5D%5B2%5D%20en%20andere%20open%20source%20tools.%0A%0A%23%23%23%20Gebruik%0APlaats%20tekst%20tussen%20*enkele%20asterisken*%20om%20de%20tekst%20schuin%20te%20drukken%20en%20tussen%20**dubbele%20asterisken**%20voor%20vetgedrukte%20tekst.%0A%0ALinks%20voeg%20je%20in%20door%20woorden%20tussen%20%5Bvierkante%20haken%5D%5B1%5D%20te%20plaatsen%2C%20met%20daarachter%20het%20nummer%20van%20de%20link%20%28ook%20tussen%20vierkante%20haken%29.%20Onderaan%20het%20artikel%20hou%20je%20een%20lijstje%20bij%20met%20welke%20link%20bij%20welk%20nummer%20hoort.%0A%0ASnel%20een%20enkele%20link%20maken%20doe%20je%20door%20%5Bde%20linktekst%5D%28http%3A//www.google.nl/%29%20tussen%20vierkante%20haken%20te%20plaatsen%2C%20met%20gelijk%20daarachter%20de%20link%20tussen%20ronde%20haken.%0A%0A%23%23%23%20H-koppen%20maak%20je%20door%20%E9%E9n%2C%20twee%2C%20of%20driedubbele%20kardinaalteken%28s%29%20voor%20de%20kop%20te%20plaatsen%0A%0AKlik%20%5Bhier%5D%5B3%5D%20om%20meer%20te%20lezen%20over%20Markdown.%0A%0A%5B1%5D%3A%20https%3A//daringfireball.net/projects/markdown/%0A%5B2%5D%3A%20https%3A//github.com/derobins/wmd/%0A%5B3%5D%3A%20http%3A//daringfireball.net/projects/markdown/";
      }
    },
    methods: {
      testHandler() {
        console.log('Pinda changed!');
        console.log('The text is now:');
        console.log(this.text);
        var d = new Date();
        d.setTime(d.getTime() + (1 * 24 * 60 * 60 * 1000));
        var expires = "expires="+d.toUTCString();
        document.cookie = "input=" + escape(this.text) + ";" + expires + ";path=/";
      },
    }
  }
</script>

<style>
  .container {
    padding: 20px;
    height: 100vh;
  }
  
  .head2 {
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
