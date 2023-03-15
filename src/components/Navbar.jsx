/** @format */

import React from "react";

const Navbar = ({ lightMode, setLightMode }) => {
  return (
    <div className="main-nav bg-elements d-flex justify-content-between align-items-center p-3">
      <h1 className=" fs-3 m-0">Where in the World?</h1>
      <div
        onClick={() => {
          setLightMode(!lightMode);
        }}
        style={{
          cursor: "pointer",
        }}
      >
        <img src="" alt="" />
        <p className="">Dark Mode</p>
      </div>
    </div>
  );
};

export default Navbar;
