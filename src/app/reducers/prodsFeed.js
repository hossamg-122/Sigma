import Types from '../Actions/Types';


const prodsFeed = (state={prodsFeed:[]},action) => {
    if(action.type === Types.GET_FEED_PRODS) {
        return {...state,prodsFeed: action.payload};
    }
    else {
        return state;
    }

};

export default prodsFeed;