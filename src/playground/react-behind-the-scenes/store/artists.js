const INITIAL_VALUE = {
  artists: [],
};

const artistReducer = (state = INITIAL_VALUE, action) => {
  switch (action.type) {
    case "ADD":
      debugger;
      return state.artists.concat(action.artist);
    default:
      return state;
  }
};

export default artistReducer;
