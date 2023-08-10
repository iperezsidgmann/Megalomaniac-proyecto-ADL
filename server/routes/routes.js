const express = require('express');

const router = express.Router();

const {datosUsuario} = require("../consultas/consultas.js");

router.get('/', (req, res) => {
    res.send('Disquera Megalomaniac');
});

router.get('/usuarios', async(req, res) => {
   
    try {
        const consulta = await datosUsuario();
        res.json(consulta);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router