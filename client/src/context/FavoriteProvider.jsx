import { createContext, useContext, useState } from 'react';

const FavoriteContext = createContext();

export const useFavorite = () => {
    return useContext(FavoriteContext);
};

export const FavoriteProvider = ({ children }) => {
    const [favoriteItems, setFavoriteItems] = useState([]);

    const onAddFavorite = (id) => {
        setFavoriteItems(prevFavoriteItems => [...prevFavoriteItems, id]);
    };

    const onRemoveFavorite = (id) => {
        setFavoriteItems(prevFavoriteItems => prevFavoriteItems.filter(itemId => itemId !== id));
    };

    return (
        <FavoriteContext.Provider value={{ favoriteItems, onAddFavorite, onRemoveFavorite }}>
            {children}
        </FavoriteContext.Provider>
    );
};
