// middlewares and test get route
import express from "express";
import router from "./routes/index.js";
import cors from "cors";

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());
app.use("/", router);

// testing the server
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
