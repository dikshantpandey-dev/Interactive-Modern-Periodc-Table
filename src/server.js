const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/elements', (req, res) => {
    res.sendFile(path.join(__dirname, 'data', 'elements.json'));
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});