import { useMemo } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { DetailProduct } from "./components/DetailProduct";
import { HomePage } from "./views/HomePage";
import { LoginPage } from "./views/LoginPage";
import { SignupPage } from "./views/SignupPage";
import { discos } from "./data/discos";


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
        {/* Pasamos discos como una prop al componente DetailProduct */}
        <Route
          path="/detail/:id"
          element={<DetailProduct discos={memoizedDiscos} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
