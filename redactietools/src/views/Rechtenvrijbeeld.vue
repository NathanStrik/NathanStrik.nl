<template>
  <i-container class="_padding-0" fluid>
    <Navbar/>
    <div class="editor">
      <i-row>
        <i-column md="12">
          <h2 class="head2">Rechtenvrij beeld</h2>
        <p>Alle webredacteuren (ook stagiaires en freelancers) worden geacht rechtenvrij beeldmateriaal te gebruiken. Dit komt vooral voor als je bij een persbericht geen passende foto of illustratie hebt gekregen.</p>
        <p>Informatie die bekend moet zijn, vind je in het <a href="http://www.iusmentis.com/auteursrecht/citeren/beeldcitaat/" target="_blank">artikel van internetjurist Arnoud Engelfriet over citaatrecht en beeldgebruik</a>.
    </p>
        <h2 class="head2">Google</h2>
        <p>Afbeeldingen die je zoekt via Google zijn niet per definitie rechtenvrij. Gebruik onderstaande instructie om in Google te filteren op rechtenvrije afbeeldingen.</p>
        <img src="https://www.nathanstrik.nl/redactietools/images/google-image-search-rechtenvrij.png"/>
        <p>Voer een zoekterm in. Klik dan op &lsquo;Afbeeldingen&rsquo; -> &lsquo;Zoekhulpmiddelen&rsquo; en kies bij &lsquo;Gebruiksrechten&rsquo; voor &lsquo;Gelabeld voor hergebruik&rsquo;. Dan krijg je enkel afbeeldingen te zien waarbij de uploader heeft aangegeven dat ze vrij gebruikt mogen worden.</p>
        <h2 class="head2">Overige links</h2>
        <a href="http://www.flickr.com/search/advanced/?" target="_blank">Flickr.com</a> (Zet de opties  	&lsquo;Only search within Creative Commons-licensed content&rsquo; en &lsquo;Find content to use commercially&rsquo; aan.)<br>
        <a href="http://nl.freeimages.com/" target="_blank">Freeimages.com</a><br>
        <a href="http://www.pixabay.com/nl" target="_blank">Pixabay.com</a><br>
        <a href="https://picjumbo.com/" target="_blank">Picjumbo.com</a><br>
        <a href="http://stokpic.com/" target="_blank">Stokpic.com</a><br>
        <a href="https://unsplash.com/" target="_blank">Unsplash.com</a><br>
        <a href="http://startupstockphotos.com/" target="_blank">Startupstockphotos.com</a><br>
        <a href="http://nl.freepik.com/" target="_blank">Freepik.com</a><br>
        <a href="https://www.pexels.com/" target="_blank">Pexels.com</a><br>
        <a href="http://www.rgbstock.com/" target="_blank">RGBstock.com</a><br>
        <a href="http://search.creativecommons.org/" target="_blank">Creativecommons.org</a> (Verzamelzoekmachine voor verschillende websites)<br>
        <a href="https://www.canva.com/" target="_blank">Canva</a> (Met deze gratis app kun je tekst tot beeld verwerken)
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
  name: 'Rechtenvrijbeeld',
  components: {
    Navbar
  }
}
</script>
