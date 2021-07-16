import { SET_USER } from "../constants/userConstants";

const initialState = {
  user: null,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return state.user;
    default:
      return null;
  }
}
