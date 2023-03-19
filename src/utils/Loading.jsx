/** @format */

import { useContext } from "react";
import AllContext from "../context/AllContext";
import { GridLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const Loading = ({ loading }) => {
  const { lightMode } = useContext(AllContext);

  return (
    <div className="sweet-loading pt-5">
      <GridLoader
        color={lightMode ? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 98%)"}
        loading={loading}
        cssOverride={override}
        size={15}
        height={44}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loading;
