import Types from "../Actions/Types";

const chatUser = (state = { chatUser: {} }, action) => {
  if (action.type === Types.CHAT_USER) {

    return { ...state, chatUser:action.payload  };
  } else {
    return state;
  }
};

export default chatUser;
