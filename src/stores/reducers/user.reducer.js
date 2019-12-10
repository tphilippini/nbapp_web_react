import {
  USER_LOGGED_IN,
  USER_LOGGED_OUT,
  USER_FETCHED,
  USER_UPDATED
} from '../actions/types.action';

const UserReducer = (state = {}, action = {}) => {
  switch (action.type) {
    case USER_LOGGED_IN:
      return { user: action.user };
    case USER_FETCHED:
      return { ...state, user: action.user };
    case USER_UPDATED:
      return { ...state, user: action.user };
    case USER_LOGGED_OUT:
      return {};
    default:
      return state;
  }
};

export default UserReducer;
