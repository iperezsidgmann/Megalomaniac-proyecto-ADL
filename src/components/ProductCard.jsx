import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { useFavorite } from '../context/FavoriteProvider';
import 'animate.css';


export const ProductCard = ({ id, band, album, albumImage, category }) => {

    const [isFavorite, setIsFavorite] = useState(false);
    const { isLoggedIn, isRegistered } = useAuth();
    const { onRemoveFavorite, onAddFavorite } = useFavorite();

    const handleFavoriteClick = () => {
        if (!isLoggedIn) {
            return;
        }

        setIsFavorite(!isFavorite);

        if (isFavorite) {
            onRemoveFavorite();
        } else {
            onAddFavorite();
        }
    };

    return (
        <div className="col-md-4 col-sm-6 col-12 mb-3 animate__animated animate__fadeIn">
            <div className="card bg-dark text-light h-100 mb-1">
                <div className="row no-gutters">
                    <div className="d-flex align-items-center justify-content-center">
                        <img src={albumImage} className="card-img" alt={band} style={{ width: '100%', height: '350px', objectFit: 'cover' }} />
                    </div>
                    <div className="">
                        <div className="card-body d-flex flex-column justify-content-between h-100">
                            <div>
                                <h3 className="card-title">{band}</h3>
                                <p className="card-text text-light">Album: {album} </p>
                                <p className="card-text text-light">
                                    <small className="text-light">Categoría: {category} </small>
                                </p>
                            </div>
                            <div className="d-flex justify-content-between align-items-center mt-3">
                                <Link to={`/detail/${id}`} className="btn btn-light">
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

