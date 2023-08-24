import { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthProvider';

const PostContext = createContext();

export const usePost = () => {
    return useContext(PostContext);
};

export const PostProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [addedDiscos, setAddedDiscos] = useState([]);
    const { user, isLoggedIn } = useAuth(); // Importa useAuth desde tu contexto de autenticación

    useEffect(() => {
        if (isLoggedIn && user) { // Verifica que user esté definido y el usuario esté autenticado
            fetch("http://localhost:3000/posts")
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('Error de respuesta');
                    }
                    return response.json();
                })
                .then((data) => {
                    // Filtra los discos por el ID de usuario
                    const userPosts = data.filter((post) => post.ps_us_id === user.id);
                    setPosts(userPosts);
                    setIsLoading(false);
                })
                .catch((error) => {
                    console.error("Error en fetch posts:", error);
                    setIsLoading(false);
                });
        } else {
            setIsLoading(false);
        }
    }, [user, isLoggedIn]); // Reacciona a cambios en user y al estado de autenticación

    const addNewPost = async (newPost) => {
        try {
            if (!isLoggedIn || !user) {
                console.error("El usuario no está autenticado o no está definido.");
                return;
            }

            newPost.ps_us_id = user.id; // Asigna el ID de usuario al nuevo post

            const response = await fetch("http://localhost:3000/posts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    // Incluye el token de autenticación en la solicitud
                    Authorization: `Bearer ${user.token}`,
                },
                body: JSON.stringify({ ...newPost, usuario: user.id }),
            });
        
            if (!response.ok) {
                console.error("Error en la respuesta del servidor:", response);
                throw new Error("Error al agregar el disco");
            }
        
            const responseData = await response.json();
            setPosts([...posts, responseData]);
            setAddedDiscos([...addedDiscos, responseData]); // Agregar a la lista de discos agregados
        } catch (error) {
            console.error("Error al agregar el disco:", error);
        }
    }

    if (isLoading) {
        return <div>Cargando...</div>;
    }

    return (
        <PostContext.Provider value={{ posts, setPosts, addNewPost, addedDiscos }}>
            {children}
        </PostContext.Provider>
    );
};