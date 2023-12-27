import { configureStore } from "@reduxjs/toolkit";
import { forgotPasswordReducer, userReducer } from "./reducers/userReducer";
import {
  adminRoutineReducer,
  adminStudentReducer,
  adminTeacherReducer,
  createAdminReducer,
} from "./reducers/adminReducer";
import { studentAccountReducer, studentReducer } from "./reducers/studentReducer";

const store = configureStore({
  reducer: {
    user: userReducer,
    forgotPassword: forgotPasswordReducer,
    createAdmin: createAdminReducer,
    teacher: adminTeacherReducer,
    student: adminStudentReducer,
    adminRoutine: adminRoutineReducer,
    getStudentTeacher: studentReducer,
    studentAccount :studentAccountReducer
  },
});

export default store;
