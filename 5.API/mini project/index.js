import express from 'express';
import {data} from "./movie.js";

const app = express();
const port = 3000;

// setup the view engine to use ejs
app.set('view engine', 'ejs');
// use express static to fetch static data from public folder
app.use(express.static('public'));
// use express module to parse through request body 
app.use(express.urlencoded({ extended: true }));


// use the first get request from https
app.get('/', (req, res) => {
   res.render('index.ejs')
})

app.post('/explore', (req, res) => {
   res.render('list.ejs', {data, data})
})


app.listen(port, () => {
 console.log(`listening on port ${port}`)
})