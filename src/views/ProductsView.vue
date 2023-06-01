<script setup>
import { collection, getDocs, setDoc, getDoc, doc, increment, updateDoc } from "firebase/firestore";
import { db } from "../firebase.js"
import { onMounted, ref, watch, computed } from "vue";
import { useRouter } from "vue-router"
import useUserStore from "../stores";
import pinia from "../stores/setup";
const store = useUserStore(pinia);
const search = ref("")
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

const AddtoCart = async (id) => {
    const docSnap = await getDoc(doc(db, 'users', store.userUid, 'cart', id))
    if (docSnap.exists()) {
        await updateDoc(doc(db, 'users', store.userUid, 'cart', id), {
            item_count: increment(1),
        });
    } else {
        await setDoc(doc(db, 'users', store.userUid, 'cart', id), {
            item_count: 1,
        }).then(store.increment());
    }
}

const productFiltered = computed(() => {
    var productsMain = products.value
    if (search.value != '' && search.value) {
        productsMain = productsMain.filter((item) => {
            return item.title
                .toLowerCase()
                .includes(search.value.toLowerCase()) ||
                item.product_type.replace('_', ' ')
                    .toLowerCase()
                    .includes(search.value.toLowerCase())
        })
    }
    return productsMain;

})
</script>

<template>
    <section style="background-color: #f5f5f5;">
        <div class="container py-5">
            <div class="row">
                <div class="col-md-8">
                    <h2 class="mt-10 ml-3 ">
                        All Products
                    </h2>
                </div>
                <div class="col-sm-4 tophead">
                    <input v-model.trim="search" type="text" placeholder="Search....">
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 col-lg-4 mb-4 mb-lg-0 fullCate" v-for="i in productFiltered">
                    <div class="card text-black cards1">
                        <div style="background-color: aliceblue;">
                            <img :src="i.images" style="object-fit: contain; width: 100%; height: 20em; cursor: pointer;"
                                class="card-img-top" alt="iPhone" @click="router.push(`/product/${i.id}`)" />
                        </div>
                        <div class="card-body">
                            <div class="text-center mt-1">
                                <h2 class="card-title pe-auto" style="cursor: pointer;"
                                    @click="router.push(`/product/${i.id}`)">{{ i.title }}</h2>
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
                                </div>
                                <span aria-hidden="true">—</span>

                            </div>

                            <div class="d-flex flex-row">
                                <button type="button" class="btn btn-primary flex-fill me-1" style="color: white;"
                                    @click="AddtoCart(i.id)">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

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


.tophead input {
    margin-top: 40px;
    height: 40px;
    background-color: white;
    width: 100%;
    border: 0.5px solid black;
    padding: 10px;
}
</style>