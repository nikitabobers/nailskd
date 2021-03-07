const graphql = require("graphql");
const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLList } = graphql;

export const DateType = new GraphQLObjectType({
  name: "date",
  fields: () => ({
    date_id: { type: GraphQLID },
    date: { type: GraphQLString },
    time: { type: new GraphQLList(GraphQLString) },
  }),
});
