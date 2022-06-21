import express from "express";

const router = express.Router();

router.get('/', async (req, res) => {
  const result = await getResources();
  res.json({
    success: true,
    payload: result,
  })
})

export default router;