<template>

  <div class="row">
    <div class="col-md-6 offset-md-3 p-5 bg-white">
      <h3>{{ article.title }}</h3>
      <h6>{{ formattedDate }}</h6>
      <img class="card-img-top" src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwb2JqZWN0c3xlbnwwfHwwfHw%3D&w=1000&q=80">
      <p v-html="article.text"></p>
      <a href="#" class="card-link">Card link</a>
      <a href="#" class="card-link">Another link</a>
    </div>
  </div>

<!--  <div class="card" style="width: 18rem;">-->
<!--    <div class="card-body">-->
<!--    <h3 class="card-title">Článeček o ničem</h3>-->
<!--    <span>-->
<!--      <img class="card-img-top" src="https://picsum.photos/200/300">-->
<!--    </span>-->
<!--    <p class="card-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin mattis lacinia justo. Fusce dui leo, imperdiet in, aliquam-->
<!--      sit amet, feugiat eu, orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.-->
<!--      Etiam sapien elit, consequat eget, tristique non, venenatis quis, ante. Etiam egestas wisi a erat. Curabitur vitae diam non enim vestibulum interdum.-->
<!--    </p>-->
<!--      <a href="#" class="card-link">Card link</a>-->
<!--      <a href="#" class="card-link">Another link</a>-->
<!--    </div>-->
<!--  </div>-->

<!--  <div class="card" style="width: 18rem;">-->
<!--    <div class="card-body">-->
<!--    <h3 class="card-title">Nadpis pro něco</h3>-->
<!--    <span>-->
<!--      <img class="card-img-top" src="https://picsum.photos/200/300?grayscale">-->
<!--    </span>-->
<!--    <p class="card-text">Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at dui.-->
<!--      Fusce wisi. Nulla accumsan, elit sit amet varius semper, nulla mauris mollis quam, tempor suscipit diam nulla vel leo.-->
<!--    </p>-->
<!--      <a href="#" class="card-link">Card link</a>-->
<!--      <a href="#" class="card-link">Another link</a>-->
<!--    </div>-->
<!--  </div>-->

<!--  <div class="card" style="width: 18rem;">-->
<!--    <div class="card-body">-->
<!--    <h3 class="card-title">Prostě artikl</h3>-->
<!--    <span>-->
<!--      <img class="card-img-top" src="https://picsum.photos/200/300/?blur=2">-->
<!--    </span>-->
<!--    <p class="card-text">Nullam sapien sem, ornare ac, nonummy non, lobortis a enim. In sem justo, commodo ut, suscipit at, pharetra vitae, orci. Quisque tincidunt scelerisque libero.-->
<!--      Proin mattis lacinia justo. Donec iaculis gravida nulla. Duis risus. Nullam faucibus mi quis velit-->
<!--    </p>-->
<!--      <a href="#" class="card-link">Card link</a>-->
<!--      <a href="#" class="card-link">Another link</a>-->
<!--    </div>-->
<!--  </div>-->

</template>

<script>
export default {
  name: "Article",
  data() {
    return {
      article: {
        title: null,
        date: null,
        text: null,
        image: null
      }
    }
  },
  computed: {
    formattedDate() {
      return this.article.date ? this.article.date.toLocaleDateString(): '';
    }
  },
  async mounted() {
    this.article = await this.getData();
  },
  methods: {
    async getData() {
      return {
        image: 'https://picsum.photos/200/300',
        title: 'Článek o 💩',
        date: new Date(),
        text: `
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam egestas wisi a erat. Integer tempor. Pellentesque ipsum. Integer malesuada. Vestibulum fermentum tortor id mi. Aenean placerat. Pellentesque arcu. Phasellus rhoncus. In dapibus augue non sapien. Fusce dui leo, imperdiet in, aliquam sit amet, feugiat eu, orci. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Nullam lectus justo, vulputate eget mollis sed, tempor sed magna.</p>

<p>Morbi leo mi, nonummy eget tristique non, rhoncus non leo. In enim a arcu imperdiet malesuada. Morbi scelerisque luctus velit. Maecenas aliquet accumsan leo. Etiam egestas wisi a erat. Donec ipsum massa, ullamcorper in, auctor et, scelerisque sed, est. Morbi leo mi, nonummy eget tristique non, rhoncus non leo. Integer malesuada. Nullam lectus justo, vulputate eget mollis sed, tempor sed magna. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Etiam dictum tincidunt diam. Vestibulum erat nulla, ullamcorper nec, rutrum non, nonummy ac, erat. Etiam commodo dui eget wisi. Aliquam erat volutpat.</p>

<p>Curabitur sagittis hendrerit ante. Sed vel lectus. Donec odio tempus molestie, porttitor ut, iaculis quis, sem. Pellentesque sapien. Donec quis nibh at felis congue commodo. Duis risus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque ipsum. Mauris dictum facilisis augue. Etiam quis quam. Nullam lectus justo, vulputate eget mollis sed, tempor sed magna. Nulla quis diam.</p>

<p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Praesent id justo in neque elementum ultrices. Phasellus faucibus molestie nisl. Fusce dui leo, imperdiet in, aliquam sit amet, feugiat eu, orci. Maecenas aliquet accumsan leo. Duis pulvinar. Fusce nibh. Aenean placerat. Duis bibendum, lectus ut viverra rhoncus, dolor nunc faucibus libero, eget facilisis enim ipsum id lacus. Cras elementum. Duis ante orci, molestie vitae vehicula venenatis, tincidunt ac pede. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Nullam sapien sem, ornare ac, nonummy non, lobortis a enim. Etiam commodo dui eget wisi. Integer malesuada. Vestibulum fermentum tortor id mi. Quisque porta. In convallis. Donec ipsum massa, ullamcorper in, auctor et, scelerisque sed, est. Praesent vitae arcu tempor neque lacinia pretium.</p>

<p>Maecenas sollicitudin. Maecenas lorem. Praesent vitae arcu tempor neque lacinia pretium. Duis ante orci, molestie vitae vehicula venenatis, tincidunt ac pede. Morbi leo mi, nonummy eget tristique non, rhoncus non leo. Integer malesuada. Etiam egestas wisi a erat. Nulla quis diam. Mauris dictum facilisis augue. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Pellentesque ipsum. Phasellus et lorem id felis nonummy placerat. Fusce nibh. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Pellentesque arcu.</p>
                `
      }
    }
  }

}
</script>


<style scoped>

</style>