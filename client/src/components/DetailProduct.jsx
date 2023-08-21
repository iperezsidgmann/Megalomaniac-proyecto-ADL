import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import 'animate.css';

export const DetailProduct = () => {
    const { id } = useParams();
    const [disco, setDisco] = useState(null);


    const navigate = useNavigate();

    const onNavigateBack = () => {
        navigate(-1);
    };


    useEffect(() => {
        fetch(`http://localhost:3000/posts/${id}`) 
            .then((response) => response.json())
            .then((data) => {
                if (data.length > 0) {
                    setDisco(data[0]); 
                } else {
                    console.error('No se encontró ningún disco con el ID proporcionado.');
                }
            })
            .catch((error) => console.error('Error fetching product:', error));
    }, [id]);

    if (!disco) {
        return <div>Cargando...</div>;
    }

    return (
        <div className="col-md-10 mx-auto row mt-5 text-light animate__animated animate__fadeIn">
            <div className="col-4">
                <img
                    src={disco.ps_albumimage}
                    alt={disco.ps_albumimage}
                    className="img-thumbnail"
                />
            </div>

            <div className="col-8">
                <h3>{disco.ps_band}</h3>
                <ul className="list-group ">
                    <li className="list-group-item">
                        <b>Album:</b> {disco.ps_album}
                    </li>
                    <li className="list-group-item">
                        <b>Año:</b> {disco.ps_albumyear}
                    </li>
                    <li className="list-group-item">
                        <b>Categoría:</b> {disco.ps_category}
                    </li>
                </ul>
                <button className="btn btn-dark mt-3" onClick={onNavigateBack}>
                    Regresar
                </button>
            </div>
        </div>
    );
};
