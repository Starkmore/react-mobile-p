
import axios from "axios";
const types = {
  HOME_DATA: "home_data"
};
// store
const initialState  = {
  indexData: {},
};

//  actons
export const actions = {
  index: params => {
    return {
      payload: params,
      type: types.HOME_DATA
    };
  }
};

// reducers
export const homeRedurces = (state = initialState , action) => {
 const payload=action.payload
  switch (action.type) {
    case types.HOME_DATA:
      return {
        ...state,
        indexData: payload
      }
    default:
      return state;
  }
};

//  此部分可以
export const homeData = params => {
  return dispatch => {
    axios.get("api/poll/pollItem",{params:{poll_id:'528683002784382976'} }).then(res => {
      dispatch(actions.index(res.data.data));
    });
  };
};
