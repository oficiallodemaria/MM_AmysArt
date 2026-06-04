import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Unas from "./pages/Unas"
import Pestanas from "./pages/Pestanas"
import Cabello from "./pages/Cabello"

export default function App() {
  return (
    <BrowserRouter basename="/lo-de-maria">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/unas" element={<Unas />} />
        <Route path="/pestanas" element={<Pestanas />} />
        <Route path="/cabello" element={<Cabello />} />
      </Routes>
    </BrowserRouter>
  )
}