# Programa servidor API-REST de controle de passagem utilizando Node.js no Vercel.

## Descrição

- O projeto foi desenvolvido no VSCode deve ser chamado "controle_passagem_nodejs".
- Programa cliente está no projeto "controle_passagem_reactjs".
- Programa servidor cria o webservice na posta 8000.
- Implementação do serviço utilizando REST e os métodos GET e POST.

## Contextualização

Sistema de Controle de Passagem que realiza a consulta e marcação de voo e assento desenvolvido em Node.js.
O programa permite controlar e manter os voos e assentos. 

### Consulta Voo

Para o programa consultar é necessário chamar a url "verificarStatus" e enviar via post o código do voo(codigoVoo) e o número do assento(numeroAssento). 

O método retorna o "status":
 - 0: voo disponível
 - 1: assento indisponível
 - 2: assento inexistente
 - 3: voo inexistente
 - 4: marcação realizada

Todos os códigos dos voos se iniciam com a letra "A":
 - **"A1"**

### Marcação Voo

A marcação envolve chamar a url "marcarVoo" e enviar via post o código do voo(codigoVoo) e o número do assento(numeroAssento) e este marcar como indisponível. 

O método retorna o "status":
 - 0: voo disponível
 - 1: assento indisponível
 - 2: assento inexistente
 - 3: voo inexistente
 - 4: marcação realizada    

## Dependências

- express,
- cors.

<<<<<<< HEAD
## Execução
=======
## Execução  
>>>>>>> 9ecb78d89dbfe7040744ff7b64b0a70ae1d8ae17

   <pre><code>npm start</code></pre>
   
## Atualização

   Caso o diretório "node_modules" tenha sido apagado basta executar o comando npm a seguir para recriar a pasta e os arquivos das dependências.
   <pre><code>npm update</code></pre> 

## Arquivos em src

- assento.js - Classe do assento do voo.
- voo.js - Classe do voo.
- controladorvoo.js - Classe de controle do voo.
- controladorvoorecurso.js - Contêm os métodos de acesso ao controle do voo.
- servicos.js - Contêm as rotas aos métodos de acesso ao controlador de voo.

## Serviços

    Substitua localhost:8080 pelo endereço do servidor.

- Serviço de inicializar o controlador de voo via GET.<br>
    http://localhost:8000/inicializa

- Serviço de verificarStatus do voo via POST.<br>
    http://localhost:8000/verificarStatus<br>
    Enviar um JSON com os campos codigoVoo e numeroAssento.<br>
    Content-Type: application/json {"codigoVoo":"A1","numeroAssento":"1"}

- Serviço de marcar o voo via POST.<br>
    http://localhost:8000/marcarVoo<br>
    Enviar um JSON com os campos codigoVoo e numeroAssento.<br>
    Content-Type: application/json {"codigoVoo":"A1","numeroAssento":"1"}
