<template>
  <div>
    <v-slide-group
      class="d-flex d-md-none"
      multiple
      show-arrows
    >
      <v-slide-item
        v-for="(category, i) in categories"
        :key="i"
        v-slot:default="{ active, toggle }"
      >
        <TopCategoryMobileList :category="category" />
      </v-slide-item>
    </v-slide-group>
    <v-container
      grid-list-xs
      class="mt-5"
    >
      <v-layout
        wrap
        class="d-none d-md-flex"
      >
        <template v-for="category in categories">
          <v-flex
            sm5
            md4
            lg3
          >
            <TopCategoryListItem :category="category" />
          </v-flex>
        </template>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import TopCategoryListItem from "../components/TopCategoryListItem.vue";
import TopCategoryMobileList from "../components/TopCategoryMobileList.vue";
export default {
  components: {
    TopCategoryListItem,
    TopCategoryMobileList
  },
  props: {
    categories: {
      type: Array,
      default: function() {
        return [];
      }
    }
  }
};
</script>

<style></style>
