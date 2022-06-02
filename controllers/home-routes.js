const router = require('express').Router();
const sequelize = require('../config/connection')
const { Post, User, Review } = require('../models');

router.get('/', (req, res ) => {
    res.render('homepage');
});

module.exports = router;