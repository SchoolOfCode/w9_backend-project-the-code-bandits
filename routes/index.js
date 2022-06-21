import { getResources, createResource } from "../models/resources.js";
import express, { response } from "express";
import { query } from "../db/index.js";

const router = express.Router();

router.post("/resources", async function (req, res) {
  const newResource = req.body;
  await createResource(newResource);
  res.json({
    success: true,
    payload: newResource,
  });
});

router.get("/resources", async (req, res) => {
  const result = await getResources();
  res.json({
    success: true,
    payload: result,
  });
});

export default router;
