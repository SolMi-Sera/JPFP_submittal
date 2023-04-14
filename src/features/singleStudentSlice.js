import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {};
console.log("singleStudentSlice.js imported and executed");

export const fetchSingleStudent = createAsyncThunk("singleStudent", async (id) => {
  try {
    const { data } = await axios.get(`/api/students/${id}`);
    console.log("Fetched student data:", data);
    return data;
  } catch (err) {
    console.log(err);
  }
});

const singleStudentSlice = createSlice({
  name: "singleStudent",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSingleStudent.fulfilled, (state, action) => {
      console.log("Action payload:", action.payload);
      return action.payload;
    });
  },
});

export const selectSingleStudent = (state) => {
  return state.singleStudent;
};

export default singleStudentSlice.reducer;
