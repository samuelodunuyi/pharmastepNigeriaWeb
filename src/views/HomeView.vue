<script setup>
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase.js"
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router"
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
                            <img src="../assets/category.jpg" class="card-img-top" alt="iPhone" />
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
                { 'name': 'Antibacterial', 'id': 'Antibacterial' }, { 'name': 'Anti Malarials', 'id': 'Anti_Malarials' }, { 'name': 'Contraceptives', 'id': 'Contraceptives' }, { 'name': 'Metabolic bone disease agents', 'id': 'Metabolic_bone_disease_agents' }, { 'name': 'Anti migraine agents', 'id': 'Anti_migraine_agents' }, { 'name': 'Cream and ointments', 'id': 'Cream_and_ointments' },
                { 'name': 'Antidiabetics', 'id': 'Antidiabetics' }, { 'name': 'Antihypertensives', 'id': 'Antihypertensives' }, { 'name': 'Ophthalmic', 'id': 'Ophthalmic' }, { 'name': 'Skincare', 'id': 'Skincare' }, { 'name': 'Pain management', 'id': 'Pain_management' }, { 'name': 'Pessaries', 'id': 'Pessaries' }, { 'name': 'Antihistamines', 'id': 'Antihistamines' }, { 'name': 'Antiemetics', 'id': 'Antiemetics' },
                { 'name': 'Antipsychotics', 'id': 'Antipsychotics' }, { 'name': 'Antiemetic', 'id': 'Antiemetic' }, { 'name': 'Immunological Agents', 'id': 'Immunological_agents' }, { 'name': 'Vitamins' }, { 'name': 'Gastrointestinal', 'id': 'Gastrointestinal' }, { 'name': 'Sexual health', 'id': 'Sexual_health' }
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