import { doc, getDoc, setDoc } from 'firebase/firestore';
import { firebaseDb } from '@/plugins/firebase';

export const userDataGet = async function (uid: string) {
  const docRef = doc(firebaseDb, 'users', uid);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    return null;
  }
};

export const userDataSet = async (data: Record<string, any>, uid: string) => {
  await setDoc(doc(firebaseDb, 'users', uid), {
    name: data.user_name || '',
    email: data.email || '',
    favorites: [],
    api_key: data.api_key || '',
  });
};

export const translateErrorCode = function (code: string) {
  switch (code) {
    case 'auth/wrong-password':
      return 'Неверный пароль';
    case 'auth/internal-error':
      return 'Неизвестная ошибка';
    case 'auth/invalid-email':
      return 'Недопустимый email';
    case 'auth/user-not-found':
      return 'Пользователь не найден';
    case 'auth/weak-password':
      return 'Пароль не менее 6 символов';
    default:
      return 'Ошибка авторизации';
  }
};

export const ignore_genre = [
  '',
  'для взрослых',
  'мюзикл',
  'спорт',
  'церемония',
  'фильм-нуар',
  'биография',
  'вестерн',
  'короткометражка',
  'документальный',
  'документальный',
  'реальное ТВ',
  'ток-шоу',
  'концерт',
  'игра',
  'новости',
];
