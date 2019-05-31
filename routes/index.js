var express = require('express');
var router = express.Router();
var todosCtrl = require('../controllers/todos')

/* GET home page. */
router.get('/', todosCtrl.index);
router.post('/create', todosCtrl.create);
// router.get('/complete', todosCtrl.complete);
// router.put('/update', todosCtrl.update);
router.delete('/:idx', todosCtrl.delete)

module.exports = router;
