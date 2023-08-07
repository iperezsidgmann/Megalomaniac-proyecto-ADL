import { useMemo } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Navbar, DetailProduct, Footer } from './components/index';
import { HomePage, LoginPage, PanelPage, SignupPage, MisDiscos, AgregarDisco, Favoritos, LogoutPage } from "./views/index";
import { discos } from "./data/discos";
import { RockPage, PopPage, FolkPage, MetalPage } from './pages/index';
import { AuthProvider } from "./context/AuthProvider";
import { FavoriteProvider } from "./context/FavoriteProvider"; 

export const App = () => {
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
        <AuthProvider>
            <FavoriteProvider>
                <BrowserRouter>
                    <Navbar
                        discos={memoizedDiscos}
                        searchFunction={memoizedSearchDiscos}
                    />
                    <div className="container-fluid mb-5">
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="*" element={<HomePage />} />
                            <Route path="/home" element={<HomePage />} />
                            <Route path="/login" element={<LoginPage />} />
                            <Route path="/signup" element={<SignupPage />} />
                            <Route path="/logout" element={<LogoutPage />} />
                            <Route path="/panel:id" element={<PanelPage />} />
                            <Route path="/rockpage" element={<RockPage />} />
                            <Route path="/poppage" element={<PopPage />} />
                            <Route path="/folkpage" element={<FolkPage />} />
                            <Route path="/metalpage" element={<MetalPage />} />
                            <Route path="/detail/:id" element={<DetailProduct discos={memoizedDiscos} />} />
                            <Route path="/mis-discos" element={<MisDiscos />} />
                            <Route path="/agregar-disco" element={<AgregarDisco />} />
                            <Route path="/favoritos" element={<Favoritos />} />
                        </Routes>
                    </div>
                    <Footer />
                </BrowserRouter>
            </FavoriteProvider>
        </AuthProvider>
    );
};
