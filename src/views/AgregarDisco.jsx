import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';
import { discos } from '../data/discos';

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

        navigate('/mis-discos');
    };

    if (!isLoggedIn) {
        navigate('/login');
        return null;
    }

    return (
        <div className="container mt-5">
            <h2>Agregar Disco</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
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
                <div className="form-group">
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
                <div className="form-group">
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
                <div className="form-group">
                    <label htmlFor="category">Categoría:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        required // Campo obligatorio
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Agregar Disco
                </button>
            </form>
        </div>
    );
};
