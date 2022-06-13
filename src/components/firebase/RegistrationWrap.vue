<template>
  <div class="registration-wrap">
    <IconUser @click="togglePop"/>
    <div class="registration-wrap--pop" v-if="isVisible">
      <LogoutComponent v-if="filmStore.user"/>
      <SignInComponent v-else-if="formView === 'sign'" @setForm="setForm"/>
      <RegistrationComponent v-else-if="formView === 'reg'" @setForm="setForm"/>
    </div>
  </div>
</template>

<script>
import IconUser from '@/components/icons/IconUser.vue'
import {onMounted, ref} from "vue";
import RegistrationComponent from "@/components/firebase/RegistrationComponent";
import SignInComponent from "@/components/firebase/SignInComponent";
import LogoutComponent from "@/components/firebase/LogoutComponent";
import {getAuth, onAuthStateChanged} from 'firebase/auth';
import {inject} from "vue";

import { setDoc, getDoc, doc } from "firebase/firestore";
import {firebaseDb} from "@/plugins";
import {useFilmStore} from "@/stores/filmStore";

export default {
  name: "RegistrationWrap",
  components: {IconUser, RegistrationComponent, SignInComponent, LogoutComponent},
  setup() {
    const filmStore = useFilmStore();
    const isVisible = ref(false);
    const formView = ref('sign');
    const emitter = inject('emitter');

    function togglePop() {
      isVisible.value = !isVisible.value;
    }

    function setForm(e) {
      formView.value = e;
    }

    function getCurrentUser(){
      return new Promise((resolve, reject)=>{
        const removeListener = onAuthStateChanged(
            getAuth(),
            (user)=>{
              removeListener();
              resolve(user);
            },
            reject
        )
      })
    }

    async function getUserData(){
      const docRef = doc(firebaseDb, "users", filmStore.user.uid);
      const docSnap = await getDoc(docRef);
      if (await docSnap.exists()) {
        let data = docSnap.data()
        console.log("Document data:", docSnap.data());
        filmStore.user.name = data.name;
        filmStore.user.email = data.email;
        filmStore.favorites = data.favorites;
        emitter.emit('setUserData')
      } else {
        alert('Данные не найдены')
      }

    }

    async function onRegistrationSubmit({action, data}){
      filmStore.user = await getCurrentUser();
      if(filmStore.user) {
        if(action === 'registration'){
          try {
            await setDoc(doc(firebaseDb, "users", filmStore.user.uid), {
              name: data.user_name || '',
              email: data.email || '',
              favorites: [],
            });
            await getUserData()
          } catch (e) {
            alert("Ошибка создания пользователя: " + e);
          }
        } else if(action === 'sign'){
          await getUserData()
        }
      } else if(action === 'logout'){
        console.log('logout')
        filmStore.user = {};
        filmStore.favorites = [];
        formView.value = 'sign';
      }
    }

    emitter.on('registrationSubmit', onRegistrationSubmit)

    onMounted(async () => {
      filmStore.user = await getCurrentUser();
      if(filmStore.user){
        await getUserData();
      }
    })

    return {
      isVisible,
      setForm,
      togglePop,
      formView,
      filmStore,
    }
  }
}
</script>

<style>
.registration--form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.registration--form h3 {
  font-size: 18px;
  font-weight: normal;
}

.registration--form input {
  padding: 6px 14px;
  border-radius: 6px;
  width: 100%;
  height: auto;
  outline: none;
  color: rgba(57, 57, 57, 0.5);
  border: 1px solid rgba(18, 18, 18, 0.15);
  background: #f6fafc;
  font-size: 15px;
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