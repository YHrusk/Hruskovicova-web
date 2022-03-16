<template>
  <div class="container">
    <div class="row align-items-start">
      <div class="col">
        <h3 class="content"><b>Nový článek</b></h3>
        <label>ID článku:</label>
        <div class="md-form form-group purple-border">
          <textarea class="md-textarea form-control" rows="1"></textarea><br><br>
        </div>
        <label>Název článku:</label>
        <div class="md-form form-group purple-border">
          <textarea class="md-textarea form-control" rows="1"></textarea><br><br>
        </div>
        <label>Článek:</label>
        <div class="md-form mb-4 form-group purple-border">
          <textarea class="md-textarea form-control" rows="3" placeholder="Něco sem napiš..."></textarea>
        </div>
        <input type="submit" value="Odeslat">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewArticle"
}
</script>

<style scoped>

.purple-border .form-control:focus {
  border: 1px solid #ed9abf;
  box-shadow: 0 0 0 0.2rem rgba(186, 104, 200, .25);
}

</style>