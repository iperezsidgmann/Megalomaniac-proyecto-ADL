import React, { useState, useEffect } from 'react';
import { ProductCard } from '../components';
import { useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';
import { usePost } from '../context/PostProvider'; 

export const MisDiscos = () => {
    const [favoritos, setFavoritos] = useState([]);
    const [userDiscos, setUserDiscos] = useState([]); 
    const location = useLocation();
    const { user } = useAuth();
    const { addedDiscos } = usePost(); 

    const categoryFromQuery = new URLSearchParams(location.search).get('category');
    
    const agregarFavorito = (disco) => {
        setFavoritos([...favoritos, disco]);
    };

    const quitarFavorito = (id) => {
        const nuevosFavoritos = favoritos.filter((disco) => disco.ps_id !== id);
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

    // Actualizar el estado con los discos creados por el usuario y los agregados
    const allUserDiscos = [...userDiscos, ...addedDiscos];

    const discosCreadosPorUsuario = allUserDiscos.filter((disco) => {
        if (categoryFromQuery && user) {
            return disco.ps_us_id === user.ps_id && disco.ps_category === categoryFromQuery;
        } else if (user) {
            return disco.ps_us_id === user.ps_id;
        } else {
            return false;
        }
    });

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
                        albumImage={disco.ps_albumImage}
                        category={disco.ps_category}
                        isFavorite={favoritos.some((fav) => fav.ps_id === disco.ps_id)}
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
