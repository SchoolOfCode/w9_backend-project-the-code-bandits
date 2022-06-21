import { getResources } from "../models/resources.js";
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

<<<<<<< HEAD
export default router;
=======

router.get("/", async (req, res) => {
  const result = await getResources();
  res.json({
    success: true,
    payload: result,
  });
});

export default router;

>>>>>>> cc745df0d8b62701becf459ced5674738747ecf0
