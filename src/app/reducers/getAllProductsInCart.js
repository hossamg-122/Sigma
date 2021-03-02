import Types from '../Actions/Types';


const getAllProductsInCart = (state={productsInCart:[]},action) => {
    if(action.type === Types.GET_ALL_PRODUCTS_IN_CART) {
        return {...state,productsInCart: action.payload};
    }
    else {
        return state;
    }

};

export default getAllProductsInCart;