import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSingleCampus = createAsyncThunk(
  "singleCampus",
  async (id) => {
    try {
      const { data } = await axios.get(`/api/campuses/${id}`);
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const fetchCampusStudents = createAsyncThunk(
  "singleCampusStudents",
  async (id) => {
    try {
      const { data } = await axios.get(`/api/campuses/${id}/students`);
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

const initialState = {
  info: {},
  comments: [],
  students: [],
};

const singleCampusSlice = createSlice({
  name: "singleCampus",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSingleCampus.fulfilled, (state, action) => {
        // Add user to the state array
        state.info = action.payload;
      })
      .addCase(fetchCampusStudents.fulfilled, (state, action) => {
        // Add user to the state array
        state.students = action.payload;
      });
  },
});

export const selectSingleCampus = (state) => {
  return state.singleCampus;
};

export default singleCampusSlice.reducer;