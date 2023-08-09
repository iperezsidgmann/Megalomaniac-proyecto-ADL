const express = require('express');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const router = express.Router();

const { registrarUsuario, obtenerDatosDeUsuario, verificarCredenciales } = require('../consultas/consultas');
const { checkCredentialsExists, tokenVerification } = require('../middlewares/middleware');

router.get('/', (req, res) => {
    res.send('Disquera Megalomaniac');
});

module.exports = router