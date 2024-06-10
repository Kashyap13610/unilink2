const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 4000;

app.get('/.well-known/apple-app-site-association', (req, res) => {
    const filePath = path.join(__dirname, 'apple-app-site-association');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Internal Server Error');
            return;
        }
        res.setHeader('Content-Type', 'application/json');
        res.send(data);
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
