const {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLInt,
} = require('graphql');
const AddressType = require('../typeDefs/addressType');

const CreateCustomerInputType = new GraphQLInputObjectType({
  name: 'CreateCustomerInput',
  description: 'Input payload for creating a customer',
  fields: () => ({
    fullName: { type: GraphQLNonNull(GraphQLString) },
    email: { type: GraphQLNonNull(GraphQLString) },
    cpf: { type: GraphQLNonNull(GraphQLString) },
    birthDate: { type: GraphQLNonNull(GraphQLString) },
    address: { type: AddressInputType },
  }),
});

const AddressInputType = new GraphQLInputObjectType({
  name: 'AddressInput',
  description: 'Input payload for creating a adress',
  fields: () => ({
    street: { type: GraphQLNonNull(GraphQLString) },
    district: { type: GraphQLNonNull(GraphQLString) },
    city: { type: GraphQLNonNull(GraphQLString) },
    state: { type: GraphQLNonNull(GraphQLString) },
    country: { type: GraphQLNonNull(GraphQLString) },
    cep: { type: GraphQLNonNull(GraphQLString) },
    number: { type: GraphQLNonNull(GraphQLInt) },
    
  }),
});

module.exports = CreateCustomerInputType;