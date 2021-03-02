import Types from "../Actions/Types";

const sliderProds = (state = { sliderProds: [] }, action) => {
  if (action.type === Types.GET_SLIDER_PRODS) {
    return { ...state, sliderProds: action.payload };
  } else {
    return state;
  }
};

export default sliderProds;
