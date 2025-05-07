import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type FilterType } from '@/actions/types';

const initialState: FilterType = 'all' as FilterType;

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter(_, action: PayloadAction<FilterType>) {
      return action.payload;
    }
  }
});

export const { setFilter } = filterSlice.actions;
export default filterSlice.reducer;