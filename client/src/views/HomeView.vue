<script>

import Article from '@/components/Article.vue';
import Preview from "@/components/Preview.vue";

export default {
  components: {Preview, Article},
  data() {
    return {
      articles: [
        {
          image: 'https://picsum.photos/id/12/200',
          title: "Článek",
          date: new Date("2019-02-12"),
          text: `Praesent dapibus. Phasellus enim erat, vestibulum vel, aliquam a, posuere eu, velit.
          In convallis. Aenean vel massa quis mauris vehicula lacinia. Etiam commodo dui eget wisi.
          Integer imperdiet lectus quis justo. Aenean id metus id velit ullamcorper pulvinar.
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
          non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
`
        },
        {
          image: 'https://picsum.photos/id/1/200',
          title: "Něco",
          date: new Date("2020-08-01"),
          text: `Fusce nibh. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
          adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam
          quaerat voluptatem. Maecenas libero. Duis ante orci, molestie vitae vehicula venenatis, tincidunt ac pede.
          Duis sapien nunc, commodo et, interdum suscipit, sollicitudin et, dolor.
`
        },
        {
          image: 'https://picsum.photos/id/15/200',
          title: "Název článku",
          date: new Date("2001-03-02"),
          text: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam egestas wisi a erat.
Integer tempor. Pellentesque ipsum. Integer malesuada. Vestibulum fermentum tortor id mi. Aenean placerat.
Pellentesque arcu. Phasellus rhoncus.
`
        },
        {
          image: 'https://picsum.photos/id/10/200',
          title: "Artikl",
          date: new Date("1999-05-04"),
          text: `Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Mauris elementum mauris vitae tortor. Class aptent taciti sociosqu ad litora
          torquent per conubia nostra, per inceptos hymenaeos. Pellentesque habitant morbi tristique senectus
          et netus et malesuada fames ac turpis egestas. Maecenas lorem. Etiam egestas wisi a erat. Duis
          sapien nunc, commodo et, interdum suscipit, sollicitudin et, dolor. Praesent dapibus.
`
        },
        {
          image: 'https://picsum.photos/id/8/200',
          title: "Xgsjiasnv",
          date: new Date("2021-10-06"),
          text: `Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id
          quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Lorem
          ipsum dolor sit amet, consectetuer adipiscing elit. Donec iaculis gravida nulla. Nulla pulvinar
          eleifend sem. Integer malesuada. Nunc auctor. Praesent dapibus. In laoreet, magna id viverra tincidunt,
          sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Curabitur vitae diam non enim vestibulum
          interdum.
`
        }
      ]
    }
  }
}


</script>

<template>
  <div class="row">
    <div class="col-lg-6 offset-lg-3 col-md-8 offset-md-2  pb-3 pt-3" v-for="article in articles">
      <Preview :title="article.title" :date="article.date" :text="article.text" :image="article.image"></Preview>
    </div>
  </div>
</template>

