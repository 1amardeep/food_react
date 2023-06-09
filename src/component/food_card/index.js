import { configureStore } from "@reduxjs/toolkit";
import {
  milksSliceReducer,
  changeSearchTerm,
  addMilk,
  removeMilk,
  updateMilk,
} from "./slices/milksSlice";
import {
  formSliceReducer,
  changeName,
  changeQuantity,
  changeStartTime,
  changeEndTime,
  changeTheFormState,
} from "./slices/formSlice";

const store = configureStore({
  reducer: {
    milks: milksSliceReducer,
    forms: formSliceReducer,
  },
});

export {
  store,
  changeSearchTerm,
  addMilk,
  removeMilk,
  changeQuantity,
  changeName,
  changeStartTime,
  changeEndTime,
  changeTheFormState,
  updateMilk,
};
