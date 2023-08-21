import { useState, useEffect } from 'react';
import { ListGroup } from 'react-bootstrap';
import { useSearchContext } from '../context/SearchProvider';
import { ProductCard } from './index';
import 'animate.css';
import { useLocation } from 'react-router-dom';

const navigationItems = [
    { title: 'Rock', path: '/rockpage' },
    { title: 'Pop', path: '/poppage' },
    { title: 'Folk', path: '/folkpage' },
    { title: 'Metal', path: '/metalpage' },
];

export const ProductList = () => {
    const location = useLocation();
    const searchTerm = new URLSearchParams(location.search).get('search');
    const searchFunction = useSearchContext();
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [filteredDiscos, setFilteredDiscos] = useState([]);
    const [isFetching, setIsFetching] = useState(true);
    const [fetchError, setFetchError] = useState(null);

    useEffect(() => {

        const fetchPosts = async () => {
            try {
                setIsFetching(true);
                setFetchError(null);

                const response = await fetch("http://localhost:3000/posts");
                if (!response.ok) {
                    throw new Error('No hay respuesta del servidor');
                }

                setIsFetching(false);

                let filtered = searchFunction('');

                if (searchTerm) {
                    filtered = searchFunction(searchTerm);
                }

                if (selectedCategory) {
                    filtered = filtered.filter(
                        (disco) => disco.ps_category && disco.ps_category.toLowerCase() === selectedCategory.toLowerCase()
                    );
                }

                setFilteredDiscos(filtered);
            } catch (error) {
                console.error("Error fetching posts:", error);
                setIsFetching(false);
                setFetchError("Error fetching data");
            }
        };

        fetchPosts();
    }, [searchTerm, selectedCategory, searchFunction]);

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
                    <ListGroup className="list-group">
                        <ListGroup.Item
                            action variant="dark"
                            className={`list-group-item list-group-item-action ${selectedCategory === null ? 'active' : ''
                                }`}
                            onClick={() => handleCategoryClick(null)}
                        >
                            Mostrar todos
                        </ListGroup.Item>
                        {navigationItems.map((item) => (
                            <ListGroup.Item
                                action variant="dark"
                                key={item.title}
                                className={`list-group-item list-group-item-action ${selectedCategory === item.title ? 'active' : ''
                                    }`}
                                onClick={() => handleCategoryClick(item.title)}
                            >
                                {item.title}
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </div>
                <div className="col-md-10 col-sm-8 mt-3">
                    {isFetching ? (
                        <div>Loading...</div>
                    ) : fetchError ? (
                        <div>{fetchError}</div>
                    ) : filteredDiscos.length === 0 ? (
                        <div>No se encontraron resultados.</div>
                    ) : (
                        <div className="row row-cols-1 row-cols-md-3 g-3 m-1 animate__animated animate__fadeIn">
                            {filteredDiscos.map((disco) => (
                                <ProductCard key={disco.ps_id} {...disco} />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};