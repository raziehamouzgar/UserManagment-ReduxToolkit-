import {UsersData} from '../FakeData';
import { createSlice } from "@reduxjs/toolkit";

//قدم چهارم: اطاعات یوزرا رو ایمپورت میکنیم
// با دستور سلکتور ردیوسر رو مینویسیم
//و به عنوان مقدار پیشفرض همون اطلاعات یوزر رو میدیم بهش
export const userSlice = createSlice({
    name: 'user',
    initialState:{ value : UsersData},
    //ردیوسر اضافه کردن یوزر
    reducers:{
        addUser:(state , action) =>{
            //payload محتوایی هست که از فیلدهای فرم گرفته میشه.
            state.value.push(action.payload);
        },
//حذف براساس فیلتر شدن یوزرایی که ایدیشون مخالف ایدی یوزر انتخاب شده است.
        deleteUser:(state, action)=>{
           state.value = state.value.filter((user) => user.id !== action.payload.id);
        }
    }
})

export default userSlice.reducer;
export const {addUser , deleteUser} = userSlice.actions;