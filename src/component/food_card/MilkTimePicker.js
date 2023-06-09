import React, { useState } from "react";
import { useDispatch } from "react-redux";
import TimePicker from "react-time-picker";
import { changeStartTime, changeEndTime } from "../stores";

function MilkTimePicker({ type, time }) {
  const dispatch = useDispatch();

  const [value, onChange] = useState(time);

  const handleOnChange = (event) => {
    onChange(event);
    if (type === "startTime") {
      dispatch(changeStartTime(event));
    } else {
      dispatch(changeEndTime(event));
    }
  };

  return (
    <div>
      <TimePicker onChange={handleOnChange} value={value} />
    </div>
  );
}

export default MilkTimePicker;
