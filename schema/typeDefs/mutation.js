const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLNonNull,
} = require('graphql');
const { createCustomer, updateCustomer, deleteCustomer } = require('../../controllers/customerController');
const CreateCustomerInputType = require('../inputs/createCustomer');

const CustomerType = require('./customerType');

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
        const customer = await createCustomer(args.input)
        return customer
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
        const customer = await updateCustomer(args.id, args.input)
        return customer
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
        console.log(customer.dataValues, 'mutation');
        return customer;
      },
    },
  }),
});

module.exports = RootMutationType;