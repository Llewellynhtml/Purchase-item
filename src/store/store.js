import { configureStore } from '@reduxjs/toolkit';
import shoppingListReducer from '../slices/shoppingListSlice';

const store = configureStore({
  reducer: {
    shoppingList: shoppingListReducer,
  },
});

export default store;
