<template>
  <div class="registration--form">
    <h3 class="name">Авторизация</h3>
    <p><input type="text" placeholder="Email" v-model="email"></p>
    <p><input type="password" placeholder="Password" v-model="password"></p>
    <p class="err-string" v-if="filmStore.errorMessage">{{ filmStore.errorMessage }}</p>
    <div class="btns">
      <button class="sign" @click.prevent="signIn">Войти</button>
      <button class="reg" @click.prevent="setFormView">Регистрация</button>
<!--      <IconGoogle @click="signWithGoogle"/>-->
    </div>
  </div>
</template>

<script>
import {ref} from "vue";
import '@/plugins/index';
import {useFilmStore} from "@/stores/filmStore";

export default {
  name: "SignInComponent",

  setup(props,{emit}) {
    const email = ref('');
    const password = ref('');
    const errMsg = ref('')
    const filmStore = useFilmStore();

    async function signIn() {
      await filmStore.authWithEmailAndPassword({email:email.value,password:password.value})
    }

    function setFormView(){
      emit('setForm', 'reg');
    }

    return {
      email,
      password,
      errMsg,
      signIn,
      setFormView,
      filmStore
    }
  }
}
</script>

<style scoped>

.registration--form button.reg {
  background: transparent;
  border: 1px solid #2c4f91;
  color: #2c4f91;
}

</style>