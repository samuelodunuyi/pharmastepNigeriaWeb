import { createRouter, createWebHistory } from "vue-router";
import Products from "../views/ProductsView.vue"
import ProductDetailView from "../views/productDetails.vue"
import HomeView from "../views/HomeView.vue"
import AuthLogin from "../views/Auth.vue"
import Profile from "../views/profilePage.vue"
import ProfilePage from "../views/profileAccountPage.vue"
import Categories from "../views/Category.vue"
import cart from "../views/cart.vue"
import Category from "../views/productCategoryPage.vue"
import contact from "../views/contact.vue"
import PurchaseHistory from "../views/purchaseHistory.vue"
import pinia from "../stores/setup.js"
import useUserStore from '../stores/index.js'

const store = useUserStore(pinia)
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView
        },

        {
            path: "/cart",
            name: "cart",
            component: cart
        },

        {
            path: "/categories",
            name: "categories",
            component: Categories
        },

        {
            path: "/category/:id",
            name: "category",
            component: Category
        },

        {
            path: "/product/:id",
            name: "productDetails",
            component: ProductDetailView
        },

        {
            path: "/products",
            name: "Products",
            component: Products
        },

        {
            path: "/contact",
            name: "contact",
            component: contact
        },

        {
            path: "/login",
            name: "login",
            component: AuthLogin,
            meta: { notRequiresAuth: true },

        },
        {
            path: "/profile",
            name: "profile",
            component: Profile,
            meta: { requiresAuth: true },
            children: [
                { path: 'account', name: 'account', component: ProfilePage },
                { path: 'purchase-history', name: 'purchase-history', component: PurchaseHistory },
            ]
        },
    ]
})

 router.beforeEach((to, from, next) => {

     const currentUser = store.userUid;
     const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
     const notRequiresAuth = to.matched.some(record => record.meta.notRequiresAuth);
     console.log(currentUser)
    if (requiresAuth && !currentUser) {
         next('/login');
     }
     else if (requiresAuth && currentUser) {
         next();
     }
     else if (notRequiresAuth && currentUser) {
         next('/')
     } else {
         next();
     }
 });


export default router