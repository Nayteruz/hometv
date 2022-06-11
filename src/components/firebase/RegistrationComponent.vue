<template>
  <div class="registration--form">
    <h3>Регистрация</h3>
    <p><input type="text" placeholder="Email" v-model="email"></p>
    <p><input type="password" placeholder="Password" v-model="password"></p>
    <p class="err-string" v-if="errMsg.length">{{ errMsg }}</p>
    <div class="btns">
      <button class="reg" @click.prevent="register">Регистрация</button>
      <button class="sign" @click.prevent="setFormView">Войти</button>
      <IconGoogle @click="signWithGoogle"/>
    </div>
  </div>
</template>

<script>
import {ref} from "vue";
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import {useRouter} from 'vue-router';
import IconGoogle from "@/components/icons/IconGoogle.vue";

export default {
  name: "RegistrationComponent",
  components: {IconGoogle},
  setup(props, {emit}) {
    const email = ref('');
    const password = ref('');
    const router = useRouter();
    const errMsg = ref('');

    function register() {
      createUserWithEmailAndPassword(getAuth(), email.value, password.value)
        .then(() => {
          router.push({name: 'home'});
        }).catch((e) => {
          switch (e.code) {
            case 'auth/email-already-in-use':
              errMsg.value = 'Email уже используется';
              break;
            case 'auth/invalid-email':
              errMsg.value = 'Не корректный Email';
              break;
            case 'auth/internal-error':
              errMsg.value = 'Ошибка регистрации';
              break;
            case 'auth/weak-password':
              errMsg.value = 'Пароль должен быть минимум 6 символов';
              break;
            default:
              errMsg.value = 'Ошибка регистрации'
          }
      })
    }

    function setFormView() {
      emit('setForm', 'sign');
    }

    function signWithGoogle() {

    }

    return {
      email,
      password,
      errMsg,
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