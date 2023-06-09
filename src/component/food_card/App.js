import React, { useState } from "react";
import { TbMoodKid } from "react-icons/tb";

import MilkForm from "./components/MilkForm";
import MilkSearch from "./components/MilkSearch";
import MilkList from "./components/MilkList";
import MilkModal from "./components/MilkModal";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => {
    setShowModal(!showModal);
  };
  return (
    <>
      <nav
        className="navbar fixed"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <a className="navbar-item">
            <TbMoodKid></TbMoodKid>
          </a>
        </div>
      </nav>
      <div className="container pt-2">
        <button className="button is-primary mb-4" onClick={handleShowModal}>
          Add
        </button>
        {showModal && (
          <MilkModal>
            <MilkForm type="add" closeTheModal={handleShowModal}></MilkForm>
          </MilkModal>
        )}
        {/* <MilkSearch></MilkSearch> */}
        <MilkList></MilkList>
      </div>
    </>
  );
};

export default App;
