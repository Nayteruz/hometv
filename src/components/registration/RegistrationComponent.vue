<template>
  <div class="registration--form">
    <h3>Регистрация</h3>
    <p><input type="text" placeholder="Email" v-model="email"></p>
    <p><input type="text" placeholder="Name" v-model="user_name"></p>
    <p>
      <input type="text" placeholder="Api key" v-model="api_key">
      <small><a href="https://kinopoiskapiunofficial.tech/signup">зарегистрироваться</a></small>
    </p>
    <p><input type="password" placeholder="Password" v-model="password"></p>
    <p class="err-string" v-if="filmStore.errorMessage">{{ filmStore.errorMessage }}</p>
    <div class="btns">
      <button class="reg" @click.prevent="register">Регистрация</button>
      <button class="sign" @click.prevent="setFormView">Войти</button>
      <IconGoogle @click="signWithGoogle"/>
    </div>
  </div>
</template>

<script>
import {ref} from "vue";
import IconGoogle from "@/components/icons/IconGoogle.vue";
import {useFilmStore} from "@/stores/filmStore";
export default {
  name: "RegistrationComponent",
  components: {IconGoogle},
  setup(props, {emit}) {
    const filmStore = useFilmStore();
    const email = ref('');
    const password = ref('');
    const user_name = ref('');
    const api_key = ref('');

    async function register() {
      await filmStore.createAuthWithEmailAndPassword({email:email.value,password:password.value, user_name:user_name.value, api_key:api_key.value})
    }

    function setFormView() {
      emit('setForm', 'sign');
    }

    function signWithGoogle() {
      console.log('ok')
    }

    return {
      email,
      user_name,
      password,
      api_key,
      filmStore,
      register,
      signWithGoogle,
      setFormView
    }
  }
}
</script>

<style scoped>
.registration--form button.sign {
  background: transparent;
  border: 1px solid #2c4f91;
  color: #2c4f91;
}
</style>