export const selectTemplates = state => state.templates.templates;

export const selectFavTemplates = state => state.templates.favTemplates;

export const selectLoading = state => state.auth.loading;

export const selectError = state => state.auth.error;

export const selectIsLoading = state => state.templates.loading;

export const selectErrorTemp = state => state.templates.error;

export const selectUser = state => state.auth.user;

export const selectShowAuthForm = state => state.auth.showAuthForm;
