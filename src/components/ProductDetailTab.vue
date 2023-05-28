<script setup>
import { useRoute } from "vue-router"
import { ref, onMounted } from 'vue';
import { db } from "../firebase";
import { getDoc, collection, doc } from "firebase/firestore";

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

</script>

<template>
  <v-card class="px-4 mt-9" outlined>
    <v-layout wrap>
      <v-col xs12>
        <v-list color="transparent" class="pa-0">
          <v-list-item class="pa-0">
            <div class="headline">
              {{ product.title }}
            </div>
            <v-list-item-subtitle>{{ product.manufacturer }}</v-list-item-subtitle>

            <v-list-item-content class="mb-2">
              <div class="title mb-3">
                Tags
              </div>
              <v-layout wrap>
                <v-col v-for="(tag, i) in product.search_tags" :key="i">
                  <v-chip label small>
                    {{ tag }}
                  </v-chip>
                </v-col>
              </v-layout>
            </v-list-item-content>

          </v-list-item>
          <v-list-item class="pa-0">
            <v-btn block depressed large class="text-none" color="primary" @click="addToCart(item)">
              <v-icon left small>
                mdi-cart
              </v-icon>Add to Cart
            </v-btn>
          </v-list-item>
          <v-list-item class="px-0">
            <v-list-item-subtitle>
              <div class="title">
                {{ product.title }}
              </div>
              <div class="body-2">
                {{ product.description }}
              </div>
            </v-list-item-subtitle>
          </v-list-item>
        </v-list>
      </v-col>
      <v-col xs12>
        <v-divider />
        <v-list color="transparent" class="pa-0">
          <v-list-item class="px-0">
            <v-list-item-action>
              <v-layout wrap>
                <v-btn icon>
                  <v-icon>mdi-share</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon>mdi-heart</v-icon>
                </v-btn>
              </v-layout>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-col>
    </v-layout>
  </v-card>
</template>
  
<script>
export default {
  props: {
    product: {
      type: Object,
      default: function () {
        return {};
      }
    },
    addToCart: {
      type: Function,
      default: function () {
        return 0;
      }
    }
  }
};
</script>
<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px;
}

.headline{
    line-height: 2rem;
    font-family: 'Roboto',sans-serif!important;    -webkit-box-align: center;
    align-items: center;
    display: flex;
    font-size: 25px;
    font-weight: bold;
}
</style>