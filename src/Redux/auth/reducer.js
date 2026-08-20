import * as types from "./types";

const TOKEN = localStorage.getItem("token");

const initialState = {
  userLogin: { loading: false, error: false, message: "" },
  data: {
    isAuthenticated: !!TOKEN,
    token: TOKEN,
    user: null,
  },
};

export default function authReducer(state = initialState, { type, payload }) {
  switch (type) {
    case types.LOGIN_NURSE_REQUEST:
    case types.LOGIN_DOCTOR_REQUEST:
    case types.LOGIN_ADMIN_REQUEST:
      return { ...state, userLogin: { loading: true, error: false, message: "" } };

    case types.LOGIN_NURSE_SUCCESS:
    case types.LOGIN_DOCTOR_SUCCESS:
    case types.LOGIN_ADMIN_SUCCESS:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        userLogin: { loading: false, error: false, message: payload.message },
        data: {
          isAuthenticated: true,
          token: payload.token,
          user: payload.user,
        },
      };

    case types.LOGIN_NURSE_ERROR:
    case types.LOGIN_DOCTOR_ERROR:
    case types.LOGIN_ADMIN_ERROR:
      return {
        ...state,
        userLogin: { loading: false, error: true, message: payload.message },
      };

    case types.EDIT_NURSE_SUCCESS:
    case types.EDIT_DOCTOR_SUCCESS:
      return {
        ...state,
        data: { ...state.data, user: payload },
      };

    case types.AUTH_LOGOUT:
    case "AUTH_LOGOUT":
      localStorage.removeItem("token");
      localStorage.removeItem("store");
      return {
        ...initialState,
        data: { isAuthenticated: false, token: null, user: null },
      };

    case "AUTH_LOGIN_RESET":
      return { ...state, userLogin: { loading: false, error: false, message: "" } };

    default:
      return state;
  }
}
