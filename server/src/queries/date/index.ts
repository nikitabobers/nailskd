import { QueryResult } from "pg";
import { client } from "../../config/db";

export const getAllDates = async () => {
  return client
    .query(
      "SELECT TO_CHAR(date, 'yyyy-mm-dd') date, date_id, time FROM dates_available ORDER BY date"
    )
    .then((res: QueryResult) => {
      return res.rows;
    })
    .catch((e: QueryResult) => console.error(e));
};

// export const getDates = async () => {
//   return client
//     .query("SELECT TO_CHAR(date , 'yyyy-mm-dd') date FROM dates_available")
//     .then((res: QueryResult) => {
//       return res.rows;
//     })
//     .catch((e: QueryResult) => console.error(e));
// };

// export const getAllTimes = async () => {
//   return client
//     .query("SELECT time FROM dates_available")
//     .then((res: QueryResult) => {
//       return res.rows;
//     })
//     .catch((e: QueryResult) => console.error(e));
// };
