const graphql = require("graphql");
const { GraphQLObjectType, GraphQLID, GraphQLList, GraphQLSchema } = graphql;

import { getAllUsers, getUserByID } from "../queries/user/index";

import { UserType } from "./user/User";
// import { DateType } from "./date/Date";

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
      resolve(_parent: any, args: Number) {
        return getUserByID(args);
      },
    },
    // dates: {
    //   type: new GraphQLList(DateType),
    //   resolve() {
    //     return client
    //       .query(
    //         "SELECT TO_CHAR(date, 'yyyy-mm-dd') date, date_id, time FROM dates_available ORDER BY date"
    //       )
    //       .then((res: Response) => {
    //         return res.rows;
    //       })
    //       .catch((e) => console.error(e.stack));
    //   },
    // },
    // date: {
    //   type: new GraphQLList(DateType),
    //   resolve() {
    //     return client
    //       .query(
    //         "SELECT TO_CHAR(date , 'yyyy-mm-dd') date FROM dates_available"
    //       )
    //       .then((res: Response) => {
    //         return res.rows;
    //       })
    //       .catch((e) => console.error(e.stack));
    //   },
    // },
    // time: {
    //   type: new GraphQLList(DateType),
    //   resolve() {
    //     return client
    //       .query("SELECT time FROM dates_available")
    //       .then((res: Response) => {
    //         return res.rows;
    //       })
    //       .catch((e) => console.error(e.stack));
    //   },
    // },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});

// Add query that ends session?
// return client.end()
