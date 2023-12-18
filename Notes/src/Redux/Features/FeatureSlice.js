import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  h1: false,
  h2: false,
  h3: false,
  table: false,
  to_do: false,
  bulleted_list: false,
};
const featureSlice = createSlice({
  name: "feature",
  initialState,
  reducers: {
    toggleH1: (state) => {
      state.h1 = !state.h1;
    },
    toggleH2: (state) => {
      state.h2 = !state.h2;
    },
    toggleH3: (state) => {
      state.h3 = !state.h3;
    },
    toggleTable: (state) => {
      state.table = !state.table;
    },
    toggleTo_do: (state) => {
      state.to_do = !state.to_do;
    },
    toggleBulleted_List: (state) => {
      state.bulleted_list = !state.bulleted_list;
    },
    resetState: () => initialState,
  },
});
export const {
  toggleH1,
  toggleH2,
  toggleH3,
  toggleTable,
  toggleTo_do,
  toggleBulleted_List,
  resetState,
} = featureSlice.actions;
export default featureSlice.reducer;
