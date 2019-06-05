import {
  USER_LOGGED_IN,
  USER_LOGGED_OUT,
  USER_FETCHED,
  USER_UPDATED
} from "../actions/types.action";

const UserReducer = (state = { loaded: false }, action = {}) => {
  switch (action.type) {
    case USER_LOGGED_IN:
      return { user: action.user };
    case USER_FETCHED:
      return { ...state, user: action.user, loaded: true };
    case USER_UPDATED:
      return { ...state, user: action.user, loaded: true };
    case USER_LOGGED_OUT:
      return { loaded: true };
    default:
      return state;
  }
};

export default UserReducer;
