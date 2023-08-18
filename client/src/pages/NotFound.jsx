import React from 'react';
import { Link } from 'react-router-dom';
import 'animate.css';

export const NotFound = () => {
  return (
    <div className="container text-center animate__animated animate__fadeIn">
      <h1 className="pt-5 mt-5 display-1">404</h1>
      <h2 className="pt-3 mt-3">No hemos encontrado lo que buscas...</h2>
      <div className="pt-3 mt-3">
        <Link to="/" className="btn btn-light btn-lg btn-grow mt-4">
          Volver al inicio
        </Link>
      </div>
    </div>
  );
};
