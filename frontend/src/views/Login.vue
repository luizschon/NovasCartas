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
import { useUser } from '../store/user';
import router from '../router';
import FormInput from '../components/FormInput.vue';
import Alert from '../alert.js';

const alert = new Alert({
  errorIcon: 'error',
  errorTitle: 'Erro ao fazer login',
  succIcon: 'success',
  succTitle: 'Login realizado com sucesso',
});

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
    async loginUser(e) {
      try {
        const name = this.fields.name.vModel;
        const password = this.fields.password.vModel;

        useUser().login(name, password);

        // Limpa os campos do formulário e troca para a aba de notícias
        alert.fireSuccess();

        this.name = '';
        this.password = '';
        router.push('/');

      } catch (err) {
        console.error("Erro ao fazer login: ", err);
        alert.fireError();
      }
    },
  },
}
</script>

<style scoped>
  @import '../formStyle.css';
</style>
