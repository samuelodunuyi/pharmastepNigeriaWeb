<template>
    <v-navigation-drawer stateless permanent app clipped>
        <v-list>
            <v-list-item v-for="item in items" :key="item.title" :to="item.route">
                <v-icon>{{ item.icon }}</v-icon>
                {{ item.title }}
            </v-list-item>
        </v-list>

        <template v-slot:append>
            <div class="pa-2 d-none d-sm-flex">
                <v-btn :disabled="authStatus" color="black" class="white--text" block @click.prevent="signOut()">
                    Logout
                </v-btn>
            </div>
        </template>
    </v-navigation-drawer>
</template>
  
<script>
import router from "../router";
import useUserStore from "../stores/index";
import pinia from "../stores/setup";
import { getAuth, signOut } from "firebase/auth";
const auth = getAuth();
const store = useUserStore(pinia);

export default {
    props: {
        logout: {
            type: Function,
            default: function () {
                return {};
            }
        },
        emptyCart: {
            type: Function,
            default: function () {
                return {};
            }
        },
    },

    data() {
        return {
            items: [
                { title: "Account", icon: "mdi-account", route: "/profile" },
                {
                    title: "Purchase History",
                    icon: "mdi-history",
                    route: "/profile/purchase-history"
                },
            ],
            authStatus: true
        };
    },
    created() {
        if (store.userUid.length > 0) {
            this.authStatus = false
        }
    },
    computed: {
        mini() {
            return this.$vue;
        }
    },
    methods: {
        signOut() {
            auth.signOut();
            store.userUid = ''
            store.user = ''
            this.emptyCart();
            window.location.reload();
        }
    }
};
</script>
  
<style></style>