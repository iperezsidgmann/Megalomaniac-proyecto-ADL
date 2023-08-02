import { useNavigate, useParams } from "react-router-dom";
import { getDiscosById } from "../helpers/getDiscosById";
import { useMemo } from "react";

export const DetailProduct = () => {

    const { id } = useParams();
    const disco = useMemo( () => getDiscosById(id), [id]); 

    const navigate = useNavigate();

    const onNavigateBack = () => {
        navigate(-1);
    };

    if (!disco) {
        return <div>No se han encontrado detalles del disco.</div>;
    }

    // if (!disco) {
	// 	return <Navigate to='/' />
	// }


    return (

        <div className="row mt-5 text-light animate__animated animate__fadeIn">
            <div className="col-4">
                <img
                    src={disco.albumImage}
                    alt={disco.band}
                    className="img-thumbnail"
                />
            </div>

            <div className="col-8">
                <h3>{disco.band}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <b>Album:</b> {disco.album}
                    </li>
                    <li className="list-group-item">
                        <b>Categoría:</b> {disco.category}
                    </li>
                </ul>
                <h5 className="mt-3">Integrantes:</h5>
                <p>Pendiente</p>
                <button
                    className="btn btn-dark"
                    onClick={onNavigateBack}
                >Back
                </button>
            </div>

        </div>

    )
}
