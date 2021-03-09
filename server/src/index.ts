require("dotenv").config({ path: "../.env" });
import express from "express";
import cors from "cors";
import { graphqlHTTP } from "express-graphql";

import { client } from "./config/db";

const schema = require("./schema/index");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

const main = async () => {
  await client.connect();

  app.use(
    "/graphql",
    graphqlHTTP({
      schema,
      graphiql: true,
    })
  );

  app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
};

main().catch((err) => {
  console.error(err);
});
