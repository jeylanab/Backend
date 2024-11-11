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

const API_URL = 'https://zoopla.p.rapidapi.com/properties/v2/list';
const API_KEY = '206f5fabb5mshd6a12f5f0fefd42p122a88jsn651b1c6c0620';
const HOST = 'zoopla.p.rapidapi.com';

app.get("/", (req, res) => {
  res.render('index.ejs', {content : ''})
})

app.post("/submit", async (req, res) => {
    let location = req.body.location;
    try {
      const response = await axios.get(`${API_URL}?locationValue=${location}&page=2`, {
        params: {
            locationValue: location,
            page: '2',
        },
        headers: {
            'x-rapidapi-key': API_KEY,
            'x-rapidapi-host': HOST
        }
      }); 
        
        const result = response.data.data.listings.regular;
        console.log(result.length);
        res.render('index.ejs', { content: result });
        // console.log(JSON.stringify(response.data.data.listings.regular))
    } catch (error) {
        res.status(404).send(error.message);
    }
  
    

})

app.get('/welcome', (req, res) => {

})
app.listen(port, () => {
console.log(`listening on port ${port}`)
})

