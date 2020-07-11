import { types } from "./types";

const initialState = {
  error:null
};
const dashboardReducer = function (state = initialState, action) {
  switch (action.type) {
    case types.GET_INVOICE:
      return {
        ...state,
        invoices: action.payload
      };
    default:
      return state;
  }
};

export default dashboardReducer;