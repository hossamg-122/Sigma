import Types from '../Actions/Types';


const updateCard = (state={response:{}},action) => {
    if(action.type === Types.UPDATE_CART) {
        return {...state,response: action.payload};
    }
    else {
        return state;
    }

};

export default updateCard;