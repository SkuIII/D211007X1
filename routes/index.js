const express = require('express');
const router = express.Router();

const index_controller = require('../controllers/indexController');

router.get('/', index_controller.index);
router.get('/edit', index_controller.edit);
router.post('/edit', index_controller.editUpdate);

module.exports = router;