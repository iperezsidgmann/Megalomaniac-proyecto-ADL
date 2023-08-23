import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';
import { BsLinkedin } from 'react-icons/bs'
import logo1 from '../../assets/img/logo/logo1.png';


export const Footer = () => {
    const { isLoggedIn } = useAuth();

    const location = useLocation();

    const isHomePage = location.pathname === '/';

    if (!isHomePage && !isLoggedIn) {
        return null;
    }

    return (
        <footer className="bg-dark text-white opacity-50 p-3 mt-auto">
            <div className='row m-5'>
                <div className="col-md-8 d-inline-block text-center">
                    <div className="container mb-3">
                        <Link to="/">
                            <img
                                src={logo1}
                                alt="Logo"
                                style={{ width: '20%', height: 'auto', transition: 'transform 0.3s ease-in-out' }}
                                onMouseOver={(e) => e.target.style.transform = 'scale(0.9)'}
                                onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                            />
                        </Link>
                    </div>
                    <p>© {new Date().getFullYear()} Proyecto Final Grupo-3 G28, Desafío Latam. </p>
                    <p>Todos los derechos reservados.</p>
                </div>
                <div className='col-md-4 d-inline-block text-left'>
                    <h4>Contáctanos</h4>
                    <br />
                    <div className='d-flex flex-column'>
                        <a href="https://www.linkedin.com/in/cristopher-vargas-05465b37/" target="_blank" rel="noopener noreferrer" className='contact-link mb-4'><BsLinkedin style={{ fontSize: '2rem' }} /> cristopherAle</a>
                        <a href="https://www.linkedin.com/in/ivania-perez-sidgmann/" target="_blank" rel="noopener noreferrer" className='contact-link mb-4'><BsLinkedin style={{ fontSize: '2rem' }} /> ivaniaperezsidgmann</a>
                        <a href="https://www.linkedin.com/in/ignacio-larra%C3%ADn-villegas-13091565/" target="_blank" rel="noopener noreferrer" className='contact-link mb-4'><BsLinkedin style={{ fontSize: '2rem' }} /> Iahlik </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
