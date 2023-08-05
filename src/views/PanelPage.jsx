import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";

export const PanelPage = ({ handleLogout, handleRedirectToHome }) => {
    const navigate = useNavigate();
    const location = useLocation(); 
    const searchParams = new URLSearchParams(location.search);
    const name = searchParams.get('name') || 'Usuario'; 

    useEffect(() => {
        const timer = setTimeout(() => {
            handleRedirectToHome();
        }, 1500);

        return () => clearTimeout(timer);
    }, [handleRedirectToHome]);

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="col-md-6 text-center animate__animated animate__fadeIn" style={{ marginTop: "-35vh" }}>
                <h1 className="mt-4 mb-3">Bienvenido {name}!</h1>
            </div>
        </div>
    );
};
