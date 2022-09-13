<template>
  <form action="" method="get" class="form-login">
    <div class="container">
      <div class="form-and-check">
        <div class="form-content">
          <div class="form-field">
            <label for="name">Nome de Usuário</label>
            <input type="text" name="name" id="name" required>
          </div>
          <div class="form-field">
            <label for="password">Senha</label>
            <input type="password" name="password" id="password" required>
          </div>
        </div>
        <div class = "check">
          <input type="checkbox" id="manter" name="manter">
          <label for="manter"> Mantenha me conectado</label>
        </div>
      </div>
      <div class="form-button">
        <input type="submit" class="login-btn" value="Iniciar seção">
      </div>
    </div>
  </form>
</template>

<script setup>

</script>

<style scoped>
.form-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: fit-content;
  margin: auto;
  gap: 0.5rem;
  padding: 0.5rem;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form-and-check {
  padding: 1rem;
}

.check {
  padding: 0.5em;  
}
.login-btn {
  font-family: inherit;
  background-color: transparent;
  font-size: 1.2rem;
  color: var(--font-color-primary);
  padding: 16px 20px;
  margin: 8px 0;
  cursor: pointer;
  width: fit-content;
  opacity: 0.9;
  align-items: center;
  border: 1px solid var(--background-color-secondary);
  border-radius: 5px;
  transition: all;
  transition-duration: 0.4s;
}

.login-btn:hover {
    transition-duration: 0.4s;
    background-color: var(--background-color-secondary);
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

.form-field {
  width: fit-content;
}

.form-field>label {
  margin-right: 5px;
}
</style>