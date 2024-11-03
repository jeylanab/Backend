import express from "express";

const app = express();
const port = 3000;

// set ejs as a view engine
app.set('view engine', 'ejs');

// Use middleware to parse URL-encoded form data
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    // Render the template with the static data on initial load
    res.render('index3');
});

app.post('/submit', (req, res) => {
    // Concatenate firstname and lastname with a space
    var input = req.body['firstname'].length + req.body['lastname'].length;
    
    // Render the template with the input data
    res.render('index3', { data : input });
    
    // Log the form data to the console
    console.log(req.body);
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
