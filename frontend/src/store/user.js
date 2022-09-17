import { reactive } from 'vue';
import { defineStore } from 'pinia';
import { autoLoginUser, loginUser } from '../api/user';

export const useUser = defineStore('user', {
  state: () => (
    reactive({
      user: null,
      token: localStorage.getItem('jwt') || "",
      isAuthenticated: false
    })
  ),
  actions: {
    async autoLogin() {
      try {
        const res = await autoLoginUser(this.token);
        this.user = res.data;
        this.isAuthenticated = true

      } catch (err) {
        this.isAuthenticated = false
        console.error(err);
      }
    },
    async login(name, password) {
      const res = await loginUser({
        name: name,
        password: password
      });

      this.user = res.data.user
      this.isAuthenticated = true
      this.token = res.data.token;
      localStorage.setItem('jwt', res.data.token);
    },
    async logout() {
      localStorage.removeItem("jwt");
      this.user = null
      this.isAuthenticated = false
      this.token = ""
    }
  }
})
