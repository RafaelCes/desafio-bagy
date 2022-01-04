# desafio-bagy

Este projeto foi realizado como um desafio técnico para a empresa Bagy.
ele tem como objetivo criar uma API de backend usando GraphQL e Node, e SQLite como banco de dados, implementando as seguintes entidades:

- Clientes
  - Nome completo
  - Email
  - CPF
  - Data de nascimento
  - Endereço
  - Rua
  - Bairro
  - Cidade
  - Estado
  - País
  - CEP
  - Número
- Produtos
  - Nome
  - Imagem
  - Descrição
  - Peso
  - Preço
  - Quantidade em estoque
- Pedidos
  - Produtos
  - Data de criação
  - Parcelas
  - Comprador (um dos usuários cadastrados)
  - Status

como foi a primeira vez que trabalhei com graphQL e SQLite utilizei o express como servidor e sequelizer para fazer a comunicação com o banco de dados já que são tecnologias que estou mais acostumado

lista completa de dependências:

    "eslint-config-trybe-backend": "^1.0.4",
    "express": "^4.17.2",
    "express-graphql": "^0.12.0",
    "graphql": "^15.8.0",
    "joi": "^17.5.0",
    "nodemailer": "^6.7.2",
    "sequelize": "^7.0.0-alpha.4",
    "sequelize-cli": "^6.3.0",
    "sqlite3": "^5.0.2"
    
para rodar o projeto clone o repositório em uma pasta em sua maquina
  git clone https://github.com/RafaelCes/desafio-bagy.git
 em seguida acesse essa pasta e instale as dependências
  npm install
 configure o banco de dados com os valores iniciais
  npx sequelize db:migrate:undo:all
  npx sequelize db:migrate
  npx sequelize db:seed:all
 inicialize o servidor
  npm start
 Acesse pelo browser a página 
  http://localhost:3000/graphql
 aqui você pode executar as querys e mutations definidas (a página possui uma documentação interativa)

Querys

customer(id: Int): Customer
A Single customer

customers: [Customer]
List of All customers

product(id: Int): Product
A Single Product

prodcuts: [Product]
List of All Products

orders: [Order]
List of All orders

orderHistory(customerId: Int): [Order]
List of all orders by a customer

Mutations 

createCustomer(input: CreateCustomerInput!): Customer
Add a new customer

updateCustomer(id: Int!input: CreateCustomerInput!): Customer
Update a customer

deleteCustomer(id: Int!): Customer
Delete a customer

createProduct(input: CreateProductInput!): Product
Add a new product

updateProduct(id: Int!input: CreateProductInput!): Product
Update a product

deleteProduct(id: Int!): Product
Delete a product

createOrder(input: CreateOrderInput!): Order
Add a new order

updateOrder(
id: Int!
installments: Int!
status: String!
): Order
Update a order

deleteOrder(id: Int!): Order
Delete a order
   
