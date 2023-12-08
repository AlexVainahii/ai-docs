import { createAsyncThunk } from '@reduxjs/toolkit';
import { getStorage, ref, getDownloadURL, uploadBytes } from 'firebase/storage';
import { toast } from 'react-toastify';
import { initializeApp } from 'firebase/app';
import {
  collection,
  addDoc,
  deleteDoc,
  getDocs,
  doc,
  getFirestore,
  updateDoc,
} from 'firebase/firestore';
const firebaseConfig = {
  apiKey: 'AIzaSyAXxd5BLFD3cjyRh4yRnr-CKRAsYniXUek',
  authDomain: 'ai-docs-1807d.firebaseapp.com',
  projectId: 'ai-docs-1807d',
  storageBucket: 'ai-docs-1807d.appspot.com',
  messagingSenderId: '722774303553',
  appId: '1:722774303553:web:8f91361d17034c050bf7c0',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const storage = getStorage(app);

export const setImage = async (dirname, uri, uid) => {
  const data = await fetch(uri);
  const photo = await data.blob();
  const storagePhotoRef = ref(storage, `${dirname}/${uid}.jpg`);
  try {
    const snapshot = await uploadBytes(storagePhotoRef, photo);
    const url = await getDownloadURL(snapshot.ref);
    return url;
  } catch (error) {
    console.log('error :>> ', error);
  }
};
export const fetchTemplates = createAsyncThunk(
  'template/fetchAll',
  async (_, thunkAPI) => {
    try {
      const templateCollection = collection(db, 'templates');
      const querySnapshot = await getDocs(templateCollection);

      const templates = [];
      querySnapshot.forEach(template => {
        templates.push({ id: template.id, ...template.data() });
      });
      const favtemplateCollection = collection(db, 'favtemplates');
      const querySnapshot1 = await getDocs(favtemplateCollection);

      const favtemplates = [];
      querySnapshot1.forEach(template => {
        favtemplates.push({ id: template.id, ...template.data() });
      });

      return { templates, favtemplates };
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addTemplate = createAsyncThunk(
  'templates/addTemplate',
  async ({ userEmail, name, description, templateImageUrl }, thunkAPI) => {
    try {
      const templatesCollection = collection(db, 'templates');

      const docRef = await addDoc(templatesCollection, {
        name,
        description,
        userEmail,
        templateImageUrl,
      });
      toast.success(`Templete added`);
      return { id: docRef.id, userEmail, name, description };
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const updateTemplate = createAsyncThunk(
  'templates/updateTemplate',
  async (updatedTemplate, thunkAPI) => {
    try {
      await updateDoc(
        doc(db, 'templates', updatedTemplate.id),
        updatedTemplate
      );
      toast.success(`Templete updated`);
      return updatedTemplate;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const deleteTemplate = createAsyncThunk(
  'templates/deleteTemplate',
  async (templateId, thunkAPI) => {
    try {
      const templatesCollection = collection(db, 'templates');
      await deleteDoc(doc(templatesCollection, templateId));
      toast.success(`Templete deleted`);
      return templateId;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const addTemplateFavorite = createAsyncThunk(
  'templates/addTemplateFavorite',
  async ({ templateId, bool }, thunkAPI) => {
    try {
      if (bool) {
        const templatesCollection = collection(db, 'favtemplates');
        const docRef = await addDoc(templatesCollection, { uid: templateId });
        toast.success(`favTemplete added`);
        return { templateId: { id: docRef.id, uid: templateId }, bool };
      } else {
        const templatesCollection = collection(db, 'favtemplates');
        await deleteDoc(doc(templatesCollection, templateId.id));
        toast.success(`Templete deleted`);
        return { templateId, bool };
      }
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
