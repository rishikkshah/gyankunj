const express = require("express");
const { updateNotice } = require("../db/Collection/noticeCollection");
const router = express.Router();

router.post("/", async (req, res) => {
  await updateNotice(req.body);
  res.status(200).send("Notice updated successfully");
});

module.exports = router;
