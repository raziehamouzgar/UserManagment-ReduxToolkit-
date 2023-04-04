import { configureStore } from "@reduxjs/toolkit";
import userSlice from '../features/users'
//قدم اول: ساخت استور
//داخل استور ردیوسر هارا تعریف میکنیم
export const store = configureStore({
    reducer: {
      users: userSlice ,
    },
  });