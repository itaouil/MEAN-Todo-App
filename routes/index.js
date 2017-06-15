// Dependencies
const express = require('express');
const router  = express.Router();

// GET Homepage
router.get('/', (req, res) => {
  res.sendFile('/Users/dailand10/Desktop/MEAN-Todo-App/client/src/index.html');
});

// Export router
module.exports = router;
