// Import das bibliotecas próprias
const Voo = require("./voo");

/**
 * Classe que controla o Voo.
 */

class ControladorVoo {
    
    /**
     * Retorna uma instância do objeto.
     */
    constructor(){        
        //Garante que somente uma instância do controlador de voo esteja em memória
        //Verifica se não foi instanciado.
        if (ControladorVoo.instancia==null) {
            //Cria uma instância
            ControladorVoo.instancia = this;
            //Inicializa os atributos da classe
            this.NUMERO_DE_VOOS = 10;        
            this.voos = new Array();        
            //Cria os assentos no voo
            for (let numero = 1; numero <= this.NUMERO_DE_VOOS; numero++) {            
                const codigoVoo = "A" + numero;
                const voo = new Voo(codigoVoo);
                this.voos.push(voo);
            }
        }
        //Retorna a instância
        return ControladorVoo.instancia;
    }
    
    /**
     * Inicializa o controlador de voo.
     * Reinicializa a lista de voos e assentos.
     * 
     */
    inicializa(){
        //Inicializa a instância para o construtor criar uma nova
        ControladorVoo.instancia = null;
        return 1; //Executou a inicialização
    }
    
    /**
     * Método para verificar o status.
     * 
     * @param {*} codigoVoo Uma String com o código do voo.
     * @param {*} numeroAssento Um inteiro com o número do assento.
     * 
     * @return O status do assento e do voo.
     */
    verificarStatus(codigoVoo, numeroAssento){
        //Procura o código do voo
        const voo = this.procurarVoo(codigoVoo);
        if (voo == null) {
            return 3; //Voo inexistente
        }
        
        //Procura o assento no voo
        const assento = voo.procurarAssento(numeroAssento);
        if (assento == null) {
            return 2; //Assento inexistente
        }
        
        //Verifica se o assento está disponível
        if (!assento.getDisponivel()) {
            return 1; //Assento indisponível
        }
       
        return 0; //Voo e assento disponível
    }

    /**
     * Método  para marcar o voo e o assento.
     *
     * @param codigoVoo Uma String com o código do voo.
     * @param numeroAssento Um inteiro com o número do assento.
     * 
     * @return O status da marcação do assento e do voo.
     */ 
     marcarVoo( codigoVoo, numeroAssento) {
        // Se o voo não foi encontrado, codigo de erro 3
        const voo = this.procurarVoo(codigoVoo);        
        if (voo != null) {            
            const assento = voo.procurarAssento(numeroAssento);            
            if (assento != null) {                
                if (assento.getDisponivel()) {
                    //Marca o assento com indisponível
                    assento.setDisponivel(false);
                    return 4; //Assento marcado
                }
            }
        }
        return 0;
    }

    /**
     * Procura o código do voo.
     * @param {*} codigoVoo Uma String com o código do voo.
     * 
     * @returns o objeto do voo.
     */ 
    procurarVoo(codigoVoo){
        //Procura o código do voo        
        for (var v in this.voos) {
            // Verifica se o codigo bate com o que foi procurado            
            if (this.voos[v].getCodigoVoo() == codigoVoo){                
                return this.voos[v];
             }
        }
        return null;
    }
}

// Exporta a classe
module.exports = ControladorVoo;