const express = require('express');
const router = express.Router();

const { runCodeJDoodle } = require('../controllers/runCompiler');

router.post('/run', runCodeJDoodle);

module.exports = router;

