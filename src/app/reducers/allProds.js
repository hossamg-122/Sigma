import Types from '../Actions/Types';


const allProds = (state={allProds:[]},action) => {
    if(action.type === Types.GET_ALL_PRODS) {
        return {...state,allProds: action.payload};
    }
    
    else {
        return state;
    }

};

export default allProds;