const graphql = require("graphql");
const connectionString =
  "postgres://uuwjtohzfprdxa:17bfacc0a5728ba621f63efdbb7fc3166f3fdeab8491808c628b55c1c9fe7852@ec2-54-78-127-245.eu-west-1.compute.amazonaws.com:5432/d4v8qm7lbug9ht";

const { Client } = require("pg");

const client = new Client({
  connectionString,
  ssl: {
    rejectUnauthorized: false,
  },
});

client.connect();

client.query(
  "SELECT table_schema,table_name FROM information_schema.tables;",
  (err, res) => {
    if (err) throw err;
    for (let row of res.rows) {
      console.log(JSON.stringify(row));
    }
    client.end();
  }
);

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLList,
  GraphQLSchema,
} = graphql;

const UserType = new GraphQLObjectType({
  name: "Person",
  fields: () => ({
    id: { type: GraphQLID },
    firstname: { type: GraphQLString },
  }),
});

// const RootQuery = new GraphQLObjectType({
//   name: "RootQueryType",
//   fields: {
//     person: {
//       type: UserType,
//       args: { id: { type: GraphQLID } },
//       resolve(parentValue, args) {
//         const query = `SELECT * FROM "people" WHERE id=${args.id}`;
//         return pool.connect().then((client) => {
//           client
//             .query(query)
//             .then((res) => {
//               client.release();
//               console.log(res.rows[0]);
//             })
//             .catch((err) => {
//               client.release();
//               console.log(err.stack);
//             });
//         });
//       },
//     },
//   },
// });

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    person: {
      type: UserType,
      args: { id: { type: GraphQLID } },
      resolve(parentValue, args) {
        return console.log("test");
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
