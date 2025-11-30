<template>
  <PopupContainer position="right" maxWidth="auto" class="popup">
    <template #icon>
      <IconUser class="icon" />
    </template>
    <template #content>
      <div class="registration-wrap--pop">
        <LogoutComponent v-if="filmStore.user" />
        <SignInComponent v-else-if="formView === 'sign'" @setForm="setForm" />
        <RegistrationComponent
          v-else-if="formView === 'reg'"
          @setForm="setForm"
        />
      </div>
    </template>
  </PopupContainer>
</template>

<script setup>
  import { onMounted, ref, inject } from 'vue';
  import IconUser from '@/components/icons/IconUser.vue';
  import RegistrationComponent from './RegistrationComponent.vue';
  import SignInComponent from './SignInComponent.vue';
  import LogoutComponent from './LogoutComponent.vue';
  import { useFilmStore } from '@/stores/filmStore';
  import PopupContainer from '../PopupContainer.vue';

  const filmStore = useFilmStore();
  const formView = ref('sign');
  const emitter = inject('emitter');

  const setForm = (e) => {
    filmStore.errorMessage = '';
    formView.value = e;
  };

  const updateFavorite = () => {
    emitter.emit('setUserData');
  };

  onMounted(async () => {
    await filmStore.authChange(updateFavorite);
    await emitter.emit('setUserData');
  });
</script>

<style>
  .registration--form {
    display: flex;
    flex-direction: column;
    gap: 10px;
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

  .button {
    width: 100%;
  }

  .popup .icon {
    width: 24px;
  }

  .registration-wrap--pop {
    padding: 15px;
    min-height: 100px;
    min-width: 250px;
  }
</style>
