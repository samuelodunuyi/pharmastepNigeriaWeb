<template>
    <section style="background-color: #f5f5f5;">
        <div class="container py-5">
            <h2 class="mt-10 ml-3">
                Categories
            </h2>
            <div class="row sety">
                <div class="col-md-12 col-lg-4 mb-4 mb-lg-0 fullCate" v-for="i in categories">
                    <div class="card text-black" @click="$router.push(`/category/${i.id}`)">
                        <div class="pickgradient" style="cursor: pointer;">
                            <img :src="i.img" class="card-img-top" alt="category" height="300" />
                        </div>
                        <div class="card-body">
                            <div class="text-center mt-1" style="cursor: pointer;">
                                <h4 class="card-title">{{ i.name }}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<script>
export default {
    data() {
        return {
            categories: [
                { 'name': 'Antibacterial', 'id': 'Antibacterial', 'img':'../src/components/images/antimicrobial.jpg'}, { 'name': 'Anti Malarials', 'id': 'Anti_Malarials', 'img':'../src/components/images/malaria.jpg' }, { 'name': 'Contraceptives', 'id': 'Contraceptives', 'img':'../src/components/images/contraceptives.jpg' }, { 'name': 'Cream and ointments', 'id': 'Cream_and_ointments', 'img':'../src/components/images/creams.jpg' },
                { 'name': 'Antidiabetics', 'id': 'Antidiabetics', 'img':'../src/components/images/antidiabetic.jpg' }, { 'name': 'Antihypertensives', 'id': 'Antihypertensives', 'img':'../src/components/images/antihypertensive.jpg' }, { 'name': 'Skincare', 'id': 'Skincare', 'img':'../src/components/images/derm.jpg' }, { 'name': 'Pain management', 'id': 'Pain_management', 'img':'../src/components/images/headaches.jpg' }, 
                { 'name': 'Pessaries', 'id': 'Pessaries', 'img':'../src/components/images/pessaries.png'}, { 'name': 'Antihistamines', 'id': 'Antihistamines' , 'img':'../src/components/images/Antihistamines.jpg'}, { 'name': 'Antiemetics', 'id': 'Antiemetics', 'img':'../src/components/images/antiemetics.jpg' },
                { 'name': 'Antipsychotics', 'id': 'Antipsychotics', 'img':'../src/components/images/Antipsychotics.jpg' },  { 'name': 'Vitamins', 'id': 'Vitamins', 'img':'../src/components/images/vitamins.jpg' }, { 'name': 'Gastrointestinal', 'id': 'Gastrointestinal', 'img':'../src/components/images/Gastrointestinal.jpg' }, { 'name': 'Sexual health', 'id': 'Sexual_health', 'img':'../src/components/images/sexual.jpg' }
            ]
        }
    }
};
</script>


<style scoped>
.fullCate {
    margin-bottom: 20px;
    margin-top: 20px;
}

.pickgradient {
    position: relative;
    display: inline-block;
}

.pickgradient:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: inline-block;
    background: -moz-linear-gradient(top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.65) 100%);
    /* FF3.6+ */
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, rgba(0, 0, 0, 0.65)), color-stop(100%, rgba(0, 0, 0, 0)));
    /* Chrome,Safari4+ */
    background: -webkit-linear-gradient(top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.65) 100%);
    /* Chrome10+,Safari5.1+ */
    background: -o-linear-gradient(top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.65) 100%);
    /* Opera 11.10+ */
    background: -ms-linear-gradient(top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.65) 100%);
    /* IE10+ */
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.65) 100%);
    /* W3C */
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#a6000000', endColorstr='#00000000', GradientType=0);
    /* IE6-9 */
}</style>