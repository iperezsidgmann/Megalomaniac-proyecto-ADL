import { Link } from 'react-router-dom'
import 'animate.css';


export const ProductCard = ({ id, band, album, albumImage, category }) => {


    return (
        <div className="col-md-4 col-sm-6 col-12 mb-3 animate__animated animate__fadeIn">
            <div className="card bg-dark text-light h-100 mb-1">
                <div className="row no-gutters">
                    <div className=" d-flex align-items-center justify-content-center"> {/* Ajusta el tamaño de la columna */}
                        <img src={albumImage} className="card-img" alt={band} style={{ width: '100%', height: '350px', objectFit: 'cover' }} />
                    </div>
                    <div className=""> {/* Ajusta el tamaño de la columna */}
                        <div className="card-body d-flex flex-column justify-content-between h-100">
                            <div>
                                <h3 className="card-title">{band}</h3>
                                <p className="card-text text-light">Album: {album} </p>
                                <p className="card-text text-light">
                                    <small className="text-light">Categoría: {category} </small>
                                </p>
                            </div>
                            <div className="mt-auto text-center">
                                <Link to={`/detail/${id}`} className="btn btn-light">
                                    Detalles
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>





    )
}
