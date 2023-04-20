const mongoose = require("mongoose");

mongoose
  .connect(process.env.DB_URI)
  .then(() => {
    console.log("Db Connected successfully");
  })
  .catch((err) => {
    console.log(err);
  });

//Schema

const schema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    mobile: { type: Number, required: true, unique: true },
    city: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

//Model

const userModel = mongoose.model("UserDetail", schema);

module.exports = userModel;
