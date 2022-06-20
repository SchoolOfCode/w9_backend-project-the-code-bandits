// searches and retrieves express function from folder called 'express' and stores in express var.
import express from "express";

// assigning the unpacked contents of express parent function
const app = express();

// assigning port number
const port = 3000;

//
app.get("/", (req, res) => {
  res.send("Hello World!");
});

console.log(app);

//
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
