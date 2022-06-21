import { query } from "../db/index.js";

export async function getResources() {
  const res = await query(`SELECT * FROM resources;`);
  return res.rows;
}
