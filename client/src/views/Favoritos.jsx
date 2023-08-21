import { discos } from '../data/discos';
import { ProductCard } from '../components';
import { useFavorite } from '../context/FavoriteProvider';

export const Favoritos = () => {
    const { favoriteItems, onRemoveFavorite } = useFavorite();

    // Filtrar los discos favoritos usando los IDs en la lista de favoritos
    const discosFavoritos = discos.filter(disco => favoriteItems.includes(disco.ps_id));

    return (
        <div className="container mt-5">
            <h2 className='mb-5'>Mis favoritos:</h2>
            <div className="row">
                {favoriteItems.length === 0 ? (
                    <p>No tienes discos en favoritos.</p>
                ) : (
                    discosFavoritos.map((disco) => (
                        <ProductCard
                            key={disco.ps_id}
                            id={disco.ps_id}
                            band={disco.ps_band}
                            album={disco.ps_album}
                            albumImage={disco.ps_albumimage}
                            category={disco.ps_category}
                            isFavorite={true}
                            onRemoveFavorite={() => onRemoveFavorite(disco.ps_id)}
                        />
                    ))
                )}
            </div>
        </div>
    );
};