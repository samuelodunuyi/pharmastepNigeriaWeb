import { defineStore } from "pinia";
import { useLocalStorage, useSessionStorage } from "@vueuse/core"

const useUserStore = defineStore("user", {
  state: () => {
    return { 
      userUid:  useLocalStorage('userUid', ''),
      user:  useSessionStorage('user', ''),
      useremail:  useLocalStorage('useremail', ''),
      products:  useLocalStorage('products', []),
      cartNo:  useLocalStorage('cartNo', 0),
      cartNoNews:  useLocalStorage('cartNoNews', 1),
      cartNotSigned:  useLocalStorage('cartNotSigned', []),
    };
  },
  persist: true,
  actions: {
    // since we rely on `this`, we cannot use an arrow function
    increment() {
      this.cartNoNews++
    },

    decrement() {
      this.cartNoNews--
    },

    incrementArray(id) {
      this.cartNotSigned.push(id)
    },

    destroyArray() {
      this.cartNotSigned=[]
    },
  },
});

export default useUserStore;
