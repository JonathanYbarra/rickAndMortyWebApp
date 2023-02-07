import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store';

const initialState: number[] = [];

const slice = createSlice({
  name: 'characterLiked',
  initialState,
  reducers: {
    toggleLike: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      const index = state.indexOf(id);
      if (index !== -1) {
        state.splice(index, 1);
      } else {
        state.push(id);
      }
    },
  },
});

export const { toggleLike } = slice.actions;
export default slice.reducer;
export const selectCharactedLiker = (state: RootState) => state.charactedLiked;
