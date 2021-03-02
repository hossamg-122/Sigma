import Types from '../Actions/Types';


const getSubcategoriesById = (state={subcategories:{}},action) => {
    if(action.type === Types.GET_SUBCATEGORIES_BY_ID) {
        let key = action.payload.categoryID;
        let sub= {};
        sub[key]= action.payload.subs;
        let mergeObj = Object.assign(sub, state.subcategories )
        return {...state,  subcategories : mergeObj};
    }
    else {
        return state;
    }

};

export default getSubcategoriesById;