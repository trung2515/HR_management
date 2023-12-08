// store.ts
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/authSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    // Thêm các reducers khác nếu cần
  },
});

export default store;