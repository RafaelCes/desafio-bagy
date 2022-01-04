const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
} = require('graphql');
const AddressType = require('./addressType');

const CustomerType = new GraphQLObjectType({
  name: 'Customer',
  description: 'This represents a Customer from the store',
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLInt) },
    fullName: { type: GraphQLNonNull(GraphQLString) },
    email: { type: GraphQLNonNull(GraphQLString) },
    cpf: { type: GraphQLNonNull(GraphQLString) },
    birthDate: { type: GraphQLNonNull(GraphQLString) },
    address: { type: AddressType },
  }),
});

module.exports = CustomerType;