import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [];

export const fetchStudentsAsync = createAsyncThunk("allStudents", async () => {
  try {
    const { data } = await axios.get(`/api/students`);
    return data;
  } catch (err) {
    console.log(err);
  }
});

export const addStudentAsync = createAsyncThunk("createStudent", async ({firstName, lastName, email, gpa, imgUrl, campusId}) => {
  try {
    const { data } = await axios.post(`/api/students/`,{
      firstName,
      lastName,
      email, 
      gpa,
      imgUrl,
      campusId
    });
    console.log('FIRST NAME: ',firstName)
    return data;
  } catch (err) {
    console.log(err.response);
  }
});

export const deleteStudentAsync = createAsyncThunk("deleteStudent", async (studentId)=>{
  try{
    const { data } = await axios.delete(`/api/students/${studentId}`);
    return data;
  }
  catch(err){
    console.log(err)
  }
})

export const editStudentAsync = createAsyncThunk(
  "editStudent",
  async ({id,firstName, lastName, email, gpa, imgUrl, campusId}) => {
    const { data } = await axios.put(`/api/students/${id}`, {
      firstName,
      lastName,
      email, 
      gpa,
      imgUrl,
      campusId
    });
    return data;
  }
);

const studentsSlice = createSlice({
  name: "students",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchStudentsAsync.fulfilled, (state, action) => {

      return action.payload;
    });
  },
});

export const selectStudents = (state) => {
  return state.students;
};

export default studentsSlice.reducer;