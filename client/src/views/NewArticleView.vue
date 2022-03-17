<template>

  <div class="row">
    <div class="col-8 offset-2">
      <NewArticle></NewArticle>
    </div>
  </div>

</template>

<script>
import NewArticle from '@/components/NewArticle.vue';

export default {
  name: "NewArticleView",
  components: {NewArticle}
}

</script>

<style scoped>

.purple-border .form-control:focus {
  border: 1px solid #ed9abf;
  box-shadow: 0 0 0 0.2rem rgba(186, 104, 200, .25);
}

</style>