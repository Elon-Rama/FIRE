const express = require("express");
const api = express.Router();

const emailRoute = require('./Router/emailRoute');
const userRoute = require('./Router/userRoute');
const fireRoute = require('./Router/fireRoute');
const budgetRoute = require('./Router/budgetRoute');
const personalRoute = require('./Router/personalRoute');
const expensesRoute = require('./Router/expensesRoute');

api.use('/user',emailRoute);
api.use('/profile',userRoute);
api.use('/question',fireRoute);
api.use('/budget',budgetRoute);
api.use('/personal',personalRoute);
api.use('/master',expensesRoute);

module.exports = api;