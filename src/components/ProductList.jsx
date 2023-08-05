import { useState, useEffect } from 'react';
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
    const [selectedCategory, setSelectedCategory] = useState(null);

    useEffect(() => {
        let filtered = discos;

        if (searchTerm) {
            filtered = discos.filter((disco) => {
                return (
                    disco.album.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    disco.band.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    disco.category.toLowerCase().includes(searchTerm.toLowerCase())
                );
            });

            if (filtered.length === 0) {
                window.alert('No se encontraron resultados.');
            }
        }

        if (selectedCategory) {
            filtered = filtered.filter(
                (disco) => disco.category.toLowerCase() === selectedCategory.toLowerCase()
            );
        }

        setFilteredDiscos(filtered);
    }, [searchTerm, selectedCategory]);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    return (
        <div className="container mt-4 animate__animated animate__fadeIn">
            <h2>Discografías</h2>
            <hr />

            <div className="row">
                <div className="col-md-2 col-sm-4">
                    <h4 className="text-light">Categorías</h4>
                    <ul className="list-group bg-dark border-dark">
                        <li
                            className={`list-group-item list-group-item-action bg-dark text-light border-dark ${
                                selectedCategory === null ? 'active' : ''
                            }`}
                            onClick={() => handleCategoryClick(null)}
                        >
                            Mostrar todos
                        </li>
                        {navigationItems.map((item) => (
                            <li
                                key={item.title}
                                className={`list-group-item list-group-item-action bg-dark text-light border-dark ${
                                    selectedCategory === item.title ? 'active' : ''
                                }`}
                                onClick={() => handleCategoryClick(item.title)}
                            >
                                {item.title}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="col-md-10 col-sm-8">
                    {filteredDiscos.length === 0 ? (
                        <div>No se encontraron resultados.</div>
                    ) : (
                        <div className="row row-cols-1 row-cols-md-3 g-3 m-1 animate__animated animate__fadeIn">
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
