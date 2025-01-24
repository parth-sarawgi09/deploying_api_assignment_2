const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3010;

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});


require('dotenv').config();

const isAdmin = process.env.IS_SERVER === 'true';

if (isAdmin) {
  console.log("SERVER privileges granted.");
} else {
  console.log("SERVER restricted. SERVER only.");
}

