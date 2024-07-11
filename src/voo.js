// Import das bibliotecas próprias
const Assento = require("./assento");

/**
 * Classe que representa o Voo.
 */

class Voo {

    /**
     * Construtor da classe.
     * 
     * @param {*} codigoVoo      
     */
    constructor(codigoVoo) {
        //Inicializa os atributos da classe
        this.NUMERO_DE_ASSENTOS = 50;        
        this.codigoVoo = codigoVoo;
        //Declara o vetor de assentos
        this.assentos = new Array();
        for (let numero = 1; numero <= this.NUMERO_DE_ASSENTOS; numero++) {    
            //Instância os assentos com o número e disponível(true)        
            const assento = new Assento(numero, true);
            //Adiciona o assento a lista de assentos do voo
            this.assentos.push(assento);
        }
    }
    
    /**
     * Recupera o código do voo.
     * 
     * @returns Um inteiro com o código do voo.
     */
    getCodigoVoo() {
        return this.codigoVoo;
    }

    /**
     * Modificador do código do voo.
     * 
     * @param {*} codigoVoo Um inteiro com o código do voo.
     */
    setCodigoVoo(codigoVoo) {
        this.codigoVoo = codigoVoo;
    }

    /**
     * Recuperador do vetor de assentos do voo.
     * 
     * @returns O vetor de assentos.
     */
    getAssentos() {
        return this.assentos;
    }

    /**
     * Modificador do vetor de assentos do voo.
     * 
     * @param {*} assentos Um vetor com os assentos.
     */
    setAssentos(assentos) {
        this.assentos = assentos;
    }

    /**
     * Procura o assento do voo.
     * 
     * @returns o objeto do assento do voo.
     */    
    procurarAssento(numeroAssento){        
        //Procura o assento
        for (var a in this.assentos){
            // Verifica se o númerodo assento bate com o que foi procurado
            if (this.assentos[a].getNumero() == numeroAssento){
                return this.assentos[a];
            }
        }        
        return null;
    }
}

// Exporta a classe
module.exports = Voo;