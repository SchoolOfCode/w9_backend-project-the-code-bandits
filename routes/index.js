import { getResources, createResource } from "../models/resources.js";
import express, { response } from "express";
import { query } from "../db/index.js";

const router = express.Router();

router.post("/resources", async function (req, res) {
  try {
    let resource = req.body;
    const newResource = await query(
      `INSERT INTO resources
            (title, url, content_type, topic)
            VALUES ($1, $2, $3, $4) RETURNING *;`,
      [resource.title, resource.url, resource.content_type, resource.topic]
    );
    res.json({
      success: true,
      payload: newResource.rows[0],
    });
  } catch (error) {
    console.log(error);
  }
});

router.get("/resources", async (req, res) => {
  const result = await getResources();
  res.json({
    success: true,
    payload: result,
  });
});

export default router;
