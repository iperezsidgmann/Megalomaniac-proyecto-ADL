import { Link } from 'react-router-dom'


export const ProductCard = () => {
    return (
        <div className="col animate__animated animate__fadeIn">
            <div className="card bg-dark text-light">

                <div className="row no-gutters">
                    <div className="col-4">
                        <img src='../assets/img/example.png' className="card-img" alt='' />
                    </div>
                    <div className="col-8">
                        <div className="card-body">
                            <h5>Titulo</h5>
                            <p className="card-text"> example</p>
                            <p className="card-text">
                                <small className="text-muted">texto</small>
                            </p>

                            <Link to={`/detail/`}>
                                More...
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
