<script setup>
import topHeader from '../components/topHeader.vue';

</script>
<template>
    <topHeader :slides="1"/>
    <section class="vh-100" style="background-color: #e4e4e4;">
        <div class="container py-5 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col col-xl-10">
                    <div class="card" style="border-radius: 1rem;">
                        <div class="row g-0">
                            <div class="col-md-6 col-lg-5 d-none d-md-block">
                                <img src="../assets/pharmBanner.jpg" alt="login form" class="img-fluid"
                                    style="border-radius: 1rem 0 0 1rem;" />
                            </div>
                            <router-view></router-view>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
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
.v-card {
    margin: 0px auto;
    align-items: center;
    justify-content: center;
    border: 0.2px solid rgb(188, 188, 188);
}
</style>
  