import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';
import { usePost } from '../context/PostProvider'; 
import { Form, Button } from 'react-bootstrap';
import 'animate.css';

export const AgregarDisco = () => {
    const { isLoggedIn } = useAuth();
    const navigate = useNavigate();
    const { addNewPost } = usePost(); 

    const [band, setBand] = useState('');
    const [album, setAlbum] = useState('');
    const [albumImage, setAlbumImage] = useState('');
    const [category, setCategory] = useState('');

    useEffect(() => {
        if (!isLoggedIn) {
            navigate('/login');
        }
    }, [isLoggedIn, navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!band || !album || !albumImage || !category) {
            alert('Por favor completa todos los campos.');
            return;
        }

        const newDisco = {
            ps_band: band,
            ps_album: album,
            ps_albumImage: albumImage,
            ps_category: category,
        };

        await addNewPost(newDisco);

       
        navigate('/mis-discos');
    };

    const categorias = ['Rock', 'Pop', 'Folk', 'Metal'];

    return (
        <div className="container mt-5 col-md-4 animate__animated animate__fadeIn">
            <h2 className='mb-3'>Agregar Disco</h2>
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
