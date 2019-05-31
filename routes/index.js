var express = require('express');
var router = express.Router();
var todosCtrl = require('../controllers/todos')

/* GET home page. */
router.get('/', todosCtrl.index);
router.post('/create', todosCtrl.create);
router.put('/:idx', todosCtrl.complete);
router.delete('/:idx', todosCtrl.delete)

module.exports = router;
