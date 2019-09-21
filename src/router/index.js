import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default new VueRouter({
    mode:   "hash",
    routes: [
        {
            path:      "/main/search",
            component: () =>
                import(/* webpackChunkName: "main-search" */ "@/pages/main/search")
        },
        {
            path:      "/main/send",
            component: () =>
                import(/* webpackChunkName: "main-send" */ "@/pages/main/send")
        },
        {
            path:      "/main/widgets",
            component: () =>
                import(/* webpackChunkName: "main-widgets" */ "@/pages/main/widgets")
        },
        {
            path:      "/main/mine",
            component: () =>
                import(/* webpackChunkName: "main-mine" */ "@/pages/main/mine")
        },
        {
            path:     "*",
            redirect: "/main/search"
        }
    ]
});
