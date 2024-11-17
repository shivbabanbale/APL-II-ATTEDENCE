const express = require('express');
const app = express();

app.use(express.json()); // Parse JSON body

app.post('/submit', (req, res) => {
    const { name, email } = req.body;
    res.send(`Received data: Name - ${name}, Email - ${email}`);
});

app.listen(3000, () => {
    console.log('POST server is running on http://localhost:3000');
});
