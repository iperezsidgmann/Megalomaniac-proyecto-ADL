import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';
import { discos } from '../data/discos';
import 'animate.css';

export const AgregarDisco = () => {
    const { isLoggedIn } = useAuth();
    const navigate = useNavigate();

    const [band, setBand] = useState('');
    const [album, setAlbum] = useState('');
    const [albumImage, setAlbumImage] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!band || !album || !albumImage || !category) {
            alert('Por favor completa todos los campos.');
            return;
        }

        const newId = (discos.length + 1).toString();

        const newDisco = {
            id: newId,
            band: band,
            album: album,
            albumImage: albumImage,
            category: category,
        };

        discos.push(newDisco);
        
        navigate(`/mis-discos?category=${category}`, { state: { newDisco } });
    };

    if (!isLoggedIn) {
        navigate('/login');
        return null;
    }
    const categorias = ['Rock', 'Pop', 'Folk', 'Metal'];


    return (
        <div className="container mt-5 col-md-3 animate__animated animate__fadeIn">
            <h2>Agregar Disco</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                    <label htmlFor="band">Banda:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="band"
                        value={band}
                        onChange={(e) => setBand(e.target.value)}
                        required // Campo obligatorio
                    />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="album">Álbum:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="album"
                        value={album}
                        onChange={(e) => setAlbum(e.target.value)}
                        required // Campo obligatorio
                    />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="albumImage">URL de la imagen del álbum:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="albumImage"
                        value={albumImage}
                        onChange={(e) => setAlbumImage(e.target.value)}
                        required // Campo obligatorio
                    />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="category">Categoría:</label>
                    <select
                        className="form-control"
                        id="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        required // Campo obligatorio
                    >
                        <option value="" disabled>Seleccionar Categoría</option>
                        {categorias.map((cat) => (
                            <option key={cat} value={cat}>
                                {cat}
                            </option>
                        ))}
                    </select>
                </div>
                <button type="submit" className="btn btn-dark mt-2">
                    Agregar Disco
                </button>
            </form>
        </div>
    );
};
