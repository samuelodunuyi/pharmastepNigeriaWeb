<script setup>
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { db } from "../firebase.js"
import { onMounted, ref } from "vue";
import EProfileAccount from "../components/profileAccount.vue";
import pinia from "../stores/setup.js"
import useUserStore from '../stores/index.js'
import { useRouter } from "vue-router"
const router = useRouter();
const store = useUserStore(pinia)

const User = ref([])
const loadUser = async () => {
  const docSnap = await getDoc(doc(db, 'users', store.userUid));
  if (docSnap.exists()) {
    User.value = docSnap.data()
  } else {
    console.log('Document does not exist')
  }
}
onMounted(() => {
  loadUser();
})

</script>

<template>
  <v-container style="max-width: 1024px">
    <v-layout>
      <v-flex>
        <h2 class="my-3">Account</h2>
        <e-profile-account :loading="loading" :update-user-email="updateUserEmail" :update-user-name="updateUserName"
          :account="User" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

