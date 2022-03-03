const express = require("express");
const { animals } = require("./data/animals");
const fs = require('fs');
const path = require('path');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');


const PORT = process.env.PORT || 3001;
//instantiate server
const app = express();
// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
app.use('/assets', express.static('public/assets'))
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);
app.use(express.static('public'));



// make server listen
app.listen(PORT, () => {
  console.log(`API server now on port 3001!`);
});
