const express = require("express");
const router = express.Router();
const userModel = require("./database");
const asyncHandlar = require("express-async-handler");

//post

router.post(
  "/post",
  asyncHandlar(async (req, res) => {
    try {
      const sendData = new userModel(req.body);
      const saveData = await sendData.save();
      res.send(saveData);
    } catch (error) {
      res.status(400).send("Failed to add Data");
    }
  })
);

//getAll Data

router.get(
  "/getAll",
  asyncHandlar(async (req, res) => {
    try {
      const getAllData = await userModel.find();
      res.send(getAllData);
    } catch (error) {
      res.status(500).send("Failed To Fetch Data From Server");
    }
  })
);

//getById Data

router.get(
  "/getById/:id",
  asyncHandlar(async (req, res) => {
    try {
      const reqId = req.params.id;
      const getDataById = await userModel.findOne({ _id: reqId });
      res.send(getDataById);
    } catch (error) {
      res.status(500).send("Failed To Fetch Data By Id");
    }
  })
);

//Update Data By Id

router.put(
  "/put/:id",
  asyncHandlar(async (req, res) => {
    try {
      const reqId = req.params.id;
      const upDateDataById = await userModel.findByIdAndUpdate(
        { _id: reqId },
        req.body,
        { new: true }
      );
      res.send(upDateDataById);
    } catch (error) {
      res.status(400).send("Failed To Update Data");
    }
  })
);

//Delete Data By Id

router.delete(
  "/delete/:id",
  asyncHandlar(async (req, res) => {
    try {
      const reqId = req.params.id;
      const deletedDataById = await userModel.findByIdAndDelete({ _id: reqId });
      res.send(deletedDataById);
    } catch (error) {
      res.status(400).send("Failed to Data Deleted By Id");
    }
  })
);

module.exports = router;
