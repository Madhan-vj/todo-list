const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/', (req, res) => {
 res.send('A task List in todo!')
})

module.exports = router;
