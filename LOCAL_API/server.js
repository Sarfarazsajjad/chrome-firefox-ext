const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const fs = require('fs');

const app = express();

const port = process.env.PORT || 5000;

app.use(bodyparser.json());

app.use(cors());

app.post("/url", (req, res) => {
  writeToFile(req.body.url);
  res.send({ status: 200, message : `URL Saved: ${req.body.url}` });
});

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});

function writeToFile(url_text){
    url_text = url_text + "\n";
    fs.appendFile('URLs_Visited.txt', url_text, (err) => {
        if (err) throw err;
    })
}
