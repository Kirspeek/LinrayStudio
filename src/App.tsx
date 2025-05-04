import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Illustrations from "./pages/Illustrations";
import Books from "./pages/Books";
import Games from "./pages/Games";
import Lettering from "./pages/Lettering";
import Characters from "./pages/Characters";
import About from "./pages/About";
import "./styles/App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/illustrations" element={<Illustrations />} />
        <Route path="/books" element={<Books />} />
        <Route path="/games" element={<Games />} />
        <Route path="/lettering" element={<Lettering />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
