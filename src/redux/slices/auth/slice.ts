import { createSlice } from "@reduxjs/toolkit";
import { authAPI } from "@root/services/auth";
import { TAuthSlice } from "@root/types/store";
import { loginSuccess, registerSuccess } from "./extraReducers";
import { setTokens } from "./reducers";

const initialState: TAuthSlice = {
  authToken: null,
  refreshToken: null,
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthTokens: setTokens,
  },
  // extraReducers: (builder) => {
  //   builder
  //     //Login Matchers
  //     .addMatcher(authAPI.endpoints.login.matchFulfilled, loginSuccess)
  //     //Register Matchers
  //     .addMatcher(authAPI.endpoints.register.matchFulfilled, registerSuccess);
  // },
});

export const { setAuthTokens } = slice.actions;
export default slice.reducer;
