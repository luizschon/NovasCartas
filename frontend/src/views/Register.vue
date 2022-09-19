<template>
  <form action="" method="get" class="form" @submit.prevent="createUser">
    <div class="form-title">Criar usuário</div>
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
import FormInput from '../components/FormInput.vue';
import { useUser } from '../store/user'
import Alert from '../alert.js';
import router from '../router';

const alert = new Alert({
  errorIcon: 'error',
  errorTitle: 'Erro ao cadastrar usuário',
  succIcon: 'success',
  succTitle: 'Usuário cadastrado com sucesso',
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
    // Cria usuário 
    async createUser(data) {
      try {
        const name = this.fields.name.vModel;
        const password = this.fields.password.vModel;

        await useUser().registerUser(name, password);

        alert.fireSuccess();

        this.name = '';
        this.password = '';
        router.push('/');

      } catch (err) {
        console.error("Erro ao criar usuário: ", err);
        alert.fireError();
      }
    },
  }
}
</script>

<style scoped>
  @import '../formStyle.css';
</style>
