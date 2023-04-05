const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
const _ = require("lodash");
const { response } = require("express");
const axios = require("axios");
const port = 3000;


app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.post ("/view", (req, res) => {
  const total = req.body.totalA
  console.log(total)
  res.json(total)

})
