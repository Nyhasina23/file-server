require('dotenv').config()
const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors')
const http = require("http");
const morgan = require('morgan');
const dirname = require('./getDirname')
const path = require("path");
const staticFileRoutes = require('./src/routes/staticFileRoutes.routes')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(morgan('dev'))
app.use(cors())
app.use("/", staticFileRoutes)
app.use("/public", express.static(path.join(dirname, "/public")));

let server = http.Server(app);
const PORT = process.env.PORT

server.listen(PORT, () => {
    console.log(`File server open on port ${PORT}`);
});