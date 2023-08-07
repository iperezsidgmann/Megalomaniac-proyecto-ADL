import React, { useState, useEffect } from 'react';
import { ProductCard } from '../components';
import { useLocation } from 'react-router-dom';

export const MisDiscos = () => {
    const [favoritos, setFavoritos] = useState([]);
    const [misDiscos, setMisDiscos] = useState([]);
    const location = useLocation();

    const agregarFavorito = (disco) => {
        setFavoritos([...favoritos, disco]);
    };

    const quitarFavorito = (id) => {
        const nuevosFavoritos = favoritos.filter((disco) => disco.id !== id);
        setFavoritos(nuevosFavoritos);
    };

    const agregarDisco = (disco) => {
        setMisDiscos([...misDiscos, disco]);
    };

    const eliminarDisco = (id) => {
        const nuevosDiscos = misDiscos.filter((disco) => disco.id !== id);
        setMisDiscos(nuevosDiscos);
    };

    useEffect(() => {
        if (location.state && location.state.newDisco) {
            agregarDisco(location.state.newDisco);
        }
    }, [location.state]);

    return (
        <div className="container mt-5">
            <h2>Mis Discos</h2>
            <div className="row">
                {misDiscos.map((disco) => (
                    <ProductCard
                        key={disco.id}
                        id={disco.id}
                        band={disco.band}
                        album={disco.album}
                        albumImage={disco.albumImage}
                        category={disco.category}
                        isFavorite={favoritos.some((fav) => fav.id === disco.id)}
                        isUserCreated={disco.isUserCreated}
                        onAddFavorite={() => agregarFavorito(disco)}
                        onRemoveFavorite={() => quitarFavorito(disco.id)}
                        onDelete={() => eliminarDisco(disco.id)} // Agrega esta prop para manejar la eliminación del disco
                    />
                ))}
            </div>
        </div>
    );
};
