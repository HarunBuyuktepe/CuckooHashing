import Vue from 'vue'
import VueRouter from 'vue-router'
import Program from "./components/Program";
import Home from "./components/Home";
import MainLayout from "./components/MainLayout";
import BlankLayout from "./components/BlankLayout";
Vue.use(VueRouter)

export default new VueRouter ({
    routes: [
        {
            path: "/",
            component: BlankLayout,
            children : [
              {
                name: "home",
                path: "/",
                component: Home
              },

            ]
        },
      {
        path: "/",
        component: MainLayout,
        children : [
          {
            name: "Program",
            path: "/Program/:count/:size",
            component: Program
          }
        ]
      },
    ],
  mode: "history"
})
