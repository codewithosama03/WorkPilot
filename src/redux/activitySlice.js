import { createSlice } from "@reduxjs/toolkit";

const activitySlice = createSlice({
  name: "activity",

  initialState: [],

  reducers: {

    addActivity: (state, action) => {
      state.unshift(action.payload);
    }

  }

});

export const { addActivity } = activitySlice.actions;

export default activitySlice.reducer;