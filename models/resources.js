import { query } from "../db/index.js";

export async function getResources() {
  const res = await query(`SELECT * FROM resources;`);
  return res.rows;
}

export async function createResource(resource) {
  const newResource = await query(
    `INSERT INTO resources
          (title, url, content_type, topic)
          VALUES ($1, $2, $3, $4)`,
    [resource.title, resource.url, resource.content_type, resource.topic]
  );
  return newResource;
  //res.status(201).send("Successfully added");
}
