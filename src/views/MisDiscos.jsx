import { useState } from 'react';
import { ProductCard } from '../components';
import { discos } from '../data/discos';

export const MisDiscos = () => {
    const [favoritos, setFavoritos] = useState([]);
    const [misDiscos, setMisDiscos] = useState([]);

    const agregarFavorito = (disco) => {
        setFavoritos([...favoritos, disco]);
    };

    const quitarFavorito = (id) => {
        const nuevosFavoritos = favoritos.filter((disco) => disco.id !== id);
        setFavoritos(nuevosFavoritos);
    };

const agregarDisco = (disco) => {
    setMisDiscos([...misDiscos, disco]); // Agregar el nuevo disco a la lista de discos del usuario
};

    return (
        <div className="container mt-5">
            <h2>Mis Discos</h2>
            <div className="row">
                {misDiscos.map((disco) => ( // Mapear los discos del usuario en lugar de filtrarlos
                    <ProductCard
                        key={disco.id}
                        id={disco.id}
                        band={disco.band}
                        album={disco.album}
                        albumImage={disco.albumImage}
                        category={disco.category}
                        isFavorite={favoritos.some((fav) => fav.id === disco.id)}
                        onAddFavorite={() => agregarFavorito(disco)}
                        onRemoveFavorite={() => quitarFavorito(disco.id)}
                    />
                ))}
            </div>
        </div>
    );
};

