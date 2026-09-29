const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    success: true,
    message: "User API is working"
  });
});

router.post("/", (req, res) => {
  res.status(201).json({
    success: true,
    message: "User endpoint is ready",
    data: req.body
  });
});

module.exports = router;
