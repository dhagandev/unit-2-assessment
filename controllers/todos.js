var Todos = require('../models/todos');

module.exports = {
	index,
	create
}

function index(req, res, next) {
	res.render('index', {Todos});
}

function create(req, res, next) {
	Todos.push({todo: req.body.newTodo, done: false});
	res.redirect("/");
}