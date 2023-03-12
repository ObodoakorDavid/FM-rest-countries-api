/** @format */

import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useFetch } from "./hooks/useFetch";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";

function App() {
  const { data, error, loading } = useFetch(
    "https://restcountries.com/v3.1/all"
  );
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage data={data} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
