import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    //Mutating the State over here(Modifying state)
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearItem: (state) => {
      // RTK - either Mutate the existing state 
      state.items.length = 0;
      // or return a new State 
      // return {items : []} //this new [] will be replaced inside originalState = [] 
    },
  },
});

export const { addItem, removeItem, clearItem } = cartSlice.actions;
export default cartSlice.reducer;
