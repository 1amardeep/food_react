import React from "react";
import { useSelector } from "react-redux";

const MilkValue = () => {
  const totolQuantity = useSelector(({ milks: { searchTerm, milks } }) => {
    return milks
      .filter((milk) =>
        milk.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .reduce((acc, milk) => acc + milk.quantity, 0);
  });
  return (
    <div className="notification has-background-link-dark has-text-info-light is-size-5 text-align-right pr-6 py-2">
      Total Consumed : {totolQuantity} ml
    </div>
  );
};

export default MilkValue;
