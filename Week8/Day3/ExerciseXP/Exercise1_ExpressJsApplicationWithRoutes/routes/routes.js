const express = require('express');
const path = require('path');
const router = express.Router();


router.get('/', (req, res) => {
    const filePath = path.join(__dirname, '../public/index.html');
    res.sendFile(filePath);
});

router.get('/about', (req, res) => {
    const filePath = path.join(__dirname, '../public/about.html');
    res.sendFile(filePath);
});

module.exports = {
    router
}

