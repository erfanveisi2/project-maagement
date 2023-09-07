const { clients } = require("../sampleData");
const {
  GraphQLID,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} = require("graphql");

//client Type
const ClientType = new GraphQLObjectType({
  name: "Client",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    clients: {
      type: ClientType,
      args: { id: { type: GraphQLID } },
      resolve(parent: any, args: { id: string }) {
        return clients.find((x: { id: string }) => x.id === args.id);
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
