import Types from '../Actions/Types';


const getCategories = (state={categoris:[]},action) => {
    if(action.type === Types.GET_CATEGORIES) {
        return {...state,categoris: action.payload};
    }
    else {
        return state;
    }

};

export default getCategories;