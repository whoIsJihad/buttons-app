import { useState } from "react";
import "./App.css";
import Button_details from "./Components/Button_details";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return(
    <Router>
    <Routes>
      <Route path="/details" element={<Button_details/>} />
    </Routes>
  </Router>
  )
}

export default App;
