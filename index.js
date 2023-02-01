const express = require("express");
const cors = require("cors");
const app = express();

const db = require("./config/db")
require('dotenv').config({
  path: '.env'
})

const PORT = process.env.PORT || 3001;

app.set('trust proxy', 1)

var whitelist = ['http://localhost:3000', 'http://localhost:3001', 'https://sapo-dbd84.web.app']
var corsOptions = {
  origin: function (origin, callback) {
      callback(null, true)
  },
  credentials: true
}
app.use(cors(corsOptions))

const http = require("http")
const httpServer = http.createServer(app);
const route = require("./route")
  
  // app.listen(PORT, () => {
  //   console.log(`Server listening on ${PORT}`);
  // });
  db.connect().then(() => {
    route(app)
    httpServer.listen(PORT)
    console.log(`Server listening on ${PORT}`);
  }).catch(err => {console.error(err);});

  const functions = require('firebase-functions')
  // exports.api = functions.https.onRequest(app)