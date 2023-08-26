const pool = require('../db/conexion');
const bcrypt = require('bcryptjs');

const registrarUsuario = async (usuario) => {
  const { email, name, password, img } = usuario;
  const passwordEncriptada = bcrypt.hashSync(password, 10); // Usar el número de rondas recomendado
  const values = [email, name, passwordEncriptada, img];
  const consulta = 'INSERT INTO usuarios (us_email, us_name, us_password, us_img) VALUES ($1, $2, $3, $4)';
  
  try {
    await pool.query(consulta, values);
  } catch (error) {
    console.error('Error al registrar el usuario:', error);
    throw error;
  }
};

const ingresoPosts = async (posts) => {
  const { ps_us_id, ps_band, ps_album, ps_albumimage, ps_category } = posts;
  const values = [ps_us_id, ps_band, ps_album, ps_albumimage, ps_category];
  const consulta = 'INSERT INTO posts (ps_us_id, ps_band, ps_album, ps_albumimage, ps_category) VALUES ($1, $2, $3, $4, $5)';

  try {
    await pool.query(consulta, values);
  } catch (error) {
    console.error('Error al ingresar un post:', error);
    throw error;
  }
};

const obtenerDatosDeUsuario = async (email) => {
  const values = [email];
  const consulta = 'SELECT us_id, us_email, us_name, us_img FROM usuarios WHERE us_email = $1';

  try {
    const { rows, rowCount } = await pool.query(consulta, values);

    if (rowCount === 0) {
      throw {
        code: 404,
        message: 'No se encontró ningún usuario con este correo electrónico',
      };
    }

    return rows[0];
  } catch (error) {
    console.error('Error al obtener datos del usuario:', error);
    throw error;
  }
};

const ingresoFavoritos = async (favoritos) => {
  const { idusuario, idpost } = favoritos;
  const values = [idusuario, idpost];
  const consulta = 'INSERT INTO favoritos (fv_us_id, fv_ps_id) VALUES ($1, $2)';

  try {
    await pool.query(consulta, values);
    console.log('Favorito insertado correctamente en la base de datos.');
  } catch (error) {
    console.error('Error al insertar el favorito en la base de datos:', error);
    throw error;
  }
};

const verificarCredenciales = async (email, password) => {
  const values = [email];
  const consulta = 'SELECT us_id, us_password FROM usuarios WHERE us_email = $1';

  try {
    const { rows, rowCount } = await pool.query(consulta, values);

    if (rowCount === 0) {
      throw {
        code: 401,
        message: 'Email o contraseña incorrecta',
      };
    }

    const { us_id, us_password: passwordEncriptada } = rows[0];
    const passwordEsCorrecta = bcrypt.compareSync(password, passwordEncriptada);

    if (!passwordEsCorrecta) {
      throw {
        code: 401,
        message: 'Email o contraseña incorrecta',
      };
    }
  } catch (error) {
    console.error('Error al verificar credenciales:', error);
    throw error;
  }
};

module.exports = {
  registrarUsuario,
  ingresoPosts,
  ingresoFavoritos,
  verificarCredenciales,
  obtenerDatosDeUsuario,
};



// const pool = require("../db/conexion");
// const bcrypt = require("bcryptjs");

// const registrarUsuario = async (usuario) => {
//     let { email, name, password, img } = usuario;
//     const passwordEncriptada =  bcrypt.hashSync(password);
//     password = passwordEncriptada; 
//     const values = [email, name, passwordEncriptada, img];
//     const consultas = "INSERT INTO usuarios VALUES (DEFAULT, $1, $2, $3, $4)";
//     await pool.query(consultas, values);
//   };


// const ingresoPosts = async (posts) => {
//   const { ps_us_id, ps_band, ps_album, ps_albumimage, ps_category } = posts;
//   const values = [ps_us_id, ps_band, ps_album, ps_albumimage, ps_category];
//   const consultaPosts = "INSERT INTO posts (ps_us_id, ps_band, ps_album, ps_albumimage, ps_category) VALUES ($1, $2, $3, $4, $5)";
//   await pool.query(consultaPosts, values);
// }


// const obtenerDatosDeUsuario = async (email) => {
//     const values = [email];
//     const consulta = "SELECT * FROM usuarios WHERE us_email = $1";
  
//     const {
//       rows: [usuario],
//       rowCount,
//     } = await pool.query(consulta, values);
  
//     if (!rowCount) {
//       throw {
//         code: 404,
//         message: "No se encontró ningún usuario con este email",
//       };
//    }
//     delete usuario.password;
//     return usuario;
//   };

//   const ingresoFavoritos = async (favoritos) => {
//     try {
//         let { idusuario, idpost } = favoritos;
//         const values = [idusuario, idpost];
//         const consultaFavoritos = "INSERT INTO favoritos(fv_us_id, fv_ps_id) VALUES ($1, $2)";
//         await pool.query(consultaFavoritos, values);
//         console.log('Favorito insertado correctamente en la base de datos.');
//     } catch (error) {
//         console.error('Error al insertar el favorito en la base de datos:', error);
//         throw error; // Puedes lanzar el error nuevamente si quieres manejarlo en otro lugar.
//     }
// }

// const verificarCredenciales = async (email, password) => {
//     const values = [email];
//     const consulta = "SELECT * FROM usuarios WHERE us_email = $1";
//     const { rows: [usuario], rowCount, } = await pool.query(consulta, values);
//     const { us_password: passwordEncriptada } = usuario;
//     const passwordEsCorrecta = bcrypt.compareSync(password, passwordEncriptada);
       
//     if (!passwordEsCorrecta || !rowCount)
//       throw { code: 401, message: "Email o contraseña incorrecta" };
//   };
  
// module.exports = {
//     registrarUsuario,
//     ingresoPosts,
//     ingresoFavoritos,
//     verificarCredenciales,
//     obtenerDatosDeUsuario
// }