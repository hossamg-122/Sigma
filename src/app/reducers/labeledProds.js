import Types from '../Actions/Types';


const labeledProds = (state={labeledProds:[]},action) => {
    if(action.type === Types.GET_LABELED_PRODS) {
        return {...state,labeledProds: action.payload};
    }
    else {
        return state;
    }

};

export default labeledProds;