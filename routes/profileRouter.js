const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileController');

router.get('/', profileController.findAll);
router.get('/:id', profileController.findById);
router.post('/', profileController.create);
router.put('/:id', profileController.update);
router.delete('/:id', profileController.remove);

module.exports = router;
