import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default new VueRouter({
    mode:   "hash",
    routes: [
        {
            path:      "/Home",
            component: () =>
                import(/* webpackChunkName: "Home-Page" */ "@/pages/Home")
        },
        {
            path:      "/about",
            component: () =>
                import(/* webpackChunkName: "About-Page" */ "@/pages/About")
        },
        {
            path:     "*",
            redirect: "/Home"
        }
    ]
});
