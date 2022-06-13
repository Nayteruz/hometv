<template>
  <div class="registration--form">
    <h3>Выйти: {{ filmStore.user.name }}</h3>
    <div class="btns">
      <button class="reg" @click.prevent="logout">Выйти</button>
    </div>
  </div>
</template>

<script>
import {onMounted, ref} from "vue";
import {getAuth, onAuthStateChanged, signOut} from 'firebase/auth';
import {inject} from "vue";
import {useFilmStore} from "@/stores/filmStore";

export default {
  name: "LogoutComponent",
  setup() {
    const filmStore = useFilmStore();
    const isLoggedIn = ref(false);
    const emitter = inject('emitter');

    let auth;
    onMounted(() => {
      auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        isLoggedIn.value = !!user;
      })
    })

    function logout() {
      signOut(auth).then(() => {
        emitter.emit('registrationSubmit', {action:'logout'});
      })
    }

    return {
      logout,
      filmStore
    }
  }
}
</script>

<style scoped>

</style>