<script setup>
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase.js"
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router"
import TopBanner from "../components/TopBanner.vue";
import TopCategoryList from "../components/TopCategoryList.vue";
import Subscribe from "../components/Subscribe.vue";
import FooterE from "../components/Footer.vue";

const router = useRouter();
const products = ref([])

const loadNotes = async () => {
    const querySnapshot = await getDocs(collection(db, "products"));
    products.value = querySnapshot.docs.map(doc => {
        return {
            id: doc.id,
            ...doc.data()
        }
    })
}
onMounted(() => {
    loadNotes();
})

const navigateToDetails = (id) => {
    router.push(`/product/${id}`)
}

</script>

<template>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600;700;800&display=swap" />
    <div>
        <TopBanner></TopBanner>
        <v-container>
            <div class="title ml-4">
                Best Selling
            </div>
            <v-layout wrap justify-center>
                <v-flex xs11 mt-5 class="flexer">
                    <template v-for="product in products" :key="product.id">
                        <v-hover v-slot="{ isHovering, props }" open-delay="200">
                            <v-card data-view @click="navigateToDetails(product.id)" :elevation="isHovering ? 12 : 2"
                                :class="{ 'on-hover': isHovering }" outlined v-bind="props">
                                <v-img :src="product.images[0]" :lazy-src="product.images[0]"
                                    class="grey lighten-2 white--text" width="400px" height="200px" />
                                <v-card-title class="transparent">
                                    <v-flex xs12 pt-0>
                                        <div class="body-2 font-weight-bold">
                                            {{ product.title }}
                                        </div>
                                        <div class="body-2">
                                            ₦ {{ product.original_price.toLocaleString("en-US") }}
                                        </div>
                                    </v-flex>
                                </v-card-title>
                            </v-card>
                        </v-hover>
                    </template>
                </v-flex>
            </v-layout>
        </v-container>
        <v-flex xs11 mt-5>
                    <Subscribe @subscribe="subscribe" />
                </v-flex>
        <FooterE/>
    </div>
</template>

<script>
export default {

};
</script>


<style scoped>
.flexer {
    max-width: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 2fr 2fr 2fr 2fr;
    grid-gap: 50px;
}

.v-card {
    border: 0.5px solid #d5d5d5;
    box-shadow: 0px 0px 2px 0.3px rgb(146, 146, 146);
    word-break: break-word;
    overflow-wrap: break-word;
}

.v-img {
    background-color: rgb(222, 224, 224);
}

.v-card-title {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    font-size: 1.3rem;
    font-weight: 400;
}

.title {
    font-weight: bold;
    font-size: 25px;
    font-family: 'Roboto';
    margin-bottom: 20px;
}
</style>