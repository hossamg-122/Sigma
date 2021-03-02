import Types from '../Actions/Types';


const updateUserInfo = (state={response:{}},action) => {
    if(action.type === Types.UPDATE_USER_INFO) {
        return {...state,response: action.payload};
    }
    else {
        return state;
    }

};

export default updateUserInfo;