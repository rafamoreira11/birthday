import './index.css'
import Home from './pages/home/index.jsx'
import Gallery from './pages/gallery/index.jsx'
import { BrowserRouter, Routes, Route } from "react-router";
import ReactDOM from "react-dom/client";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gallery" element={<Gallery />} />
    </Routes>
  </BrowserRouter>,
);
