import { createSlice } from "@reduxjs/toolkit";

type WalkingState = {
  isWalking: boolean;
};

const initialWalkingState: WalkingState = { isWalking: false };

const walkingSlice = createSlice({
  name: "walk",
  initialState: initialWalkingState,
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
