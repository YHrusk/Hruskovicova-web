<template>
  <nav class="navbar bg-warning bg-opacity-10 navbar-expand-lg navbar-light fixed-top" id="mainNav">
    <div class="container px-4 px-lg-5" >
      <router-link class="navbar-brand" to="/">Můj blog</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu
        <em class="fas fa-bars"/>
      </button>
      <div class="collapse navbar-collapse position-absolute top-2 end-0 p-lg-1" id="navbarResponsive">
        <ul class="navbar-nav ms-auto py-4 py-lg-0">
          <li class="nav-item">
            <router-link to="/about" class="btn btn-light btn-outline-dark offset-0">
              About
            </router-link>
          </li>
          <li>
            <router-link to="/contact" class="btn btn-light btn-outline-dark offset-3">
            Contact
          </router-link>
          </li>
          <form class="d-flex offset-1" >
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-warning" type="submit">Search</button>
          </form>
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
