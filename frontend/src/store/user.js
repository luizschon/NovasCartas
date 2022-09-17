import { reactive } from 'vue';
import { defineStore } from 'pinia';
import { createUser, autoLoginUser, loginUser } from '../api/user';

export const useUser = defineStore('user', {
  state: () => (
    reactive({
      user: null,
      token: localStorage.getItem('jwt') || "",
      isAuthenticated: false
    })
  ),
  actions: {
    async registerUser(name, password) {
      try {
        const res = await createUser({
          name: name,
          password: password
        });

        this.user = res.data.data;
        this.isAuthenticated = true;
        this.token = res.data.token;
        localStorage.setItem('jwt', res.data.token);

      } catch (err) {
        throw "Erro ao registrar"
      }
    },
    async autoLogin() {
      try {
        const res = await autoLoginUser(this.token);
        this.user = res.data;
        this.isAuthenticated = true;

      } catch (err) {
        this.isAuthenticated = false;
      }
    },
    async login(name, password) {
      try {
        const res = await loginUser({
          name: name,
          password: password
        });

        this.user = res.data.user
        this.isAuthenticated = true
        this.token = res.data.token;
        localStorage.setItem('jwt', res.data.token);

      } catch (err) {
        throw "Erro ao fazer login"
      }
    },
    async logout() {
      localStorage.removeItem("jwt");
      this.user = null
      this.isAuthenticated = false
      this.token = ""
    }
  }
})
