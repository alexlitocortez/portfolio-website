import React from "react";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router } from "react-router-dom";
import { AppRoutes } from "./components/Approutes/AppRoutes";

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
