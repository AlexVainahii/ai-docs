export const onPending = state => {
  state.isRefreshing = true;
};

export const onRejected = state => {
  state.isRefreshing = false;
};

export const onFulfilledRegisterLogin = (state, { payload }) => {
  state.user = { displayName: payload.displayName, email: payload.email };
  state.isLogged = true;
};

export const onFulfilledLogOut = state => {
  state.user = null;
  state.isLogged = false;
};
export const onFulfilledRefresh = (state, { payload }) => {
  state.isLogged = payload;
  state.isRefreshing = false;
};
