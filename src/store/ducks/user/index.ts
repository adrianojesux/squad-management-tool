import { UserState, UserActionTypes } from "./types";
import { Reducer } from "redux";

const INITIAL_STATE: UserState = {
  loading: false,
  error: false,
  data: {
    name: "Adriano Jesus",
    short_name: "ad",
  },
};

const reducer: Reducer<UserState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.LOAD_USER:
      return { ...state, loading: true, error: false, data: null };
    case UserActionTypes.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: { ...state.data, ...action.payload.data },
      };
    case UserActionTypes.LOAD_ERROR:
      return { ...state, loading: false, error: true, data: null };
    default:
      return { ...state };
  }
};

export default reducer;
