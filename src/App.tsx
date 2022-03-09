import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Mint } from "./pages/Mint";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/mint" element={<Mint />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
