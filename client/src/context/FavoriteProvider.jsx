import { createContext, useContext, useState } from 'react';

const FavoriteContext = createContext();

export const useFavorite = () => {
    return useContext(FavoriteContext);
};

export const FavoriteProvider = ({ children }) => {
    const [favoriteItems, setFavoriteItems] = useState([]);

    const onAddFavorite = (id) => {
        setFavoriteItems([...favoriteItems, id]);
    };

    const onRemoveFavorite = (id) => {
        setFavoriteItems(favoriteItems.filter(itemId => itemId !== id));
    };

    return (
        <FavoriteContext.Provider value={{ favoriteItems, onAddFavorite, onRemoveFavorite }}>
            {children}
        </FavoriteContext.Provider>
    );
};
