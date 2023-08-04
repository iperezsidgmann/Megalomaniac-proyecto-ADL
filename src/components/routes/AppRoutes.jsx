import { useMemo } from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar, DetailProduct } from '../index';
import { HomePage, PanelPage } from "../../views/index";
import { discos } from "../../data/discos";
import RockPage from "../../pages/RockPage";
import PopPage from "../../pages/PopPage";
import FolkPage from "../../pages/FolkPage";
import MetalPage from "../../pages/MetalPage";
import NotFound from "../../pages/NotFound";

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
                <Route path="/panel/:id" element={<PanelPage />} />
                <Route path="/rockpage" element={<RockPage />} />
                <Route path="/poppage" element={<PopPage />} />
                <Route path="/folkpage" element={<FolkPage />} />
                <Route path="/metalpage" element={<MetalPage />} />

                {/* Pasamos discos como una prop al componente DetailProduct */}
                <Route
                    path="/detail/:id"
                    element={<DetailProduct discos={memoizedDiscos} />}
                />
            </Routes>
        </>
    );
<<<<<<< HEAD
=======
  };

  // Usamos useMemo para evitar recalcular los resultados de búsqueda en cada renderizado
  const memoizedDiscos = useMemo(() => discos, []);
  const memoizedSearchDiscos = useMemo(() => searchDiscos, []);

  return (
    <>
      <Navbar discos={memoizedDiscos} searchFunction={memoizedSearchDiscos} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/rockpage" element={<RockPage />} />
        <Route path="/poppage" element={<PopPage />} />
        <Route path="/folkpage" element={<FolkPage />} />
        <Route path="/metalpage" element={<MetalPage />} />

        {/* Pasamos discos como una prop al componente DetailProduct */}
      <Route
          path="/detail/:id"
          element={<DetailProduct discos={memoizedDiscos} />}
        />
      </Routes>
    </>
  );
>>>>>>> e6ffba55e371fb5c8092c7b03b13a386910f4c08
}

