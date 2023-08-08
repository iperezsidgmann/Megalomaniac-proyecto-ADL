import { discos } from '../data/discos';
import { ProductCard } from '../components';
import { useFavorite } from '../context/FavoriteProvider';

export const Favoritos = () => {
    const { favoriteItems, onRemoveFavorite } = useFavorite();

    // Filtrar los discos favoritos usando los IDs en la lista de favoritos
    const discosFavoritos = discos.filter(disco => favoriteItems.includes(disco.id));

    return (
        <div className="container mt-5">
            <h2 className='mb-5'>Mis favoritos:</h2>
            <div className="row">
                {favoriteItems.length === 0 ? (
                    <p>No tienes discos en favoritos.</p>
                ) : (
                    discosFavoritos.map((disco) => (
                        <ProductCard
                            key={disco.id}
                            id={disco.id}
                            band={disco.band}
                            album={disco.album}
                            albumImage={disco.albumImage}
                            category={disco.category}
                            isFavorite={true}
                            onRemoveFavorite={() => onRemoveFavorite(disco.id)}
                        />
                    ))
                )}
            </div>
        </div>
    );
};
