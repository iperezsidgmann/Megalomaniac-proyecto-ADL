const express = require('express');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const router = express.Router();
const pool = require("../db/conexion");


const { registrarUsuario, ingresoPosts, ingresoFavoritos} = require('../consultas/consultas');
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

//Agregar Nuevo Posts (disco)
router.post('/posts', async(req, res) => {
    try {
        const posts = req.body;
        await ingresoPosts(posts);
        res.send('Post agregado');
    } catch (error) {
        //res.status(500).send(error)
        console.log(error)        
    }

})

// Añadir a Favoritos
router.post('/favoritos', async(req, res) => {
    try {
        const favoritos = req.body;
        await ingresoFavoritos(favoritos);
        res.send('Agregado a Favoritos');
    } catch (error) {
        //res.status(500).send(error)
        console.log(error)        
    }
})


//Acceso a Usuario

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

//Visualizar discos

router.get('/posts', async(req, res) => {
    try {
        const consulta = "SELECT * FROM posts";
        const {rows} =  await pool.query(consulta)
        res.json(rows);
    } catch (error) {
        console.log(error.message)
    }
})

// Ver todos los Favoritos 
router.get('/favoritos/', async(req, res) => {
    try {
        const consulta = "select fv_id, us_id, us_email, ps_titulo, ps_descripcion, ps_img from favoritos inner join usuarios on fv_us_id = us_id inner join posts on fv_ps_id = ps_id";
        const {rows} =  await pool.query(consulta)
        res.json(rows);
    } catch (error) {
        console.log(error.message)
    }
})

// Ver Favoritos por Usuario 
router.get('/favoritos/:id', async(req, res) => {
    try {
        const {id} = req.params;
        console.log(id)
        const consulta = "select fv_id, us_id, us_email, ps_titulo, ps_descripcion, ps_img from favoritos inner join usuarios on fv_us_id = us_id inner join posts on fv_ps_id = ps_id where fv_us_id = $1";
        const values =[id];
        const {rows} =  await pool.query(consulta, values)
        res.json(rows);
    } catch (error) {
        console.log(error.message)
    }
})


module.exports = router