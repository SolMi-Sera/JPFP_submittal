import { configureStore } from "@reduxjs/toolkit";
import campusesSlice from "../features/campusesSlice";
import singleCampusSlice from "../features/singleCampusSlice";
import singleStudentSlice from "../features/singleStudentSlice";
import studentsSlice from "../features/studentsSlice";

const store = configureStore(
  {
  reducer: {
    campuses: campusesSlice,
    students: studentsSlice,
    singleStudent: singleStudentSlice,
    singleCampus: singleCampusSlice,
  },
}
);

export default store;