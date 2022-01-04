const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
} = require('graphql');

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

module.exports = AddressType;