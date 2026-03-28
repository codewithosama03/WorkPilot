import { createSlice } from "@reduxjs/toolkit";

const projectSlice = createSlice({
  name: "projects",

  initialState: [],

  reducers: {

    addProject: (state, action) => {
      state.push({
        ...action.payload,
        userId: action.payload.userId || null 
      });
    },

    deleteProject: (state, action) => {
      return state.filter(project => project.id !== action.payload);
    },

    updateProjectStatus: (state, action) => {
      const project = state.find(p => p.id === action.payload.id);

      if (project) {
        project.status = action.payload.status;
      }
    },

  }

});

export const { addProject, deleteProject, updateProjectStatus } = projectSlice.actions;

export default projectSlice.reducer;