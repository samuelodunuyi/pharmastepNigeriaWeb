<script setup>
import { useRoute } from "vue-router"
import { ref, onMounted } from 'vue';
import { db } from "../firebase";
import { getDocs, collection, doc } from "firebase/firestore";
import topHeader from '../components/topHeader.vue';

const emit = defineEmits(["addToCart"])
const emitAddtoCart = (isCorrects) => {
    emit("addToCart", isCorrects)
}
const route = useRoute()
const categoryId = (route.params.id);
const products = ref([])
const productbyCategory = ref([])
var checkProducts = ""


onMounted(() => {
    loadProduct()
})

const loadProduct = async () => {
    const querySnapshot = await getDocs(collection(db, "products"));
    products.value = querySnapshot.docs.map(doc => {
        return {
            id: doc.id,
            ...doc.data()
        }
    })
    productbyCategory.value = products.value.filter(o => o.product_type === categoryId)
    if (productbyCategory.value.length > 0) {
        checkProducts = 1
    }
    else checkProducts = 0
}
</script>

<template>
    <topHeader :slides="1" />
    <section>
        <div class="container py-5" style="margin-bottom: -50px; font-size: larger; cursor: pointer;"
            @click="$router.go(-1)"><i class="fa fa-arrow-left"></i><span>&nbsp;</span>Back</div>
        <div class="container py-5">
            <h2 class="mt-10 ml-3">
                {{ categoryId.replace('_', ' ') }}
            </h2>
            <div class="row">
                <div class="col-md-12 col-lg-4 mb-4 mb-lg-0 fullCate" v-for="i in productbyCategory">
                    <div class="card text-black cards1">
                        <div style="background-color: aliceblue;">
                            <img :src="i.images" style="object-fit: contain; width: 100%; height: 20em; cursor: pointer;"
                                class="card-img-top" alt="iPhone" @click="$router.push(`/product/${i.id}`)" />
                        </div>
                        <div class="card-body">
                            <div class="text-center mt-1">
                                <h2 class="card-title pe-auto" style="cursor: pointer;"
                                    @click="$router.push(`/product/${i.id}`)">{{ i.title }}</h2>
                                <h4 class="text-primary mb-1 pb-3"></h4>
                            </div>

                            <div class="text-center">
                                <div class="d-flex flex-column mb-4">
                                    <span class="h3 mb-0 mb-1 pb-3" style="color: #1C78D3">₦ {{
                                        i.original_price.toLocaleString() }}</span>
                                </div>

                                <div class="d-flex flex-column mb-4">
                                    <span class="h6 mb-0">
                                        <b>Tags</b>
                                    </span>
                                    <span aria-hidden="true">—</span>
                                    <ul class="list-unstyled mb-0" v-for="tags in i.search_tags">
                                        <li>{{ tags }}</li>
                                    </ul>
                                    <span aria-hidden="true">—</span>
                                </div>
                            </div>
                            <div class="d-flex flex-row">
                                <button type="button" class="btn btn-primary flex-fill me-1" style="color: white;"
                                    @click="emitAddtoCart(true)">Add to
                                    Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="text-center" v-if="checkProducts === 0" justify-center>
                <div>&nbsp;</div>
                <div>&nbsp;</div>
                <div>&nbsp;</div>
                <div class="headline text-center">
                    <p>This is unavailable at the moment...</p>
                    <p>Contact us on whatsapp</p>
                    <div>&nbsp;</div>
                    <div class="form-group">
                        <a href="https://wa.me/2349056871664" class="btn btn-primary m-1" role="button" rel="nofollow"
                            target="_blank">
                            <button class="btn btn-primary" style="color: white;" type="button">Whatsapp </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
  
<style scoped>
.fullCate {
    margin-bottom: 20px;
    margin-top: 30px;
}

.cards1 {
    transition: all 0.3s;
}

.cards1:hover {
    transform: scale(1.03);
}

.headline {
    margin: 20px 15px;
}

@media (min-width: 1024px) {
    .fullCate {
        margin-bottom: 20px;
        margin-top: 20px;
    }
}
</style>

  