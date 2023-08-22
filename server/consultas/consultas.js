const pool = require("../db/conexion");
const bcrypt = require("bcryptjs");

const registrarUsuario = async (usuario) => {
    let { email, name, password, img } = usuario;
    const passwordEncriptada =  bcrypt.hashSync(password);
    password = passwordEncriptada; 
    const values = [email, name, passwordEncriptada, img];
    const consultas = "INSERT INTO usuarios VALUES (DEFAULT, $1, $2, $3, $4)";
    await pool.query(consultas, values);
  };

const ingresoPosts = async (posts) => {
    let { usuario, banda, album, albumImage, albumYear, categoria } = posts;
    const values = [usuario, banda, album, albumImage, albumYear, categoria ];
    const consultaPosts = "INSERT INTO posts VALUES (DEFAULT, $1, $2, $3, $4, $5, $6)";
    await pool.query(consultaPosts, values); 
}

const obtenerDatosDeUsuario = async (email) => {
    const values = [email];
    const consulta = "SELECT * FROM usuarios WHERE us_email = $1";
  
    const {
      rows: [usuario],
      rowCount,
    } = await pool.query(consulta, values);
  
    if (!rowCount) {
      throw {
        code: 404,
        message: "No se encontró ningún usuario con este email",
      };
   }
    delete usuario.password;
    return usuario;
  };

  const ingresoFavoritos = async (favoritos) => {
    try {
        let { idusuario, idpost } = favoritos;
        const values = [idusuario, idpost];
        const consultaFavoritos = "INSERT INTO favoritos(fv_us_id, fv_ps_id) VALUES ($1, $2)";
        await pool.query(consultaFavoritos, values);
        console.log('Favorito insertado correctamente en la base de datos.');
    } catch (error) {
        console.error('Error al insertar el favorito en la base de datos:', error);
        throw error; // Puedes lanzar el error nuevamente si quieres manejarlo en otro lugar.
    }
}

const verificarCredenciales = async (email, password) => {
    const values = [email];
    const consulta = "SELECT * FROM usuarios WHERE us_email = $1";
    const { rows: [usuario], rowCount, } = await pool.query(consulta, values);
    const { us_password: passwordEncriptada } = usuario;
    const passwordEsCorrecta = bcrypt.compareSync(password, passwordEncriptada);
       
    if (!passwordEsCorrecta || !rowCount)
      throw { code: 401, message: "Email o contraseña incorrecta" };
  };
  
module.exports = {
    registrarUsuario,
    ingresoPosts,
    ingresoFavoritos,
    verificarCredenciales,
    obtenerDatosDeUsuario
}