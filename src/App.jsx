import React, { useMemo } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, DetailProduct } from "./components/index";
import { HomePage, LoginPage, SignupPage } from "./views/index";
import { discos } from "./data/discos"; // Importa la lista de discos desde data/discos.js

function App() {
  // Lógica de búsqueda de discos
  const searchDiscos = (term) => {
    return discos.filter(
      (disco) =>
        disco.album.toLowerCase().includes(term.toLowerCase()) ||
        disco.band.toLowerCase().includes(term.toLowerCase()) ||
        disco.category.toLowerCase().includes(term.toLowerCase())
    );
  };

  // Usamos useMemo para evitar recalcular los resultados de búsqueda en cada renderizado
  const memoizedDiscos = useMemo(() => discos, []);
  const memoizedSearchDiscos = useMemo(() => searchDiscos, []);

  return (
    <BrowserRouter>
      <Navbar discos={memoizedDiscos} searchFunction={memoizedSearchDiscos} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/detail" element={<DetailProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

