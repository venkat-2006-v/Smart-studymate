const express = require('express');
const bodyParser = require('body-parser');
const subjectsRoutes = require('./routes/subjects');
const summarizerRoutes = require('./routes/summarizer');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api/subjects', subjectsRoutes);
app.use('/api/summarizer', summarizerRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});