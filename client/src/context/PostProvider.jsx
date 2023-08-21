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
    const { user } = useAuth(); // Importa useAuth desde tu contexto de autenticación

    useEffect(() => {
        fetch("http://localhost:3000/posts")
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Error de respuesta');
                }
                return response.json();
            })
            .then((data) => {
                setPosts(data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error("Error en fetch posts:", error);
                setIsLoading(false);
            });
    }, []);

    const addNewPost = async (newPost) => {
        try {
            newPost.ps_us_id = user.id; // Asigna el ID de usuario al nuevo post

            const response = await fetch("http://localhost:3000/posts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newPost),
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