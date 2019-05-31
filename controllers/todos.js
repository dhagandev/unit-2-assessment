var Todo = require('../models/todos');

module.exports = {
	index,
	create,
	complete,
	delete: deleteTodo
}

function index(req, res, next) {
	console.log(req.body)
	res.render('index', {Todo});
}

function create(req, res, next) {
	Todo.push({todo: req.body.newTodo, done: false});
	res.redirect("/");
}

function complete(req, res, next) {
	Todo[req.params.idx].done = true;
	res.redirect("/");
}

function deleteTodo(req, res, next) {
	Todo.splice(req.params.idx, 1);
	res.redirect("/");
}