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

module.exports = {
    registrarUsuario
}