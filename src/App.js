/** @format */

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useFetch } from "./hooks/useFetch";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import { useEffect, useState } from "react";

function App() {
  const { data, error, loading } = useFetch(
    "https://restcountries.com/v3.1/all"
  );

  const [lightMode, setLightMode] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState("");

  // function switchMode() {
  //   if (lightMode === true) {
  //     document.body.classList.add("light-mode");
  //   } else {
  //     document.body.classList.remove("light-mode");
  //   }
  // }

  useEffect(() => {
    if (lightMode === true) {
      document.body.classList.add("light-mode");
    } else {
      document.body.classList.remove("light-mode");
    }
  }, [lightMode]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Homepage
                data={data}
                lightMode={lightMode}
                setLightMode={setLightMode}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
