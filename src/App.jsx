import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Unas from "./pages/Unas"
import Pestanas from "./pages/Pestanas"
import Cabello from "./pages/Cabello"
import Cejas from "./pages/Cejas"

export default function App() {
  return (
    <BrowserRouter basename="/MM_AmysArt">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/unas" element={<Unas />} />
        <Route path="/pestanas" element={<Pestanas />} />
        <Route path="/cabello" element={<Cabello />} />
        <Route path="/cejas" element={<Cejas />} />
        <Route path="/pedicure" element={<Pedicure />} />
      </Routes>
    </BrowserRouter>
  )
}