import Vue from "vue"
import VueRouter from "vue-router"
import Main_CC from '../pages/Main_CC'
import Main_UML from '../pages/Main_UML'
import Welcome from '../pages/Welcome'
import UML_Favorites from '../uml_components/UML_Favorites'

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
    component: Main_UML,
    // children: [
    //   {
    //     path: "/uml/ultimate-favorite-list",
    //     component: UML_Favorites
    //   }
    // ]
  },
  {
    path: "/crate-companion",
    name: "Main_CC",
    component: Main_CC
  },
  {
    path: "/ultimate-favorite-list",
    name: UML_Favorites,
    component: UML_Favorites
  }
];

const router = new VueRouter({
  routes,
});

export default router;
