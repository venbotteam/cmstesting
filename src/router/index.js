import {createRouter, createWebHashHistory, createWebHistory} from "vue-router";

const routes = [
    {
        path: "/",
        name: "Home",
        component: () => import("../components/LeftNav/LeftNav.vue"),
    },
    {
        path: "/search/:keyword",
        name: "Search",
        component: () => import("../pages/Search/Search.vue"),
    },

    {
        path: "/categories/:category",
        name: "Category",
        component: () => import("../pages/Category/Category.vue"),
    },

    {
        path: "/:articleId",
        name: "Article",
        component: () => import("../pages/Articles/Articles.vue"),
    },
]


export default createRouter({
    history: createWebHashHistory(),
    routes,
});