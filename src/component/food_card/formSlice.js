import { createSlice } from "@reduxjs/toolkit";
import { addMilk } from "./milksSlice";

const initialState = {
  id: "",
  name: "",
  quantity: 0,
  startTime: "00:00",
  endTime: "00:00",
};
const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    changeName(state, action) {
      state.name = action.payload;
    },
    changeQuantity(state, action) {
      state.quantity = action.payload;
    },
    changeStartTime(state, action) {
      state.startTime = action.payload;
    },
    changeEndTime(state, action) {
      state.endTime = action.payload;
    },
    changeTheFormState(state, action) {
      state.name = action.payload.name;
      state.quantity = action.payload.quantity;
      state.startTime = action.payload.startTime;
      state.endTime = action.payload.endTime;
      state.id = action.payload.id;
    },
  },
  extraReducers(builder) {
    builder.addCase(addMilk, (state, action) => {
      state.name = "";
      state.quantity = 0;
      state.startTime = "00:00";
      state.endTime = "00:00";
    });
  },
});

export const {
  changeName,
  changeQuantity,
  changeStartTime,
  changeEndTime,
  changeTheFormState,
} = formSlice.actions; // action creator
export const formSliceReducer = formSlice.reducer;
