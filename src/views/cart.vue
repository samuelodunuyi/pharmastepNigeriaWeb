<script setup>
import { collection, getDocs, getDoc, doc, deleteDoc, setDoc } from "firebase/firestore";
import { db } from "../firebase.js"
import { ref, computed } from "vue";
import useUserStore from "../stores";
import pinia from "../stores/setup";
import paystack from "vue3-paystack";
import topHeader from '../components/topHeader.vue';
import { nanoid } from "nanoid"; //if using nanoid
const store = useUserStore(pinia);
const productInCart = ref([])
const cartProduct = ref([])
const products = ref([])
const cartIds = ref([])
const cartIdCounts = ref([])
const cartSubTotal = ref(0)
const cartTotal = ref(0)
const cartItemList = ref([])
const paystackkey = "pk_test_a137d402b5975716e89952a898aad2832c961d69"
// const paystackkey = "pk_live_f56a0238d753611ed6b184e1c02174a1783af6a1"
const email = store.useremail
const recieverName = ref('')
const deliveryAddress = ref('')
const deliveryCity = ref('')
const phoneNumber = ref('')
const resetValue = ref(0)
const order = ref([])
const loadUser = async () => {
    const docSnaps = await getDocs(collection(db, 'users', store.userUid, 'cart'));

    cartProduct.value = docSnaps.forEach((doc) => {
        cartIds.value = doc.id
        cartIdCounts.value = doc.get('item_count')
        loadProducts()
    })

};
const loadProducts = async () => {
    if (resetValue.value == 1) {
        products.value = []
    }
        // cartItemList.value = []

    const count = cartIdCounts.value
    const docRef = doc(collection(db, "products"), cartIds.value.toString())
    const docSnap = await getDoc(docRef);
    const product = { id: docSnap.id, ...docSnap.data(), count: count };
    products.value.push(product)
    productInCart.value = products.value
    const cartPricesArray = productInCart.value.map(({ count, description, id, manufacturer, owner, product_mode, product_type, title, images, search_tags, expiry_date, control_med, ...rest }) => ({ ...rest }))
    const cartPricesArrayString = cartPricesArray.map(function (item) {
        return item.original_price * count;
    });
    let lastElement = cartPricesArrayString[cartPricesArrayString.length - 1];
    cartItemList.value.push(lastElement)
    console.log(cartItemList.value)

    cartSubTotal.value = cartItemList.value.reduce((partialSum, a) => (partialSum + a), 0);
    cartTotal.value = cartSubTotal.value + 1000;

    order.value = productInCart.value.map(({ description, expiry_date, manufacturer, owner, search_tags, images, product_type, ...rest }) => ({ ...rest }))
    resetValue.value = 0
}

const loadProductsList = computed(() => {
    loadUser()
    return products.value;
})

const deletefromCart = async (id) => {
    await deleteDoc(doc(db, 'users', store.userUid, 'cart', id)).then(
        setTimeout(async () => {
            resetValue.value = 1
            newCartValue
        }, 2000)
    )
    store.decrement()
    console.log(store.cartNoNew)
    const objWithIdIndex = products.value.findIndex((obj) => obj.id === id);

    products.value.splice(objWithIdIndex, 1);
}

const reference = computed(() => {
    return nanoid(15);
})

const newCartValue = computed(() => {
    return store.cartNoNew
})

async function onSuccessfulPayment(response) {
    await setDoc(doc(db, "ordered_products", response.reference), {
        Status: 'Ongoing Order',
        addressline: deliveryAddress.value,
        floor_No: '',
        order_date: new Date(),
        owner: recieverName.value,
        phone: phoneNumber.value,
        product_uid: order.value,
        sto: null,
        email: email,
        total: cartTotal.value
    });
    await setDoc(doc(db, "users", store.userUid, "ordered_products", response.reference), {
        Status: 'Ongoing Order',
        addressline: deliveryAddress.value,
        floor_No: '',
        order_date: new Date(),
        owner: recieverName.value,
        phone: phoneNumber.value,
        product_uid: order.value,
        sto: null,
        email: email,
        total: cartTotal.value
    });
    //   await deleteDoc(collection(db, 'users', store.userUid, 'cart'));
}


function onCancelledPayment(response) {
    console.log("Payment cancelled by user");
}

</script>

<template>
    <topHeader :slides="newCartValue" />
    <section class="h-100 h-custom" style="background-color: #eee;">
        <div class="container py-5 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col">
                    <div class="card">
                        <div class="card-body p-4">
                            <div class="row">
                                <div class="col-lg-7">
                                    <h5 class="mb-3" @click="$router.back()"><a href="#!" class="text-body"><i
                                                class="fas fa-long-arrow-alt-left me-2"></i>Continue in Shop</a></h5>
                                    <hr>
                                    <div class="d-flex justify-content-between align-items-center mb-4">
                                        <div>
                                            <p class="mb-1">Shopping cart</p>
                                            <p class="mb-0">You have {{ products.length }} items in your cart</p>
                                        </div>
                                    </div>
                                    <div class="card mb-3" v-for="cartItems in loadProductsList" style="max-width: 50rem;">
                                        <div class="card-body">
                                            <div class="d-flex justify-content-between leftside">
                                                <div class="d-flex flex-row align-items-center">
                                                    <div @click="$router.push(`/product/${cartItems.id}`)" style="cursor: pointer;">
                                                        <img :src="cartItems.images" class="img-fluid rounded-3 d-none d-sm-block"
                                                            alt="Shopping item" style="width: 65px;">
                                                    </div>
                                                    <div class="ms-3 title">
                                                        <h5 @click="$router.push(`/product/${cartItems.id}`)" style="cursor: pointer;">{{ cartItems.title }}</h5>
                                                        <p class="small mb-0">{{ cartItems.manufacturer }} - ₦{{
                                                            cartItems.original_price }}</p>
                                                    </div>
                                                </div>
                                                <div class="d-flex flex-row align-items-center">
                                                    <div style="width: 50px;" class="title2">
                                                        <h5 class="fw-normal mb-0">{{ cartItems.count }}</h5>
                                                    </div>
                                                    <div style="width: 80px;" class="title3">
                                                        <h5 class="mb-0">₦ {{ cartItems.original_price * cartItems.count }}
                                                        </h5>
                                                    </div>
                                                    <p style="color: #cecece; cursor: pointer;"
                                                        @click="deletefromCart(cartItems.id)"><i
                                                            class="fas fa-trash-alt"></i></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-5">
                                    <div class="card bg-info text-white rounded-3">
                                        <div class="card-body">
                                            <div class="d-flex justify-content-between align-items-center mb-4">
                                                <h5 class="mb-0">Delivery details</h5>
                                            </div>
                                            <form class="mt-4">
                                                <div class="form-outline form-white mb-4">
                                                    <label class="form-label" for="typeName">Name</label>
                                                    <input type="text" id="typeName" class="form-control form-control-lg"
                                                        siez="27" placeholder="Name of Reciever" v-model="recieverName" />
                                                </div>

                                                <div class="form-outline form-white mb-4">
                                                    <label class="form-label" for="typeText">Delivery Address</label>
                                                    <input type="text" id="typeText" class="form-control form-control-lg"
                                                        siez="47" placeholder="Address" minlength="49" maxlength="49"
                                                        v-model="deliveryAddress" />
                                                </div>

                                                <div class="form-outline form-white mb-4">
                                                    <label class="form-label" for="typeText">City</label>
                                                    <input type="text" id="typeText" class="form-control form-control-lg"
                                                        siez="27" placeholder="City" v-model="deliveryCity" />
                                                </div>

                                                <div class="form-outline form-white mb-4">
                                                    <label class="form-label" for="typeExp">Phone Number</label>
                                                    <input type="text" id="typeExp" class="form-control form-control-lg"
                                                        placeholder="Phone Number" size="17" minlength="17" maxlength="17"
                                                        v-model="phoneNumber" />
                                                </div>
                                            </form>

                                            <hr class="my-4">
                                            <div class="d-flex justify-content-between">
                                                <p class="mb-2">Subtotal</p>
                                                <p class="mb-2">₦ {{ cartSubTotal.toLocaleString() }}.00</p>
                                            </div>

                                            <div class="d-flex justify-content-between">
                                                <p class="mb-2">Delivery</p>
                                                <p class="mb-2">₦ 1,000.00</p>
                                            </div>

                                            <div class="d-flex justify-content-between mb-4 ">
                                                <p class="mb-2">Total</p>
                                                <p class="mb-2">₦ {{ cartTotal.toLocaleString() }}.00</p>
                                            </div>

                                            <button type="button" class="btn btn-info btn-block btn-lg">
                                                <div class="d-flex justify-content-between title4">
                                                    <span>₦ {{ cartTotal.toLocaleString() }}.00 - &nbsp;</span>
                                                    <span> Checkout <i class="fas fa-long-arrow-alt-right ms-2"></i></span>
                                                    <paystack buttonClass="'button-class btn btn-primary'" buttonText=""
                                                        :publicKey="paystackkey" :email="email" :amount="cartTotal * 100"
                                                        :reference="reference" :onSuccess="onSuccessfulPayment"
                                                        :onCanel="onCancelledPayment">
                                                    </paystack>
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style="margin: 50px;"></div>
                </div>
            </div>
        </div>
    </section>
</template>

<style>
@media (min-width: 1025px) {
    .h-custom {
        height: 100vh !important;
    }
}

@media (max-width: 384px) {
    .title h5{
        font-size: 3.5vw !important;
    }

    .title p{
        font-size: 3vw !important;

    }

    .title2 h5{
        font-size: 4vw !important;
    }

    .title3 h5{
        font-size: 5vw !important;
    }

    .title4{
        font-size: 4vw !important;
    }

    .leftside{
        margin-left: -20px;
    }

}



.textwhite {
    color: white;
}
</style>

