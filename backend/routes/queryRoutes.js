const express = require("express");
const router = express.Router();

const Query = require("../models/Query");

router.post("/add-query", async (req, res) => {
  try {
    const { question } = req.body;

    const newQuery = new Query({
      question,
    });

    await newQuery.save();

    res.json({
      message: "Query saved successfully",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Something went wrong",
    });
  }
});

module.exports = router;