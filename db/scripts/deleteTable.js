//create function to delete entire table from database

import { query } from "../index.js";

async function deleteTable() {
  console.log("start");
  const res = await query(`DROP TABLE resources`);
  console.log("finish");
}

deleteTable();
