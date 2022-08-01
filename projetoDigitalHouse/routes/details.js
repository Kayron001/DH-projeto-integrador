const express = require('express');
const router = express.Router();

const detailsController = require('../controllers/detailsController')

router.get('/', detailsController.view)

module.exports = router