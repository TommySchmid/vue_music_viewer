import Vue from "vue"
import VueRouter from "vue-router"
import Main_CC from '../pages/Main_CC'
import UML from '../pages/UML'

Vue.use(VueRouter);

const routes = [
  {
    path: "/uml",
    name: "UML",
    component: UML
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
