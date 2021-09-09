const express = require("express");
const { insertNotice } = require("../db/Collection/noticeCollection");
const router = express.Router();

router.post("/", async (req, res) => {
  insertNotice(req.body);
  res.status(200).send("Notice posted successfully");
});

module.exports = router;
