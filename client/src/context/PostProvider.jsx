import React, { createContext, useContext, useState, useEffect } from 'react';

const PostContext = createContext();

export const usePost = () => {
    return useContext(PostContext);
};

export const PostProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        try {
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
        } catch (error) {
            console.error("Error en fetch posts:", error);
            setIsLoading(false);
        }
    }, []);

    if (isLoading) {
        return <div>Cargando...</div>;
    }

    return (
        <PostContext.Provider value={{ posts, setPosts }}>
            {children}
        </PostContext.Provider>
    );
};
