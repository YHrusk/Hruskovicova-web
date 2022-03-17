<template>
    <div class="container">
      <div class="row align-items-start">
        <div class="col">
          <h3 class="content"><b>Nový článek</b></h3>
          <label>ID článku:</label>
          <div class="md-form form-group purple-border">
            <textarea class="md-textarea form-control" rows="1" placeholder="ID"></textarea><br><br>
          </div>
          <label>Název článku:</label>
          <div class="md-form form-group purple-border">
            <textarea class="md-textarea form-control" rows="1" placeholder="Název"></textarea><br><br>
          </div>
          <label>Článek:</label>
          <div class="md-form mb-4 form-group purple-border">
            <textarea class="md-textarea form-control" rows="3" placeholder="Něco sem napiš..."></textarea>
          </div>
          <label>Obrázek:</label>
          <div>
            <input @change="onImage" class="form-control" type="file" id="file">
          </div>
        </div>
      </div>
      <input type="submit" value="Odeslat" class="mt-4">
    </div>

</template>

<script>
export default {
  name: "NewArticle",
  data() {
    return {
      article: {
        title: null,
        text: null,
        image: null
      }
    }
  },
  methods: {
    onImage(e) {
      // TODO parse image
    },
    send() {
      //this.$http.post(this.article)
    }
  }
}
</script>

<style scoped>

</style>
