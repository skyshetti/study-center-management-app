require("dotenv").config();
const configureDb = require("./config/database");
const router = require("./config/routes");

const express = require("express");
const cors = require("cors");
const app = express();
const port = 4545;

app.use(express.json());
app.use(router);
app.use(cors());

configureDb();
app.listen(port, () => {
  console.log("server running on", port);
});
