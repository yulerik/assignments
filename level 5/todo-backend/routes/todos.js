const express = require('express')
const req = require('express/lib/request')
const res = require('express/lib/response')
const todo = express.Router()
const uuid = require('uuid')

const todoOne = {
    "name": "The name",
    "description": "The description of the todo",
    "imageUrl": "http://www.myimage....",
    "completed": false,
    "_id": "504270b8-b1f8-4120-a045-7c452711e1fe"
}
const todoTwo = {
    "name": "other name",
    "description": "a description of other name",
    "imageUrl": "image url here",
    "completed": true,
    "_id": "0b1862ef-4be8-4f2a-809f-fe8cb070269b"
}
const todos = [todoOne, todoTwo]

todo.route('/')
    .get((req, res) => {
        res.send(todos)
    })
    .post((req, res) => {
        const newTodo = req.body
        req.body._id = uuid.v4()
        todos.push(newTodo)
        res.send(`successfully added todo item, id added to todo is ${newTodo._id}`)
    })
todo.route('/:todoId')
    .get((req, res) => {
        const filtered = todos.find(found => found._id === req.params.todoId)
        res.send(filtered)
    })
    .delete((req, res) => {
        const todoId = req.params.todoId
        const todoIndex = todos.findIndex(index => index._id === todoId)
        todos.splice(todoIndex, 1)
        res.send(`Successfully deleted todo item`)
    })
    .put((req, res) => {
        const todoId = req.params.todoId
        const newTodoObject = req.body
        const todoIndex = todos.findIndex(index => index._id === todoId)
        const updateTodo = Object.assign(todos[todoIndex], newTodoObject)
        res.send(updateTodo)
    })

module.exports = todo