# O que realizar
## Desenvolver um serviço REST para múltiplas entidades usando tecnologia de backend(Spring Boot / Java / NodeJS) para um sistema de locadora de filmes.
A ideia é ter várias entidades simples de forma a focar nos relacionamentos e regras de negócio básicas.
A especificação abaixo apresenta apenas uma ideia de um sistema de locação de filmes.
Cabe ao candidato melhor elaborar o escopo do sistema, como:

1.  Criação de entidades auxiliares.
2.  Elaboração de novos atributos para as entidades.
3.  Criação de novas regras de negócio.

## Segue abaixo a proposta do sistema:

### Entidades (+atributos básicos):
1.  Filme (nome, gênero, diretor, quantidade).
  * Usuário (nome, sexo, CPF).
  * Locação (filme, usuário, data de devolução, etc).
  * Histórico de locação: Registros das locações de filmes:

- Exemplos:
- O filme “Star Wars” foi alugado por “João” no dia 12/08/2018.
- O filme “Star Wars” foi renovado por “João” no dia 13/08/2018.
Serviços a serem desenvolvidos:

2.  CRUD usuário:
  * Regra 1: validar consistência dos dados, como CPF e data de nascimento.
  * Regra 2: validar obrigatoriedade dos dados, como nome e CPF.
  * Regra 3: só serão aceitos cadastros de usuários com mais de 18 anos.
  
3.  CRUD filme.
  * Alugar filme:
    - Regra 1: um usuário pode alugar no máximo 5 filmes por vez.
    - Regra 2: o filme deve estar disponível em estoque.
  * Renovar locação: dado um ID de uma locação, renová-la para um número X de dias.
    - Regra 1: Limitar o número de renovações em no máximo duas ocorrências.
  * Consultar histórico de locação.
  
 #  Observações
Não utilizar Spring-Data-REST, queremos ver a forma como o candidato estrutura o RestController.

Apenas reforçando: os requisitos e regras citadas acima são apenas uma proposta.
Elas podem ser alteradas e novas regras podem ser adicionadas.

* É um diferencial o desenvolvimento de testes automatizados.

Banco de dados: conforme sua escolha.

### O que será avaliado
1.  Desenvolvimento da proposta do sistema.
2.  Entendimento da arquitetura do sistema, como funciona a comunicação front-end /back-end.
3.  Qualidade de código.-Uso de recursos e padrões de projeto.
4.  Modelagem e relacionamentos entre entidades (entidades adicionais podem ser utilizadas).
5.  Mapeamento Objeto-Relacional.
6.  Estruturação do serviço seguindo os fundamentos REST.

