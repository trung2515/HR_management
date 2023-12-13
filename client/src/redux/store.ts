// store.ts
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/authSlice';
import departmentReducer from './features/departmentSlice'; 
const store = configureStore({
  reducer: {
    auth: authReducer,
    departments: departmentReducer, 
  },
});


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
