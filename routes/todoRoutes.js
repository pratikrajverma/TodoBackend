const express = require('express');
const router = express.Router();

const {createTodo ,deleteTodo, updateTodo, getAllTodo, getTodoById} = require('../controllers/TodoLogic');

router.post('/createTodo', createTodo);

router.delete('/deleteTodo',deleteTodo);

router.put('/updateTodo',updateTodo)

router.get('/getTodo',getAllTodo)

router.get('/getTodoById/:id',getTodoById)

module.exports = router;  