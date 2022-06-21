// searches and retrieves express function from folder called 'express' and stores in express var.
import express from "express";
import router from "./routes/index.js";

// assigning the unpacked contents of express parent function
const app = express();

// assigning port number

const port = 3001;

<<<<<<< HEAD
// req.body
app.use(express.json());
=======

>>>>>>> cc745df0d8b62701becf459ced5674738747ecf0

//
app.get("/", (req, res) => {
  res.send("Hello World!");
});

<<<<<<< HEAD
app.use("/", router);
=======

app.use("/", router);

>>>>>>> cc745df0d8b62701becf459ced5674738747ecf0

console.log(app);



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
