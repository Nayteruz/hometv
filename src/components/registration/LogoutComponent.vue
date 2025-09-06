<template>
  <div class="registration--form">
    <h3>
      Вы вошли как:
      <strong class="name">{{ filmStore.user.name }}</strong>
      <button class="edit" @click="toggleView"><IconEdit /></button>
    </h3>
    <div v-if="viewApiContainer" class="container">
      <p><input type="text" placeholder="Имя" v-model="userName" /></p>
      <p><input type="text" placeholder="Api ключ" v-model="apiKey" /></p>
      <button @click="updateUser">Сохранить</button>
    </div>
    <div class="btns">
      <button class="reg" @click.prevent="logout">Выйти</button>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import { useFilmStore } from '@/stores/filmStore';
  import IconEdit from '@/components/icons/IconEdit.vue';

  const filmStore = useFilmStore();

  const viewApiContainer = ref(false);

  const userName = ref(filmStore.user.name);
  const apiKey = ref(filmStore.apiKey);

  const updateUser = async () => {
    if (userName.value.length < 3) {
      return;
    }

    viewApiContainer.value = false;
    await filmStore.editAuthNameOrApiKey({
      userName: userName.value,
      apiKey: apiKey.value,
    });
  };

  const toggleView = () => {
    viewApiContainer.value = !viewApiContainer.value;
  };

  const logout = async () => {
    await filmStore.authLogout();
  };
</script>

<style lang="scss" scoped>
  .toggle {
    font-size: 12px;
  }

  .edit {
    padding: 0 3px;
    border-radius: 5px;
    background-color: transparent;
    color: #2c4f91;
    margin-left: auto;

    svg {
      width: 18px;
      height: 18px;
    }

    &:hover {
      background-color: #2c4f91;
      color: #fff;
    }
  }

  .name {
    max-width: 150px;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .registration--form h3 {
    font-size: 16px;
    font-weight: normal;
    display: flex;
    gap: 3px;
    align-items: center;
    white-space: nowrap;
  }

  .container {
    display: flex;
    flex-direction: column;
    gap: 5px;

    & input {
      font-size: 13px;
      padding: 4px 8px;
    }
  }
</style>
