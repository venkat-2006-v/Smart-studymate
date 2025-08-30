const express = require('express');
const router = express.Router();
const SummarizerController = require('../controllers/summarizerController');

const summarizerController = new SummarizerController();

router.post('/summarize', summarizerController.summarizeText);

module.exports = router;