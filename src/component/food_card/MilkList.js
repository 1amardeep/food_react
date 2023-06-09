import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeMilk } from "../stores";
import { TbBabyBottle } from "react-icons/tb";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import MilkValue from "./MilkValue";
import MilkModal from "./MilkModal";
import MilkForm from "./MilkForm";
import { changeTheFormState } from "../stores";
import { format } from "date-fns";

const MilkList = () => {
  const [showModal, setShowModal] = useState(false);
  const todayDate = format(new Date(), "MM/dd/yyyy");
  const carList = useSelector(({ milks: { searchTerm, milks } }) => {
    return milks.filter((milk) => {
      return milk.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
  });
  const dispatch = useDispatch();
  const deleteHandler = (id) => {
    dispatch(removeMilk(id));
  };

  const handleModal = (list) => {
    dispatch(
      changeTheFormState({
        ...list,
      })
    );
    setShowModal(true);
  };

  const closeTheModal = () => {
    setShowModal(false);
  };

  const tableMilkList = carList.map((list, index) => {
    const { endTime, startTime, id, quantity } = list;
    return (
      <tr key={id}>
        <td>{index + 1}</td>
        <td>{startTime}</td>
        <td>{endTime}</td>
        <td>{quantity}</td>
        <td>
          <MdDelete
            className="svgTable"
            onClick={() => deleteHandler(id)}
          ></MdDelete>
          <MdEdit
            className="svgTable"
            onClick={() => handleModal(list)}
          ></MdEdit>
        </td>
      </tr>
    );
  });
  return (
    <div className="box">
      <div className="notification has-background-link-dark has-text-info-light is-size-5 text-align-right pr-6 py-2">
        {todayDate}
      </div>
      <table className="table is-hoverable is-fullwidth">
        <thead>
          <tr>
            <th>Feed</th>
            <th>Start Time</th>
            <th>End Time</th>
            <th>
              Quantity (ml) <TbBabyBottle></TbBabyBottle>
            </th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{tableMilkList}</tbody>
      </table>
      <MilkValue></MilkValue>
      {showModal && (
        <MilkModal>
          <MilkForm type="update" closeTheModal={closeTheModal}></MilkForm>
        </MilkModal>
      )}
    </div>
  );
};

export default MilkList;
