<template>
  <div class="mainCard">
  <v-card outlined>
    <div class="fullList">
      <div class="innerText">
        <v-icon color="primary">
          mdi-account
        </v-icon>
        <h3>{{ account.fullName }}</h3>
        <p>Full Name</p>
      </div>
      <div>
        <v-list-item-action>
          <v-btn icon @click="nameDialog = true">
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
          <v-dialog v-model="nameDialog" width="500px">
            <e-profile-edit-dialog name="nameDialog" :update="updateUserName" title="Update Name"
              :initial-string="account.fullName" :loading="loading" @close="close" />
          </v-dialog>
        </v-list-item-action>
      </div>
    </div>
  </v-card>
  <v-card outlined>
    <div class="fullList">
      <div class="innerText">
        <v-icon color="primary">
          mdi-phone
        </v-icon>
        <h3>{{ account.phone }}</h3>
        <p>Phone</p>
      </div>
      <div>
        <v-list-item-action>
          <v-btn icon @click="nameDialog = true">
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
          <v-dialog v-model="nameDialog" width="500px">
            <e-profile-edit-dialog name="nameDialog" :update="updateUserName" title="Update Phone Number"
              :initial-string="account.phone" :loading="loading" @close="close" />
          </v-dialog>
        </v-list-item-action>
        <v-divider inset />
      </div>
    </div>
  </v-card>
  <v-card outlined>
    <div class="fullList">
      <div class="innerText">
        <v-icon color="primary">
          mdi-email
        </v-icon>
        <h3>{{ account.email }}</h3>
        <p>Email</p>
      </div>
      <div>
        <v-list-item-action>
          <v-btn icon @click="emailDialog = true">
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
          <v-dialog v-model="emailDialog" width="500px">
            <e-profile-edit-dialog name="emailDialog" :update="updateUserEmail" title="Update Email"
              :initial-string="account.email" :loading="loading" @close="close" />
          </v-dialog>
        </v-list-item-action>
        <v-divider inset />
      </div>
    </div>
  </v-card>
  </div>
</template>
  
<script>
// @click="updateUserEmail"
import EProfileEditDialog from "./profileEditDialog.vue";
export default {
  components: {
    EProfileEditDialog
  },
  props: {
    account: {
      type: Object,
      default: function () {
        return {};
      }
    },
    updateUserEmail: {
      type: Function,
      default: function () {
        return {};
      }
    },
    updateUserName: {
      type: Function,
      default: function () {
        return {};
      }
    },
    loading: {
      type: Boolean,
      default: function () {
        return false;
      }
    }
  },
  data() {
    return {
      newEmail: this.account.email,
      newName: this.account.name,
      emailDialog: false,
      nameDialog: false
    };
  },
  methods: {
    close(name) {
      if (name == "emailDialog") {
        this.emailDialog = false;
      } else if (name == "nameDialog") {
        this.nameDialog = false;
      }
    }
  }
};
</script>
  
<style>
.v-card{
  margin: 5rem 3rem 0rem 0rem;
  justify-content: space-around;
}

.fullList {
  display: flex;
  flex-direction: row;
  margin: 20px 0px;
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

.mainCard{
  display: flex;
  flex-direction: row !important;
  justify-content: space-around;
  margin-top: -65px;
}
</style>
  