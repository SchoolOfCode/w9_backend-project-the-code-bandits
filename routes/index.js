import { getResources, createResource } from "../models/resources.js";
import express, { response } from "express";

const router = express.Router();

router.post("/resources", async function (req, res) {
  try {
    const newResource = req.body;
    await createResource(newResource);
  } catch (error) {
    console.log(error);
  }
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
