import Types from '../Actions/Types';

const getAllCards = (state={allUserCards:{}},action) => {
    if(action.type === Types.GET_ALL_CARDS) {
        return {...state,allUserCards: action.payload};
    }
    else {
        return state;
    }
};

export default getAllCards;