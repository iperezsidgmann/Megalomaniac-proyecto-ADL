import { useState, useEffect } from 'react';
import { ProductCard } from '../components/index';
import { useAuth } from '../context/AuthProvider';
import { usePost } from '../context/PostProvider';

export const MisDiscos = () => {
    const [posts, setPosts] = useState([]);
    const { user } = useAuth();
    const { addedDiscos } = usePost();

    useEffect(() => {
        // Realizar la solicitud GET al servidor para obtener los discos del usuario
        const fetchUserDiscos = async () => {
            try {
                const response = await fetch(`http://localhost:3000/usuarios_posts/${user.id}`);
                if (!response.ok) {
                    throw new Error('Error al obtener los discos del usuario');
                }
                const data = await response.json();
                setPosts(data);
            } catch (error) {
                console.error('Error al obtener los discos del usuario', error);
            }
        };

        if (user.id) { 
            fetchUserDiscos();
        }
    }, [user.id]);

    // Filtrar los discos creados por el usuario y los agregados
    const allUserDiscos = [...posts, ...addedDiscos];

    const discosCreadosPorUsuario = allUserDiscos.filter((disco) => {
        if (user) {
            return disco.ps_us_id === user.id;
        } else {
            return false;
        }
    });

    return (
        <div className="container mt-5">
            <h2>Mis Discos</h2>
            <div className="row">
                {discosCreadosPorUsuario.map((disco) => (
                    <ProductCard
                        key={disco.ps_id}
                        ps_id={disco.ps_id}
                        ps_band={disco.ps_band}
                        ps_album={disco.ps_album}
                        ps_albumimage={disco.ps_albumimage}
                        ps_category={disco.ps_category}
                    />
                ))}
            </div>
        </div>
    );
};
