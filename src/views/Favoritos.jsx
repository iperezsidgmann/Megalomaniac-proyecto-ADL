import { useState } from 'react';
import { ProductCard } from '../components';

export const Favoritos = () => {
    const [favoritos, setFavoritos] = useState([]); // Estado para almacenar los discos favoritos

    // Función para agregar un disco a la lista de favoritos
    const agregarFavorito = (disco) => {
        setFavoritos([...favoritos, disco]);
    };

    // Función para quitar un disco de la lista de favoritos
    const quitarFavorito = (id) => {
        const nuevosFavoritos = favoritos.filter(disco => disco.id !== id);
        setFavoritos(nuevosFavoritos);
    };

    return (
        <div className="container mt-5">
            <h2>Favoritos</h2>
            <div className="row">
                {favoritos.length === 0 ? (
                    <p>No tienes discos en favoritos.</p>
                ) : (
                    favoritos.map((disco) => (
                        <ProductCard
                            key={disco.id}
                            id={disco.id}
                            band={disco.band}
                            album={disco.album}
                            albumImage={disco.albumImage}
                            category={disco.category}
                            isFavorite={true} // Indicar que es un favorito
                            onRemoveFavorite={() => quitarFavorito(disco.id)} // Función para quitar de favoritos
                        />
                    ))
                )}
            </div>
        </div>
    );
};
