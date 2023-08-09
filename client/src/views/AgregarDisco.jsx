import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';
import { discos } from '../data/discos';
import { Form, Button } from 'react-bootstrap';
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

        // Redirigir a la página "Mis Discos" solo después de agregar el álbum
        navigate(`/mis-discos?category=${category}`, { state: { newDisco } });
    };

    if (!isLoggedIn) {
        navigate('/login');
        return null;
    }

    const categorias = ['Rock', 'Pop', 'Folk', 'Metal'];

    return (
        <div className="container mt-5 col-md-4 animate__animated animate__fadeIn">
            <h2>Agregar Disco</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Banda:</Form.Label>
                    <Form.Control
                        type="text"
                        value={band}
                        onChange={(e) => setBand(e.target.value)}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Álbum:</Form.Label>
                    <Form.Control
                        type="text"
                        value={album}
                        onChange={(e) => setAlbum(e.target.value)}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>URL de la imagen del álbum:</Form.Label>
                    <Form.Control
                        type="text"
                        value={albumImage}
                        onChange={(e) => setAlbumImage(e.target.value)}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Categoría:</Form.Label>
                    <Form.Select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        required
                    >
                        <option value="" disabled>Seleccionar Categoría</option>
                        {categorias.map((cat) => (
                            <option key={cat} value={cat}>
                                {cat}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>
                <Button type="submit" variant="dark" className="mt-2">
                    Agregar Disco
                </Button>
            </Form>
        </div>
    );
};