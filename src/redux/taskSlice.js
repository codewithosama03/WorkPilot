import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "tasks",

  initialState: [],

  reducers: {

    addTask: (state, action) => {

      state.push({
        ...action.payload,
        userId: action.payload.userId || null, 
        dueDate: action.payload.dueDate || null
      });

    },

    updateTaskStatus: (state, action) => {

      const { id, status } = action.payload;

      const taskIndex = state.findIndex(
        (task) => task.id === id
      );

      if (taskIndex !== -1) {
        state[taskIndex].status = status;
      }

    },

    updateTaskAssignee: (state, action) => {

      const { id, assignee } = action.payload;

      const taskIndex = state.findIndex(
        (task) => task.id === id
      );

      if (taskIndex !== -1) {
        state[taskIndex].assignee = assignee;
      }

    },

    deleteTask: (state, action) => {

      const id = action.payload;

      return state.filter((task) => task.id !== id);

    },

    removeTasksByProject: (state, action) => {
      return state.filter(
        (task) => task.projectId !== action.payload
      );
    },

  }

});

export const {
  addTask,
  updateTaskStatus,
  updateTaskAssignee,
  deleteTask,
  removeTasksByProject
} = taskSlice.actions;

export default taskSlice.reducer;