import {createRouter, createWebHashHistory, createWebHistory} from "vue-router";

const routes = [
    {
        path: "/",
        name: "Home",
        component: () => import("../components/LeftNav/LeftNav.vue"),
    },
    {
        path: "/:articleId",
        name: "Article",
        component: () => import("../pages/Articles/Articles.vue"),
    },
    {
        path:"/dashboard",
        name:"Dashboard",
        component:() => import("../Dashboard/DBcontent/Dashboard.vue"),
    }
]

const routes2 = [
    {
        path:"/dashboard",
        name:"dashboard",
        component:() => import("../Dashboard/DBcontent/Dashboard.vue"),
    }
]

export default createRouter({
    history: createWebHashHistory(),
    routes,
});