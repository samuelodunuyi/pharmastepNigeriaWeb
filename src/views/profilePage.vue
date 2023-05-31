<template>
  <div class="pa-2 d-none d-sm-flex">
    <v-btn :disabled="authStatus" color="black" class="white--text" block @click.prevent="signOut()">
      Logout
    </v-btn>
  </div>
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
                <h3>{{ signedInUser.fullName}}</h3>
                <p>Full Name</p>
              </div>
              <div class="col-md-2">
                <v-list-item-action>
                  <v-btn icon @click="nameDialog = true">
                    <v-icon>mdi-pencil</v-icon>
                  </v-btn>
                  <v-dialog v-model="nameDialog" width="500px">
                    <e-profile-edit-dialog name="nameDialog" title="Update Name" :initial-string="signedInUser.fullName"
                      :loading="loading" />
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
                  <h3>{{ signedInUser.phone}}</h3>
                  <p>Phone</p>
                </div>
                <div class="col-md-2">
                  <v-list-item-action>
                    <v-btn icon @click="nameDialog = true">
                      <v-icon>mdi-pencil</v-icon>
                    </v-btn>
                    <v-dialog v-model="nameDialog" width="500px">
                      <e-profile-edit-dialog name="nameDialog" :initial-string="signedInUser.phone" :loading="loading" />
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
                <h3>{{ signedInUser.email}}</h3>
                <p>Email</p>
              </div>
              <div class="col-md-2">
                <v-list-item-action>
                  <v-btn icon @click="emailDialog = true">
                    <v-icon>mdi-pencil</v-icon>
                  </v-btn>
                  <v-dialog v-model="emailDialog" width="500px">
                    <e-profile-edit-dialog name="emailDialog" title="Update Email" :initial-string="signedInUser.email" :loading="loading"
                      @close="close" />
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
            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin
            adds the appropriate classes that we use to style each element. These classes control the overall appearance,
            as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or
            overriding our default variables. It's also worth noting that just about any HTML can go within the
            <code>.accordion-body</code>, though the transition does limit overflow.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import useUserStore from "../stores/index";
import pinia from "../stores/setup";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase.js"
import { getAuth, signOut } from "firebase/auth";
const auth = getAuth();
const store = useUserStore(pinia);

export default {
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
      nameDialog: false
    };
  },
  created() {
    if (store.userUid.length > 0) {
      this.authStatus = false
    }

    this.loadUser()
  },
  methods: {
    signOut() {
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
         console.log(this.signedInUser)
      } else {
        console.log('Document does not exist')
      }
    }
  }
};

</script>
<style scoped>
.profile {
  margin: 20px 10px;
}

.v-card{
  margin: 2rem 3rem 0rem 0rem;
  justify-content: space-around;

}

.fullList {
  display: flex;
  flex-direction: row;
  justify-items: space-around;
  margin: 10px 0px;
  padding-left:2rem;
  width: 100%;
}

.innerText h3{
font-size: 1.5rem;
}

.innerText p{
font-size: 0.895rem;
font-weight: bold;
}

</style>
  