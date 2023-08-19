import { Routes, Route } from "react-router-dom";
import { Navbar, Footer, DetailProduct } from './components/index';
import { HomePage, LoginPage, PanelPage, SignupPage, MisDiscos, AgregarDisco, Favoritos, LogoutPage } from "./views/index";
import { RockPage, PopPage, FolkPage, MetalPage, NotFound } from './pages/index';
import { useSearchContext } from "./context/SearchProvider";
import { discos } from "./data/discos";
import { useAuth } from "./context/AuthProvider";

export const AppContent = () => {
    const searchFunction = useSearchContext();
    const memoizedDiscos = searchFunction("term");

    const { isLoggedIn } = useAuth();

    return (
        <>
            <Navbar discos={memoizedDiscos} searchFunction={searchFunction} />
            <div className="container-fluid mb-5">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signup" element={<SignupPage />} />
                    <Route path="/logout" element={<LogoutPage />} />
                    <Route path="/panel/:id" element={<PanelPage />} />
                    <Route path="/rockpage" element={<RockPage />} />
                    <Route path="/poppage" element={<PopPage />} />
                    <Route path="/folkpage" element={<FolkPage />} />
                    <Route path="/metalpage" element={<MetalPage />} />
                    <Route path="/detail/:id" element={<DetailProduct discos={discos} />} />
                    {isLoggedIn && (
                        <>
                            <Route path="/mis-discos" element={<MisDiscos />} />
                            <Route path="/agregar-disco" element={<AgregarDisco />} />
                            <Route path="/favoritos" element={<Favoritos />} />
                        </>
                    )}
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
            <Footer />
        </>
    );
};