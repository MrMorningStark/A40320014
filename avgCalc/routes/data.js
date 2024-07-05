const express = require('express');
const { avgCalculator } = require('../controller/data');
const router = express.Router();

router.post('/numbers/:numberid', avgCalculator);


module.exports = router;