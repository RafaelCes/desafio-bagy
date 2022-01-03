const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLNonNull
} = require('graphql')

const CustomerType = require("./customerType");


const RootMutationType = new GraphQLObjectType({
  name: 'Mutation',
  description: 'Root Mutation',
  fields: () => ({
    addClient: {
      type: CustomerType,
      description: 'Add a new customer',
      args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        email: { type: GraphQLNonNull(GraphQLString) },
        cpf: { type: GraphQLNonNull(GraphQLString) },
        birthDate: { type: GraphQLNonNull(GraphQLString) },
        // street: { type: GraphQLNonNull(GraphQLString) },
        // district: { type: GraphQLNonNull(GraphQLString) },
        // city: { type: GraphQLNonNull(GraphQLString) },
        // state: { type: GraphQLNonNull(GraphQLString) },
        // country: { type: GraphQLNonNull(GraphQLString) },
        // cep: { type: GraphQLNonNull(GraphQLString) },
        // number: { type: GraphQLNonNull(GraphQLInt) },
      },
      resolve: (parent, args) => {
        const client = { id: clientData.length + 1, ...args }
        clientData.push(client)
        return client
      }
    },
  //   addAuthor: {
  //     type: AuthorType,
  //     description: 'Add an author',
  //     args: {
  //       name: { type: GraphQLNonNull(GraphQLString) }
  //     },
  //     resolve: (parent, args) => {
  //       const author = { id: authors.length + 1, name: args.name }
  //       authors.push(author)
  //       return author
  //     }
  //   }
  })
})

module.exports = RootMutationType;