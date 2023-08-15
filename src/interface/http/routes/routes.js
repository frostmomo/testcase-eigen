const express = require('express');
const bookRoutes = require('../routes/book-routes');
const memberRoutes = require('../routes/member-routes');

const router = express.Router();

router.use('/books', bookRoutes);

router.use('/members', memberRoutes);

module.exports = router;
