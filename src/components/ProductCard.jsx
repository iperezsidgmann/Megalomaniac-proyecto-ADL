import { Link } from 'react-router-dom';
import { useState } from 'react';
import 'animate.css';

export const ProductCard = ({ id, band, album, albumImage, category, isUserCreated, onAddFavorite, onRemoveFavorite, onDelete }) => {
    const [isFavorite, setIsFavorite] = useState(false);

    const handleFavoriteClick = () => {
        setIsFavorite(!isFavorite);
        if (isFavorite) {
            window.alert('Disco quitado de Favoritos.');
            onRemoveFavorite();
        } else {
            window.alert('Disco agregado a Favoritos.');
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
                            <div className="mt-auto text-center">
                                <button className="btn btn-light" onClick={handleFavoriteClick}>
                                    {isFavorite ? 'Quitar de Favoritos' : 'Agregar a Favoritos'}
                                    <span className={`ml-2 ${isFavorite ? 'text-warning' : 'text-secondary'}`}>
                                        {isFavorite ? <i className="fas fa-star"></i> : <i className="far fa-star"></i>}
                                    </span>
                                </button>
                                {!isUserCreated && ( // Mostrar el botón de eliminar solo si NO es un disco creado por el usuario
                                    <button className="btn btn-danger ml-2" onClick={onDelete}>
                                        Eliminar Disco
                                        <i className="fas fa-trash ml-2"></i>
                                    </button>
                                )}
                                <Link to={`/detail/${id}`} className="btn btn-light ml-2">
                                    Detalles
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

