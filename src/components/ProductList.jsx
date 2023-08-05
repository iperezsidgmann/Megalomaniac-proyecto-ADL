import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { discos } from '../data/discos';
import { ProductCard } from './index';
import 'animate.css';

const navigationItems = [
    { title: 'Rock', path: '/rockpage' },
    { title: 'Pop', path: '/poppage' },
    { title: 'Folk', path: '/folkpage' },
    { title: 'Metal', path: '/metalpage' },
];

export const ProductList = () => {
    const location = useLocation();
    const searchTerm = new URLSearchParams(location.search).get('search');
    const [filteredDiscos, setFilteredDiscos] = useState([]);
    const [resultsFound, setResultsFound] = useState(true); // Estado para controlar si se encontraron resultados

    useEffect(() => {
        // Verificar si searchTerm no es null antes de filtrar los discos
        if (searchTerm) {
            // Filtrar los discos según el término de búsqueda
            const filtered = discos.filter((disco) => {
                return (
                    disco.album.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    disco.band.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    disco.category.toLowerCase().includes(searchTerm.toLowerCase())
                );
            });
            setFilteredDiscos(filtered);

            // Verificar si se encontraron resultados
            setResultsFound(filtered.length > 0);

            // Mostrar alerta si no hay resultados
            if (filtered.length === 0) {
                window.alert('No se encontraron resultados.');
            }
        } else {
            // Si searchTerm es null, mostrar todos los discos
            setFilteredDiscos(discos);

            // Mostrar que se encontraron resultados, ya que no hay término de búsqueda
            setResultsFound(true);
        }
    }, [searchTerm]);

    useEffect(() => {
        // Filtrar los discos según la categoría seleccionada
        if (location.pathname === '/') {
            // Si no hay una categoría seleccionada, mostrar todos los discos
            setFilteredDiscos(discos);
        } else {
            const category = location.pathname.slice(1); // Eliminar el primer / de la ruta
            const filteredByCategory = discos.filter((disco) =>
                disco.category.toLowerCase() === category.toLowerCase()
            );
            setFilteredDiscos(filteredByCategory);
        }
    }, [location.pathname]);

    return (
        <div className="col-md-10 mt-4 mx-auto animate__animated animate__fadeIn">
            <h2>Discografías</h2>
            <hr />

            <div className="row justify-content-center">
                {/* Columna de categorías */}
                <div className="col-md-2 col-sm-4">
                    <h4>Categorías</h4>
                    <ul>
                        <li onClick={() => setFilteredDiscos(discos)}>
                            Mostrar todos
                        </li>
                        {navigationItems.map((item) => (
                            <li
                                key={item.title}
                                onClick={() =>
                                    setFilteredDiscos(
                                        discos.filter(
                                            (disco) =>
                                                disco.category.toLowerCase() ===
                                                item.title.toLowerCase()
                                        )
                                    )
                                }
                            >
                                {item.title}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Área principal de la lista de discos */}
                <div className="col-md-10 col-sm-8">
                    {!resultsFound ? (
                        <div>No se encontraron resultados.</div>
                    ) : (
                        <div className="row rows-cols-1 row-cols-md-3 g-3 m-1 animate__animated animate__fadeIn">
                            {filteredDiscos.map((disco) => (
                                <ProductCard key={disco.id} {...disco} />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductList;