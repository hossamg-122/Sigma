import Types from '../Actions/Types';


const placeOrder = (state={orders:{}},action) => {
    if(action.type === Types.Get_ALL_ORDERS) {
        return {...state,orders: action.payload};
    }
    else {
        return state;
    }

};

export default placeOrder;