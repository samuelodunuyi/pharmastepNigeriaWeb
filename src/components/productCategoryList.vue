<template>
    <v-container grid-list-lg class="mt-5" max>
        <v-layout wrap>
            {{ categories }}
            <template v-for="(category, i) in categories">
                <v-flex xs12 sm5 md4 lg3>
                    <e-product-category-list-item :category="category" />
                </v-flex>
            </template>
        </v-layout>
    </v-container>
</template>
  
<script>
import EProductCategoryListItem from "./productCategoryListItem.vue";
export default {
    components: {
        EProductCategoryListItem
    },
    props: {
        categories: {
            type: Array,
            default: function () {
                return [];
            }
        }
    }
};
</script>
  
<style></style>
  