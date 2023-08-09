import { useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Cambio de useHistory a useNavigate
import { useAuth } from "../context/AuthProvider";

export const LogoutPage = () => {
    const { handleLogout } = useAuth();
    const navigate = useNavigate(); // Usar useNavigate en lugar de useHistory

    useEffect(() => {
        // Lógica para hacer Logout y redirigir a la página de inicio
        handleLogout();

        // Redirigir a la página de inicio después de 1.5 segundos
        const timer = setTimeout(() => {
            navigate("/");
        }, 1500);

        return () => clearTimeout(timer);
    }, [handleLogout, navigate]);

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="col-md-6 text-center animate__animated animate__fadeIn" style={{ marginTop: "-35vh" }}>
                <h1 className="mt-4 mb-3">¡Hasta luego! Has cerrado sesión exitosamente.</h1>
            </div>
        </div>
    );
};
