import React, { createContext, useContext, useEffect, useState } from "react";

const SearchContext = createContext();

export const useSearchContext = () => {
    return useContext(SearchContext);
};

export const SearchProvider = ({ children }) => {
    const [discos, setDiscos] = useState([]);
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
                    setDiscos(data);
                    setIsLoading(false);
                })
                .catch((error) => {
                    console.error("Error fetching discos:", error);
                    setIsLoading(false);
                });
        } catch (error) {
            console.error("Error fetching discos:", error);
            setIsLoading(false);
        }
    }, []);

    const searchDiscos = (term) => {
        return discos.filter((disco) => {
            const lowerCaseTerm = term.toLowerCase();
            const album = disco.ps_album ? disco.ps_album.toLowerCase() : '';
            const band = disco.ps_band ? disco.ps_band.toLowerCase() : '';
            const category = disco.ps_category ? disco.ps_category.toLowerCase() : '';
            
            return (
                album.includes(lowerCaseTerm) ||
                band.includes(lowerCaseTerm) ||
                category.includes(lowerCaseTerm)
            );
        });
    };

    if (isLoading) {
        return <div>Cargando...</div>;
    }

    return (
        <SearchContext.Provider value={searchDiscos}>
            {children}
        </SearchContext.Provider>
    );
};
