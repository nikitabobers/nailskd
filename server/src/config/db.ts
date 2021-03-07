const { Client } = require("pg");

const connectionString = process.env.DATABASE_URL;

export const client = new Client({
  connectionString,
  ssl: {
    rejectUnauthorized: false,
  },
});
