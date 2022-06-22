// searches and retrieves express function from folder called 'express' and stores in express var.
import express from "express";
import router from "./routes/index.js";

// assigning the unpacked contents of express parent function
const app = express();

// assigning port number
const port = 3001;


// req.body
app.use(express.json());

// use app and set base path
app.use("/", router);


// test server
app.get("/", (req, res) => {
  res.send("Hello World!");
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
