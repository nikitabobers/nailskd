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

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLList,
  GraphQLSchema,
} = graphql;

const UserType = new GraphQLObjectType({
  name: "user",
  fields: () => ({
    user_id: { type: GraphQLID },
    user_name: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    users: {
      type: new GraphQLList(UserType),
      resolve(parent, args) {
        return client
          .query("SELECT * FROM users")
          .then((res) => {
            return res.rows;
          })
          .catch((e) => console.error(e.stack));
      },
    },
    user: {
      type: UserType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return client
          .query(`SELECT * FROM users WHERE user_id = ${args.id}`)
          .then((res) => {
            return res.rows[0];
          })
          .catch((e) => console.error(e.stack));
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});

// Later add query that ends session?
// return client.end()
