import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

export const PanelPage = ({ handleRedirectToHome }) => {

    const { name } = useAuth();
    const location = useLocation();
    const queryName = new URLSearchParams(location.search).get('name') || 'Melómano';

    useEffect(() => {
        const timer = setTimeout(() => {
            handleRedirectToHome();
        }, 1500);

        return () => clearTimeout(timer);
    }, [handleRedirectToHome]);

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="col-md-6 text-center animate__animated animate__fadeIn" style={{ marginTop: "-35vh" }}>
                <h1 className="mt-4 mb-3">Bienvenido {name || queryName}!</h1>
            </div>
        </div>
    );
};
