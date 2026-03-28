import { configureStore } from "@reduxjs/toolkit";

import projectReducer from "../redux/projectSlice";
import taskReducer from "../redux/taskSlice";
import activityReducer from "../redux/activitySlice";
import organizationReducer from "../redux/organizationSlice";


// LOAD STATE
const loadState = (userId) => {
  try {
    if (!userId) return undefined;

    const savedState = localStorage.getItem(`workpilot_state_${userId}`);
    if (!savedState) return undefined;

    return JSON.parse(savedState);
  } catch {
    return undefined;
  }
};


//  SAVE STATE
const saveState = (state, userId) => {
  try {
    if (!userId) return;

    localStorage.setItem(
      `workpilot_state_${userId}`,
      JSON.stringify(state)
    );
  } catch {}
};


//  FACTORY FUNCTION (IMPORTANT)
export const createAppStore = (userId) => {
  const store = configureStore({
    reducer: {
      projects: projectReducer,
      tasks: taskReducer,
      activity: activityReducer,
      organizations: organizationReducer,
    },
    preloadedState: loadState(userId),
  });

  store.subscribe(() => {
    saveState(store.getState(), userId);
  });

  return store;
};