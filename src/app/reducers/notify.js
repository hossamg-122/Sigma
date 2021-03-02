import Types from '../Actions/Types';

const notify = (state={notify:{title:"", body:"", counter:0}},action) => {
    if(action.type === Types.NOTIFY) {
        var oldCounter = state.notify.counter;
        return {...state,notify: {
            title :  action.payload.title,
            body : action.payload.body,
            kind : action.payload.kind,
            counter : oldCounter + 1
        }}
        
        
    }
    else {
        return state;
    }

};

export default notify;