const loadingState = (state, payload) => {
  state.loading = payload;
};
const errorMessage = (state, payload) => {
  state.error = payload;
};
const Utils = {
  loadingState,
  errorMessage,
};

export default Utils;
