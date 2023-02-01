const express = require('express')
const Router = express.Router()
const OrderController = require('../controllers/OrderController');

Router.post('/send', OrderController.Send)
Router.get('/get', OrderController.getOrder)
Router.get('/checked', OrderController.checkItem)
module.exports = Router