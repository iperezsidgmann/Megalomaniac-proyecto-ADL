import { useMemo } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Navbar, DetailProduct, Footer } from './components/index';
import { HomePage, LoginPage, PanelPage, SignupPage } from "./views/index";
import { discos } from "./data/discos";
import { RockPage, PopPage, FolkPage, MetalPage} from './pages/index';
import { AuthProvider } from "./context/AuthProvider";

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
            <BrowserRouter>
                <Navbar discos={memoizedDiscos} searchFunction={memoizedSearchDiscos} />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="*" element={<HomePage />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signup" element={<SignupPage />} />
                    <Route path="/panel:id" element={<PanelPage />} />
                    <Route path="/rockpage" element={<RockPage />} />
                    <Route path="/poppage" element={<PopPage />} />
                    <Route path="/folkpage" element={<FolkPage />} />
                    <Route path="/metalpage" element={<MetalPage />} />
                    <Route path="/detail/:id" element={<DetailProduct discos={memoizedDiscos} />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </AuthProvider>
    );
};
