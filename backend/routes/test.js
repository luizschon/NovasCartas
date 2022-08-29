const express = require('express')
const router = express.Router();

router.get("/", (_req, res) => {
  res.json({
    test: "test",
    algo: "test"
  })
})

module.exports = router
