import { Button } from "react-bootstrap";

export const PanelPage = ({ handleLogout, handleRedirectToHome }) => {


    return (
        <div className='col-md-3 mx-auto animate__animated animate__fadeIn'>
            <h1 className='mt-3'>Bienvenido! </h1>
            <Button variant='primary btn-dark mb-3 mr-4' onClick={handleRedirectToHome}>
                Página principal
            </Button>

            <Button variant='primary btn-dark mb-3' onClick={handleLogout}>
                Cerrar sesión
            </Button>
        </div>


    )
};
