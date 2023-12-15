
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PositionState {
  positions: string[]; // Thay đổi kiểu dữ liệu tùy theo cấu trúc
}

const initialState: PositionState = {
    positions: [],
};

const departmentSlice = createSlice({
  name: 'position',
  initialState,
  reducers: {
    setPosition: (state, action: PayloadAction<string[]>) => {
      state.positions = action.payload;
    },
  },
});



export const { setPosition } = departmentSlice.actions;
export default departmentSlice.reducer;
