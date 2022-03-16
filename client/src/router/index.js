import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PageNotFound from '../views/PageNotFound.vue'
import AboutView from "../views/AboutView.vue"
import Contact from "../views/Contact.vue";
import NewArticle from "../views/NewArticle.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/article/:id',
      name: 'article',
      component: () => import('../components/Article.vue')
    },
    {
      path: '/:catchAll(.*)*',
      name: "PageNotFound",
      component: PageNotFound,
    },
    {
      path: '/about',
      name: "About",
      component: AboutView,
    },
    {
      path: '/contact',
      name: "Contact",
      component: Contact,
    },
    {
      path: '/newarticle',
      name: "NewArticle",
      component: NewArticle,
    }
  ]
})

export default router
