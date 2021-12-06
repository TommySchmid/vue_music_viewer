import Vue from "vue"
import VueRouter from "vue-router"
import Main_CC from '../pages/Main_CC'
import Main_UML from '../pages/Main_UML'
import Welcome from '../pages/Welcome'
import Favorites from '../uml_components/Favorites'
import Kayla from '../uml_components/lists/Kayla'
import John from '../uml_components/lists/John'
import Melissa from '../uml_components/lists/Melissa'
import Mike from '../uml_components/lists/Mike'
import Rachael from '../uml_components/lists/Rachael'
import Tommy from '../uml_components/lists/Tommy'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Welcome",
    component: Welcome
  },
  {
    path: "/uml/",
    name: "UML",
    component: Main_UML,
  },
  {
    path: "/crate-companion",
    name: "Main_CC",
    component: Main_CC
  },
  {
    path: "/ultimate-favorite-list",
    name: Favorites,
    component: Favorites,
    children: [
      {
        path: "kayla",
        component: Kayla
      },
      {
        path: "mike",
        component: Mike
      },
      {
        path: "melissa",
        component: Melissa
      },
      {
        path: "rachael",
        component: Rachael
      },
      {
        path: "john",
        component: John
      },
      {
        path: "tommy",
        component: Tommy
      }
    ]
  }
];

const router = new VueRouter({
  routes,
});

export default router;
