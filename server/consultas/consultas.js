const pool = require("../db/conexion")


const datosUsuario = async (req, res) => {
    const { rows: usuarios } = await pool.query("SELECT * FROM usuarios");
    return usuarios;
 };

module.exports = {
    datosUsuario
}