import './index.css'
import Home from './pages/home/index.jsx'
import Teste from './pages/teste/index.jsx'
import { BrowserRouter, Routes, Route } from "react-router";
import ReactDOM from "react-dom/client";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/teste" element={<Teste />} />
    </Routes>
  </BrowserRouter>,
);
