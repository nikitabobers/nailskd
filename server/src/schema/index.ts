const graphql = require("graphql");
const { GraphQLObjectType, GraphQLID, GraphQLList, GraphQLSchema } = graphql;

import { getAllUsers, getUserByID } from "../queries/user";
import { getAllDates } from "../queries/date";

import { UserType } from "./user/User";
import { DateType } from "./date/Date";

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    users: {
      type: new GraphQLList(UserType),
      resolve() {
        return getAllUsers();
      },
    },
    user: {
      type: UserType,
      args: { id: { type: GraphQLID } },
      resolve: (_parent: any, args: Number) => {
        getUserByID(args);
      },
    },
    dates: {
      type: new GraphQLList(DateType),
      resolve: () => getAllDates(),
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
