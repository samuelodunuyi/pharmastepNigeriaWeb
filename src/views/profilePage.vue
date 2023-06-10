<script setup>
import EProfileEditDialog from '../components/profileEditDialog.vue';
import topHeader from '../components/topHeader.vue';

</script>

<template>
      <topHeader />
  <v-dialog v-model="showOrderDetails" width="100%">
    <div style="width: 100%; background-color: white; padding: 30px; overflow: auto;">
      <div class="row">
        <h3 class="col-md-11">Purchase History Detail</h3>
        <v-btn icon @click="showOrderDetails = false" class="col-md-2">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="row delivdets">
            <b class="col-md-4">Order ID:</b>
            <p class="col-md-5">{{ selectedOrder[0].id }}</p>
          </div>
          <div class="row delivdets">
            <b class="col-md-4">Status:</b>
            <p class="col-md-5">{{ selectedOrder[0].Status }}</p>
          </div>
          <div class="row delivdets">
            <b class="col-md-4">Contact Person:</b>
            <p class="col-md-5">{{ selectedOrder[0].owner }}</p>
          </div>
          <div class="row delivdets">
            <b class="col-md-4">Email:</b>
            <p class="col-md-5">{{ selectedOrder[0].email }}</p>
          </div>

        </div>
        <div class="col-md-6">
          <div class="row">
            <b class="col-md-4">Order Date:</b>
            <p class="col-md-5">{{ selectedOrder[0].order_date }}</p>
          </div>
          <div class="row">
            <b class="col-md-4">Address:</b>
            <p class="col-md-5">{{ selectedOrder[0].addressline }}</p>
          </div>
          <div class="row">
            <b class="col-md-4">Phone:</b>
            <p class="col-md-5">{{ selectedOrder[0].phone }}</p>
          </div>
        </div>
      </div>

      <div class="row delivdets">
        <b class="">Product(s) Ordered:</b>
        <table class="table">
          <thead>
            <tr>
              <th scope="col"><b>Product Name</b></th>
              <th scope="col"><b>Product Type</b></th>
              <th scope="col"><b>Quantity</b></th>
              <th scope="col"><b>Price</b></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="productL in selectedOrder[0].product_uid">
              <th scope="row">{{ productL.title }}</th>
              <td>{{ productL.product_mode }}</td>
              <td>{{ productL.count }}</td>
              <td>{{ productL.original_price }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </v-dialog>

  <div class="profile">
    <div class="accordion" id="accordionExample">
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
            aria-expanded="true" aria-controls="collapseOne">
            <v-icon color="primary">
              mdi-account
            </v-icon> Account
          </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
          data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <v-card>
              <div class="fullList row">
                <div class="innerText col-md-10">
                  <v-icon color="primary">
                    mdi-account
                  </v-icon>
                  <h3>{{ signedInUser.fullName }}</h3>
                  <p>Full Name</p>
                </div>
                <div class="col-md-2">
                  <v-list-item-action>
                    <v-btn icon @click="nameDialog = true">
                      <v-icon>mdi-pencil</v-icon>
                    </v-btn>
                    <v-dialog v-model="nameDialog" width="500px">
                      <e-profile-edit-dialog name="nameDialog" title="Update Name" :initial-string="signedInUser.fullName"
                        :loading="loading" @close="close"/>
                    </v-dialog>
                  </v-list-item-action>
                </div>
              </div>
            </v-card>
            <v-card outlined>
              <div class="fullList row">
                <div class="innerText col-md-10">
                  <v-icon color="primary">
                    mdi-phone
                  </v-icon>
                  <h3>{{ signedInUser.phone }}</h3>
                  <p>Phone</p>
                </div>
                <div class="col-md-2">
                  <v-list-item-action>
                    <v-btn icon @click="phoneDialog = true">
                      <v-icon>mdi-pencil</v-icon>
                    </v-btn>
                    <v-dialog v-model="phoneDialog" width="500px">
                      <e-profile-edit-dialog name="phoneDialog" title="Update Phone Number" :initial-string="signedInUser.phone" :loading="loading" 
                      @close="close"/>
                    </v-dialog>
                  </v-list-item-action>
                  <v-divider inset />
                </div>
              </div>
            </v-card>
            <v-card>
              <div class="fullList row">
                <div class="innerText col-md-10">
                  <v-icon color="primary">
                    mdi-email
                  </v-icon>
                  <h3>{{ signedInUser.email }}</h3>
                  <p>Email</p>
                </div>
                <div class="col-md-2">
                  <v-list-item-action>
                    <v-btn icon @click="emailDialog = true">
                      <v-icon>mdi-pencil</v-icon>
                    </v-btn>
                    <v-dialog width="500px" v-if="emailDialog" v-model="emailDialog" >
                      <EProfileEditDialog name="emailDialog" title="Update Email" :initial-string="signedInUser.email"
                        :loading="loading" @close="close" />
                    </v-dialog>
                  </v-list-item-action>
                  <v-divider inset />
                </div>
              </div>
            </v-card>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingTwo">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo"
            aria-expanded="false" aria-controls="collapseTwo">
            <v-icon color="primary">
              mdi-history
            </v-icon> Purchase History
          </button>
        </h2>
        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
          data-bs-parent="#accordionExample">
          <div class="accordion-body">
          <div class="table-responsive-md">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Order ID</th>
                  <th scope="col">Total Amount</th>
                  <th scope="col">Products</th>
                  <th scope="col">Address</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="order in orders">
                  <th scope="row">{{ order.id }}</th>
                  <td>{{ order.total }}</td>
                  <td>{{ order.product_uid.map(({ count, id, original_price, product_mode, ...rest }) => ({
                    ...rest
                  })).map(function (item) {
                    return item.title;
                  }).toString() }}</td>
                  <td>{{ order.addressline }}</td>
                  <td style="text-decoration: underline; color: blue; font-weight: bold; cursor: pointer;"
                    @click="filterSelected(order.id)">Details</td>
                </tr>
              </tbody>
            </table>
          </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pa-2 d-none d-sm-flex">
    <v-btn :disabled="authStatus" color="black" class="white--text" block @click.prevent="signOutUser()">
      Logout
    </v-btn>
  </div>   
  </div>
</template>
  
<script>
import useUserStore from "../stores/index";
import pinia from "../stores/setup";
import EProfileEditDialog from '../components/profileEditDialog.vue'
import { doc, getDoc, getDocs, collection } from "firebase/firestore";
import { db } from "../firebase.js"
import { getAuth, signOut } from "firebase/auth";
const auth = getAuth();
const store = useUserStore(pinia);

export default {
  component: {
    EProfileEditDialog
  },
  props: {
    emptyCart: {
      type: Function,
      default: function () {
        return {};
      }
    },
  },

  data() {
    return {
      authStatus: true,
      signedInUser: [],
      emailDialog: false,
      loading: false,
      nameDialog: false,
      phoneDialog: false,
      showOrderDetails: false,
      orders: [],
      selectedOrder: [],
    };
  },
  created() {
    if (store.userUid.length > 0) {
      this.authStatus = false
    }
    this.loadUser()
    this.loadOrders()

  },
  methods: {
    signOutUser() {
      auth.signOut();
      store.userUid = ''
      store.user = ''
      this.emptyCart();
      window.location.reload();
    },

    async loadUser() {
      const docSnap = await getDoc(doc(db, 'users', store.userUid));
      if (docSnap.exists()) {
        this.signedInUser = docSnap.data()
      } else {
        console.log('Document does not exist')
      }
    },

    async loadOrders() {
      const querySnapshot = await getDocs(collection(db, 'users', store.userUid, 'ordered_products'));
      this.orders = querySnapshot.docs.map(doc => {
        return {
          id: doc.id,
          ...doc.data()
        }
      })
    },

    close(name) {
      if (name == "emailDialog") {
        this.emailDialog = false;
      } else if (name == "nameDialog") {
        this.nameDialog = false;
      }
      else if (name == "phoneDialog") {
        this.nameDialog = false;
      }
    },

    async filterSelected(selected) {
      this.selectedOrder = this.orders.filter(o => o.id == selected)
      this.showOrderDetails = true
    }
  }

};

</script>
<style scoped>
.profile {
  margin: 20px 10px;
}

.v-card {
  margin: 2rem 3rem 0rem 0rem;
  justify-content: space-around;

}

.fullList {
  display: flex;
  flex-direction: row;
  justify-items: space-around;
  margin: 10px 0px;
  padding-left: 2rem;
  width: 100%;
}

.delivdets {
  padding-top: 20px;
  margin-bottom: 20px;
}

.innerText h3 {
  font-size: 1.5rem;
}

.innerText p {
  font-size: 0.895rem;
  font-weight: bold;
}
</style>
  