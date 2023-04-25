const express = require('express');
const app = express();
const port = 8080;

app.get('Hello World!', (req, res) => res.send('Hello World!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
