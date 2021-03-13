const path = require('path');
const express = require('express');

const app = express();
const DIST_DIR = path.join(__dirname, '/src');
const HTML_FILE = path.join(DIST_DIR, 'Index.html');

app.use(express.static(DIST_DIR));
app.get('*', (req, res) => {
  res.sendFile(HTML_FILE);
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {

});