import Vue from 'vue'
import VueRouter from 'vue-router'
import Program from "./components/Program";
import Home from "./components/Home";
Vue.use(VueRouter)

export default new VueRouter ({
    routes: [
        {
            path: "/",
            component: Home,
            name: "home"
        },
        {
            path: "/program/:count/:size",
            component: Program,
            name: "Program"
        }
    ]
})
