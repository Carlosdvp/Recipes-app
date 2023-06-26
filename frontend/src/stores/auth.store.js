import { defineStore } from "pinia"
import { router } from "@/router"
import { useAlertStore } from "@/stores"
import { fetchWrapper } from "@/helpers/fetch-wrapper"

const baseUrl = 'http://localhost:3000'

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    // initialize state from local storage to enable user to stay logged in
    user: JSON.parse(localStorage.getItem('user')),
    returnUrl: null
  }),
  actions: {
    async register(user) {
      await fetchWrapper.post(`${baseUrl}/auth/register`, user);
    },
    async login(username, password) {
      try {
        const user = await fetchWrapper.post(`${baseUrl}/auth/login`, { username, password});

        // update the state
        this.user = user;
        // store user details and jwt in local storage
        localStorage.setItem('user', JSON.stringify(user));
        // redirect to previous ur or to homepage
        router.push(this.returnUrl || '/');

      } catch (error) {
        const alertStore = useAlertStore();
        alertStore.error(error);
      }
    },
    logout() {
      this.user = null;
      localStorage.removeItem('user');
      router.push('/auth/login')
    }
  }
});
