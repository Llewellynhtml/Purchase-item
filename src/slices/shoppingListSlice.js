// src/redux/shoppingListSlice.js
import { createSlice } from '@reduxjs/toolkit';

const shoppingListSlice = createSlice({
  name: 'shoppingList',
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      state.push(action.payload);
    },
    editItem: (state, action) => {
      const { id, name, quantity } = action.payload;
      const item = state.find((item) => item.id === id);
      if (item) {
        item.name = name;
        item.quantity = quantity;
      }
    },
    deleteItem: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    togglePurchased: (state, action) => {
      const item = state.find((item) => item.id === action.payload);
      if (item) {
        item.purchased = !item.purchased;
      }
    },
  },
});

export const { addItem, editItem, deleteItem, togglePurchased } = shoppingListSlice.actions;
export default shoppingListSlice.reducer;
