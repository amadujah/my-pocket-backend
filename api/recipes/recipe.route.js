import express from 'express'
const  recipeController = require('./recipe.controller')
const route = express.Router()

route.post('/add', recipeController.create);
route.get('/list', recipeController.list);

module.exports = route