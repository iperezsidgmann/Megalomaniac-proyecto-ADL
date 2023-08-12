const express = require('express');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const router = express.Router();
const pool = require("../db/conexion");


const { registrarUsuario } = require('../consultas/consultas');
const { checkCredentialsExists } = require('../middlewares/middleware');

router.get('/', (req, res) => {
    res.send('Bienvenido a MegaloManiac');
});
//Insertar nuevo usuario

router.post('/usuarios', async(req, res) => {
    try {
        const usuario = req.body;
        await registrarUsuario(usuario);
        res.send('Usuario registrado');
    } catch (error) {
        //res.status(500).send(error)
        console.log(error)
    }
})

//Acceso a Usuario

//Agregar Nuevo disco

//Visualizar discos

// Añadir a Favoritos

// Ver Favoritos

//Visualizar un usuario

router.get('/usuarios', async(req, res) => {
    try {
        const consulta = "SELECT * FROM usuarios";
        const {rows} =  await pool.query(consulta)
        res.json(rows);
    } catch (error) {
        console.log(error.message)
    }
})
module.exports = router