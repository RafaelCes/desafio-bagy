const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
} = require('graphql');
const ProductType = require('./productType');

const CustomerType = require('./customerType');
const { getCustomerById } = require('../../controllers/customerController');
const { getProductById } = require('../../controllers/productController');

const OrderType = new GraphQLObjectType({
  name: 'Order',
  description: 'This represents a order placed by a Customer',
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLInt) },
    productId: { type: GraphQLNonNull(GraphQLInt) },
    createdAt: { type: GraphQLNonNull(GraphQLString) },
    installments: { type: GraphQLNonNull(GraphQLInt) },
    status: { type: GraphQLNonNull(GraphQLString) },
    customerId: { type: GraphQLNonNull(GraphQLInt) },
    quantity: { type: GraphQLNonNull(GraphQLInt) },
    product: {
      type: ProductType,
      resolve: async (parent) => {
        const product = await getProductById(parent.productId);
      
        return product;
      },
    },
    Customer: {
      type: CustomerType,
      resolve: async (parent) => {
        const customer = await getCustomerById(parent.customerId);
        
        return customer;
      },
    },
  }),
});

module.exports = OrderType;