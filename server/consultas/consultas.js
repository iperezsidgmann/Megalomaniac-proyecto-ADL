const pool = require("../db/conexion");
const bcrypt = require("bcryptjs");

const registrarUsuario = async (usuario) => {
    let { email, password, img } = usuario;
    const passwordEncriptada =  bcrypt.hashSync(password);
    password = passwordEncriptada; 
    const values = [email, passwordEncriptada, img];
    const consultas = "INSERT INTO usuarios VALUES (DEFAULT, $1, $2, $3)";
    await pool.query(consultas, values);
  };

const ingresoPosts = async (posts) => {
    let { usuario, titulo, descripcion, img_disco } = posts;
    const values = [usuario, titulo, descripcion, img_disco ];
    const consultaPosts = "INSERT INTO posts VALUES (DEFAULT, $1, $2, $3, $4)";
    await pool.query(consultaPosts, values);
  
}

const obtenerDatosDeUsuario = async (email) => {
    const values = [email];
    const consulta = "SELECT * FROM usuarios WHERE email = $1";
  
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
    let{ idusuario, idpost } = favoritos;
    const values = [idusuario, idpost];
    const consultaFavoritos = "INSERT INTO favoritos(fv_us_id, fv_ps_id) VALUES ($1, $2)";
    await pool.query(consultaFavoritos, values);
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