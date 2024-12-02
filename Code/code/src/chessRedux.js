import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialBoardState = Array(8)
  .fill(null)
  .map((_, row) =>
    Array(8)
      .fill(null)
      .map((_, col) => ({
        id: `${row}-${col}`,
        color: (row + col) % 2 === 0 ? 'white' : 'black',
      }))
  );

const boardSlice = createSlice({
  name: 'board',
  initialState: initialBoardState,
  reducers: {
    toggleColor: (state, action) => {
      const [row, col] = action.payload.split('-').map(Number);
      const square = state[row][col];
      square.color = square.color === 'white' ? 'yellow' : square.color === 'black' ? 'red' : square.color === 'yellow' ? 'white' : 'black';
    },
  },
});

export const { toggleColor } = boardSlice.actions;

export const store = configureStore({
  reducer: {
    board: boardSlice.reducer,
  },
});
