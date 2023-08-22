import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { useFavorite } from '../context/FavoriteProvider';
import 'animate.css';

export const ProductCard = ({ ps_id, ps_band, ps_album, ps_albumimage, ps_category }) => {
    const [isFavorite, setIsFavorite] = useState(false);
    const { isLoggedIn, user, isRegistered } = useAuth(); // Supongamos que el objeto de usuario tiene una propiedad "id"
    const { onRemoveFavorite, onAddFavorite, favoriteItems } = useFavorite();

    useEffect(() => {
        setIsFavorite(favoriteItems.includes(ps_id));
    }, [favoriteItems, ps_id]);

    const handleFavoriteClick = () => {
        if (!isLoggedIn) {
            return;
        }

        if (isFavorite) {
            setIsFavorite(false);
            onRemoveFavorite(ps_id);
        } else {
            setIsFavorite(true);
            onAddFavorite(ps_id);

            // Enviamos el favorito al servidor con el ID del usuario y el ID del producto
            const userId = user.id; // Supongamos que el objeto de usuario tiene una propiedad "id"
            const productId = ps_id; // ID del producto
            
            fetch('http://localhost:3000/favoritos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    idusuario: userId,
                    idpost: productId,
                }),
            })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error(`La solicitud no fue exitosa (${response.status} - ${response.statusText})`);
                    }
                    return response.json();
                })
                .then((data) => {
                    // Manejar la respuesta del servidor aquí
                    console.log('Favorito guardado en el servidor:', data);
                })
                .catch((error) => {
                    console.error('Error al guardar el favorito en el servidor:', error);
                });
        }
    };

    return (
        <div className="col-md-4 col-sm-6 col-12 mb-3 animate__animated animate__fadeIn">
            <div className="card bg-dark text-light h-100 mb-1">
                <div className="row no-gutters">
                    <div className="d-flex align-items-center justify-content-center">
                        <img src={ps_albumimage} className="card-img" alt={ps_band} style={{ width: '100%', height: '350px', objectFit: 'cover' }} />
                    </div>
                    <div className="">
                        <div className="card-body d-flex flex-column justify-content-between h-100">
                            <div>
                                <h3 className="card-title">{ps_band}</h3>
                                <p className="card-text text-light">Album: {ps_album} </p>
                                <p className="card-text text-light">
                                    <small className="text-light">Categoría: {ps_category} </small>
                                </p>
                            </div>
                            <div className="d-flex justify-content-between align-items-center mt-3">
                                <Link to={`/detail/${ps_id}`} className="btn btn-light">
                                    Detalles
                                </Link>
                                {(isLoggedIn || isRegistered) && (
                                    <div onClick={handleFavoriteClick}>
                                        {isFavorite ? (
                                            <AiFillHeart className="text-danger" style={{ fontSize: '2rem' }} />
                                        ) : (
                                            <AiOutlineHeart style={{ fontSize: '2rem' }} />
                                        )}
                                        <span className={`ml-2 ${isFavorite ? 'text-warning' : 'text-secondary'}`}>
                                            {isFavorite ? <i className="fas fa-star"></i> : <i className="far fa-star"></i>}
                                        </span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
