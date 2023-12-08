import { isAnyOf } from '@reduxjs/toolkit';
import {
  addTemplate,
  addTemplateFavorite,
  deleteTemplate,
  fetchTemplates,
  updateTemplate,
} from './operationsTemplate';

const arrThunks = [
  fetchTemplates,
  addTemplate,
  updateTemplate,
  deleteTemplate,
  addTemplateFavorite,
];

export const templatesInitialState = {
  templates: [],
  favTemplates: [],
  isLoading: false,
  error: null,
};
export const STATUSES = {
  PENDING: 'pending',
  FULFILLED: 'fulfilled',
  REJECTED: 'rejected',
};

export const onPending = state => {
  state.isLoading = true;
};

export const onRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};
export const onFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.error = '';
};

export const onFulfilledFetch = (state, { payload }) => {
  state.templates = payload.templates;
  state.favtemplates = payload.favtemplates;
};

export const onFulfilledAdd = (state, { payload }) => {
  state.templates.push(payload);
};
export const onFulfilledUpdate = (state, { payload }) => {
  const index = state.templates.findIndex(
    template => template.id === payload.id
  );

  if (index !== -1) {
    state.templates[index] = payload;
  }
};
export const onFulfilledDelete = (state, action) => {
  state.templates = state.templates.filter(
    template => template.id !== action.payload.id
  );
};

export const onFulfilledFavorite = (state, { payload }) => {
  if (payload.bool) {
    state.favTemplates.push({
      uid: payload.templateId.uid,
      id: payload.templateId.id,
    });
  } else {
    state.favTemplates = state.favTemplates.filter(
      template => template.id !== payload.templateId.id
    );
  }
};
export const createStatus = type => isAnyOf(...arrThunks.map(el => el[type]));
