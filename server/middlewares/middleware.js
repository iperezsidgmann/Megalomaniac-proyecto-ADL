// const jwt = require('jsonwebtoken');
// require('dotenv').config();

// const checkCredentialsExists = (req, res, next) => {
//     const { email, password } = req.body;
//     if (!email || !password) {
//       res
//         .status(401)
//         .send({ message: "No se recibieron las credenciales en esta consulta" });
//     }
//     next();
//   };
//   const tokenVerification = (req, res, next) => {
//     const token = req.header("Authorization").split("Bearer ")[1];
//     if (!token)
//       throw {
//         code: 401,
//         message: "Debe incluir el token en las cabeceras (Authorization)",
//       };
  
//     const tokenValido = jwt.verify(token, process.env.SECRET_KEY);
//     if (!tokenValido) throw { code: 401, message: "El token es inválido" };
//     next();
//   };
  
//   module.exports = {
//     checkCredentialsExists,
//     tokenVerification
//   }

const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

// Middleware de manejo de errores global
const errorHandler = (err, req, res, next) => {
  if (err.code === 401) {
    res.status(401).json({ error: 'No autorizado' });
  } else {
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

// Middleware de verificación de token
const tokenVerification = (req, res, next) => {
  try {
    const token = req.header('Authorization').split('Bearer ')[1];
    if (!token) throw { code: 401, message: 'Debe incluir el token en las cabeceras (Authorization)' };

    // Verificar si el token es válido
    jwt.verify(token, process.env.SECRET_KEY, { ignoreExpiration: false });

    // Puedes acceder a la información del usuario autenticado
    req.user = jwt.decode(token);

    next();
  } catch (error) {
    next(error);
  }
};

// Middleware de validación de credenciales faltantes
const checkCredentialsExists = (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json({ error: 'Faltan credenciales en la solicitud' });
  } else {
    next();
  }
};

module.exports = {
  checkCredentialsExists,
  tokenVerification,
  errorHandler,
};

