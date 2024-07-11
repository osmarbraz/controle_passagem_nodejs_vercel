/**
 * Especificação das rotas.
 */

// Import das bibliotecas
const express = require('express');

// Import das bibliotecas próprias
const {
    inicializa,
    verificarStatus,
    marcarVoo
} = require("./controladorvoorecurso");

// Inicializa o roteador dos serviços
const router = express.Router();

/**
 * Serviço da rota inicial.
 *
 * curl http://localhost:8000
 */
router.get('/', (request, response)=>{
    response.json({"statusCode": 200,
                   "mensagem": "API Controle de Passagem Rodando"
    })
});

/**
 * Serviço de inicializar o controlador de voo.
 *
 * curl http://localhost:8000/inicializa
 */
router.get('/inicializa', inicializa);

/**
 * Serviço de verificarStatus do voo.
 *
 * curl -v -X POST -H "Content-Type: application/json" -d "{\"codigoVoo\":\"A1\",\"numeroAssento\":\"1\"}" http://localhost:8000/verificarStatus
 */
router.post('/verificarStatus', verificarStatus);

/**
 * Serviço de marcar o voo.
 *
 * curl -v -X POST -H "Content-Type: application/json" -d "{\"codigoVoo\":\"A1\",\"numeroAssento\":\"1\"}" http://localhost:8000/marcarVoo
 */
router.post('/marcarVoo', marcarVoo);

// Exporta o roteador
module.exports = router;