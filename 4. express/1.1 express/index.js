import express from "express";

const app = express();
const port = 8080;

// GET REQUEST
app.get('/', (req, res) => {
    res.send('hello node people');
})

// GET REQUEST NEXT PAGE
app.get('/about', (req, res) => {
   res.send('hello man');
})

// get request for product page
app.get('/product', (req, res) => {
   res.send('<h1> this is h1 tag </h1>')
})


app.listen(port, () => {
    console.log(`The server is running on port ${port}`);
})
