const express = require('express');
const app = express();

app.use(express.static(__dirname + '/dist/house-manager'));

app.get('/*', function (req, res) {
  res.sendFile('index.html', {root: 'dist/house-manager'});
});

app.listen(process.env.PORT || 8080);
console.log(`Running on ${process.env.PORT || 8080}`);
