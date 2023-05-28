<template>
        <v-container>
        <v-layout fill-height justify-center align-center wrap>
        <v-card width="500">
            <v-tabs v-model="tab" background-color="transparent" color="basil" grow centered>
                <v-tab value="1">Login</v-tab>
                <v-tab value="2">Register</v-tab>
            </v-tabs>

            <v-card-text>
                <v-window v-model="tab">
                    <v-window-item value="1">
                        <v-tab-item>
                        <e-login-form />
                    </v-tab-item>
                    </v-window-item>

                    <v-window-item value="2">
                        <v-tab-item>
                        <e-register-form />
                    </v-tab-item>
                    </v-window-item>
                </v-window>
            </v-card-text>
        </v-card>
        </v-layout>
    </v-container>
</template>
  
<script>
import ELoginForm from "../components/AuthLogin.vue";
import ERegisterForm from "../components/AuthRegister.vue";
export default {
    components: {
        ELoginForm,
        ERegisterForm
    },
    data() {
        return {
            tab: 0
        };
    }
};
</script>
  
<style scoped>
.v-card{
    margin: 65px auto;
    align-items: center;
    justify-content: center;
    border: 0.3px solid rgb(188, 188, 188);
    box-shadow: 0px 0px 2px 0.3px rgb(146, 146, 146) !important;
}
</style>
  