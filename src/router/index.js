import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default new VueRouter({
    mode:   "hash",
    routes: [
        {
            path:      "/main/find",
            component: () =>
                import(/* webpackChunkName: "main-find" */ "@/pages/main/find")
        },
        {
            path:      "/main/ranking",
            component: () =>
                import(/* webpackChunkName: "main-ranking" */ "@/pages/main/ranking")
        },
        {
            path:      "/main/video",
            component: () =>
                import(/* webpackChunkName: "main-video" */ "@/pages/main/video")
        },
        {
            path:      "/main/comment",
            component: () =>
                import(/* webpackChunkName: "main-comment" */ "@/pages/main/comment")
        },
        {
            path:     "*",
            redirect: "/main/find"
        }
    ]
});
