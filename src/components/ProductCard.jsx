import { Link } from 'react-router-dom'
import 'animate.css';


export const ProductCard = ({ id, band, album, albumImage, category }) => {

    const discosURL = albumImage ? `/assets/img/discos/${albumImage}.png` : '';

    return (

        <div className="col animate__animated animate__fadeIn">
            <div className="card bg-dark text-light">

                <div className="row no-gutters">
                    <div className="col-4">
                        <img src={albumImage} className="card-img" alt={band} />
                        
                    </div>
                    <div className="col-8">
                        <div className="card-body">
                            <h3>{band}</h3>
                            <p className="card-text text-light">Album: {album} </p>
                            <p className="card-text text-light">
                                <small className="text-light">Categoría: {category} </small>
                            </p>

                            <Link to={`/detail/${id}`}>
                                Detalles
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
