<template>
  <div class="card">
    <div class="row">
      <div class="col-xl-3 col-lg-4">
        <img :src="image" alt="" class="card-img img-fluid p-1">
      </div>
      <div class="col-xl-9 col-lg-8">
        <div class="card-body">
          <h4 class="card-title">{{ title }}</h4>
          <h6 class="card-subtitle">{{ formattedDate }}</h6>
          <p class="card-text text-truncate">{{text}}</p>
          <router-link :to="`/article/${id}`" class="btn btn-outline-dark btn-light">
            Číst článek
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Preview",
  props: {
    title: String,
    date: Date,
    text: String,
    image: String
  },
  computed: {
    formattedDate() {
      return this.date.toLocaleDateString()
    }
  }
}
</script>

<style scoped>

</style>
