// src/features/departmentSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from '../../services/axios';
import apiUrl from '../../constant/apiUrl';
import {AppDispatch} from '../store';

interface DepartmentState {
  departments: string[]; // Thay đổi kiểu dữ liệu tùy theo cấu trúc của bạn
}

const initialState: DepartmentState = {
  departments: [],
};

const departmentSlice = createSlice({
  name: 'department',
  initialState,
  reducers: {
    setDepartments: (state, action: PayloadAction<string[]>) => {
      state.departments = action.payload;
    },
  },
});



export const { setDepartments } = departmentSlice.actions;
export default departmentSlice.reducer;
