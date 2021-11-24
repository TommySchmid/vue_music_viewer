import Vue from "vue"
import VueRouter from "vue-router"
import Main_CC from '../pages/Main_CC'
import Main_UML from '../pages/Main_UML'
import Welcome from '../pages/Welcome'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Welcome",
    component: Welcome
  },
  {
    path: "/uml",
    name: "UML",
    component: Main_UML
  },
  {
    path: "/crate-companion",
    name: "Main_CC",
    component: Main_CC
  }
];

const router = new VueRouter({
  routes,
});

export default router;
