const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Error handling example');
});
app.get('/error', (req, res, next) => {
    const error = new Error('Simulated error!');
    next(error); // Passes the error to the error-handling middleware
});
// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

app.listen(3000, () => {
    console.log('Error handling server is running on http://localhost:3000');
});

