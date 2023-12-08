import { createSlice } from '@reduxjs/toolkit';

import {
  STATUSES,
  createStatus,
  onFulfilled,
  onFulfilledAdd,
  onFulfilledDelete,
  onFulfilledFavorite,
  onFulfilledFetch,
  onFulfilledUpdate,
  onPending,
  onRejected,
  templatesInitialState,
} from './helpFunctionTemplate';
import {
  addTemplate,
  addTemplateFavorite,
  deleteTemplate,
  fetchTemplates,
  updateTemplate,
} from './operationsTemplate';

export const templatesSlice = createSlice({
  name: 'templates',
  initialState: templatesInitialState,
  extraReducers: builder => {
    const { PENDING, FULFILLED, REJECTED } = STATUSES;
    builder
      .addCase(fetchTemplates.fulfilled, onFulfilledFetch)
      .addCase(addTemplate.fulfilled, onFulfilledAdd)
      .addCase(updateTemplate.fulfilled, onFulfilledUpdate)
      .addCase(deleteTemplate.fulfilled, onFulfilledDelete)
      .addCase(addTemplateFavorite.fulfilled, onFulfilledFavorite)
      .addMatcher(createStatus(PENDING), onPending)
      .addMatcher(createStatus(REJECTED), onRejected)
      .addMatcher(createStatus(FULFILLED), onFulfilled);
  },
});
// import { createSlice } from '@reduxjs/toolkit';
// import { initializeApp } from 'firebase/app';
// import {
//   addDoc,
//   collection,
//   deleteDoc,
//   doc,
//   getFirestore,
//   updateDoc,
// } from 'firebase/firestore';

// const firebaseConfig = {
//   apiKey: 'AIzaSyAXxd5BLFD3cjyRh4yRnr-CKRAsYniXUek',
//   authDomain: 'ai-docs-1807d.firebaseapp.com',
//   projectId: 'ai-docs-1807d',
//   storageBucket: 'ai-docs-1807d.appspot.com',
//   messagingSenderId: '722774303553',
//   appId: '1:722774303553:web:8f91361d17034c050bf7c0',
// };
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// const itemsSlice = createSlice({
//   name: 'items',
//   initialState: { items: [] },
//   reducers: {
//     addItem: async (state, action) => {
//       const newItem = action.payload;
//       try {
//         const docRef = await addDoc(collection(db, 'docs'), newItem);
//         newItem.id = docRef.id;
//         state.items.push(newItem);
//       } catch (error) {
//         console.error('Error adding item:', error);
//       }
//     },
//     removeItem: async (state, action) => {
//       const itemId = action.payload;

//       try {
//         await deleteDoc(doc(db, 'docs', itemId.id));

//         state = state.items.filter(item => item.id !== itemId.id);
//       } catch (error) {
//         console.error('Error removing item:', error);
//       }
//     },
//     updateItem: async (state, action) => {
//       const updatedItem = action.payload;
//       try {
//         await updateDoc(doc(db, 'docs', updatedItem.id), updatedItem);
//         const index = state.items.findIndex(item => item.id === updatedItem.id);

//         if (index !== -1) {
//           state.items[index] = updatedItem;
//         }
//       } catch (error) {
//         console.error('Error updating item:', error);
//       }
//     },
//   },
// });

// export const { addItem, removeItem, updateItem } = itemsSlice.actions;
// export const itemsReducer = itemsSlice.reducer;
