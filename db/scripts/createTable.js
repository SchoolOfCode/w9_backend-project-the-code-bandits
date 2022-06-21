// function creates table with unique id
import { query } from "../../db/index.js";
async function createResourceTable() {
  console.log("start");
  try {
    const res = await query(`CREATE TABLE IF NOT EXISTS resources (
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        title VARCHAR(50),
        url VARCHAR(250),
        content_type VARCHAR(50),
        topic VARCHAR(50));`);
  } catch (err) {
    console.log(err);
  }
  console.log("finish");
}
createResourceTable();
