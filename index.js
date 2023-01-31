const express = require("express");
const app = express();
const cors = require("cors");
const jsonwebtokenfunction= require("./jsonwebtokenfunction/jsonwebtokenfunction")

app.use(express.json());

app.use(cors());

app.use("/CRCL", jsonwebtokenfunction);




try {
  app.listen(2000, () => {
    console.log("connected to server 2000");
  });
} catch (error) {
  console.log(error);
}
