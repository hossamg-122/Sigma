import Types from "../Actions/Types";

const commData = (state = { commData: [] }, action) => {
  if (action.type === Types.GET_COMM_DATA) {
    var commData ={};
    action.payload.map((link)=>{
      if(link.key ==="Mobile"){
        commData.Mobile = link.value
      }
      else if(link.key ==="Facebook"){
        commData.Facebook = link.value
      }
      else if(link.key ==="Twitter"){
        commData.Twitter = link.value
      }
      else if(link.key ==="Instagram"){
        commData.Instagram = link.value
      }
      else if(link.key ==="Email"){
        commData.Email = link.value
      }
      else if(link.key ==="Address"){
        commData.Address = link.value
      }
      else if(link.key ==="Youtube"){
        commData.Youtube = link.value
      }
      else if(link.key ==="Linkedin"){
        commData.Linkedin = link.value
      }
    })
    return { ...state, commData: commData , all :action.payload  };
  } else {
    return state;
  }
};

export default commData;
