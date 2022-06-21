import { query } from "../../db/index.js";

const testResource = [
  {
    title: "Learn Javascript",
    url: "www.google.com",
    content_type: "article",
    topic: "Javascript",
  },
];

async function populateTable() {
  for (let i = 0; i < testResource.length; i++) {
    const res = await query(
      `INSERT INTO resources
      ( title, url, content_type, topic)
      VALUES ($1, $2, $3, $4);`,
      [
        testResource[i].title,
        testResource[i].url,
        testResource[i].content_type,
        testResource[i].topic,
      ]
    );
  }
}

populateTable();
