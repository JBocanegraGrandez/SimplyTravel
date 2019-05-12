const uiReducer = (oldState = { status: false }, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case 'SIDEBAR_TOGGLE':
      return { status: action.status }
    default:
      return oldState;
  }
};

export default uiReducer;