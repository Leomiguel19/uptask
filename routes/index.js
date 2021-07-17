const express = require('express');
const router = express.Router();

// Importar el controlador
const ProyectosController = require('../controllers/ProyectosController')

module.exports = function() {
    // Ruta para el home
    router.get('/', ProyectosController.proyectosHome);      
    return router;    
}