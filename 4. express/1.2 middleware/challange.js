import bodyParser from "body-parser";
import express from "express";

// import setup to make the directory work fine on all machine 
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url))


const app = express();
const port = 3000;
var password = '909730'
var inputPassword = '';

// use the middleware
app.use(bodyParser.urlencoded({ extended: true }));

const secretDisplay = (req, res, next) => {
    console.log(req.body);
    inputPassword = req.body['password'];
    next();
}

// use the middleware
app.use(secretDisplay)

app.get('/', (req, res) => {
    // requesting html file from public folder
    res.sendFile(__dirname + "/public/password.html")
})

// this req used to serve the response of secret list
app.post('/check', (req, res) => {
    console.log(req.body)
    if (password == inputPassword) return res.sendFile(__dirname + '/public/secret.html');
    // send back the user to home page
    return res.redirect('/');
})

app.listen(port, () => {
    console.log('the app is running on port ' + port);
})