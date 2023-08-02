import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import 'animate.css';

export const DetailProduct = ({ discos }) => {
    const { id } = useParams();
    const [disco, setDisco] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const navigate = useNavigate();

    const onNavigateBack = () => {
        navigate(-1);
    };

    useEffect(() => {
        const fetchDisco = async () => {
            const discoData = discos.find((disco) => disco.id === id);
            setDisco(discoData);
            setIsLoading(false);
        };

        fetchDisco();
    }, [discos, id]);

    if (isLoading) {
        return <div>Cargando...</div>;
    }

    if (!disco) {
        return <div>No se han encontrado detalles del disco.</div>;
    }

    return (
        <div className="col-md-10 mx-auto row mt-5 text-light animate__animated animate__fadeIn">
            <div className="col-4">
                <img
                    src={`/assets/img/discos/${disco.albumImage}.png`}
                    alt={disco.band}
                    className="img-thumbnail"
                />
            </div>

            <div className="col-8">
                <h3>{disco.band}</h3>
                <ul className="list-group ">
                    <li className="list-group-item">
                        <b>Album:</b> {disco.album}
                    </li>
                    <li className="list-group-item">
                        <b>Año:</b> {/* {disco.album} */}
                        <p>Pendiente</p>
                    </li>

                    <li className="list-group-item">
                        <b>Categoría:</b> {disco.category}
                    </li>
                    <li className="list-group-item">
                        <b className="mt-3">Integrantes:</b>
                        <p>Pendiente</p>
                    </li>
                </ul>
                <button className="btn btn-dark mt-3" onClick={onNavigateBack}>
                    Back
                </button>
            </div>
        </div>
    );
};
