/**
 * Classe que representa um assento.
 */

class Assento {

    /**
     * Construtor da classe.
     * 
     * @param {*} numero 
     * @param {*} disponivel      
     */
    constructor(numero, disponivel) {
        //Inicializa os atributos da classe
        this.numero = numero;
        this.disponivel = disponivel;
    }
     
    /**
     * Recupera o número do assento.
     * 
     * @returns Um inteiro com o número do assento.
     */
    getNumero() {
        return this.numero;
    }

    /**
     * Modifica o número do assento.
     * 
     * @param {*} numero O número de um assento.
     */
    setNumero(numero) {
        this.numero = numero;
    }

    /**
     * Retorna se o assento está disponível.
     * 
     * @returns Verdadeiro ou falso se o assento está disponível.
     */
    getDisponivel() {
        return this.disponivel;
    }

    /**
     * Modifica se o assento está disponível.
     * 
     * @param {*} disponivel Verdadeiro ou falso para a disponibilidade do assento.
     */
    setDisponivel(disponivel) {
        this.disponivel = disponivel;
    }
}

// Exporta a classe
module.exports = Assento;