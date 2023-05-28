import { defineStore } from "pinia";
import { useLocalStorage, useSessionStorage } from "@vueuse/core"

const useUserStore = defineStore("user", {
  state: () => {
    return { 
      userUid:  useLocalStorage('userUid', ''),
      user:  useLocalStorage('user', ''),
      products:  useLocalStorage('products', []),
    };
  },
  persist: true,
});

export default useUserStore;
