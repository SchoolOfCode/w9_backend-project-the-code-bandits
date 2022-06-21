import express from "express";
import { getResources } from "../models/resources.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const result = await getResources();
  res.json({
    success: true,
    payload: result,
  });
});

export default router;
