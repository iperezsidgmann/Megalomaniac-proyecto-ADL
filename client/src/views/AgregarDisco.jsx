import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';
import { Form, Button } from 'react-bootstrap';
import 'animate.css';

export const AgregarDisco = () => {
    const { isLoggedIn, token } = useAuth(); // Obtener el token de autenticación desde el contexto
    const navigate = useNavigate();

    const [banda, setBanda] = useState('');
    const [album, setAlbum] = useState('');
    const [albumImage, setAlbumImage] = useState('');
    const [categoria, setCategoria] = useState('');

    useEffect(() => {
        if (!isLoggedIn) {
            navigate('/login');
        }
    }, [isLoggedIn, navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!banda || !album || !albumImage || !categoria) {
            alert('Por favor completa todos los campos.');
            return;
        }

        const newDisco = {
            banda,
            album,
            albumImage,
            categoria,
        };

        // Asegúrate de que el token esté presente antes de enviar la solicitud
        if (token) {
            try {
                const response = await fetch("https://backend-megalomaniac.onrender.com/posts", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        // Incluye el token de autenticación en la solicitud
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify(newDisco),
                });
            
                if (!response.ok) {
                    console.error("Error en la respuesta del servidor:", response);
                    throw new Error("Error al agregar el disco");
                }
            
                // Redirige al usuario a la página de sus discos
                navigate('/mis-discos');
            } catch (error) {
                console.error("Error al agregar el disco:", error);
                alert('Error al agregar el disco. Por favor, inténtalo de nuevo más tarde.');
            }
        } else {
            // Manejo de error si no hay token (el usuario no está autenticado)
            alert('No estás autenticado. Inicia sesión para agregar un disco.');
        }
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
                        value={banda}
                        onChange={(e) => setBanda(e.target.value)}
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
                        value={categoria}
                        onChange={(e) => setCategoria(e.target.value)}
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
