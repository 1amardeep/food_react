import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  searchTerm: "",
  milks: [],
};
const milksSlice = createSlice({
  initialState,
  name: "milks",
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    addMilk(state, action) {
      state.milks.push({
        id: nanoid(),
        name: action.payload.name,
        quantity: action.payload.quantity,
        startTime: action.payload.startTime,
        endTime: action.payload.endTime,
      });
    },
    removeMilk(state, action) {
      const updated = state.milks.filter((milk) => milk.id !== action.payload);
      state.milks = updated;
    },
    updateMilk(state, action) {
      state.milks = state.milks.map((milk) => {
        if (milk.id === action.payload.id) {
          return {
            ...milk,
            ...action.payload,
          };
        }
        return milk;
      });
    },
  },
});

export const { changeSearchTerm, addMilk, removeMilk, updateMilk } =
  milksSlice.actions;
export const milksSliceReducer = milksSlice.reducer;
