<script setup>
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase.js"
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router"

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
    console.log(products.value)
}

onMounted(() => {
    loadNotes();
})

const navigateToDetails = (id) => {
    router.push(`/product/${id}`)
}

</script>

<template>
    <div class="header">
        <p>All Products</p>
    </div>
    <v-layout wrap justify-center>
        <v-flex xs11 mt-5 class="flexer">
            <template v-for="product in products" :key="product.id">
                <v-hover v-slot="{ isHovering, props }" open-delay="200">
                    <v-card data-view :elevation="isHovering ? 12 : 2"
                        :class="{ 'on-hover': isHovering }" outlined v-bind="props">
                        <v-img :src="product.images[0]" :lazy-src="product.images[0]" class="grey lighten-2 white--text"
                            width="400px" height="200px" />
                        <v-card-title class="transparent">
                            <v-layout wrap>
                                <v-flex xs12 pt-0>
                                    <div class="body-2 font-weight-bold productTitle" @click="navigateToDetails(product.id)">
                                        {{ product.title }}
                                    </div>
                                    <div class="body-2 productPrice">
                                        ₦ {{ product.original_price.toLocaleString("en-US") }}
                                    </div>
                                </v-flex>
                            </v-layout>
                        </v-card-title>
                        <v-card-actions>
                            <v-btn block depressed class="text-none" color="primary" @click="addToCart(item)">
                                <v-icon left small>
                                    mdi-cart
                                </v-icon>Add to Cart
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-hover>
            </template>
        </v-flex>
    </v-layout>
</template>

<style scoped>
.productPrice{
    font-size: .9rem!important;
    font-weight: 400;
    letter-spacing: .0178571429em!important;
    line-height: 1.25rem;
}

.productTitle{
    color: #1976d2;
    cursor: pointer;
    font-size: .875rem!important;
    font-weight: 400;
    letter-spacing: .0178571429em!important;
    line-height: 1.25rem;
    text-decoration: underline;
    font-weight: 700!important;
}
.flexer {
    max-width: 80%;
    margin: 75px auto;
    display: grid;
    grid-template-columns: 2fr 2fr 2fr 2fr;
    grid-gap: 50px;
}

.header {
    margin: 7rem 0rem -4rem 8.5rem;
    font-weight: bold;
    font-size: 25px;
    font-family: 'Roboto';
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
.body-2{
    word-wrap: break-word;
    flex-wrap: wrap;
    width: 100%;
}
.v-btn {
    background-color: #1C78D3;
    color: white !important;
    font-family: 'Roboto';
}

.v-card-title {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    font-size: 1.3rem;
    font-weight: 400;
}
</style>