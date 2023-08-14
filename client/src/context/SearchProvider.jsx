import { createContext, useContext } from "react";
import { discos } from "../data/discos";

const SearchContext = createContext();

export const useSearchContext = () => {
    return useContext(SearchContext);
};

export const SearchProvider = ({ children }) => {
    const searchDiscos = (term) => {
        return discos.filter(
            (disco) =>
                disco.album.toLowerCase().includes(term.toLowerCase()) ||
                disco.band.toLowerCase().includes(term.toLowerCase()) ||
                disco.category.toLowerCase().includes(term.toLowerCase())
        );
    };

    return (
        <SearchContext.Provider value={searchDiscos}>
            {children}
        </SearchContext.Provider>
    );
};