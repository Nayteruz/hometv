import { defineStore } from 'pinia';
import { firebaseDb } from '@/plugins';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { updateDoc, doc } from 'firebase/firestore';
import {
  userDataGet,
  userDataSet,
  translateErrorCode,
} from '@/plugins/firebaseActions';
import { initUserData } from './utils';
import type {
  IAuthData,
  ICreateAuthData,
  IEditAuthData,
  IInitializedUserData,
  AppUser,
  IAuthStoreState,
} from './types';
import { useUserListsStore } from './userListsStore';
import type { FirebaseError } from 'firebase/app';

export const useAuthStore = defineStore('authStore', {
  state: (): IAuthStoreState => ({
    user: null,
    auth: getAuth(),
    errorMessage: '',
    apiKey: import.meta.env.VITE_API_FILM_LIST_KEY,
  }),

  actions: {
    async authWithEmailAndPassword(data: IAuthData) {
      await signInWithEmailAndPassword(this.auth, data.email, data.password)
        .then(() => this.getUserData())
        .catch((error: FirebaseError) => {
          this.errorMessage = translateErrorCode(error.code);
        });
    },

    async createAuthWithEmailAndPassword(data: ICreateAuthData) {
      await createUserWithEmailAndPassword(this.auth, data.email, data.password)
        .then(async (userCredential) => {
          this.user = userCredential.user as AppUser;
          await userDataSet(data, this.user.uid);
          await this.getUserData();
        })
        .catch((error: FirebaseError) => {
          this.errorMessage = translateErrorCode(error.code);
        });
    },

    async editAuthNameOrApiKey(data: IEditAuthData) {
      try {
        if (this.user) {
          const docRef = doc(firebaseDb, 'users', this.user.uid);
          await updateDoc(docRef, {
            name: data.userName || '',
            apiKey: data.apiKey || this.apiKey,
          });
        }
        await this.getUserData();
      } catch (error) {
        this.errorMessage = translateErrorCode((error as FirebaseError).code);
      }
    },

    async authLogout() {
      await signOut(this.auth)
        .then(() => this.removeUserData())
        .catch((error: FirebaseError) => {
          alert('Ошибка logout: ' + error);
        });
    },

    async authChange(callback?: () => void) {
      onAuthStateChanged(this.auth, async (user) => {
        if (user) {
          this.user = user as AppUser;
          this.getUserData(callback);
        } else {
          this.removeUserData(callback);
        }
      });
    },

    async getUserData(
      callback?: () => void
    ): Promise<IInitializedUserData | void> {
      if (!this.user) return;

      const data: IInitializedUserData = initUserData(
        await userDataGet(this.user.uid)
      );

      this.user.name = data.name;
      this.user.email = data.email;
      this.apiKey = data.apiKey;

      useUserListsStore().hydrate(data);

      typeof callback === 'function' && callback();

      return data;
    },

    removeUserData(callback?: () => void) {
      this.user = null;

      useUserListsStore().reset();

      typeof callback === 'function' && callback();
    },
  },
});
