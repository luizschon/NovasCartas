<template>
  <form action="" method="get" class="form" @submit.prevent="loginUser">
    <div class="form-title">Fazer login</div>
    <div class="form-content">
      <div class="form-fields">
        <FormInput v-for="field in fields"
          v-model="field.vModel"
          :label="field.label"
          :type="field.type"
          :placeholder="field.placeholder"
        />
      </div>
    </div>
    <div class="button-container">
      <button type="submit" class="submit-button">Avançar</button>
    </div>
  </form>
</template>

<script>
import { loginUser } from '../api/user.js';
import router from '../router';
import FormInput from '../components/FormInput.vue';

export default {
  data() {
    return {
      fields: {
        name: { vModel: '', label: 'Nome de Usuário', type: 'text', placeholder: 'ex: João Frango' },
        password: { vModel: '', label: 'Senha', type: 'password', placeholder: 'ex: 1234' },
      },
    };
  },
  components: {
    FormInput,
  },
  methods: {
    noLoginYet(data) {
      console.log("You pressed the button!");

      // Limpa os campos depois de enviar
      this.fields.name.vModel = '';
      this.fields.password.vModel = '';
    },
  },
  data() {
    return {
      name: '',
      password: '',
    };
  },
  methods: {
    async loginUser(e) {
      try {
        const response = await loginUser({
          name: this.name,
          password: this.password
        });

        const token = response.data.token;
        localStorage.setItem('jwt', token);

        // Limpa os campos do formulário e troca para a aba de notícias
        if (token) {
          succPopUp.fire({
            icon: 'success',
            title: 'Login realizado com sucesso'
          });

          this.name = '';
          this.password = '';
          router.push('/');
        }

      } catch (err) {
        console.error("Erro ao fazer login: ", err);

        errorPopUp.fire({
          icon: 'error',
          title: 'Erro ao fazer login'
        });
      }
    },
  },
}
</script>

<style scoped>
  @import '../formStyle.css';
</style>