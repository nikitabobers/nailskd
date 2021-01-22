const graphql = require("graphql");
const { GraphQLObjectType, GraphQLID, GraphQLString } = graphql;

const UserType = new GraphQLObjectType({
  name: "user",
  fields: () => ({
    user_id: { type: GraphQLID },
    user_name: { type: GraphQLString },
  }),
});

module.exports = {
  UserType,
};
