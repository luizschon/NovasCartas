<template>
  <form action="" method="get" class="form" ref="form" @submit="createUser">
    <div class="form-title">Criar conta</div>
    <div class="form-content">
      <div class="form-fields">
        <div class="form-field">
          <label for="name">Nome de Usuário</label>
          <input type="text" v-model="name" name="name" id="name" placeholder="ex: João Frango" ref="username" required>
        </div>
        <div class="form-field">
          <label for="password">Senha</label>
          <input type="password" v-model="password" name="password" id="password" placeholder="ex: 1234" required>
        </div>
      </div>
    </div>
    <div class="button-container">
      <button type="submit" class="register-btn">Avançar</button>
    </div>
  </form>
</template>

<script>
import { createUser } from '../api/user.js';
import Swal from 'sweetalert2';
import router from '../router';

// Mensagem de erro
const errorPopUp = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  background: '#fee',
  color: '#323232'
});

// Mensagem de sucesso
const succPopUp = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  background: '#efe',
  color: '#323232'
});

export default {
  name: 'Register',
  mounted() {
    this.$refs.username.focus();
  },
  data() {
    return {
      name: '',
      password: '',
    };
  },
  methods: {
    // Cria usuário 
    async createUser(e) {
      e.preventDefault();

      try {
        await createUser({
          name: this.name,
          password: this.password
        });

        succPopUp.fire({
          icon: 'success',
          title: 'Usuário cadastrado com sucesso'
        });

        // Limpa os campos do formulário e troca para a aba de notícias
        this.name = '';
        this.password = '';

        router.push('/');

      } catch (err) {
        console.error("Erro ao criar usuário: ", err);

        errorPopUp.fire({
          icon: 'error',
          title: 'Erro ao cadastrar usuário'
        });
      }
    },
  },
}
</script>

<style scoped>

.form-title {
  font-size: 1.6rem;
}

.form {
  background-color: var(--background-color-secondary);
  border-radius: 10px;
  padding: 60px 40px 60px;
  width: fit-content;
  margin: 0rem auto;
}

.form-content {
  gap: 20rem;
  justify-content: center;
  width: 100%;
  display: flex;
}

.form-fields {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  gap: 20px;
  margin-top: 50px;
}

.form-field {
  display: flex;
  flex-direction: column;
  margin: auto;
  min-width: 400px;
}

.form-field>label {
  align-self: flex-start;
  font-size: 0.8rem;
}

.form-field>input {
  height: 2rem;
  border-radius: 5px;
  border: 0;
  padding: 5px 15px;
  font-family: inherit;
  font-size: 1.0rem;
  outline: none;
}

.button-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 60px;
}

.register-btn {
  font-family: inherit;
  background-color: transparent;
  font-size: 1.0rem;
  color: var(--font-color-primary);
  padding: 12px 18px;
  cursor: pointer;
  width: fit-content;
  opacity: 0.9;
  align-items: center;
  border-radius: 5px;
  transition: all;
  transition-duration: 0.4s;
  align-self: flex-end;
  border: 1px solid transparent;
}

.register-btn:hover {
  transition-duration: 0.4s;
  border: 1px solid white;
}

::placeholder {
  font-style: italic;
}
</style>