const express = require("express");
const cors = require("cors");

const port = 3001;
const app = express();

app.use(express.json());
app.use(cors());

app.get("/api/helloWorld", (req, res) => {
  const response = { message: "Hello World" };
  res.json(response);
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
