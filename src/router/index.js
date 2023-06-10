import { createRouter, createWebHistory } from "vue-router";
import Products from "../views/ProductsView.vue"
import ProductDetailView from "../views/productDetails.vue"
import HomeView from "../views/HomeView.vue"
import Auth from "../views/Auth.vue"
import AuthLogin from "../components/AuthLogin.vue"
import register from "../components/AuthRegister.vue"
import Profile from "../views/profilePage.vue"
import Categories from "../views/Category.vue"
import cart from "../views/cart.vue"
import Category from "../views/productCategoryPage.vue"
import contact from "../views/contact.vue"
import pinia from "../stores/setup.js"
import useUserStore from '../stores/index.js'
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
const auth = getAuth();

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
            path: "/auth",
            name: 'auth',
            component: Auth,
            meta: { notRequiresAuth: true },
            children:[
              {
                path: 'login', 
                name: 'login',
                component: AuthLogin
              },
      
              {
                path: 'register',
                name: 'register',
                component: register
              },
            ]
          },



        
        {
            path: "/profile/account",
            name: "profile",
            component: Profile,
            meta: { requiresAuth: true },
        },
    ]
})

 router.beforeEach((to, from, next) => {

     const isLoggedIn = auth.currentUser.uid
     const currentUser = isLoggedIn;
     const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
     const notRequiresAuth = to.matched.some(record => record.meta.notRequiresAuth);
    if (requiresAuth && !currentUser ) {
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