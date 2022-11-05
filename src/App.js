// STYLES
import "./App.css";

// IMPORTS
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

// COMPONENTS
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
