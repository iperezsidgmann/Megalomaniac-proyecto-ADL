import { useMemo } from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar, DetailProduct } from '../index';
import { HomePage } from "../../views/index";
import { discos } from "../../data/discos";


export const AppRoutes = () => {
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
    <>
      <Navbar discos={memoizedDiscos} searchFunction={memoizedSearchDiscos} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        {/* Pasamos discos como una prop al componente DetailProduct */}
        <Route
          path="/detail/:id"
          element={<DetailProduct discos={memoizedDiscos} />}
        />
      </Routes>
    </>
  );
}

