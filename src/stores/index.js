import { defineStore } from "pinia";
import { useLocalStorage, useSessionStorage } from "@vueuse/core"

const useUserStore = defineStore("user", {
  state: () => {
    return { 
      userUid:  useLocalStorage('userUid', ''),
      user:  useSessionStorage('user', ''),
      useremail:  useSessionStorage('useremail', ''),
      products:  useLocalStorage('products', []),
      cartNo:  useLocalStorage('cartNo', 0),
      cartNoNew:  useSessionStorage('cartNoNew', 0),
    };
  },
  persist: true,
  actions: {
    // since we rely on `this`, we cannot use an arrow function
    increment() {
      this.cartNoNew++
    },

    decrement() {
      this.cartNoNew--
    },
  },
});

export default useUserStore;
