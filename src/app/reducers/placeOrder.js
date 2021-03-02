import Types from '../Actions/Types';


const placeOrder = (state={response:{}},action) => {
    if(action.type === Types.PLACE_ORDER) {
        return {...state,response: action.payload};
    }
    else {
        return state;
    }

};

export default placeOrder;