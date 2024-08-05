const express = require('express');
const { createorder } = require('../Controller/ordercontroller');

const router = express.Router()

router.route('/order').post(createorder)


module.exports = router;