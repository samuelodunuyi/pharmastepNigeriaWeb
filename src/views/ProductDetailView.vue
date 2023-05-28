<script setup>
import { useRoute } from "vue-router"
import { ref, onMounted } from 'vue';
import { db } from "../firebase";
import { getDoc, collection, doc } from "firebase/firestore";

const route = useRoute()
const productId = (route.params.id);
const product = ref()

onMounted(() => {
    loadProduct()
})

const loadProduct = async () => {
    const docRef = doc(collection(db, "products"), productId)
    const docSnap = await getDoc(docRef);
    product.value = { id: docSnap.id, ...docSnap.data() };
}

</script>

<template>
    <div class="container">
        {{ product }}
        <v-card v-if="product" class="mx-auto" width="1500">
            <v-row>
                <v-col>
                    <v-img :src="product.images[0]"></v-img>
                </v-col>
                <v-col>
                    <v-card :title="product.title" :subtitle="product.manufacturer" height="100%">
                        <v-spacer>
                            <p> {{ product.description }}</p>
                            <v-btn prepend-icon="mdi-vuetify" variant="tonal">
                                Button
                            </v-btn>
                        </v-spacer>
                    </v-card>
                </v-col>
            </v-row>
        </v-card>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px;
}
</style>