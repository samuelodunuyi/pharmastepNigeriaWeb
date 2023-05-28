<template>
  <article class="product-info container">
    <h3 class="product-info__producer-name">{{ product.manufacturer }}</h3>
    <h1 class="product-info__name">{{ product.title }}</h1>
    <p class="product-info__description">
      {{ product.description }}
    </p>
    <div class="product-info__price-container">
      <div class="product-info__current-price-container">
        <div class="product-info__discount price">₦{{ product.original_price }}</div>
      </div>
    </div>

    <div class="product-info__tag-container">
      <b>Tags</b>
    </div>

    <div class="product-info__tag-container1">
      <div class="assaa" v-for="i in product.search_tags">
        <div class="product-info__discount">{{ i }}</div>
      </div>
    </div>
 

    <div>
      <b>Categories</b>
      <div>
        {{ product.product_type }}
      </div>
    </div>
    <div>
      <b>Product Type</b>
      <div>
        {{ product.product_mode }}
      </div>
    </div>

    <div>
      <b>Expiry Date</b>
      <div>
        {{ product.expiry_date }}
      </div>
    </div>


    <div class="product-info__buttons-container">
      <QuantityInput :quantity="quantity" @add-quantity="addQuantity" @remove-quantity="removeQuantity" />
      <AppButton class="app-button--orange-box-shadow" icon="../icon-cart.svg" alt="Cart" @click="addToCart">Add to Cart
      </AppButton>
    </div>
  </article>
</template>

<script>
import QuantityInput from "./QuantityInput.vue";
import AppButton from "./AppButton.vue";

export default {
  components: { QuantityInput, AppButton },
  props: {
    product: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  emits: ["addToCart"],
  data() {
    return {
      quantity: 0,
    };
  },
  methods: {
    addQuantity() {
      this.quantity++;
    },
    removeQuantity() {
      if (this.quantity >= 1) this.quantity--;
    },
    addToCart() {
      this.$emit("addToCart", this.product, this.quantity);

      this.quantity = 0;
    },
  },
};
</script>

<style scoped>
.assaa{
  display: flex;
  flex-direction: row;
}
.product-info {
  display: grid;
  gap: 1.5rem;
  margin-top: 2rem;
}

.product-info__producer-name {
  text-transform: uppercase;
  font-size: 1.2rem;
  font-weight: 700;
  color: #1C78D3;
}
.product-info__name {
  font-size: var(--fs-lg);
  font-weight: 700;
}

.product-info__description {
  color: var(--color-dark-grayish-blue);
  line-height: 1.5rem;
}

.product-info__price-container {
  display: flex;
  max-width: 100%;
  justify-content: space-between;
  align-items: center;
}

.product-info__tag-container1 {
  flex-direction: row;
  display: flex;
  background-color: #1C78D3;
  justify-content: space-between;
  align-items: center;
}

.product-info__tag-container {

max-width: 100%;
justify-content: space-between;
align-items: center;
}

.product-info__current-price-container {
  display: flex;
  align-items: center;
  gap: 1rem;
}


.product-info__tags-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  gap: 1rem;
}

.product-info__discount {
  color: #1C78D3;
  padding: 0.3rem 0.6rem;
  margin: 0rem 0.6rem 0rem 0rem;
  border-radius: var(--border-radius-size);
  font-weight: 700;
  background-color: #deeefe;
}

.price{
  font-size: 2rem;
}

.product-info__buttons-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

@media (min-width: 1024px) {
  .product-info {
    max-width: 40%;
    
  }

  .product-info__producer-name {
   margin-bottom: -20px;
}

  .product-info__price-container {
    flex-direction: column;
    align-items: flex-start;
  }

  .product-info__buttons-container {
    flex-direction: row;
    gap: 1.3rem;
  }
}
</style>
