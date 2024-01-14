import { createSlice } from "@reduxjs/toolkit";
import { authAPI } from "@root/services/auth";
import { TRestaruantSlice } from "@root/types/store";
import { setRestaurantIdReducer } from "./reducers";

const initialState: TRestaruantSlice = {
  restaurantId: null,
};

const slice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    setRestaurantId: setRestaurantIdReducer,
  },
});

export const { setRestaurantId } = slice.actions;
export default slice.reducer;
