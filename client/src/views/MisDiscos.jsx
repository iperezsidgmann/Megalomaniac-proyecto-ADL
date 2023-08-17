import React, { useState, useEffect } from 'react';
import { ProductCard } from '../components';
import { useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';

export const MisDiscos = () => {
    const [favoritos, setFavoritos] = useState([]);
    const [userDiscos, setUserDiscos] = useState([]); 
    const location = useLocation();
    const { user } = useAuth();

    const agregarFavorito = (disco) => {
        setFavoritos([...favoritos, disco]);
    };

    const quitarFavorito = (id) => {
        const nuevosFavoritos = favoritos.filter((disco) => disco.id !== id);
        setFavoritos(nuevosFavoritos);
    };

    const agregarDisco = (disco) => {
        setUserDiscos([...userDiscos, disco]);
    };

    const eliminarDisco = (id) => {
        const nuevosDiscos = userDiscos.filter((disco) => disco.ps_id !== id); 
        setUserDiscos(nuevosDiscos);
    };

    useEffect(() => {
        if (location.state && location.state.newDisco) {
            agregarDisco(location.state.newDisco);
        }
    }, [location.state]);

    
    const discosCreadosPorUsuario = userDiscos.filter((disco) => disco.ps_us_id === user.us_id);

    return (
        <div className="container mt-5">
            <h2>Mis Discos</h2>
            <div className="row">
                {discosCreadosPorUsuario.map((disco) => (
                    <ProductCard
                        key={disco.ps_id}
                        id={disco.ps_id}
                        band={disco.ps_band}
                        album={disco.ps_album}
                        albumImage={disco.ps_albumimage}
                        category={disco.ps_category}
                        isFavorite={favoritos.some((fav) => fav.id === disco.ps_id)}
                        onAddFavorite={() => agregarFavorito(disco)}
                        onRemoveFavorite={() => quitarFavorito(disco.ps_id)}
                        onDelete={() => eliminarDisco(disco.ps_id)}
                        isUserCreated
                    />
                ))}
            </div>
        </div>
    );
};
