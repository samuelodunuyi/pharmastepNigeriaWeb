<script setup>
import topHeader from '../components/topHeader.vue';

</script>
<template>
    <topHeader/>
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
                        <v-card>
                        <e-login-form />
                    </v-card>
                    </v-window-item>

                    <v-window-item value="2">
                        <v-card>
                        <e-register-form />
                    </v-card>
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
import topHeader from '../components/topHeader.vue';
export default {
    components: {
        ELoginForm,
        ERegisterForm,
        topHeader
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
    margin: 0px auto;
    align-items: center;
    justify-content: center;
    border: 0.2px solid rgb(188, 188, 188);
}
</style>
  