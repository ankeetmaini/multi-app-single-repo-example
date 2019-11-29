const express = require('express');
const path = require('path');
const config = require('./config.json');

const app = express();
const publicPath = path.resolve(__dirname, 'build');

app.use(express.static(publicPath));

Object.keys(config).forEach((appName) => {
  app.use(`${appName}*`, (req, res) => {
    res.sendFile(path.join(publicPath, entry, 'index.html'));
  });
});

app.listen(4000);
