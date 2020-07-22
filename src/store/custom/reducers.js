import * as actions from "./constants";

const initialState = {
  user: null,
  accessToken: null,
};

export default EmailAuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.EMAIL_AUTH_LOGIN_SUCCESS:
      return { ...state, accessToken: action.accessToken };
    case actions.EMAIL_AUTH_PASSWORD_RECOVER_SUCCESS:
      return { ...state };
    case actions.EMAIL_AUTH_SIGNUP_SUCCESS:
      return { ...state, user: action.user };
    case actions.EMAIL_AUTH_LOGOUT:
      return initialState;
    default:
      return state;
  }
};