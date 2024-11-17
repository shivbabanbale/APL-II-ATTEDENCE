const express = require('express');
const app = express();

// Middleware function
app.use((req, res, next) => {
    console.log(`Request Method: ${req.method}, URL: ${req.url}`);
    next(); // Pass control to the next handler
});

app.get('/', (req, res) => {
    res.send('Middleware Example');
});

app.listen(3000, () => {
    console.log('Middleware server is running on http://localhost:3000');
});
