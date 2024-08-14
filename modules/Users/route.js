var express = require("express");

var userSchema = require("../Users/model");

var router = express.Router();

router.post("/user", async (req, res) => {
  try {
    await userSchema.create(req.body);

    res
      .status(201)
      .json({ success: true, message: "User created successfully!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "An error occurred while processing the request",
    });
  }
});

router.get("/user", async (req, res) => {
  try {
    const users = await userSchema.find();

    res
      .status(201)
      .json({ success: true, message: "User fetched successfully!", users });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

module.exports = router;
