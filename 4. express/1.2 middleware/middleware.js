// middleware is the man in the middle - using body parser together with html form
// stand between the request sent and the server

import bodyParser from "body-parser";
import express from "express";

// import setup to make the directory work fine on all machine 
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url))


const app = express();
const port = 3000;

// use the middleware
app.use(bodyParser.urlencoded({ extended: true }));



app.get('/', (req, res) => {
    // requesting html file from public folder
    res.sendFile(__dirname + "/public/index.html")
})
app.post('/submit', (req, res) => {
    console.log(req.body)
})

app.listen(port, () => {
    console.log('the app is running on port ' + port);
})


