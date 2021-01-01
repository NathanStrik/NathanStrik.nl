<template>
  <i-container class="_padding-0" fluid>
    <Navbar/>
    <div class="editor">
      <i-row>
        <i-column md="12">
          <h2 class="head2">Welkom</h2>
          <p>
            Op deze pagina zijn verschillende tools verzameld die handig zijn voor iedereen die veel met tekst werkt. Zo is er een handige <router-link :to="{ name: 'Regeleindeverwijderaar' }">'Regeleindeverwijderaar'</router-link>, om grote stukken tekst van valse regeleindes (en dubbele spaties) te ontdoen. Ook is er een <router-link :to="{ name: 'Markdownverwerker' }">'Markdownverwerker'</router-link>, waarmee je snel HTML-code kunt genereren als je de Markdown-taal beheerst.
          </p>
          <p>
            Heb je een idee voor een tool? Stuur dan even een mail naar: <a href="mailto:contact@nathanstrik.nl?subject=Idee%20voor%20redactietools&body=Beste Nathan,%0D%0AMet vriendelijke groet,%0D%0A">contact@nathanstrik.nl</a>.
          </p>
          <h2 class="head2">Handige links</h2>
          <p>
            <a href="https://chrome.google.com/webstore/detail/take-webpage-screenshots/mcbpblocgmgfnpjjppndjkmgjaogfceg?hl=en" target="_blank">Fireshot (Chrome)</a> (maak screenshots van gehele webpagina's)<br>
            <a href="https://addons.mozilla.org/nl/firefox/addon/fireshot/" target="_blank">Fireshot (Firefox)</a> (maak screenshots van gehele webpagina's)<br>
            <a href="https://www.techsmith.com/jing-tool.html" target="_blank">Techsmith Capture (voorheen Jing)</a> (maak screenshots van je computerscherm en annoteer deze)<br>
            <a href="https://www.zamzar.com/conversionTypes.php" target="_blank">Zamzar</a> (zet verschillende bestandstypen om naar andere bestandstypen)<br>
            <a href="https://notepad-plus-plus.org/" target="_blank">Notepad++</a> (platte-tekst-editor met syntax-highlighting en FTP-browser, handig voor het editen van websites)<br>
            <a href="https://wordart.com/" target="_blank">WordArt.com</a> (maak woordwolken/tagclouds)<br>
            <a href="https://pencil.evolus.vn/" target="_blank">Pencil</a> (maak wireframes/prototypes)<br>
            <a href="https://www.downforeveryoneorjustme.com/" target="_blank">Down For Everyone Or Just Me</a> (check of je site down is)<br>
            <a href="https://www.wappalyzer.com/" target="_blank">Wappalyser</a> (spiek op andere websites welke technieken ze gebruiken)
          </p>
        </i-column>
      </i-row>
    </div>
  </i-container>

  <!-- <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div> -->
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
  import Navbar from '@/views/base/Navbar.vue';

export default {
  name: 'Home',
  components: {
    Navbar
  }
}
</script>
