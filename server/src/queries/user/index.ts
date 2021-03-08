import { QueryResult } from "pg";
import { client } from "../../config/db";

export const getAllUsers = async () => {
  return client
    .query("SELECT * FROM users")
    .then((res: QueryResult) => {
      return res.rows;
    })
    .catch((e: QueryResult) => console.error(e));
};

export const getUserByID = async (args: any) => {
  return client
    .query(`SELECT * FROM users WHERE user_id = ${args.id}`)
    .then((res: QueryResult) => {
      return res.rows[0];
    })
    .catch((e: QueryResult) => console.error(e));
};
