const {
  GraphQLSchema,
} = require('graphql');

const RootMutationType = require('./typeDefs/mutation');
const RootQueryType = require('./typeDefs/query');

const schema = new GraphQLSchema({
  query: RootQueryType,
  mutation: RootMutationType
})



module.exports = schema;