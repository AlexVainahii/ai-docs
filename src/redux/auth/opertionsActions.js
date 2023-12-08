import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
// import { setError, setLoading, setUser } from './authSlice';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAXxd5BLFD3cjyRh4yRnr-CKRAsYniXUek',
  authDomain: 'ai-docs-1807d.firebaseapp.com',
  projectId: 'ai-docs-1807d',
  storageBucket: 'ai-docs-1807d.appspot.com',
  messagingSenderId: '722774303553',
  appId: '1:722774303553:web:8f91361d17034c050bf7c0',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth1 = getAuth(app);

// Створюємо провайдера Google для авторизації через Google
const googleProvider = new GoogleAuthProvider();

export const register = createAsyncThunk(
  'auth/register',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth1,
        email,
        password
      );
      const user = userCredential.user;
      return user;
    } catch (e) {
      toast.error(`User with email ${email} is already registered!`);

      return rejectWithValue(e.message);
    }
  }
);
export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth1,
        email,
        password
      );
      const user = userCredential.user;
      return user;
    } catch (e) {
      toast.error(`User ${email} is login error.`);

      return rejectWithValue(e.message);
    }
  }
);
export const loginWithGoogle = createAsyncThunk(
  'auth/loginWithGoogle',
  async (_, { rejectWithValue }) => {
    try {
      const userCredential = await signInWithPopup(auth1, googleProvider);
      const { displayName, email } = userCredential.user;

      return { displayName, email };
    } catch (e) {
      console.log('e :>> ', e);
      toast.error(`User  is login error.`);

      return rejectWithValue(e.message);
    }
  }
);
export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await signOut(auth1);
      return;
    } catch (e) {
      if (e.response.status === 400) {
        toast.error(`Invalid Log Out`);
      } else if (e.response.status === '500') {
        toast.error('Server error');
      }
      return rejectWithValue(e.message);
    }
  }
);
export const userRefresh = createAsyncThunk(
  'auth/refresh',
  async (_, { rejectWithValue, getState }) => {
    const state = getState();
    const getUser = state.auth.user;
    if (getUser === null) {
      return rejectWithValue('User is not logged in');
    }
    try {
      onAuthStateChanged(auth1, user => {
        if (user) {
          return true;
          // ...
        } else {
          return false;
          // User is signed out
          // toast.error(` User is signed out`);
        }
      });
    } catch (e) {
      if (e.response.status === 401) {
        toast.error(`Not authorized`);
      }
      return rejectWithValue(e.message);
    }
  }
);

// export const register = (email, password) => async dispatch => {
//   try {
//     dispatch(setLoading(true));
//     const userCredential = await createUserWithEmailAndPassword(
//       auth1,
//       email,
//       password
//     );
//     const user = userCredential.user;

//     dispatch(
//       setUser({
//         uid: user.uid,
//         email: user.email,
//         displayName: user.email,
//       })
//     );
//     dispatch(setLoading(false));
//   } catch (error) {
//     dispatch(setError(error.message));
//     dispatch(setLoading(false));
//   }
// };

// export const login = (email, password) => async dispatch => {
//   try {
//     dispatch(setLoading(true));
//     const userCredential = await signInWithEmailAndPassword(
//       auth1,
//       email,
//       password
//     );
//     const user = userCredential.user;
//     dispatch(
//       setUser({
//         uid: user.uid,
//         email: user.email,
//         displayName: user.email,
//       })
//     );
//     dispatch(setLoading(false));
//   } catch (error) {
//     dispatch(setError(error.message));
//     dispatch(setLoading(false));
//   }
// };

// export const loginWithGoogle = () => async dispatch => {
//   try {
//     dispatch(setLoading(true));
//     const userCredential = await signInWithPopup(auth1, googleProvider);
//     const user = userCredential.user;
//     console.log('user :>> ', user);
//     dispatch(
//       setUser({
//         uid: user.uid,
//         email: user.email,
//         displayName: user.displayName,
//       })
//     );
//     dispatch(setLoading(false));
//   } catch (error) {
//     dispatch(setError(error.message));
//     dispatch(setLoading(false));
//   }
// };
// export const logout = () => async dispatch => {
//   try {
//     dispatch(setLoading(true));
//     await signOut(auth1);
//     dispatch(setUser(null));
//     dispatch(setLoading(false));
//   } catch (error) {
//     dispatch(setError(error.message));
//     dispatch(setLoading(false));
//   }
// };
