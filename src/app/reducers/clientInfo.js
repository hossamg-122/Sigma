import Types from '../Actions/Types';


const clientInfo = (state={clientInfo:{}},action) => {
    if(action.type === Types.SIGN_IN) {
        
        return {...state,clientInfo: {
            id :  action.payload.id,
            info : action.payload.info
        }};
    }
    else if(action.type === Types.LOG_OUT){
        return {...state,clientInfo: {}};
    }
    else {
        return state;
    }

};

export default clientInfo;