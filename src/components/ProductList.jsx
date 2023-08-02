import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { discos } from '../data/discos';
import { ProductCard } from './index';

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

	return (
		<div className="col-md-10 mt-4 mx-auto">
			<h2>Discografías</h2>
			<hr />

			{!resultsFound ? (
				<div>No se encontraron resultados.</div>
			) : (
				<div className="row rows-cols-1 row-cols-md-3 g-3 m-3">
					{filteredDiscos.map((disco) => (
						<ProductCard key={disco.id} {...disco} />
					))}
				</div>
			)}
		</div>
	);
};