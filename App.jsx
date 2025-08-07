import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Employees from "./pages/Employees";
import BackofficeConfig from "./pages/BackofficeConfig";
import BackofficeUsers from "./pages/BackofficeUsers";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/colaboradores" element={<Employees />} />
        <Route path="/backoffice/config" element={<BackofficeConfig />} />
        <Route path="/backoffice/utilizadores" element={<BackofficeUsers />} />
      </Routes>
    </Router>
  );
}

export default App;