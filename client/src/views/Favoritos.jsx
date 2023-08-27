import { useEffect, useState } from 'react';
import { ProductCard } from '../components';
import { useAuth } from '../context/AuthProvider';

export const Favoritos = () => {
    const [favoritos, setFavoritos] = useState([]);
    const { isLoggedIn, authToken } = useAuth(); // Obtén el estado de autenticación y el token desde el contexto AuthProvider

    useEffect(() => {
        // Verifica si el usuario está autenticado antes de hacer la llamada a la API
        if (isLoggedIn) {
            // Realiza la solicitud a la API solo si el usuario está autenticado
            fetch('https://backend-megalomaniac.onrender.com/favoritos', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${authToken}` // Usa el token de autenticación almacenado en el contexto
                }
            })
            .then(response => response.json())
            .then(data => setFavoritos(data))
            .catch(error => console.error('Error al obtener los favoritos:', error));
        }
    }, [isLoggedIn, authToken]);

    return (
        <div className="container mt-5">
            <h2 className='mb-5'>Mis favoritos:</h2>
            <div className="row">
                {favoritos.length === 0 ? (
                    <p>No tienes discos en favoritos.</p>
                ) : (
                    favoritos.map((disco) => (
                        <ProductCard
                            key={disco.ps_id}
                            ps_id={disco.ps_id}
                            ps_band={disco.ps_band}
                            ps_album={disco.ps_album}
                            ps_albumimage={disco.ps_albumimage}
                            ps_category={disco.ps_category}
                        />
                    ))
                )}
            </div>
        </div>
    );
};