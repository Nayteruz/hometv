<template>
  <div class="registration--form">
    <h3>
      Вы вошли как: <strong>{{ filmStore.user.name }}</strong>
    </h3>
    <div class="btns">
      <button class="reg" @click.prevent="logout">Выйти</button>
    </div>
  </div>
</template>

<script>
  import { useFilmStore } from '@/stores/filmStore';

  export default {
    name: 'LogoutComponent',
    setup() {
      const filmStore = useFilmStore();

      async function logout() {
        await filmStore.authLogout();
      }

      return {
        logout,
        filmStore,
      };
    },
  };
</script>
