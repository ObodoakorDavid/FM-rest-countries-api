/** @format */

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import { ContextProvider } from "./context/AllContext";
import CountryLayout from "./layout/CountryLayout";
import Error404 from "./components/Error404";

function App() {
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
