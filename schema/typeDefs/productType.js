const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLFloat,
} = require('graphql');

const ProductType = new GraphQLObjectType({
  name: 'Product',
  description: 'This represents a product sold at the store',
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLInt) },
    name: { type: GraphQLNonNull(GraphQLString) },
    image: { type: GraphQLNonNull(GraphQLString) },
    description: { type: GraphQLNonNull(GraphQLString) },
    weight: { type: GraphQLNonNull(GraphQLFloat) },
    price: { type: GraphQLNonNull(GraphQLFloat) },
    stock: { type: GraphQLNonNull(GraphQLInt) },
  }),
});

module.exports = ProductType;