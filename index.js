const express = require("express");
const cors = require("cors");
const dotenv = require('dotenv')
const data = require("./result");


dotenv.config();
const app = express();

app.use(
  cors({
    origin: "http://localhost:3001",
  })
);




app.get("/api", (req, res) => {
  res.send("Backend api is working..");
});

app.get("/api/user", (req, res) => {
  res.send("Hi my name is Ayush");
})

app.get("/api/info", (req, res) => {
  res.send("This is a test server for fyllo to check ci/cd");
})

app.get("/api/data", (req, res) => {
  res.send(data);
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
