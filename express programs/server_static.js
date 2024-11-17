const express = require('express');
const app = express();

app.use(express.static('public')); // Serve files from 'public' directory

app.get('/', (req, res) => {
    res.send('Static files are served!');
});

app.listen(3000, () => {
    console.log('Static server running on http://localhost:3000');
});
