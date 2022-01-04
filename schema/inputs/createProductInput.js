const {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLFloat,
  GraphQLInt,
} = require('graphql');


const CreateProductInputType = new GraphQLInputObjectType({
  name: 'CreateProductInput',
  description: 'Input payload for creating a product',
  fields: () => ({
    name: { type: GraphQLNonNull(GraphQLString) },
    image: { type: GraphQLNonNull(GraphQLString) },
    description: { type: GraphQLNonNull(GraphQLString) },
    weight: { type: GraphQLNonNull(GraphQLFloat) },
    price: { type: GraphQLNonNull(GraphQLFloat) },
    stock: { type: GraphQLNonNull(GraphQLInt) },
  }),
});

module.exports = CreateProductInputType;