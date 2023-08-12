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

const ingresoFavoritos = async (favoritos) => {
    let{ idusuario, idpost } = favoritos;
    const values = [idusuario, idpost];
    const consultaFavoritos = "INSERT INTO favoritos(fv_us_id, fv_ps_id) VALUES ($1, $2)";
    await pool.query(consultaFavoritos, values);
}

module.exports = {
    registrarUsuario,
    ingresoPosts,
    ingresoFavoritos
}