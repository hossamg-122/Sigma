import Types from "../Actions/Types";

const groups = (state = { groups: [] }, action) => {
  if (action.type === Types.GET_GROUPS) {

    return { ...state, groups:action.payload  };
  } else {
    return state;
  }
};

export default groups;
