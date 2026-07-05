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
  IUserProfile,
} from './types';
import { useUserListsStore } from './userListsStore';
import type { FirebaseError } from 'firebase/app';

const createDefaultProfile = (): IUserProfile => ({
  name: '',
  email: '',
  apiKey: import.meta.env.VITE_API_FILM_LIST_KEY,
});

export const useAuthStore = defineStore('authStore', {
  state: (): IAuthStoreState => ({
    firebaseUser: null,
    profile: createDefaultProfile(),
    auth: getAuth(),
    errorMessage: '',
  }),

  getters: {
    user(): AppUser | null {
      if (!this.firebaseUser) return null;

      return {
        ...this.firebaseUser,
        name: this.profile.name,
        email: this.profile.email || this.firebaseUser.email,
      } as AppUser;
    },
  },

  actions: {
    clearError() {
      this.errorMessage = '';
    },

    resetAuthState() {
      this.firebaseUser = null;
      this.profile = createDefaultProfile();
      this.errorMessage = '';
      useUserListsStore().reset();
    },

    async authWithEmailAndPassword(data: IAuthData) {
      this.clearError();

      try {
        await signInWithEmailAndPassword(
          this.auth,
          data.email,
          data.password
        );
        await this.getUserData();
      } catch (error) {
        this.errorMessage = translateErrorCode((error as FirebaseError).code);
      }
    },

    async createAuthWithEmailAndPassword(data: ICreateAuthData) {
      this.clearError();

      try {
        const userCredential = await createUserWithEmailAndPassword(
          this.auth,
          data.email,
          data.password
        );

        this.firebaseUser = userCredential.user as AppUser;
        await userDataSet(data, this.firebaseUser.uid);
        await this.getUserData();
      } catch (error) {
        this.errorMessage = translateErrorCode((error as FirebaseError).code);
      }
    },

    async editAuthNameOrApiKey(data: IEditAuthData) {
      try {
        if (this.firebaseUser) {
          const docRef = doc(firebaseDb, 'users', this.firebaseUser.uid);
          await updateDoc(docRef, {
            name: data.userName || this.profile.name,
            apiKey: data.apiKey || this.profile.apiKey,
          });
        }
        await this.getUserData();
      } catch (error) {
        this.errorMessage = translateErrorCode((error as FirebaseError).code);
      }
    },

    async authLogout() {
      try {
        await signOut(this.auth);
        this.resetAuthState();
      } catch (error) {
        this.errorMessage = translateErrorCode((error as FirebaseError).code);
      }
    },

    authChange(callback?: () => void) {
      return onAuthStateChanged(this.auth, async (user) => {
        if (user) {
          this.firebaseUser = user as AppUser;
          this.getUserData(callback);
        } else {
          this.removeUserData(callback);
        }
      });
    },

    async getUserData(
      callback?: () => void
    ): Promise<IInitializedUserData | void> {
      if (!this.firebaseUser) return;

      const data: IInitializedUserData = initUserData(
        await userDataGet(this.firebaseUser.uid)
      );

      this.profile = {
        name: data.name,
        email: data.email,
        apiKey: data.apiKey,
      };

      useUserListsStore().hydrate(data);

      callback?.();

      return data;
    },

    removeUserData(callback?: () => void) {
      this.resetAuthState();
      callback?.();
    },
  },
});
