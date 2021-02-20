const defaultState = {
  loadingApp: true,
};

const app = (state = defaultState, action) => {
  switch (action.type) {
    case 'persist/REHYDRATE': {
      return { ...state, loadingApp: false };
    }

    default:
      return state;
  }
};

export default app;
