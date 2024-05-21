const express = require('express');
const app = express();
const port = 8000;

app.get('/employees', (req, res) => {
    res.json({uzenet: 'Expressben programozok'})
});

app.listen(port, () => {
    console.log(`Listening: localhost: ${port}`);
});