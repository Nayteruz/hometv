<template>
  <div class="registration--form">
    <h3>Регистрация</h3>
    <p><input type="text" placeholder="Почта" v-model="email" /></p>
    <p><input type="text" placeholder="Имя" v-model="user_name" /></p>
    <p>
      <input type="text" placeholder="Api ключ" v-model="api_key" />
      <small>
        <a target="_blank" href="https://kinopoiskapiunofficial.tech/signup"
          >получить ключ API</a
        >
      </small>
    </p>
    <p><input type="password" placeholder="Password" v-model="password" /></p>
    <p class="err-string" v-if="filmStore.errorMessage">
      {{ filmStore.errorMessage }}
    </p>
    <div class="btns">
      <button class="reg" @click.prevent="register">Регистрация</button>
      <button class="sign" @click.prevent="setFormView">Войти</button>
      <IconGoogle @click="signWithGoogle" />
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import IconGoogle from '@/components/icons/IconGoogle.vue';
  import { useFilmStore } from '@/stores/filmStore';

  const emit = defineEmits(['setForm']);
  const filmStore = useFilmStore();
  const email = ref('');
  const password = ref('');
  const user_name = ref('');
  const api_key = ref('');

  const register = async () => {
    await filmStore.createAuthWithEmailAndPassword({
      email: email.value,
      password: password.value,
      user_name: user_name.value,
      api_key: api_key.value,
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
  .registration--form button.sign {
    background: transparent;
    border: 1px solid #2c4f91;
    color: #2c4f91;
  }
</style>
