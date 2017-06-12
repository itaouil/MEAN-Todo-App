// Dependencies
const express = require('express');
const router  = express.Router();

// Connect to database
const mongojs = require('mongojs');
const db      = mongojs('mongodb://dailand10:dailand10@ds123752.mlab.com:23752/meandtodosapp', ['todos']);

// GET All Todos
router.get('/todos', (req, res) => {

  // Find all documents in the collection
  db.todos.find((err, todos) => {
    if (err) res.status(400).send(err);
    else res.json(todos);
  });

});

// GET Single Todo
router.get('/todo/:id', (req, res) => {

  // Find a document using a native ObjectId
  db.todos.findOne({
    _id: mongojs.ObjectId(req.params.id)
  }, (err, todo) => {
    if (err) res.status(400).send(err);
    else res.json(todo);
  });

});

// Save Todo
router.post('/todo', (req, res) => {

  // Store todo received
  var todo = req.body;

  // Save a document in the collection
  if (todo.text && todo.isCompleted) {
    db.todos.save(todo, (err, result) => {
      if (err) res.status(400).send(err);
      else res.json(result);
    });
  }

  // Invalid parameters passed
  else {
    res.status(400).json({
        "error": "Invalid Data"
    });
  }

});

// Update Todo Document
router.put('/todo/:id', (req, res) => {

  var todo   = req.body;
  var updObj = {}

  if (todo.isCompleted) {
    updObj.isCompleted = todo.isCompleted;
  }

  if (todo.text) {
    updObj.text = todo.text;
  }

  // Check if object has been updated
  if (!updObj) {
    res.status(400).json({
      "error": "Invalid Data"
    });
  }

  else {
    db.todos.update({
      _id: mongojs.ObjectId(req.params.id)
    }, updObj, {}, (err, result) => {
      if (err) res.send(err);
      else res.json(result);
    });
  }

});

// Delete Todo
router.delete('/todo/:id', (req, res) => {

  db.todos.remove({
    _id: mongojs.ObjectId(req.params.id)
  }, '', (err, result) => {
    if (err) res.send(err);
    else res.json(result);
  });

});

// Export router
module.exports = router;
