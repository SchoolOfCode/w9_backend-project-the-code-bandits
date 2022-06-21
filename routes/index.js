import express from "express";
import {query} from "../db/index.js"

const router = Express.Router();

router.post('/', (req, res) => {
    const resourceObj = req.body;
    let res = await query(
        `INSERT INTO resources
        (title, url, content_type, topic)
        VALUES ($1, $2, $3, $4);`,
    [resourceObj.title, resourceObj.url, resourceObj.content_type, resourceObj.topic]
    );
});