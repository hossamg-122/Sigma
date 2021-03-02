import Types from "../Actions/Types";

const clientLocations = (state = { locations: [] }, action) => {
  if (action.type === Types.GET_CLIENT_LOCATIONS) {
    return { ...state, locations: action.payload };
  } else {
    return state;
  }
};

export default clientLocations;
