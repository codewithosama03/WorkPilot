import { createSlice } from "@reduxjs/toolkit";

const organizationSlice = createSlice({
  name: "organizations",

  initialState: {
    organizations: [],
    currentOrganization: null
  },

  reducers: {

    createOrganization: (state, action) => {

      const newOrg = {
        id: Date.now(),
        name: action.payload.name,
        description: action.payload.description || "",
        image: action.payload.image || "",
        userId: action.payload.userId || null 
      };

      state.organizations.push(newOrg);

      // auto switch to new workspace
      state.currentOrganization = newOrg.id;
    },

    switchOrganization: (state, action) => {
      state.currentOrganization = action.payload;
    },

    deleteOrganization: (state, action) => {

      const orgId = action.payload;

      state.organizations = state.organizations.filter(
        (org) => org.id !== orgId
      );

      // if deleted workspace was active
      if (state.currentOrganization === orgId) {

        if (state.organizations.length > 0) {
          state.currentOrganization = state.organizations[0].id;
        } else {
          state.currentOrganization = null;
        }

      }

    }

  }

});

export const {
  createOrganization,
  switchOrganization,
  deleteOrganization
} = organizationSlice.actions;

export default organizationSlice.reducer;