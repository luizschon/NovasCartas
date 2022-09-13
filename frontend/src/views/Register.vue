<template>
  <!-- <h2>Cadastrar</h2> -->
  <form action="" method="get" class="form-login">
    <div class = "form-e-prefs">
      <div class="form-content">
        <div class="form-fields">
          <div class="form-field">
            <label for="name">Nome de Usuário</label>
            <input type="text" name="name" id="name" required>
          </div>
          <div class="form-field">
            <label for="password">Senha</label>
            <input type="password" name="password" id="password" required>
          </div>
        </div>
    
      <div class="preferences">
        <h3> Preferências Iniciais</h3>
          <div class="pref-box">
            <input type="checkbox" id="politica" name="politica">
            <label for="politica"> Política </label>
          </div>
          <div class="pref-box">
            <input type="checkbox" id="entretenimento" name="entretenimento">
            <label for="entretenimento"> Entretenimento </label>
          </div>
          <div class="pref-box">
            <input type="checkbox" id="ciencia" name="ciencia">
            <label for="ciencia"> Ciência </label>
          </div>
          <div class="pref-box">
            <input type="checkbox" id="politica" name="politica">
            <label for="personalidades"> Personalidades </label>
          </div>
        </div>
      </div>
    </div>
    <button type="submit" class="regstr-btn">Cadastrar</button>
  </form>
</template>

<script setup>
  
</script>

<style scoped>

  .form-login {
    /* background-color: var(--background-color-secondary);
    border-radius: 30px;
    padding: 40px;
    width: fit-content; */
    margin: 2rem auto;
  }

  .form-e-prefs{
    display:flex;
    flex-direction:row;
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
    gap: 10px;
  }

  .form-field > label {
    margin-right: 5px;
  }

  .pref-box {
    display: flex;
    gap: 7px;
  }

  .regstr-btn {
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

  .regstr-btn:hover {
    transition-duration: 0.4s;
    background-color: var(--background-color-secondary);
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
  
</style>