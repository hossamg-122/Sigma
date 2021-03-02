import Types from '../Actions/Types';


const catProds = (state={catProds:null, withGroup : false,  groupId: null},action) => {
    if(action.type === Types.GET_CAT_PRODS) {
        return {...state,catProds: action.payload, withGroup:false, groupId: null};
    }

    else  if(action.type === Types.GET_SUB_CAT_PRODS) {
        return {...state,catProds: action.payload, withGroup:false, groupId: null};
    }

    else if(action.type === Types.GET_MORE_CAT_PRODS){
        var current = state.catProds;
        return {...state,catProds: current.concat(action.payload), groupId: null};
    }

    else if(action.type === Types.GET_MORE_SUB_CAT_PRODS) {
        var current = state.catProds;
        return {...state,catProds: current.concat(action.payload), withGroup:false, groupId: null};
    }
    
    else if(action.type === Types.GET_GROUP_PRODS) {
        return {...state,catProds: action.payload, withGroup:true, groupId: action.groupId};
    }
    
    else if(action.type === Types.GET_MORE_GROUP_PRODS) {
        var current = state.catProds;
        return {...state,catProds: current.concat(action.payload), withGroup:true, groupId: action.groupId};
    }
    
    else {
        return state;
    }

};

export default catProds;