require("dotenv").config();
const express = require("express");
const router=require("./router");

const app = express();
app.use(express.json());
app.use(router);
app.use(express.urlencoded({ extended: false }));

app.listen(process.env.PORT, () => {
  console.log(`Server Run  on Port no:${process.env.PORT}`);
});
