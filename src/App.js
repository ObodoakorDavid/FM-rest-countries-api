/** @format */

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useFetch } from "./hooks/useFetch";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import { useEffect, useState } from "react";
import { ContextProvider } from "./context/AllContext";
import CountryLayout from "./layout/CountryLayout";
import Error404 from "./components/Error404";

function App() {
  const { data } = useFetch("https://restcountries.com/v3.1/all");

  const [lightMode, setLightMode] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState("");
  const [userInput, setUserInput] = useState("");

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
        <ContextProvider>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="detail/:name" element={<CountryLayout />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </ContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
