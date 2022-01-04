const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLNonNull,
} = require('graphql');

const { createCustomer, updateCustomer, deleteCustomer } = require('../../controllers/customerController');
const { createOrder, deleteOrder, updateOrder } = require('../../controllers/orderController');
const { createProduct, updateProduct, deleteProduct } = require('../../controllers/productController');

const CreateCustomerInputType = require('../inputs/createCustomer');
const CreateProductInputType = require('../inputs/createProductInput');
const CreateOrderInputType = require('../inputs/creatOrderInput');

const CustomerType = require('./customerType');
const OrderType = require('./orderType');
const ProductType = require('./productType');

const RootMutationType = new GraphQLObjectType({
  name: 'Mutation',
  description: 'Root Mutation',
  fields: () => ({
    createCustomer: {
      type: CustomerType,
      description: 'Add a new customer',
      args: {
        input: {
            type: GraphQLNonNull(CreateCustomerInputType),
        },
      },
      resolve: async (parent, args) => {
        const customer = await createCustomer(args.input);
        return customer;
      },
  },
    updateCustomer: {
      type: CustomerType,
      description: 'Update a  customer',
      args: {
        id: { type: GraphQLNonNull(GraphQLInt) },
        input: {
            type: GraphQLNonNull(CreateCustomerInputType),
        },
      },
      resolve: async (parent, args) => {
        const customer = await updateCustomer(args.id, args.input);
        return customer;
      },
    },
    deleteCustomer: {
      type: CustomerType,
      description: 'Delete a  customer',
      args: {
        id: { type: GraphQLNonNull(GraphQLInt) },
      },
      resolve: async (parent, args) => {
        const customer = await deleteCustomer(args.id);
        return customer;
      },
    },
    createProduct: {
      type: ProductType,
      description: 'Add a new product',
      args: {
        input: {
            type: GraphQLNonNull(CreateProductInputType),
        },
      },
      resolve: async (parent, args) => {
        const product = await createProduct(args.input);
        return product;
      },
  },
    updateProduct: {
      type: ProductType,
      description: 'Update a  product',
      args: {
        id: { type: GraphQLNonNull(GraphQLInt) },
        input: {
            type: GraphQLNonNull(CreateProductInputType),
        },
      },
      resolve: async (parent, args) => {
        const product = await updateProduct(args.id, args.input);
        return product;
      },
    },
    deleteProduct: {
      type: ProductType,
      description: 'Delete a  product',
      args: {
        id: { type: GraphQLNonNull(GraphQLInt) },
      },
      resolve: async (parent, args) => {
        const product = await deleteProduct(args.id);
        return product;
      },
    },
    createOrder: {
      type: OrderType,
      description: 'Add a new order',
      args: {
        input: {
            type: GraphQLNonNull(CreateOrderInputType),
        },
      },
      resolve: async (parent, args) => {
        const order = await createOrder(args.input);
        return order;
      },
  },
    updateOrder: {
      type: OrderType,
      description: 'Update a  order',
      args: {
        id: { type: GraphQLNonNull(GraphQLInt) },
        installments: { type: GraphQLNonNull(GraphQLInt) },
        status: { type: GraphQLNonNull(GraphQLString) },
      },
      resolve: async (parent, args) => {
        const order = await updateOrder(args.id, args.status, args.installments);
        return order;
      },
    },
    deleteOrder: {
      type: OrderType,
      description: 'Delete a  order',
      args: {
        id: { type: GraphQLNonNull(GraphQLInt) },
      },
      resolve: async (parent, args) => {
        const order = await deleteOrder(args.id);
        return order;
      },
    },
  }),
});

module.exports = RootMutationType;