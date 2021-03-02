import Types from '../Actions/Types';


const getOrderItem = (state={orderItems:[]},action) => {
    if(action.type === Types.GET_ORDER_ITEMS) {
        return {...state,orderItems: action.payload};
    }
    else {
        return state;
    }

};

export default getOrderItem;