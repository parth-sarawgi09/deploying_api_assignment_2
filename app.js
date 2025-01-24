const express = require('express');
require('dotenv').config();

const app = express();

app.get('/', (req, res) => {
  if (process.env.IS_SERVER === 'true') {
    res.send({ message: "Welcome, SERVER!", data: ["SERVER Data 1", "SERVER Data 2"] });
  } else {
    res.send({ message: "Welcome, User!", data: ["User Data 1", "User Data 2"] });
  }
});

app.listen(3000, () => console.log("Server is running on port 3000."));