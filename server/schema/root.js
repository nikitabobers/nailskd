const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLList,
  GraphQLSchema,
} = graphql;

const { Client } = require("pg");
const { UserType } = require("./user");
const { DateType } = require("./date");

const connectionString = process.env.POSTGRES_CONNECTION;

const client = new Client({
  connectionString,
  ssl: {
    rejectUnauthorized: false,
  },
});

client.connect();

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
    dates: {
      type: new GraphQLList(DateType),
      resolve(parent, args) {
        return client
          .query(
            "SELECT TO_CHAR(date , 'dd.mm.yyyy') date, date_id, time FROM dates_available"
          )
          .then((res) => {
            return res.rows;
          })
          .catch((e) => console.error(e.stack));
      },
    },
    date: {
      type: new GraphQLList(DateType),
      resolve(parent, args) {
        return client
          .query(
            "SELECT TO_CHAR(date , 'dd.mm.yyyy') date FROM dates_available"
          )
          .then((res) => {
            return res.rows;
          })
          .catch((e) => console.error(e.stack));
      },
    },
    time: {
      type: new GraphQLList(DateType),
      resolve(parent, args) {
        return client
          .query("SELECT time FROM dates_available")
          .then((res) => {
            return res.rows;
          })
          .catch((e) => console.error(e.stack));
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});

// Add query that ends session?
// return client.end()
