import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-dark text-white opacity-50 text-center p-3 pt-4 mt-5">
      <div className="container">
        <div className="container mb-3">
          <Link to="/">
            <img
              src="assets/img/logo/logo1.png"
              alt="Logo"
              style={{ width: '20%', height: 'auto', transition: 'transform 0.3s ease-in-out' }}
              onMouseOver={(e) => e.target.style.transform = 'scale(0.9)'}
              onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
            />
          </Link>
        </div>
        <p>© {new Date().getFullYear()} Proyecto Final Grupo-3 G28. </p>
        <p>Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};
