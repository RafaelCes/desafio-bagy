const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull
} = require('graphql')

const CustomerType = new GraphQLObjectType({
  name: 'Customer',
  description: 'This represents a Customer from the store',
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLInt) },
    fullName: { type: GraphQLNonNull(GraphQLString) },
    email: { type: GraphQLNonNull(GraphQLString) },
    cpf: { type: GraphQLNonNull(GraphQLString) },
    birthDate: { type: GraphQLNonNull(GraphQLString) },
    address: { type: AddressType, },
  }),
});


const AddressType = new GraphQLObjectType({
  name: 'Address',
  description: 'This represents an adress from a Customer',
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLInt) },
    street: { type: GraphQLNonNull(GraphQLString) },
    district: { type: GraphQLNonNull(GraphQLString) },
    city: { type: GraphQLNonNull(GraphQLString) },
    state: { type: GraphQLNonNull(GraphQLString) },
    country: { type: GraphQLNonNull(GraphQLString) },
    cep: { type: GraphQLNonNull(GraphQLString) },
    number: { type: GraphQLNonNull(GraphQLInt) },
  }),
});


module.exports = CustomerType;