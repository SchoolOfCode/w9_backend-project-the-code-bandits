import express, { response } from "express";
import { query } from "../db/index.js";

const router = express.Router();

router.post("/", async function (req, res) {
  try {
    const { resourceObj } = req.body;
    const newResource = await query(
      `INSERT INTO resources
        (title, url, content_type, topic)
        VALUES ($1, $2, $3, $4)
        RETURNING *;`,
      [
        resourceObj.title,
        resourceObj.url,
        resourceObj.content_type,
        resourceObj.topic,
      ]
    );
    res.json(newResource.rows[0]);
  } catch (err) {
    console.log(err);
  }
});

export default router;
