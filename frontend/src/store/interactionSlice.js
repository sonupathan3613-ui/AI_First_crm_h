import { createSlice } from '@reduxjs/toolkit';

const interactionSlice = createSlice({
  name: 'interactions',
  initialState: { list: [], current: null },
  reducers: {
    addInteraction: (state, action) => {
      state.list.push(action.payload);
    },
    editInteraction: (state, action) => {
      const idx = state.list.findIndex(i => i.id === action.payload.id);
      if (idx !== -1) state.list[idx] = action.payload;
    }
  }
});

export const { addInteraction, editInteraction } = interactionSlice.actions;
export default interactionSlice.reducer;
