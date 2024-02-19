const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
}); 

app.get('/elements', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'private_data', 'elements.json'));
});

app.get('/models/:modelFile', (req, res) => {
    if (!req.headers.referer || !req.headers.referer.startsWith('http://localhost:3000')) {
        return res.status(403).send('Error: Access to model files is restricted.');
    }

    const modelFile = req.params.modelFile;
    res.sendFile(path.join(__dirname, '..', 'private_data', 'models', modelFile));
});


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
