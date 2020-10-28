import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
const Home = () => import("../views/Home.vue");
const Blog = () => import("../views/Blog.vue");
const About = () => import("../views/About.vue");
const Vieo = () => import("../views/vieo.vue");
const User = ()=> import("../views/user.vue")
Vue.use(VueRouter)

const routes = [
  // {
  //   path: "",
  //   redirect:"home"
  // },
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "首页",
    },
    children: [
      {
        path: "blog",
        name: "Blog",
        component: Blog,
      },
      {
        path: "vieo",
        name: "Vieo",
        component: Vieo,
      },
    ],
  },
  {
    path: "/about",
    name: "About",
    component: About,
    meta: {
      title: "About",
    },
  },
  {
    path: "/user/:id",
    name: "User",
    meta: {
      title: "用户",
    },
    component: User,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title
  // console.log(to)
  next()
})
// router.afterEach((to, from) => {
 
// })
export default router
