const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLInt,
} = require('graphql');

const CustomerType = require('./customerType');
const ProductType = require('./productType');
const OrderType = require('./orderType');
const { getAllCustomers, getCustomerById } = require('../../controllers/customerController');
const { getProductById, getAllProducts } = require('../../controllers/productController');
const { getAllOrders, getOrderByCustomer } = require('../../controllers/orderController');

const RootQueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'Root Query',
  fields: () => ({
    customer: {
      type: CustomerType,
      description: 'A Single customer',
      args: {
        id: { type: GraphQLInt },
      },
      resolve: (parent, args) => getCustomerById(args.id),
    },

    customers: {
      type: new GraphQLList(CustomerType),
      description: 'List of All customers',
      resolve: () => getAllCustomers(),
    },

    product: {
      type: ProductType,
      description: 'A Single Product',
      args: {
        id: { type: GraphQLInt },
      },
      resolve: (parent, args) => getProductById(args.id),
    },

    prodcuts: {
      type: new GraphQLList(ProductType),
      description: 'List of All Products',
      resolve: () => getAllProducts(),
    },

    orders: {
      type: new GraphQLList(OrderType),
      description: 'List of All orders',
      resolve: () => getAllOrders(),
    },

    orderHistory: {
      type: new GraphQLList(OrderType),
      description: 'List of all orders by a customer',
      args: {
        customerId: { type: GraphQLInt },
      },
      resolve: (parent, args) => getOrderByCustomer(args.customerId),
    },

  }),
});

module.exports = RootQueryType;