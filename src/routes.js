const { response } = require('express');
const express = require('express')
const router = express.Router();

router.get('/', (req, res) => {
    const {sayHello} = require('./services/sayHelloWorld')
    
    res.send(sayHello());
});

module.exports = router;