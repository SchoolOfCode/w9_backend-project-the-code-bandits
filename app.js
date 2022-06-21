// searches and retrieves express function from folder called 'express' and stores in express var.
import express from "express";
import router from "./routes/index.js";

// assigning the unpacked contents of express parent function
const app = express();

// assigning port number
const port = 3001;

//
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use('/', router);

console.log(app);

//
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});