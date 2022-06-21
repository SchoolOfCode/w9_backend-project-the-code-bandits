import express, { response } from "express";
import {query} from "../db/index.js"

const router = express.Router();

router.post('/', async function(req, res) {
    const resourceObj = req.body;
    const data = await query(
        `INSERT INTO resources
        (title, url, content_type, topic)
        VALUES ($1, $2, $3, $4);`,
    [resourceObj.title, resourceObj.url, resourceObj.content_type, resourceObj.topic]
    );
    res.status(201).send("Successfully added")
    console.log(data.rows)
});

export default router;