import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";

import axios from "axios";

function App() {
  const [count, setCount] = useState("");

  useEffect(() => {
    getApi();
  }, []);

  const getApi = async () => {
    const data = await axios.get("/api");
    console.log(data);

    setCount(data.data.name);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h1>Hi</h1>
                <h1>{count}</h1>
                <h1>HOME!</h1>
              </>
            }
          />
          <Route
            path="/stats"
            element={
              <>
                <h1>STATS</h1>
              </>
            }
          />
          <Route
            path="/admin"
            element={
              <>
                <h1>Admin</h1>
              </>
            }
          />
          {/* <Route path="/*" element={<Navigate replace to="/" />} /> */}
          <Route
            path="/*"
            element={
              <>
                <h1>404 NOT FOUND!</h1>
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
