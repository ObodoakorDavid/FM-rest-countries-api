/** @format */

import React, { useContext } from "react";
import AllContext from "../context/AllContext";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";

const Navbar = () => {
  const { lightMode, setLightMode } = useContext(AllContext);

  const themeText = lightMode ? "Dark Mode" : "Light Mode";
  const icon = lightMode ? <MdDarkMode /> : <MdOutlineDarkMode />;

  return (
    <div className="bg-elements">
      <div className="main-nav bg-elements d-flex justify-content-between align-items-center py-3">
        <h1 className=" fs-3 m-0">Where in the World?</h1>
        <div
          onClick={() => {
            setLightMode(!lightMode);
          }}
          style={{
            cursor: "pointer",
          }}
          className="d-flex align-items-center gap-1"
        >
          {icon}
          <p className="m-0">{themeText}</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
