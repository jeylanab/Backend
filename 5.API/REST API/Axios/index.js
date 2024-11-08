import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

// setup the view engine to use ejs
app.set('view engine', 'ejs');
// use express static to fetch static data from public folder
app.use(express.static('public'));
// use express module to parse through request body 
app.use(express.urlencoded({ extended: true }));



app.get("/", (req, res) => {
  res.render('index.ejs',)
})


app.listen(port, () => {
console.log(`listening on port ${port}`)
})