
const API_URL = 'http://localhost:3000/usuarios';

export const fetchUsers = async () => {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error('No se pudo obtener la lista de usuarios');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error al obtener la lista de usuarios:', error);
        throw error;
    }
};
