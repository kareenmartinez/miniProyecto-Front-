const initialState = {
  padre: [],
  hijos: []
};

export default (state = initialState, actions) => {
  switch (actions.type) {
    case "ADD_PADRE":
      return { ...state, padre: actions.padre };
    case "ADD_HIJOS":
      return { ...state, hijos: actions.hijos };
    default:
      return state;
  }
};
