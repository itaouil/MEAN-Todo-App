// Dependencies
const express = require('express');
const router  = express.Router();

// GET Homepage
router.get('/', (req, res) => {
  res.render('index.html');
});

// Export router
module.exports = router;
