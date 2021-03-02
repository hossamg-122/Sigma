import Types from '../Actions/Types';


const getOrderTracking = (state={orderTracking:{}},action) => {
    if(action.type === Types.Get_ORDER_TRACKING) {
        return {...state,orderTracking: action.payload};
    }
    else {
        return state;
    }

};

export default getOrderTracking;