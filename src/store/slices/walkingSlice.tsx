import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = { isWalking: false };

const walkingSlice = createSlice({
  name: "walk",
  initialState: initialAuthState,
  reducers: {
    startWalking(state) {
      state.isWalking = true;
    },
    stopWalking(state) {
      state.isWalking = false;
    },
  },
});

export const walkingActions = walkingSlice.actions;

export default walkingSlice;
