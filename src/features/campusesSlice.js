import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [];

export const fetchCampusesAsync = createAsyncThunk("allCampuses", async () => {
  try {
    const { data } = await axios.get(`/api/campuses`);
    return data;
  } catch (err) {
    console.log(err);
  }
});

export const addCampusesAsync = createAsyncThunk("createCampus", async ({name,imgUrl,address,description}) => {
  try {
    const { data } = await axios.post(`/api/campuses/`,{
          name,
          imgUrl,
          address,
          description
        });
    return data;
  } catch (err) {
    console.log(err.response);
  }
});

export const deleteCampusAsync = createAsyncThunk("deleteCampus", async (campusId)=>{
  try{
    const { data } = await axios.delete(`/api/campuses/${campusId}`);
    return data;
  }
  catch(err){
    console.log(err)
  }
})

export const editCampusAsync = createAsyncThunk(
  "editCampus",
  async ({ id, name,imgUrl,address,description }) => {
    const { data } = await axios.put(`/api/campuses/${id}`, {
      name,
      imgUrl,
      address,
      description
    });
    return data;
  }
);

const campusesSlice = createSlice({
  name: "campuses",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCampusesAsync.fulfilled, (state, action) => {
      // Add user to the state array
      return action.payload;
    });
  },
});

export const selectCampuses = (state) => {
  return state.campuses;
};

export default campusesSlice.reducer;