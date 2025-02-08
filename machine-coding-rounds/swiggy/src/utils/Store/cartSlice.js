import { createSlice, current } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
        // Older Redux => tell don't mutate the state
        // const newState = [...state]
        // newState.items.push(action.payload)
        // console.log('test kiran --->', 'payload checking ===>',action);
        // return newState;

        /** To console log the state then import current from redux toolkit */
        console.log(current(state))
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    clearCart: (state, action) => {
        // Redux tool kit say the either mutate the state or return new state
      state.items.length = 0;
      return { items: []}
    },
  },
});

{
  /**
    createSlice = {
        actions: {
            addItem,
            removeItem,
            clearCart
        },
        reducer: {

        }
    }
 */
}

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
