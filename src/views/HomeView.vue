<script setup>
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase.js"
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router"
import topHeader from '../components/topHeader.vue';
import TopBanner from "../components/TopBanner.vue";
import Subscribe from "../components/Subscribe.vue";

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
    products.value = products.value.slice(0, 8)
}
onMounted(() => {
    loadNotes();
})

const navigateToDetails = (id) => {
    router.push(`/products/${id}`)
}

</script>

<template>
    <topHeader/>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600;700;800&display=swap" />
    <div>
        <TopBanner></TopBanner>
        <section>
            <div class="container py-5" style="margin-top: -30px;">
            <h2 class="mt-10 ml-3">
                Categories
            </h2>
            <div class="row sety">
                <div class="col-md-12 col-lg-4 mb-4 mb-lg-0 fullCate" v-for="i in categories">
                    <div class="card text-black" @click="$router.push(`/category/${i.id}`)">
                        <div class="pickgradient" style="cursor: pointer;">
                            <img :src="i.img" class="card-img-top" alt="category" height="300" />
                        </div>
                        <div class="card-body">
                            <div class="text-center mt-1" style="cursor: pointer;">
                                <h4 class="card-title">{{ i.name }}</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <v-col class="text-center">
                        <v-btn class="mt-12" color="blue lighten-2" dark large @click="router.push('/categories')">
                            Other Categories
                        </v-btn>
                    </v-col>
            </div>
        </div>
        
            <div class="container py-5">
                <h2 class="mt-10 ml-3">
                    Products
                </h2>
                <div class="row">
                    <div class="col-md-12 col-lg-3 mb-4 mb-lg-0 fullCate" v-for="i in products">
                        <div class="card text-black cards1" @click="router.push(`/product/${i.id}`)">
                            <div style="background-color: rgb(234, 234, 234);">
                                <img :src="i.images"
                                    style="object-fit: contain; width: 100%; height: 20em; cursor: pointer;"
                                    class="card-img-top" alt="drugs pharmastep" />
                            </div>
                            <div class="card-body">
                                <div class="text-left mt-1">
                                    <h2 class="body-2 font-weight-bold h5" style="cursor: pointer;"
                                        @click="router.push(`/product/${i.id}`)">{{ i.title }}</h2>
                                    <h4 class="text-primary mb-1 pb-3"></h4>
                                </div>

                                <div class="text-left">
                                    <div class="d-flex flex-column mb-4">
                                        <span class="h5 mb-0 mb-1 pb-3" style="color: #1C78D3">₦ {{
                                            i.original_price.toLocaleString() }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <v-col class="text-center">
                        <v-btn class="mt-12" color="blue lighten-2" dark large @click="router.push('/products')">
                            Explore all Products
                        </v-btn>
                    </v-col>
                    <div style="margin-bottom: 10px;">
                    </div>

                </div>
            </div>
        </section>
        <div class="subscribe">
            <Subscribe />
        </div>
    </div>
</template>

<script>
export default {

data(){
return{
    categories: [
                { 'name': 'Antibacterial', 'id': 'Antibacterial', 'img':'https://firebasestorage.googleapis.com/v0/b/shopper-56289.appspot.com/o/category%2Fantimicrobial.jpg?alt=media&token=c02e87d4-c258-4496-8827-6151dc0d7067&_gl=1*ckoqok*_ga*MTE2NDk4NDM1My4xNjY2MDAzNzQ3*_ga_CW55HF8NVT*MTY4NTUxOTgxOS4xMy4xLjE2ODU1MjAxODcuMC4wLjA'}, { 'name': 'Anti Malarials', 'id': 'Anti_Malarials', 'img':'https://firebasestorage.googleapis.com/v0/b/shopper-56289.appspot.com/o/category%2Fmalaria.jpg?alt=media&token=7155e2ab-f7a7-4bd9-96c9-e307b780e7cc&_gl=1*btcqjg*_ga*MTE2NDk4NDM1My4xNjY2MDAzNzQ3*_ga_CW55HF8NVT*MTY4NTUxOTgxOS4xMy4xLjE2ODU1MjAzNDYuMC4wLjA' }, { 'name': 'Contraceptives', 'id': 'Contraceptives', 'img':'https://firebasestorage.googleapis.com/v0/b/shopper-56289.appspot.com/o/category%2Fcontraceptives.jpg?alt=media&token=d58eaf7d-1170-4a62-955c-8664a61ec3cb&_gl=1*1qcf64c*_ga*MTE2NDk4NDM1My4xNjY2MDAzNzQ3*_ga_CW55HF8NVT*MTY4NTUxOTgxOS4xMy4xLjE2ODU1MjAyNDQuMC4wLjA' }, { 'name': 'Cream and ointments', 'id': 'Cream_and_ointments', 'img':'https://firebasestorage.googleapis.com/v0/b/shopper-56289.appspot.com/o/category%2Fcreams.jpg?alt=media&token=c286c19f-d848-4894-bac9-7abbae5c14d5&_gl=1*1cigbsq*_ga*MTE2NDk4NDM1My4xNjY2MDAzNzQ3*_ga_CW55HF8NVT*MTY4NTUxOTgxOS4xMy4xLjE2ODU1MjAyNzIuMC4wLjA.' },
                { 'name': 'Antidiabetics', 'id': 'Antidiabetics', 'img': 'https://firebasestorage.googleapis.com/v0/b/shopper-56289.appspot.com/o/category%2Fantidiabetic.jpg?alt=media&token=d1e1fde7-20ca-4d56-9952-a87d0d04de74&_gl=1*891m6d*_ga*MTE2NDk4NDM1My4xNjY2MDAzNzQ3*_ga_CW55HF8NVT*MTY4NTUxOTgxOS4xMy4xLjE2ODU1MjAxMjQuMC4wLjA'}, { 'name': 'Antihypertensives', 'id': 'Antihypertensives', 'img': 'https://firebasestorage.googleapis.com/v0/b/shopper-56289.appspot.com/o/category%2Fantihypertensive.jpg?alt=media&token=4427f746-eb96-464a-8b62-7b2193e32af3&_gl=1*ror027*_ga*MTE2NDk4NDM1My4xNjY2MDAzNzQ3*_ga_CW55HF8NVT*MTY4NTUxOTgxOS4xMy4xLjE2ODU1MjAxNjUuMC4wLjA' }, { 'name': 'Skincare', 'id': 'Skincare', 'img': 'https://firebasestorage.googleapis.com/v0/b/shopper-56289.appspot.com/o/category%2Fderm.jpg?alt=media&token=8abb0d0e-a318-491d-b5dd-8c27878b250f&_gl=1*1boxeq*_ga*MTE2NDk4NDM1My4xNjY2MDAzNzQ3*_ga_CW55HF8NVT*MTY4NTUxOTgxOS4xMy4xLjE2ODU1MjAyODkuMC4wLjA' }, { 'name': 'Pain management', 'id': 'Pain_management', 'img':'https://firebasestorage.googleapis.com/v0/b/shopper-56289.appspot.com/o/category%2Fheadaches.jpg?alt=media&token=4b7bffc5-e4de-4981-b444-3289fd2f820e&_gl=1*5e30yy*_ga*MTE2NDk4NDM1My4xNjY2MDAzNzQ3*_ga_CW55HF8NVT*MTY4NTUxOTgxOS4xMy4xLjE2ODU1MjAzMzAuMC4wLjA' }, 
                { 'name': 'Pessaries', 'id': 'Pessaries', 'img':'https://firebasestorage.googleapis.com/v0/b/shopper-56289.appspot.com/o/category%2Fpessaries.png?alt=media&token=31e9e57d-b939-46d5-a4cf-321d5ab64465&_gl=1*a023qg*_ga*MTE2NDk4NDM1My4xNjY2MDAzNzQ3*_ga_CW55HF8NVT*MTY4NTUxOTgxOS4xMy4xLjE2ODU1MjAzNjguMC4wLjA'}, { 'name': 'Antihistamines', 'id': 'Antihistamines' , 'img':'https://firebasestorage.googleapis.com/v0/b/shopper-56289.appspot.com/o/category%2FAntihistamines.jpg?alt=media&token=ae3078cc-b9f6-4f0d-a87a-736f4c8273a9&_gl=1*yddoh3*_ga*MTE2NDk4NDM1My4xNjY2MDAzNzQ3*_ga_CW55HF8NVT*MTY4NTUxOTgxOS4xMy4xLjE2ODU1MjAwMzAuMC4wLjA'}, { 'name': 'Antiemetics', 'id': 'Antiemetics', 'img': 'https://firebasestorage.googleapis.com/v0/b/shopper-56289.appspot.com/o/category%2Fantiemetics.jpg?alt=media&token=ff60cb0d-a609-45c9-aaec-bb7ed8d5bd41&_gl=1*1krr7i7*_ga*MTE2NDk4NDM1My4xNjY2MDAzNzQ3*_ga_CW55HF8NVT*MTY4NTUxOTgxOS4xMy4xLjE2ODU1MjAxMzkuMC4wLjA' },
                { 'name': 'Antipsychotics', 'id': 'Antipsychotics', 'img':'https://firebasestorage.googleapis.com/v0/b/shopper-56289.appspot.com/o/category%2FAntipsychotics.jpg?alt=media&token=73fe73d6-42ba-411e-a540-fce714c5fca4&_gl=1*1828927*_ga*MTE2NDk4NDM1My4xNjY2MDAzNzQ3*_ga_CW55HF8NVT*MTY4NTUxOTgxOS4xMy4xLjE2ODU1MjAwNjkuMC4wLjA' },  { 'name': 'Vitamins', 'id': 'Vitamins', 'img':'https://firebasestorage.googleapis.com/v0/b/shopper-56289.appspot.com/o/category%2Fvitamins.jpg?alt=media&token=d332ebb7-41dd-4ae1-90b1-e001509c79c8&_gl=1*1ay1gi8*_ga*MTE2NDk4NDM1My4xNjY2MDAzNzQ3*_ga_CW55HF8NVT*MTY4NTUxOTgxOS4xMy4xLjE2ODU1MTk5MzUuMC4wLjA' }, { 'name': 'Gastrointestinal', 'id': 'Gastrointestinal', 'img':'https://firebasestorage.googleapis.com/v0/b/shopper-56289.appspot.com/o/category%2FGastrointestinal.jpg?alt=media&token=290ec21c-a04b-4bfa-b505-aa5a28a90c58&_gl=1*1cdavm8*_ga*MTE2NDk4NDM1My4xNjY2MDAzNzQ3*_ga_CW55HF8NVT*MTY4NTUxOTgxOS4xMy4xLjE2ODU1MjAwODQuMC4wLjA' }, { 'name': 'Sexual health', 'id': 'Sexual_health', 'img': 'https://firebasestorage.googleapis.com/v0/b/shopper-56289.appspot.com/o/category%2Fsexual.jpg?alt=media&token=842f4b4c-85d6-40b6-b856-d073c7b4a38c&_gl=1*trg5p2*_ga*MTE2NDk4NDM1My4xNjY2MDAzNzQ3*_ga_CW55HF8NVT*MTY4NTUxOTgxOS4xMy4xLjE2ODU1MjAzODguMC4wLjA.' }
            ]
}
},
created(){
    this.categories = this.categories.slice(0,6)
}
};
</script>


<style scoped>
.fullCate {
    margin-bottom: 20px;
    margin-top: 20px;
}

.cards1 {
    transition: all 0.3s;
}

.cards1:hover {
    transform: scale(1.03);
}

.subscribe {
    background-color: rgb(239, 239, 239);
    padding: 20px;
    border: 0.2px solid rgb(233, 233, 233);
}

.pickgradient {
    position: relative;
    display: inline-block;
}

.pickgradient:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: inline-block;
    background: -moz-linear-gradient(top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.65) 100%);
    /* FF3.6+ */
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, rgba(0, 0, 0, 0.65)), color-stop(100%, rgba(0, 0, 0, 0)));
    /* Chrome,Safari4+ */
    background: -webkit-linear-gradient(top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.65) 100%);
    /* Chrome10+,Safari5.1+ */
    background: -o-linear-gradient(top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.65) 100%);
    /* Opera 11.10+ */
    background: -ms-linear-gradient(top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.65) 100%);
    /* IE10+ */
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.65) 100%);
    /* W3C */
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#a6000000', endColorstr='#00000000', GradientType=0);
    /* IE6-9 */
}

@media (min-width: 1024px) {
.v-col{
    margin-top: -30px;
    margin-bottom: -30px;
}
}
</style>