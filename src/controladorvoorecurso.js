/**
 * Métodos de acesso aos recursos do controlador do voo.
 */

// Import das bibliotecas próprias
const ControladorVoo = require("./controladorvoo");

/**
 * Verifica o status de um voo e assento.
 * 
 * @param {*} request 
 * @param {*} response 
 */
const inicializa = async (request, response) => {
    console.log("Executando a inicialização do controlador do voo");

    //Instancia o controlador do voo    
    const controladorvoo = new ControladorVoo();

    //Inicializa o controlador de voo
    const status = controladorvoo.inicializa();

    console.log("Constrole de passagem - Status inicializacao:" + status);

    // Retorno da mensagem
    response.status(200).json({status: status});  
};

/**
 * Verifica o status de um voo e assento.
 * 
 * @param {*} request 
 * @param {*} response 
 */
const verificarStatus = async (request, response) => {
    console.log("Executando a verificação de status");

    //Recupera os parâmetros
    const codigoVoo = request.body.codigoVoo;
    const numeroAssento = parseInt(request.body.numeroAssento);
        
    //Instancia o controlador do voo  
    const controladorvoo = new ControladorVoo();

    //Verifica o status do voo 
    const status = controladorvoo.verificarStatus(codigoVoo, numeroAssento);

    console.log("Constrole de passagem - Status verificação:" + status);

    // Retorno da mensagem
    response.status(200).json({status: status});  
};

/**
 * Marca um assento em um voo.
 * 
 * @param {*} request 
 * @param {*} response 
 */
const marcarVoo = async (request, response) => {
    console.log("Executando a marcação do voo.");
   
    //Recupera os parâmetros
    const codigoVoo = request.body.codigoVoo;
    const numeroAssento = parseInt(request.body.numeroAssento);

    //Instancia o controlador do voo
    const controladorvoo = new ControladorVoo();
    
    //Marca um assento em um voo
    const status = controladorvoo.marcarVoo(codigoVoo, numeroAssento);

    console.log("Constrole de passagem - Status marcação:" + status);

    // Retorno da mensagem
    response.status(200).json({status: status});  
};

// Exporta as funções
module.exports = {    
    inicializa,
    verificarStatus,
    marcarVoo
};