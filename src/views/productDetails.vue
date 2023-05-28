<script setup>
import { useRoute } from "vue-router"
import { ref, onMounted } from 'vue';
import { db } from "../firebase";
import { collection, getDocs, setDoc, getDoc, doc, increment, updateDoc } from "firebase/firestore";
import useUserStore from "../stores";
import pinia from "../stores/setup";
const store = useUserStore(pinia);

const route = useRoute()
const productId = (route.params.id);
const product = ref('')

onMounted(() => {
    loadProduct()
})

const loadProduct = async () => {
    const docRef = doc(collection(db, "products"), productId)
    const docSnap = await getDoc(docRef);
    product.value = { id: docSnap.id, ...docSnap.data() };
}

const AddtoCart = async (id) => {
    console.log('this ran?')
    const docSnap = await getDoc(doc(db, 'users', store.userUid, 'cart', id))
    if (docSnap.exists()) {
        await updateDoc(doc(db, 'users', store.userUid, 'cart', id), {
            item_count: increment(1),
        });
    } else {
        await setDoc(doc(db, 'users', store.userUid, 'cart', id), {
            item_count: 1,
        });
    }
}

</script>
<template>
    <div class="container mt-5 mb-5">
        <div class="row d-flex justify-content-center">
            <div class="col-md-10">
                <div class="card">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="images p-3">
                                <div class="text-center p-4"> <img id="main-image" :src="product.images" width="500" />
                                </div>
                                <div class="thumbnail text-center" v-for="(i, index) in product.images" :key="index"> <img
                                        @click="change_image(i)" :src="i" width="70">
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="product p-4">
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="d-flex align-items-center" @click="router.back()" style="cursor: pointer">
                                        <i class="fa fa-long-arrow-left"></i> <span class="ml-1">Back</span>
                                    </div>
                                </div>
                                <div class="mt-4 mb-3"> <b class="text-uppercase text-muted brand">{{
                                    product.manufacturer }}</b>
                                    <h5 class="text-uppercase h2">{{ product.title }}</h5>
                                    <div class="h3 price d-flex flex-row align-items-center"> <span class="act-price"
                                            style="color: #2979ff">₦ {{ product.original_price }}</span>
                                    </div>
                                </div>
                                <p class="about">{{ product.description }}</p>
                                <div class="sizes mt-5">
                                    <h6 class="text-uppercase">Tags</h6> <label class="badge text-bg-primary"
                                        v-for="i in product.search_tags"> <span>{{ i }} </span><span></span> </label>
                                </div>
                                <div class="sizes mt-5">
                                    <h6 class="text-uppercase">Category</h6> <label
                                        style="text-decoration: underline; cursor: pointer;"
                                        @click="router.push(`/category/${product.product_type}`)">
                                        <span>{{ product.product_type }} </span><span></span> </label>
                                </div>
                                <div class="sizes mt-5">
                                    <h6 class="text-uppercase">Product Type</h6> <label
                                        @click="router.push(`/productType/${product.product_mode}`)">
                                        <span style="text-decoration: underline; cursor: pointer;">{{ product.product_mode
                                        }} </span><span></span> </label>
                                </div>
                                <div class="cart mt-4 align-items-center"> <button
                                        class="btn btn-primary text-uppercase mr-2 px-4" @click="AddtoCart(product.id)">Add
                                        to cart</button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
body {
    background-color: #000
}

.card {
    border: none
}

.product {
    background-color: #eee
}

.brand {
    font-size: 13px
}

.act-price {
    color: red;
    font-weight: 700
}

.dis-price {
    text-decoration: line-through
}

.about {
    font-size: 14px
}

.color {
    margin-bottom: 10px
}

label.radio {
    cursor: pointer
}

label.radio input {
    position: absolute;
    top: 0;
    left: 0;
    visibility: hidden;
    pointer-events: none
}

label.radio span {
    padding: 2px 9px;
    border: 2px solid #ff0000;
    display: inline-block;
    color: #ff0000;
    border-radius: 3px;
    text-transform: uppercase
}

label.radio input:checked+span {
    border-color: #ff0000;
    background-color: #ff0000;
    color: #fff
}

.btn-danger {
    background-color: #ff0000 !important;
    border-color: #ff0000 !important
}

.btn-danger:hover {
    background-color: #da0606 !important;
    border-color: #da0606 !important
}

.btn-danger:focus {
    box-shadow: none
}

.cart i {
    margin-right: 10px
}
</style>
  
<script>
import router from "../router";

export default {
    name: "App",
    data() {
        return {
            cartOpen: false,
            carouselModalOpen: false,
            imageClickedIndex: 0,
            cart: [],
        };
    },
    methods: {
        change_image(image) {
            var container = document.getElementById("main-image");
            container.src = image;
        },
        addProductToCart(product, quantity) {
            if (quantity < 1) return;

            const item = this.cart.findIndex((x) => x.productId === product.id);

            // Means this product is already in the cart
            if (item !== -1) {
                this.cart[item].quantity += quantity;
            } else {
                const cartItem = {
                    productId: product.id,
                    name: product.name,
                    mainThumbnail: product.mainThumbnail,
                    price: this.getRealPrice(product.price, product.discount),
                    quantity: quantity,
                };

                this.cart = [...this.cart, cartItem];
            }
        },
        getRealPrice(price, discount) {
            return price * (discount / 100);
        },
    },
};
</script>
  
<style>
@media (min-width: 1024px) {
    .main-container {
        display: flex;
        flex-direction: row;
        padding: 1rem 18rem 3rem 18rem;
        align-items: center;
        justify-content: center;
        gap: 6rem;

    }
}
</style>
  