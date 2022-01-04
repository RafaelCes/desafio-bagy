const {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLInt,
} = require('graphql');

const CreateOrderInputType = new GraphQLInputObjectType({
  name: 'CreateOrderInput',
  description: 'Input payload for creating a Order',
  fields: () => ({
    productId: { type: GraphQLNonNull(GraphQLInt) },
    installments: { type: GraphQLNonNull(GraphQLInt) },
    status: { type: GraphQLNonNull(GraphQLString) },
    customerId: { type: GraphQLNonNull(GraphQLInt) },
    quantity: { type: GraphQLNonNull(GraphQLInt) },
  }),
});

module.exports = CreateOrderInputType;