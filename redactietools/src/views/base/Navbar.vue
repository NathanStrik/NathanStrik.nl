<template>
  <i-row>
    <i-column md="12">
      <i-navbar size="sm" collapse="sm" class="navbar" variant="dark">
        <i-navbar-brand href="https://www.nathanstrik.nl/">&larr; Terug naar NathanStrik.nl</i-navbar-brand>
        <!-- <i-navbar-brand :to="{ name: 'Home' }">&larr; Terug naar NathanStrik.nl</i-navbar-brand> -->
        <i-navbar-items>
          <i-nav>
              <i-nav-item :to="{ name: 'Home' }">Home</i-nav-item>
              <!-- <i-nav-item :to="{ name: 'Markdownverwerker' }">Regeleindeverwijderaar</i-nav-item> -->
              <i-nav-item :to="{ name: 'Markdownverwerker' }">Markdownverwerker</i-nav-item>
              <!-- <i-nav-item :to="{ name: 'Markdownverwerker' }">Rechtenvrij beeld</i-nav-item> -->
          </i-nav>
        </i-navbar-items>
      </i-navbar>
    </i-column>
  </i-row>
</template>

<script>
export default {
    name: 'Navbar',
    data() {
        return {
        }
    }
}
</script>