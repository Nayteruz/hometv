<template>
  <div class="registration-wrap">
    <IconUser @click="togglePop" />
    <div class="registration-wrap--pop" v-if="isVisible">
      <LogoutComponent v-if="filmStore.user" @setForm="setForm" />
      <SignInComponent v-else-if="formView === 'sign'" @setForm="setForm" />
      <RegistrationComponent
        v-else-if="formView === 'reg'"
        @setForm="setForm"
      />
    </div>
  </div>
</template>

<script>
  import IconUser from '@/components/icons/IconUser.vue';
  import { onMounted, ref, inject } from 'vue';
  import RegistrationComponent from '@/components/registration/RegistrationComponent.vue';
  import SignInComponent from '@/components/registration/SignInComponent.vue';
  import LogoutComponent from '@/components/registration/LogoutComponent.vue';
  import { useFilmStore } from '@/stores/filmStore';

  export default {
    name: 'RegistrationWrap',
    components: {
      IconUser,
      RegistrationComponent,
      SignInComponent,
      LogoutComponent,
    },
    setup() {
      const filmStore = useFilmStore();
      const isVisible = ref(false);
      const formView = ref('sign');
      const emitter = inject('emitter');

      function togglePop() {
        isVisible.value = !isVisible.value;
      }

      function setForm(e) {
        filmStore.errorMessage = '';
        formView.value = e;
      }

      function updateFavorite() {
        emitter.emit('setUserData');
      }

      onMounted(async () => {
        await filmStore.authChange(updateFavorite);
        await emitter.emit('setUserData');
      });

      return {
        isVisible,
        setForm,
        togglePop,
        formView,
        filmStore,
      };
    },
  };
</script>

<style>
  .registration--form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .registration--form h3 {
    font-size: 16px;
    font-weight: normal;
  }

  .registration--form input {
    padding: 6px 14px;
    border-radius: 6px;
    width: 100%;
    height: auto;
    outline: none;
    color: rgba(57, 57, 57, 1);
    border: 1px solid rgba(18, 18, 18, 0.15);
    background: #f6fafc;
    font-size: 15px;
  }
  .registration--form input::placeholder {
    color: rgba(57, 57, 57, 0.5);
  }

  .registration--form .btns {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
  }

  .registration--form button {
    background: #2c4f91;
    font-size: 13px;
    font-weight: bold;
    height: auto;
    min-height: auto;
    outline: none;
    transition: all 0.2s;
    text-align: center;
    padding: 8px 15px;
    cursor: pointer;
    border: none;
    border-radius: 10px;
    color: #fff;
  }

  .registration--form button:hover {
    background: #4169b5;
  }

  .registration--form button:active {
    background: #193364;
  }

  .err-string {
    background: #e78484;
    padding: 5px 10px;
    color: #fff;
    font-size: 14px;
    border-radius: 5px;
  }
</style>

<style scoped>
  .registration-wrap {
    position: relative;
    z-index: 100;
  }

  .registration-wrap--pop {
    position: absolute;
    right: 0;
    top: 100%;
    margin-top: 5px;
    background: #ffff;
    border-radius: 10px;
    padding: 15px;
    min-height: 100px;
    min-width: 250px;
  }
</style>
