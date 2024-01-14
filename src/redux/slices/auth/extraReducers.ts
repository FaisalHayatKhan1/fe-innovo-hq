import { TAuthSlice } from "@root/types/store";

export const loginSuccess = (state: TAuthSlice, action: any) => {
  const data = action?.payload?.data;    
  state.authToken = data.access_token;
  // state.refreshToken = data.refreshToken;
};

export const registerSuccess = (state: TAuthSlice, action: any) => {
  const data = action.payload.data;
  state.authToken = data.authToken;
  // state.refreshToken = data.refreshToken;
};
