import { createRouter, createWebHistory} from "vue-router";
import ProductsView from "../views/ProductsView.vue"
import ProductDetailView from "../views/ProductDetailView.vue"
import HomeView from "../views/HomeView.vue"
import AuthLogin from "../views/Auth.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView
        },

        {
            path: "/products",
            name: "ProductsView",
            component: ProductsView
        },

        {
            path: "/product/:id",
            name: "product",
            component: ProductDetailView
        },

        {
            path: "/login",
            name: "login",
            component: AuthLogin
        },
    
    ]
})

export default router