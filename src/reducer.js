import { GET_USERS_SUCCESS } from "./actions";

const myFirstReducer = (state = { users: [] }, action) => {
  //InitialState
  switch (action.type) {
    case GET_USERS_SUCCESS:
      return { ...state, users: action.user };
    default:
      return state;
  }
};

export default myFirstReducer;
