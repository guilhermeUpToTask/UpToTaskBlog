import { createSlice } from '@reduxjs/toolkit'

const categoriesSlice = createSlice({
    name: 'categories',
    initialState: [],
    reducers: {
      categoriesUpdate(state, action) {
        return action.payload;
        }
      },
    });
   
export const {categoriesUpdate} = categoriesSlice.actions;
export const selectCategories = state => state.categories;
export default categoriesSlice.reducer;   
