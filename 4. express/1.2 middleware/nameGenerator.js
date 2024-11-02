// name generator
import bodyParser from "body-parser";
import express from "express";

// import setup to make the directory work fine on all machine 
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url))

const app = express();
const port = 3000;
var name = "";

// use the middleware
app.use(bodyParser.urlencoded({ extended: true }));

// created custom middleware
const manName = (req, res, next) => {
    console.log(req.body);
    name = req.body['firstName'] + req.body['lastName'];
    next();
    
}

app.use(manName);

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/public/index.html")
})

app.post('/submit', (req, res) => {
 //requesting the name that was appended previously 
  res.send(`<h1> Your Generated Name </h1>`+ name)
})

app.listen(port, () => {
    console.log(`listening on port: ${port}`);
})
