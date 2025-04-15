import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DrinkDetails from "./pages/DrinkDetails";
import AppCenter from "./components/app";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Home page */}
        <Route path="/" element={<AppCenter />} />

        {/* Drink details page */}
        <Route path="/drink/:name" element={<DrinkDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
