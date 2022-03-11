<template>
  <nav class="navbar bg-light navbar-expand-lg navbar-light" id="mainNav">
    <div class="container px-4 px-lg-5">
      <router-link class="navbar-brand" to="/">Můj blog</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu
        <em class="fas fa-bars"/>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ms-auto py-4 py-lg-0">
          <li class="nav-item">
            <router-link to="/about" class="btn btn-light">
              About
            </router-link>
            <router-link to="/contact" class="btn btn-light">
              Contact
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navigation"
}
</script>

<style scoped>

</style>
