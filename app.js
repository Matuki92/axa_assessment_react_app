const express = require('express');
const path = require('path');

const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, './build')));

app.get('*', (req,res) => {
  res.sendfile(__dirname, 'index.html');
});

app.listen(8080);

console.log('App is running');