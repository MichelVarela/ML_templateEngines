const express = require('express');
const router = express.Router();

const productController = require('../controllers/productController');

router.get('/detail/:id/:category',productController.index);

module.exports = router;