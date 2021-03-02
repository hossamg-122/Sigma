import Types from '../Actions/Types';


const getProductById = (state={product:{}},action) => {
    if(action.type === Types.GET_PRODUCT_BY_ID) {
        return {...state,product: action.payload};
    }
    else if(action.type === Types.CLEAR_CURRENT_PROD) {
        return {...state,product: {}}; 
    }
    else {
        return state;
    }

};

export default getProductById;