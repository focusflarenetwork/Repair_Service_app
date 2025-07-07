// Use CommonJS syntax for compatibility
const express = require('express');

const app = express();

app.get("/tickets", (req, res) => {
    res.send('Sever is ready');
app.listen(5000, () => {
    console.log('Server started at http://localhost:5000);
});
