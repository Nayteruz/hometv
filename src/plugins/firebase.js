import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import firebaseConfig from '@/plugins/firebaseConfig';

export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseDb = getFirestore(firebaseApp);
