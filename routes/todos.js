// Dependencies
const express = require('express');
const router  = express.Router();

// GET All Todos
router.get('/todos', (req, res) => {
  res.send('TODOS API');
});

// Export router
module.exports = router;
