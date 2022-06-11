<template>
  <div class="registration--form">
    <h3 class="name">Авторизация</h3>
    <p><input type="text" placeholder="Email" v-model="email"></p>
    <p><input type="password" placeholder="Password" v-model="password"></p>
    <p class="err-string" v-if="errMsg.length">{{ errMsg }}</p>
    <div class="btns">
      <button class="sign" @click.prevent="signIn">Войти</button>
      <button class="reg" @click.prevent="setFormView">Регистрация</button>
      <IconGoogle @click="signWithGoogle"/>
    </div>
  </div>
</template>

<script>
import {ref} from "vue";
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import {useRouter} from 'vue-router';
import IconGoogle from "@/components/icons/IconGoogle.vue";

export default {
  name: "SignInComponent",
  components: {IconGoogle},

  setup(props,{emit}) {
    const email = ref('');
    const password = ref('');
    const errMsg = ref('')
    const router = useRouter();

    function signIn() {
      signInWithEmailAndPassword(getAuth(), email.value, password.value)
        .then(() => {
          console.log('Sign In Success!');
          router.push({name: 'home'});

        }).catch((e) => {
          switch (e.code) {
            case 'auth/invalid-email':
              errMsg.value = 'Некорректный email';
              break;
            case 'auth/user-not-found':
              errMsg.value = 'Пользователь не найден';
              break;
            case 'auth/wrong-password':
              errMsg.value = 'Некорректный пароль';
              break;
            default:
              errMsg.value = 'Некорретный email или пароль';
              break;
          }
      })
    }

    function setFormView(){
      emit('setForm', 'reg');
    }

    return {
      email,
      password,
      errMsg,
      signIn,
      setFormView
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