<template>
  <div class="registration--form">
    <h3 class="name">Регистрация</h3>
    <p><input type="text" placeholder="Почта" v-model="email" /></p>
    <p><input type="text" placeholder="Имя" v-model="userName" /></p>
    <p>
      <input type="text" placeholder="Api ключ" v-model="apiKey" />
      <small>
        <a target="_blank" href="https://kinopoiskapiunofficial.tech/signup"
          >получить ключ API</a
        >
      </small>
    </p>
    <p><input type="password" placeholder="Password" v-model="password" /></p>
    <p class="err-string" v-if="authStore.errorMessage">
      {{ authStore.errorMessage }}
    </p>
    <div class="btns">
      <button class="reg" @click.prevent="register">Регистрация</button>
      <button class="sign" @click.stop="setFormView">Войти</button>
      <IconGoogle @click="signWithGoogle" />
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import IconGoogle from '@/components/icons/IconGoogle.vue';
  import { useAuthStore } from '@/stores/authStore';

  const emit = defineEmits(['setForm']);
  const authStore = useAuthStore();
  const email = ref('');
  const password = ref('');
  const userName = ref('');
  const apiKey = ref('');

  const register = async () => {
    await authStore.createAuthWithEmailAndPassword({
      email: email.value,
      password: password.value,
      userName: userName.value,
      apiKey: apiKey.value,
    });
  };

  const setFormView = () => {
    emit('setForm', 'sign');
  };

  const signWithGoogle = () => {
    console.warn('ok');
  };
</script>

<style scoped>
  .name {
    color: #333;
    margin: 0;
  }

  .registration--form button.sign {
    background: transparent;
    border: 1px solid #2c4f91;
    color: #2c4f91;
  }
</style>
