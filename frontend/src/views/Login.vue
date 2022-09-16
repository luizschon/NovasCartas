<template>
  <form action="" method="get" class="form" @submit.prevent="noLoginYet">
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
}
</script>

<style scoped>
  @import '../formStyle.css';
</style>