const express = require('express');
const app = express();
const morgan = require('morgan');
const fs = require('fs');

//cors
const cors = require('cors');

//MIDDLEWARE
app.use(cors({ origin: "*" }));
app.use(morgan('dev'));
app.use(express.static('public'));


app.get('/', (req, res) => {
  let rawdata = fs.readFileSync('serverList.json');
  let serverList = JSON.parse(rawdata);
  let serverCount = serverList.length;
  let serverIndex = 0;
  res.send(serverList[serverIndex++]);
  if (serverIndex == serverCount) serverIndex = 0;
})

app.listen(80, () => {
  console.log("Master node started on port 80")
})