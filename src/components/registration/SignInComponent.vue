<template>
  <div class="registration--form">
    <h3 class="name">Авторизация</h3>
    <p><input type="text" placeholder="Email" v-model="email" /></p>
    <p><input type="password" placeholder="Password" v-model="password" /></p>
    <p class="err-string" v-if="authStore.errorMessage">
      {{ authStore.errorMessage }}
    </p>
    <div class="btns">
      <button class="sign" @click.prevent="signIn">Войти</button>
      <button class="reg" @click.stop="setFormView">Регистрация</button>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import { useAuthStore } from '@/stores/authStore';

  const emit = defineEmits(['setForm']);
  const email = ref('');
  const password = ref('');
  const authStore = useAuthStore();

  const signIn = async () => {
    await authStore.authWithEmailAndPassword({
      email: email.value,
      password: password.value,
    });
  };

  const setFormView = () => {
    emit('setForm', 'reg');
  };
</script>

<style scoped>
  .name {
    color: #333;
    margin: 0;
  }

  .registration--form button.reg {
    background: transparent;
    border: 1px solid #2c4f91;
    color: #2c4f91;
  }
</style>
